'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('tasks', 'TasksController.index')
Route.get('tasks/add', 'TasksController.add')
Route.post('tasks', 'Taskscontroller.store')
Route.get('tasks/:id', 'TasksController.details')
Route.get('tasks/edit/:id', 'TasksController.edit')
Route.put('tasks/:id', 'TasksController.update')
Route.delete('tasks/:id', 'TasksController.destroy')
