const { resolve } = require('path')

class View {
  render(res, view, data) {
    return res.render(resolve(process.cwd(), `app_main/views/${view}`), { ...data })
  }
}

module.exports = { View }
