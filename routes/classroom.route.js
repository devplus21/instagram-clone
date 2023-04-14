const router = require('express').Router();
const classroomController = require('../controllers/classroom.controller');
const auth = require('../middleware/auth');

router
  .route('/classrooms')
  .post(auth, classroomController.createClassroom)
  .get(auth, classroomController.getClassrooms);

router
  .route('/classroom/:id')
  .patch(auth, classroomController.updateClassroom)
  .get(auth, classroomController.getClassroom)
  .delete(auth, classroomController.deleteClassroom);

module.exports = router;
