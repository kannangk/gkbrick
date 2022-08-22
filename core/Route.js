// route mahasiswa
const { CreateMahasiswaRoute } = require('routes/mhs/create.route')
const { ResultsMahasiswaRoute } = require('routes/mhs/results.route')
const { ResultMahasiswaRoute } = require('routes/mhs/result.route')
const { DeleteMahasiswaRoute } = require('routes/mhs/delete.route')
const { UpdateMahasiswaRoute } = require('routes/mhs/update.route')

//route home
const { HomeRoute } = require('routes/home/home.route')
const { AboutRoute } = require('routes/home/about.route')

//route assets
const { AssetRoute } = require('routes/mhs/assets.route')

class Route {
  init() {
    return [
      // init mahasiswa route
      new CreateMahasiswaRoute().route(),
      new ResultsMahasiswaRoute().route(),
      new ResultMahasiswaRoute().route(),
      new DeleteMahasiswaRoute().route(),
      new UpdateMahasiswaRoute().route(),

      //init home route
      new HomeRoute().route(),
      new AboutRoute().route(),

      //init assets
      new AssetRoute().route(),
      new AssetChainsRoute().route() 
    ]
  }
}

module.exports = { Route }
