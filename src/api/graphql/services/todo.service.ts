import { PrismaClient } from "@prisma/client";
import { extractSelection } from "../utils/extractSelections";
import { GraphQLResolveInfo } from "graphql";

interface GetTodosArgs {
  info: GraphQLResolveInfo;
  userId: string;
}

interface GetTodoArgs extends GetTodosArgs {
  id: string;
}

interface TodoInput {
  title: string;
  description: string;
  completed: boolean;
  userId: string;
}

interface TodoUpdateInput {
  title: string;
  description: string;
  completed: boolean;
}

const prisma = new PrismaClient();

export const getTodos = async ({ info, userId }: GetTodosArgs) => {
  const extractedSelections = extractSelection(info);

  const select = extractedSelections.reduce((acc, field) => {
    acc[field] = true;
    return acc;
  }, {});

  let filteredTodos = await prisma.todo.findMany({
    where: {
      userId: userId,
    },
    select: select,
  });

  if (filteredTodos.length === 0) {
    throw new Error("No todos found");
  }

  return filteredTodos;
};

export const getTodo = async ({ info, userId, id }: GetTodoArgs) => {
  const extractedSelections = extractSelection(info);

  const select = extractedSelections.reduce((acc, field) => {
    acc[field] = true;
    return acc;
  }, {});

  let todo = await prisma.todo.findFirst({
    where: {
      userId: userId,
      id: id,
    },
    select: select,
  });

  if (!todo) {
    throw new Error("Todo not found");
  }

  return todo;
};

export const createTodo = async (
  { title, description, completed, userId }: TodoInput,
) => {
  let todo = await prisma.todo.create({
    data: {
      title,
      description,
      completed,
      userId,
    },
  });

  return todo;
};

export const updateTodo = async (
  { title, description, completed }: TodoUpdateInput,
  id: string
) => {
  let todo = await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title,
      description,
      completed,
    },
  });

  return todo;
};

export const deleteTodo = async (userId: string, id: string) => {
  let todo = await prisma.todo.delete({
    where: {
      id,
    },
  });

  return todo;
};
