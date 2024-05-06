const { addTaskCategoryController, AllTaskCategoryController, UpdateTaskCategoryController, deleteTaskCategoryController, getSingleCategoryController } = require('../controllers/TaskCategoryController')

const router = require('express').Router()


// category

router.post('/add-category', addTaskCategoryController)

router.put('/update-category/:id', UpdateTaskCategoryController)

router.get('/all-category', AllTaskCategoryController)

router.delete('/delete-category/:id', deleteTaskCategoryController)

router.get('/single-category/:id', getSingleCategoryController)


module.exports = router