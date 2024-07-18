import express, { Request, Response } from "express";
import {createTodoRules, updateTodoRules} from "../middleware/validator";
import validateResult from "../middleware/validationResults";
import todoService from "../services/todo.service";

router.get("/list", authorize, getTodosHandler);
router.get("/task/:id", authorize, getTodoHandler);
router.post(
  "/create",
  authorize,
  validator.createTodoRules,
  validateResult,
  newTodoHandler
);
router.patch(
  "/update/:id",
  authorize,
  validator.updateTodoRules,
  validateResult,
  updateTodoHandler
);
router.delete("/delete/:id", authorize, deleteTodoHandler);

export default router;