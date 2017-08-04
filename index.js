const ProviderEngine = require('web3-provider-engine');
const RpcSubprovider = require('web3-provider-engine/subproviders/rpc.js');
const CacheSubprovider = require('web3-provider-engine/subproviders/cache.js');
const VMSubprovider = require('web3-provider-engine/subproviders/vm.js');
const FilterSubprovider = require('web3-provider-engine/subproviders/filters.js');

module.exports = rpcWrapperEngine;

function rpcWrapperEngine(opts){
    opts = opts || {};

    var engine = opts.engine || new ProviderEngine();

    // filters
    engine.addProvider(new FilterSubprovider());

    // data source
    engine.addProvider(new RpcSubprovider({
        rpcUrl: opts.rpcUrl,
    }));


    return engine
}