import User from "../models/User.js";

const userService = {
    getAllUsers: async () => {
        return await User.find();
    },
    getUserById: async (id) => {    
        return await User.findById(id);
    },
    createUser: async (name, birthday, phone, email, password) => {
        const user = new User({ 
            name, 
            birthday, 
            phone, 
            email, 
            password 
        });
        return await user.save();

        //อีกวิธีหนึ่งในการสร้างและบันทึกผู้ใช้ใหม่
        // return await User.create({
        //     name,
        //     birthday,
        //     phone,
        //     email,
        //     password
        // });
    },
    updateUser: async (id, name, birthday, phone, email, password) => {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { 
                $set:{
                    name,
                    birthday,
                    phone,
                    email,
                    password
                }
             },
            { new: true }
        );
        return updatedUser;
    },
    deleteUser: async (id) => {
        return await User.findByIdAndDelete(id);
    }
};

export default userService;