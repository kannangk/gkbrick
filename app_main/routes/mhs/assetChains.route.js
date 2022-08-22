const { Controller } = require('cores/Controller')
const { View } = require('cores/View')

class AssetChainsRoute extends Controller{
  constructor() {
    super()
    this.view = new View()
  }
  route() {
    const { view } = this
    return this.get('/mhs/getAssetChains',(req,res)=>{
        var data='[{"chainId":"91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3","name":"Polkadot","externalApi":{"staking":{"type":"subquery","url":"https://api.subquery.network/sq/soramitsu/fearless-wallet-dot"},"history":{"type":"subquery","url":"https://api.subquery.network/sq/soramitsu/fearless-wallet-dot"},"crowdloans":{"type":"github","url":"https://raw.githubusercontent.com/soramitsu/fearless-utils/master/crowdloan/polkadot.json"},"explorers":[{"type":"subscan","types":["extrinsic","account"],"url":"https://polkadot.subscan.io/{type}/{value}"},{"type":"polkascan","types":["extrinsic","account","event"],"url":"https://polkascan.io/polkadot/{type}/{value}"}]},"assets":[{"assetId":"dot","staking":"relaychain","purchaseProviders":["moonpay","ramp"]}],"nodes":[{"url":"wss://polkadot.api.onfinality.io/ws?apikey=313214ec-15ef-4834-a896-1cf39911f94b","name":"OnFinality node"}],"icon":"https://raw.githubusercontent.com/soramitsu/fearless-utils/master/icons/chains/white/Polkadot.svg","addressPrefix":0,"types":{"url":"https://raw.githubusercontent.com/soramitsu/fearless-utils/master/type_registry/android/polkadot.json","overridesCommon":true},"options":["crowdloans"]}]'
        res.send(data)
    });
    
  }
}

module.exports = { AssetChainsRoute }
