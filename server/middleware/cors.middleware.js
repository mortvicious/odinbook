function cors(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE, OPTIONS")
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Origin, X-Requested-With, Accept, X-Auth-Token")
    
    if (req.method === "OPTIONS") {
        res.status(200)
    }
    next()
}


module.exports = cors