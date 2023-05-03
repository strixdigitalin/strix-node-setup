const { SendSuccess, SendError, SendFail } = require("../MIDDLEWARES/Response");
const { validateField } = require("../MIDDLEWARES/Validator");
const DefaultSchema = require("../SCHEMA/BaseSchema");

const Create = async (req, res, next) => {
  const { name } = req.body;
  try {
    let fields = { name };
    if (!validateField(fields, res)) return null;
    const savedData = await DefaultSchema.create({
      ...req.body,
    });

    SendSuccess(res, DefaultSchema + " Successfully Created", savedData);
  } catch (e) {
    console.log(e);
    SendError(res, e);
  }
};

const Read = async (req, res, next) => {
  try {
    const data = await DefaultSchema.find(req.query);
    SendSuccess(res, DefaultSchema + " Data Fetched", data);
  } catch (e) {
    console.log(e);
    SendError(res, e);
  }
};
const Delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) return SendFail(res, "Id is required", {});
    const data = await DefaultSchema.findByIdAndDelete(id);
    if (!data) return SendFail(res, "Id not found");
    SendSuccess(res, DefaultSchema + "Object Deleted", data);
  } catch (e) {
    console.log(e);
    SendError(res, e);
  }
};

const Update = async (req, res, next) => {
  try {
    let { id } = req.params;
    if (!id) return SendFail(res, "id is required", []);
    if (!req.body) return SendFail(res, "Body data for update is required", []);
    let data = await DefaultSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    SendSuccess(res, DefaultSchema + "Field Updated", data);
  } catch (error) {
    console.log(error.message);
    SendError(res, error, []);
  }
};
module.exports = {
  Read,
  Create,
  Delete,
  Update,
};

// module.exports = { createUser, userLogin, getUserDetails, updateUserDetails }
