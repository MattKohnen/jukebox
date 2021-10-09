const combineCollections = (...collections) => {
    //return collections.reduce((acc, val) => acc.concat(val), [])
    //return [].concat(...collections)
    return collections.flat()
}

module.exports = combineCollections
