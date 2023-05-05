const cloudinary = require("cloudinary").v2;

// Configuration
cloudinary.config({
  cloud_name: "",
  api_key: "",
  api_secret: "",
});
// Upload
const uploadOnCloudinary = async (file) => {
  try {
    console.log("before clound", file);
    const data = await cloudinary.uploader.upload(file.path);
    console.log(data, "<<<thsis is data in cloudinary ");
    return data.secure_url;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = uploadOnCloudinary;
