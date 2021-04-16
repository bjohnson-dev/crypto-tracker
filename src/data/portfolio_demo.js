const portfolio = [
    {
        id: 'bitcoin', // coingecko id
        isActive: true,
        name: 'bitcoin',
        ticker: 'btc',
        ledger: [
            {
                transactionID: 0,
                transactionType: 'purchase',
                transactionDate: '',
                transactionValueCrypto: 0.07235429,
                transactionValueFiat: 26999.00,
                transactionOrigination: ''
            }, {
                transactionID: 3,
                transactionType: 'purchase',
                transactionDate: '',
                transactionValueCrypto: 0.013860,
                transactionValueFiat: 25999.00,
                transactionOrigination: ''
            }
        ]
    }, {
        id: 'ethereum', // coingecko id
        isActive: true,
        name: 'ethereum',
        ticker: 'eth',
        ledger: [
            {
                transactionID: 0,
                transactionType: 'purchase',
                transactionDate: '',
                transactionValueCrypto: 0.12877489,
                transactionValueFiat: 450,
                transactionOrigination: ''
            }, {
                transactionID: 1,
                transactionType: 'transfer',
                transactionDate: '',
                transactionValueCrypto: 0.12107489,
                transactionBlockchainFee: 0.00063,
                transactionExchangeFee: 0.00770000,
                transactionOrigination: '',
                transactionOriginationAddress: '',
                transactionDestination: '',
                transactionDestinationAddress: '',
                transactionDetails: ''                              
            }, {
                transactionID: 2,
                transactionType: 'reward',
                transactionDate: '',
                transactionValueCrypto: 0.0490625026248542,
            }
        ]
    }, {
        id: 'tether', // coingecko id
        isActive: true,
        name: 'tether',
        ticker: 'usdt',
        ledger: [
            {
                transactionID: 0,
                transactionType: 'purchase',
                transactionDate: '',
                transactionValueCrypto: 100,
                transactionValueFiat: 1,
                transactionOrigination: ''
            }
        ]
    }, {
        id: 'ripple', // coingecko id
        isActive: true,
        name: 'ripple',
        ticker: 'xrp',
        ledger: [
            {
                transactionID: 0,
                transactionType: 'purchase',
                transactionDate: '',
                transactionValueCrypto: 1055,
                transactionValueFiat: .235,
                transactionOrigination: ''
            }, {
                transactionID: 1,
                transactionType: 'transfer',
                transactionDate: '',
                transactionValueCrypto: 20,
                transactionBlockchainFee: 0.000012,
                transactionExchangeFee: 1,
                transactionOrigination: '',
                transactionOriginationAddress: '',
                transactionDestination: '',
                transactionDestinationAddress: '',
                transactionDetails: ''  
            }, {
                transactionID: 2,
                transactionType: 'transfer',
                transactionDate: '',
                transactionValueCrypto: 1013,
                transactionBlockchainFee: 20.000012, // + minus the 20xrp account deposit
                transactionExchangeFee: 1,
                transactionOrigination: '',
                transactionOriginationAddress: '',
                transactionDestination: '',
                transactionDestinationAddress: '',
                transactionDetails: ''  
            }, {
                transactionID: 3,
                transactionType: 'transfer',
                transactionDate: '',
                transactionValueCrypto: 19,
                transactionBlockchainFee: 0.000012,
                transactionExchangeFee: 1,
                transactionOrigination: '',
                transactionOriginationAddress: '',
                transactionDestination: '',
                transactionDestinationAddress: '',
                transactionDetails: ''  
            }, {
                transactionID: 4,
                transactionType: 'purchase',
                transactionDate: '',
                transactionValueCrypto: 22,
                transactionValueFiat: .55,
                transactionOrigination: ''
            }, {
                transactionID: 1,
                transactionType: 'sell',
                transactionDate: '',
                transactionValueCrypto: 24.90,
                transactionValueFiat: 0.22,
                transactionOrigination: ''
            }
        ]    
    }, {
        id: 'litecoin', // coingecko id
        isActive: true,
        name: 'litecoin',
        ticker: 'ltc',
        ledger: [
            {
                transactionID: 0,
                transactionType: 'purchase',
                transactionDate: '',
                transactionValueCrypto: 4,
                transactionValueFiat: 125.89,
                transactionOrigination: ''
            }
        ]
    }, {
        id: 'polkadot', // coingecko id
        isActive: true,
        name: 'polkadot',
        ticker: 'dot',
        ledger: [
            {
                transactionID: 0,
                transactionType: 'purchase',
                transactionDate: '',
                transactionValueCrypto: 94.017,
                transactionValueFiat: 8.39,
                transactionOrigination: ''
            }
        ]
    }, {
        id: 'bitcoin-cash', // coingecko id
        isActive: false,
        name: 'bitcoin cash',
        ticker: 'bch',
        ledger: [
            {
                transactionID: 0,
                transactionType: 'purchase',
                transactionDate: '',
                transactionValueCrypto: 101,
                transactionValueFiat: 340.12,
                transactionOrigination: ''
            }
        ]
    }, {
        id: 'cardano', // coingecko id
        isActive: true,
        name: 'cardano',
        ticker: 'ada',
        ledger: [
            {
                transactionID: 0,
                transactionType: 'purchase',
                transactionDate: '',
                transactionValueCrypto: 5010,
                transactionValueFiat: .10535530,
                transactionOrigination: ''
            }, {
                transactionID: 1,
                transactionType: 'transfer',
                transactionDate: '',
                transactionValueCrypto: 3,
                transactionBlockchainFee: 0.215881,
                transactionExchangeFee: 1,
                transactionOrigination: '',
                transactionOriginationAddress: '',
                transactionDestination: '',
                transactionDestinationAddress: '',
                transactionDetails: ''      
            }, {
                transactionID: 2,
                transactionType: 'transfer',
                transactionDate: '',
                transactionValueCrypto: 1001,
                transactionBlockchainFee: 0.189569,
                transactionExchangeFee: 1,
                transactionOrigination: '',
                transactionOriginationAddress: '',
                transactionDestination: '',
                transactionDestinationAddress: '',
                transactionDetails: ''
            }, {
                transactionID: 3,
                transactionType: 'transfer',
                transactionDate: '',
                transactionValueCrypto: 2001,
                transactionBlockchainFee: 0.189569,
                transactionExchangeFee: 1,
                transactionOrigination: '',
                transactionOriginationAddress: '',
                transactionDestination: '',
                transactionDestinationAddress: '',
                transactionDetails: ''
            }, {
                transactionID: 4,
                transactionType: 'reward',
                transactionDate: '',
                transactionValueCrypto: 9.207,
            }, {
                transactionID: 5,
                transactionType: 'sell',
                transactionDate: '',
                transactionValueCrypto: 100,
                transactionValueFiat: 0.20,
                transactionOrigination: ''
            }
        ]
    }, {
        id: 'binancecoin', // coingecko id
        isActive: false,
        name: 'binance coin',
        ticker: 'bnb',
        ledger: [
            {
                transactionID: 0,
                transactionType: 'purchase',
                transactionDate: '',
                transactionValueCrypto: 101,
                transactionValueFiat: 37.53,
                transactionOrigination: ''
            }
        ]
    }, {
        id: 'chainlink', // coingecko id
        isActive: true,
        name: 'chainlink',
        ticker: 'link',
        ledger: [
            {
                transactionID: 0,
                transactionType: 'purchase',
                transactionDate: '',
                transactionValueCrypto: 50.351,
                transactionValueFiat: 11.82,
                transactionOrigination: ''
            }, {
                transactionID: 1,
                transactionType: 'purchase',
                transactionDate: '',
                transactionValueCrypto: 206.6968,
                transactionValueFiat: 11.50,
                transactionOrigination: ''
            }, {
                transactionID: 2,
                transactionType: 'transfer',
                transactionDate: '',
                transactionValueCrypto: 205.25,
                transactionBlockchainFee: 0, // ether
                transactionExchangeFee: 0.75,
                transactionOrigination: '',
                transactionOriginationAddress: '',
                transactionDestination: '',
                transactionDestinationAddress: '',
                transactionDetails: ''
            }            
        ]
    }, {
        id: 'usd-coin', // coingecko id
        isActive: true,
        name: 'USD coin',
        ticker: 'usdc',
        ledger: [
            {
                transactionID: 0,
                transactionType: 'purchase',
                transactionDate: '',
                transactionValueCrypto: .50,
                transactionValueFiat: 1,
                transactionOrigination: ''
            }
        ]
    }, {
        id: 'wrapped-bitcoin', // coingecko id
        isActive: false,
        name: 'wrapped bitcoin',
        ticker: 'wbtc',
        ledger: [
            {
                transactionID: 0,
                transactionType: 'purchase',
                transactionDate: '',
                transactionValueCrypto: 101,
                transactionValueFiat: 29290.47,
                transactionOrigination: ''
            }
        ]
    }, {
        id: 'bitcoin-cash-sv', // coingecko id
        isActive: false,
        name: 'bitcoin SV',
        ticker: 'bsv',
        ledger: [
            {
                transactionID: 0,
                transactionType: 'purchase',
                transactionDate: '',
                transactionValueCrypto: 101,
                transactionValueFiat: 163.24,
                transactionOrigination: ''
            }
        ]
    }, {
        id: 'stellar', // coingecko id
        isActive: true,
        name: 'stellar',
        ticker: 'xlm',
        ledger: [
            {
                transactionID: 0,
                transactionType: 'purchase',
                transactionDate: '',
                transactionValueCrypto: 80.244,
                transactionValueFiat: 0.1334,
                transactionOrigination: ''
            }, {
                transactionID: 1,
                transactionType: 'sell',
                transactionDate: '',
                transactionValueCrypto: 25.19,
                transactionValueFiat: 0.1354,
                transactionOrigination: ''
            }
        ]
    }, {
        id: 'eos', // coingecko id
        isActive: true,
        name: 'eosio',
        ticker: 'eos',
        ledger: [
            {
                transactionID: 0,
                transactionType: 'purchase',
                transactionDate: '',
                transactionValueCrypto: 2.2696,
                transactionValueFiat: 2.75,
                transactionOrigination: ''
            }, {
                transactionID: 1,
                transactionType: 'sell',
                transactionDate: '',
                transactionValueCrypto: 2.2696,
                transactionValueFiat: 2.91,
                transactionOrigination: ''
            }
        ]
    }, {
        id: 'monero', // coingecko id
        isActive: true,
        name: 'monero',
        ticker: 'xmr',
        ledger: [
            {
                transactionID: 0,
                transactionType: 'purchase',
                transactionDate: '',
                transactionValueCrypto: 7.0986232,
                transactionValueFiat: 137.48,
                transactionOrigination: ''
            }
        ]
    }
];
export default portfolio;