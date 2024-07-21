import express, { Request, Response } from "express";
import validator from "../middleware/validator";
import validateResult from "../middleware/validationResults";
import todoService from "../services/todo.service";

const router = express.Router();

router.get("/list", getTodosHandler);
router.get("/task/:id", getTodoHandler);
router.post(
  "/create",
  validator.createTodoRules,
  validateResult,
  newTodoHandler
);
router.patch(
  "/update/:id",
  validator.updateTodoRules,
  validateResult,
  updateTodoHandler
);
router.delete("/delete/:id", deleteTodoHandler);

export default router;