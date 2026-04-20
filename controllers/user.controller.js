import { get } from "mongoose";
import userService from "../services/user.service.js";

const userController = {
  getAllUser: async (req, res) => {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Error fetching users" });
    }
  },
  getUserById: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await userService.getUserById(userId);
      if (!user) {
        console.log("User not found with ID:", userId);
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json(user);
      // if (user) {
      //     res.status(200).json(user);
      // } else {
      //     console.log("User not found with ID:", userId);
      //     res.status(404).json({ message: "User not found" });
      // }
    } catch (error) {
      res.status(500).json({ message: "Error fetching user" });
    }
  },
  createUser: async (req, res) => {
    try {
      const { name, birthday, phone, email, password } = req.body;
      const newUser = await userService.createUser(
        name,
        birthday,
        phone,
        email,
        password,
      );
      res.status(201).json(newUser);
    } catch (err) {
      console.error("error xxx", err);
      res.status(500).json({ message: "Error creating user xxx" });
    }
  },
  updateUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const { name, birthday, phone, email, password } = req.body;
      const updatedUser = await userService.updateUser(
        userId,
        name,
        birthday,
        phone,
        email,
        password,
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      console.error("Error updating user:", err);
      res.status(500).json({ message: "Error updating user" });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const userId = req.params.id;
      await userService.deleteUser(userId);
      return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ message: "Error deleting user" });
    }
  },
};

export default userController;
