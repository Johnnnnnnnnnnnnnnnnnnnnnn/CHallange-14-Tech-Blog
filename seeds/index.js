const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

const userData = require("./userData.json");
const postData = require("./postData.json");
const commentData = require("./commentData.json");

const seedsDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    const posts = await Post.bulkCreate(postData, {
      individualHooks: true,
      returning: true,
    });

    const comments = await Comment.bulkCreate(commentData, {
      individualHooks: true,
      returning: true,
    });

    console.log("Database has been seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error while seeding the database:", error);
    process.exit(1);
  }
};

seedsDatabase();