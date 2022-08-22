const { Controller } = require('cores/Controller')
const { View } = require('cores/View')

class AssetRoute extends Controller{
  constructor() {
    super()
    this.view = new View()
  }
  route() {
    const { view } = this
    return this.get('/mhs/getAssets',(req,res)=>{
        console.log("API Hit")
        var data='[{"id":"giant","chainId":"91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3","precision":10,"priceId":"giant","icon":"https://raw.githubusercontent.com/soramitsu/fearless-utils/master/icons/chains/white/Polkadot.svg"}]'
        res.send(data)
    });
    
  }
}

module.exports = { AssetRoute }
