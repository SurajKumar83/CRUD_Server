import express from "express";
import { addUserToDB,getUsers,getUser,editUser,deleteUser} from "../controller/user-controler.js";

const router = express.Router();

router.post("/addnew", addUserToDB);
router.get("/exiting",getUsers)
router.get("/:id",getUser);
router.put("/:id",editUser);
router.delete("/:id",deleteUser);
export default router;
