import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config({});

cloudinary.config({
  cloud_name: "dgusm6cku",
  api_key: "284955951359258",
  api_secret: "FuUB54gDqHRbMaTuhPHnj_ke8UU",
  secure: true,
});
export default cloudinary;