import userModel from "./models/user.model.js";

class UserManager {
  async createUser(obj) {
    try {
      const newUser = await userModel.create(obj);
      return newUser;
    } catch (err) {
      console.error(err);
      return { error: err };
    }
  }  

  async findUser(data) {
    try {
      const user = await userModel.findOne({ email: data.email }).lean(); // * Para el front sacar lean()
      return user;
    } catch (err) {
      console.error(err);
      return { error: err };
    }
  }
}

export default UserManager
