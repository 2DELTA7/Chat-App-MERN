const UserModel = require("../models/UserModel")

async function checkEmail(request,response){
    try {
        const { email } = request.body

        //we dont want to show the password field when the response is given so -password is used.
        const checkEmail = await UserModel.findOne({email}).select("-password")

        if(!checkEmail){
            return response.status(400).json({
                message : "user not exit",
                error : true
            })
        }

        return response.status(200).json({
            message : "email verify",
            success : true,
            data : checkEmail
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true
        })
    }
}

module.exports = checkEmail