import { IncomingMessage, ServerResponse } from "http";
import { AnyObjectSchema } from "yup";
import { jsonParser } from "./jsonParser";
const validateResult = (schema: AnyObjectSchema) => async (req: IncomingMessage, res: ServerResponse, next: Function) => {
  try {
    // Parse the request body
    const body = await jsonParser(req);
    // Validate the parsed body against the schema
    await schema.validate(body, { abortEarly: false });
    // Attach the body to the request object for further processing
    (req as any).body = body;
    next();
  } catch (error) {
    if (error instanceof Error) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ msg: error.message }));
    } else {
      next(error);
    }
  }
};

export default validateResult;