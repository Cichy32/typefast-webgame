const User = require("../models/User");


exports.changeAvatar = async (req,res) =>{

    const filter = { name: req.body.name };
    const update = { avatar_id: req.body.avatar_id };

    try {
        let newAvatar = await User.findOneAndUpdate(filter, update);
        res.send(newAvatar+req.body.avatar_iddd)
    } catch (error) {
        res.send(error)
    }

}

exports.getAvatar = async (req,res) =>{
    try {
        const user = await User.findOne({ name: req.body.name })
        res.json(user.avatar_id)
    } catch (error) {
        res.send(error)
    }
}