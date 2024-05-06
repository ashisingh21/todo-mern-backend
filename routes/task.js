const { addTaskCategoryController, AllTaskCategoryController, UpdateTaskCategoryController, deleteTaskCategoryController } = require('../controllers/TaskCategoryController')
const { addTaskController ,UpdateTaskController,AllTaskController,DeleteTaskController, GetSingleTaskController, UpdateTaskStatusController} = require('../controllers/TaskController')

const router = require('express').Router()


// tasks

router.post('/add-task', addTaskController)

router.put('/update-task/:id', UpdateTaskController)

router.put('/update-task-status/:id', UpdateTaskStatusController)

router.get('/all-task', AllTaskController)

router.get('/single-task/:id', GetSingleTaskController)

router.delete('/delete-task/:id', DeleteTaskController)


// category

// router.post('/add-category', addTaskCategoryController)

// router.put('/update-category/:id', UpdateTaskCategoryController)

// router.get('/all-category', AllTaskCategoryController)

// router.delete('/delete-category/:id', deleteTaskCategoryController)


module.exports = router