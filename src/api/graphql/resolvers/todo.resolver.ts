import { GraphQLResolveInfo } from "graphql";
import todoService from "../../services/todo.service";
import { Query } from "type-graphql";
import { info } from "console";

export const todoResolver = {
  Query: {
    async listActiveTodos(
      _: any,
      args: Record<string, any>,
      context: any,
      info: GraphQLResolveInfo
    ) {
      return await todoService.getTodos({ info, userId: args.userId });
    },
    async listTodoByID(
      _: any,
      args: Record<string, any>,
      context: any,
      info: GraphQLResolveInfo
    ) {
      return await todoService.getTodo({ info, userId: args.userId, id: args.id });
    },
  },
  Mutation: {
    async createTodo(
      _: any,
      args: Record<string, any>,
      context: any,
      info: GraphQLResolveInfo
    ) {
      const { title, description, completed, userId } = args;
      return await todoService.createTodo({ title, description, completed, userId });
    },
    async updateTodoByID(
      _: any,
      args: Record<string, any>,
      context: any,
      info: GraphQLResolveInfo
    ) {
      const { title, description, completed } = args;
      return await todoService.updateTodo({ title, description, completed }, args.id
      );
    },
    async deleteTodoByID(
      _: any,
      args: Record<string, any>,
      context: any,
      info: GraphQLResolveInfo
    ) {
      return await todoService.deleteTodo(args.userId, args.id);
    },
  },
};

export default todoResolver;
