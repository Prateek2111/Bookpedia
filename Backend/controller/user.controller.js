import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        const createdUser = new User({
          fullname,
          email,
          password: hash,
        });
        await createdUser.save();
        res.status(201).json({
          message: "User created successfully",
          user: {
            _id: createdUser._id,
            fullname: createdUser.fullname,
            email: createdUser.email,
          },
        });
      });
    });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    await bcrypt.compare(password, user.password, function (err, data) {
      // user.password is the hashed password
      if (data) {
        res.status(200).json({
          message: "Login successful",
          user: {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
          },
        });
      } else {
        res.status(400).json({ message: "Invalid password" });
      }
    });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
