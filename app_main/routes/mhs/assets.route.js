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
        var data='[{"id":"dot","chainId":"91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3","precision":10,"priceId":"polkadot","icon":"https://raw.githubusercontent.com/soramitsu/fearless-utils/master/icons/chains/white/Polkadot.svg"},{"id":"ksm","chainId":"b0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe","precision":12,"priceId":"kusama","icon":"https://raw.githubusercontent.com/soramitsu/fearless-utils/master/icons/chains/white/Kusama.svg"},{"id":"giant","chainId":"446576656c6f706d656e74","precision":12,"priceId":"giant","icon":"https://raw.githubusercontent.com/soramitsu/fearless-utils/master/icons/chains/white/Westend.svg"}]'
        res.send(data)
    });
    
  }
}

module.exports = { AssetRoute }
