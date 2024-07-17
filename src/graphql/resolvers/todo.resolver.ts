import { GraphQLResolveInfo } from "graphql";
import {
  createTodo,
  updateTodo,
  deleteTodo,
  getTodo,
  getTodos,
} from "../services/todo.service";
import { Query } from "type-graphql";
import { info } from "console";

export const todoResolver = {
  Query: {
    async todos(
      _: any,
      args: Record<string, any>,
      context: any,
      info: GraphQLResolveInfo
    ) {
      return await getTodos({ info, userId: args.userId });
    },
    async todo(
      _: any,
      args: Record<string, any>,
      context: any,
      info: GraphQLResolveInfo
    ) {
      return await getTodo({ info, userId: args.userId, id: args.id });
    },
  },
  Mutation: {
    async createTodo(
      _: any,
      args: Record<string, any>,
      context: any,
      info: GraphQLResolveInfo
    ) {
      return await createTodo(
        args.title,
        args.description,
        args.completed,
        args.userId,
      );
    },
    async updateTodo(
      _: any,
      args: Record<string, any>,
      context: any,
      info: GraphQLResolveInfo
    ) {
      return await updateTodo(
        args.title,
        args.description,
        args.completed,
        args.userId,
        args.id,
      );
    },
    async deleteTodo(
      _: any,
      args: Record<string, any>,
      context: any,
      info: GraphQLResolveInfo
    ) {
      return await deleteTodo(args.userId, args.id);
    },
  },
};
