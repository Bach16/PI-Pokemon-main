module.exports = function validator(req,res,next) {    
    try {
        if (req.method == "GET") {
            next()
            return
        };
        if(Object.keys(req.body).length !== 0) {
            const {name,health,attack,defense,speed,height,weight,types} = req.body
            if (!name||!health||!attack||!defense||!speed||!height||!weight||!types) {
                throw new Error("Missing data")
            } else next()
        } else throw new Error("Missing data")       
    } catch (error) {
        res.status(400).send({error:error.message})
    }    
}

