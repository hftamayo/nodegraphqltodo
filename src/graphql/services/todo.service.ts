import { PrismaClient } from "@prisma/client";
import {extractSelection} from "../utils/extractSelections"
import { GraphQLResolveInfo } from "graphql";

interface GetTodosArgs {
    info: GraphQLResolveInfo;
    userId?: string;
    }

    interface GetTodoArgs extends GetTodosArgs {
        id: string;
    }

    interface TodoInput {
        title: string;
        description: string;
        completed: boolean;
    }

    const prisma = new PrismaClient();

    export const getTodos = async ({ info }: GetTodosArgs) => {
        const extractedSelections = extractSelection(info);
    }
