import { ValidationChain, check } from "express-validator";

const createTodoRules: ValidationChain[] = [
    check("title", "Title is Required").notEmpty().trim().escape(),
    check("description", "Description is Required").notEmpty().trim().escape(),
  ];
  
const updateTodoRules: ValidationChain[] = [
    check("title", "Title is Required").optional().notEmpty().trim().escape(),
    check("description", "Description is Required")
      .optional()
      .notEmpty()
      .trim()
      .escape(),
    check("completed", "Completed is Required")
      .optional()
      .notEmpty()
      .trim()
      .escape()
      .isBoolean(),
  ];
  
  export default {
    createTodoRules,
    updateTodoRules,
  };