const userController = require('../models/userModels');

const addNewUser = (req,res)=>{
    const {id, username, password}=req.body;

    const newUser ={
        id: userController.getAllUsers().length + 1,
        username,
        password
    };

     userController.getAllUsers().push(newUser);

     res.status(201).json({
        message:'user added successfully',
        data: newUser
     });
};

module.exports={
    addNewUser
}