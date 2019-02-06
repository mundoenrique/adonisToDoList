'use strict'
const Logger = use('Logger')
const Task = use('App/Models/Task')

class TasksController {
  async index({view}) {
    const tasks = await Task.all()

    return view.render('tasks.index', {
      tasks: tasks.toJSON()
    })
  }

  async add({view}) {
    return view.render('tasks.add')
  }

  async store({request, response}) {
    const task = new Task()
    task.title = request.input('title')
    task.body = request.input('body')

    await task.save()

    return response.redirect('tasks')
  }

  async details({params, view}) {
    const task = await Task.find(params.id)
    Logger.info('task------ ', task)

    return view.render('tasks.details', {
      task
    })
  }

  async edit({params, view}) {
    const task = await Task.find(params.id)

    return view.render('tasks.edit', {task})
  }

  async update({params, request, response}) {
    const task = await Task.find(params.id)
    task.title = request.input('title')
    task.body = request.input('body')

    await task.save()

    return response.redirect('/tasks')
  }

  async destroy({params, response}) {
    const task = await Task.find(params.id)
    await task.delete()

    return response.redirect('/tasks')
  }
}

module.exports = TasksController
