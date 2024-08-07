import dotenv from 'dotenv';

dotenv.config();

const port = parseInt(process.env.PORT ?? '8003');
if (isNaN(port)) {
  throw new Error('Invalid PORT enviroment variable, stopping the system');
}

const masterKey = process.env.JWT_SECRET;
const refreshKey = process.env.JWT_FRESH;
const mode = process.env.EXEC_MODE;

const cors_secure = mode === 'production';
const cors_samesite = mode === 'production' ? 'none' : 'lax';

const backend =
  mode === "production"
    ? process.env.MONGODB_URI_PROD
    : process.env.MONGODB_URI_DEV;

const dataseeddev = process.env.SEED_DEVELOPER;
const dataseedprod = process.env.SEED_PRODUCTION;

export {
  port,
  masterKey,
  refreshKey,
  mode,
  backend,
  cors_secure,
  cors_samesite,
  dataseeddev,
  dataseedprod,
};