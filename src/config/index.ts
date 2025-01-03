import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  db_Url: process.env.DB_URL,
  default_password: process.env.default_password,
  bcrypt_salt: process.env.BCRYPT_SALT,
};
