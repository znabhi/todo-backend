import { Router } from "express";
import {
  addTodo,
  deleteTodo,
  editTodo,
  getTodo,
} from "../components/todo.comppnent.js";

const router = Router();

router.route("/").get(getTodo);
router.route("/add").post(addTodo);
router.route("/delete/:todoId").delete(deleteTodo);
router.route("/edit/:todoId").patch(editTodo);

export default router;
