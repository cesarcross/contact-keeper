const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log("Mongo livre");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// Another way to do the above
// mongoose
// .connect(db, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// })
// .then(() => console.log("Mongo vivo e pleno"))
// .catch((err) => {
//   console.error(err.message);
//   process.exit(1);
// });

module.exports = connectDB;
