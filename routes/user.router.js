import userController from "../controllers/user.controller.js";
import checkMiddleware from "../middlewares/check.middleware.js";

const userRouter = (router) => {
    router.get("/user", userController.getAllUser);
    router.get("/user/:id", checkMiddleware(), userController.getUserById);
    router.post("/user", userController.createUser);
    router.put("/user/:id", checkMiddleware(), userController.updateUser);
    router.delete("/user/:id", checkMiddleware(), userController.deleteUser);
};

export default userRouter;
