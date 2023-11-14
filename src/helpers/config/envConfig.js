import dotenv from "dotenv";
import path from "path";

const dotenvResult = dotenv.config({ path: path.join(process.cwd(), ".env") });

if (dotenvResult.error) {
  throw dotenvResult.error;
}


export const envConfig = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  mysql_user: process.env.MYSQL_USER,
};

export const weekPassword = {
  showPasswordPopup: false, 
}