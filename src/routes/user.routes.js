import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import { validateId, validateUser, checkValidation } from "../validations/user.validate.js";

const routerUser = Router();

routerUser.get("/test", (req, res) => {
    res.json({ message: "Prueba de trabajo!" });
});

routerUser.get("/", userController.getAllUsers);
routerUser.post("/", checkValidation(validateUser), userController.createUser);
routerUser.get("/:id",  checkValidation(validateId), userController.getUserById);
routerUser.put("/:id",  checkValidation([validateId, validateUser]), userController.updateUser);
routerUser.delete("/:id",  checkValidation(validateId), userController.deleteUser);

export default routerUser;