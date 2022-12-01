import mongoose from "mongoose";

export const connect = () => {
  return mongoose.connect(
    "dayabase"
  );
};