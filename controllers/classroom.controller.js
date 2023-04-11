const Classrooms = require('../models/classroom.model');
const Comments = require('../models/commentModel');
const Users = require('../models/userModel');

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 9;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

const classController = {
  createPost: async (req, res) => {
    try {
      const { className, semester, subject, room } = req.body;

      const newClassroom = new Classrooms({
        className,
        semester,
        subject,
        room,
        user: req.user._id,
      });
      await newClassroom.save();
      // console.log({ newClassroom })
      return res.status(200).json({
        msg: 'Tạo lớp thành công',
        newClassroom: {
          ...newClassroom._doc,
          user: req.user,
        },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getPosts: async (req, res) => {
    try {
      const features = new APIfeatures(
        Classrooms.find(),
        req.query,
      ).paginating();

      // const classroom = await features.query.sort('-createdAt')

      // res.json({
      //   msg: 'Thành công!',
      //   result: classroom.length,
      //   classroom,
      // })

      const result = await Promise.allSettled([
        features.query,
        Classrooms.countDocuments(), //count number of products.
      ]);

      const classrooms =
        result[0].status === 'fulfilled' ? result[0].value : [];
      const count = result[1].status === 'fulfilled' ? result[1].value : 0;

      return res.status(200).json({ classrooms, count });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updatePost: async (req, res) => {
    try {
      const { className, semester, subject, room } = req.body;

      const classroom = await Classrooms.findOneAndUpdate(
        { _id: req.params.id },
        {
          className,
          semester,
          subject,
          room,
        },
        { new: true },
      );

      if (!product)
        return res.status(404).json({ msg: 'Lớp học này không tồn tại.' });

      return res.status(200).json({
        msg: 'Cập nhật thành công!',
        newClassroom: {
          ...classroom._doc,
          className,
          semester,
          subject,
          room,
        },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getPost: async (req, res) => {
    try {
      const classroom = await Classrooms.findById(req.params.id);

      if (!classroom)
        return res.status(400).json({ msg: 'Lớp học không tồn tại.' });

      return res.status(200).json({
        classroom,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  deletePost: async (req, res) => {
    try {
      const classroom = await Classrooms.findOneAndDelete({
        _id: req.params.id,
        user: req.user._id,
      });
      await Comments.deleteMany({ _id: { $in: classroom.comments } });

      res.json({
        msg: 'Đã xoá lớp học!',
        newClassroom: {
          ...classroom,
          user: req.user,
        },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = classController;
