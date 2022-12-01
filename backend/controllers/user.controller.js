import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import User from "../models/user.model.js";

// require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

function tokengeneratot(user) {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      username: user.username
    },
    JWT_SECRET
  );
}

export const login = async (req, res) => {
  


};

export const register = async (req, res) => {
  
    
};
