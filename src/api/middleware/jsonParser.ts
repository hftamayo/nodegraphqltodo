import { IncomingMessage } from "http";

export const jsonParser = (req: IncomingMessage): Promise<any> => {
  return new Promise((resolve, reject) => {
    let rawData = '';
    req.on('data', (chunk) => {
      rawData += chunk;
    });
    req.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        resolve(parsedData);
      } catch (error) {
        reject(new Error('Invalid JSON'));
      }
    });
  });
};