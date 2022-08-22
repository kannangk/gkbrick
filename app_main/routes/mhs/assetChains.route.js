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
        var data='[{"chainId":"giant","name":"GIANT","externalApi":{"staking":{"type":"subquery","url":"https://api.subquery.network/sq/soramitsu/fearless-wallet-dot"},"history":{"type":"subquery","url":"https://api.subquery.network/sq/soramitsu/fearless-wallet-dot"},"crowdloans":{"type":"github","url":"https://raw.githubusercontent.com/soramitsu/fearless-utils/master/crowdloan/polkadot.json"},"explorers":[{"type":"subscan","types":["extrinsic","account"],"url":"https://polkadot.subscan.io/{type}/{value}"},{"type":"polkascan","types":["extrinsic","account","event"],"url":"https://polkascan.io/polkadot/{type}/{value}"}]},"assets":[{"assetId":"giant","staking":"relaychain","purchaseProviders":["moonpay","ramp"]}],"nodes":[{"url":"wss://rpc-4-us-east-1-dev.giantprotocol.org","name":"Dev node"}],"icon":"https://raw.githubusercontent.com/soramitsu/fearless-utils/master/icons/chains/white/Polkadot.svg","addressPrefix":0,"types":{"url":"https://raw.githubusercontent.com/soramitsu/fearless-utils/master/type_registry/android/polkadot.json","overridesCommon":true},"options":["crowdloans"]}]'
        res.send(data)
    });
    
  }
}

module.exports = { AssetChainsRoute }
