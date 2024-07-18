import { ValidationChain, check } from "express-validator";

export const createTodoRules: ValidationChain[] = [
    check("title", "Title is Required").notEmpty().trim().escape(),
    check("description", "Description is Required").notEmpty().trim().escape(),
  ];
  
export  const updateTodoRules: ValidationChain[] = [
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
  