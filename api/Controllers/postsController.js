const dbConnection = require("../Config/db");

const addPost = async (req, res) => {
  const post_data = req.body;

  try {
    const data = await dbConnection.query(
      `
      INSERT INTO posts (user_id, title, content) VALUES (?, ?, ?)`,
      [post_data.user_id, post_data.title, post_data.content]
    );
    res.status(200).json({
      status: true,
      message: "Post added successfully",
      data: { post_id: data[0].insertId },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: false,
      message: err.message,
    });
  }
};

const allPosts = async (req, res) => {
  try {
    const all = await dbConnection.query(
      `SELECT posts.id, posts.content, posts.user_id, posts.title, users.name, posts.created_at FROM posts LEFT JOIN users ON posts.user_id=users.id;`
    );
    res.status(200).json({
      status: false,
      message: "Successfully fetched all Posts",
      data: all[0],
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: err.message,
    });
  }
};

module.exports = { addPost, allPosts };
