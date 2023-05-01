const users = require("../../users.json");

// Handle GET requests at the /users endpoint
const getUserById = (req, res) => {
  const userId = req.query.id;

  // If 'id' is not provided, return a 400 error
  if (!userId) {
    res.status(400).json({ error: "Missing 'id' parameter in query string" });
    return;
  }

  // If the 'id' is not an integer, return a 400 error
  if (!Number.isInteger(parseInt(userId, 10))) {
    res
      .status(400)
      .json({ error: "Invalid 'id' parameter, it should be an integer" });
    return;
  }

  // Search for the user with the provided 'id'
  const user = users.find((user) => user.id === userId);

  // If the user is not found, return a 404 error
  if (!user) {
    res.status(404).json({ error: "User with id" + userId + "not found" });
    return;
  }

  // Send the user object as a JSON response
  res.json(user);
};

module.exports = { getUserById };
