import User from "../schema/userschema.js";

export const addUserToDB = async (req, response) => {
  const user = req.body;
  // now we need to validate the users information
  const newUser = new User(user); //validates

  try {
    await newUser.save();
    response.status(201).json(newUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getUsers = async (request, response) => {
  try {
    const users = await User.find({});

    // here we are finding all the data from the schema User as an object.
    response.status(200).json(users);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getUser = async (request, response) => {
  try {
    // const user=await User.find({_id:request.params.id});

    // here we are finding the single data on the basis of the user id which we are extracting from the request params

    //2nd method using the findById function of the mongodb
    const user = await User.findById(request.params.id);

    response.status(200).json(user);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const editUser = async (request, response) => {
  let user = request.body;
  const updatedUser = new User(user); // validate
  try {
    await User.updateOne({ _id: request.params.id }, updatedUser);
    response.status(200).json(updatedUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
export const deleteUser = async (request, response) => {
  try {
    await User.deleteOne({ _id: request.params.id });
    response.status(200).json({ meggage: "User Deleted Successfully" });
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
