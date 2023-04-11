const mongoose = require('mongoose');

const classSchema = new mongoose.Schema(
  {
    className: {
      type: String,
      required: true,
    },
    semester: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    room: {
      type: Array,
      required: true,
    },
    role: { type: String, default: 'user' },
    user: { type: mongoose.Types.ObjectId, ref: 'user' },
    members: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('classroom', classSchema);
