const router = require('express').Router();
const classroomController = require('../controllers/classroom.controller');
const auth = require('../middleware/auth');

router
  .route('/classrooms')
  .post(auth, classroomController.createPost)
  .get(auth, classroomController.getPosts);

router
  .route('/classroom/:id')
  .patch(auth, classroomController.updatePost)
  .get(auth, classroomController.getPost)
  .delete(auth, classroomController.deletePost);

module.exports = router;
