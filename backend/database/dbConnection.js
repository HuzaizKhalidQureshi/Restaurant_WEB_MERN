import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(
      "mongodb+srv://huzaizqureshi:doherty4444@cluster0.3vy2unt.mongodb.net/?retryWrites=true",
      {
        dbName: "RESERVATIONS",
      }
    )
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
