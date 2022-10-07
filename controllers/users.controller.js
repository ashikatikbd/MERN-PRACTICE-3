const path = require("path");

exports.userHome = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/index.html"));
};
exports.userAbout = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/about.html"));
};
exports.userContact = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/contact.html"));
};
exports.userService = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/service.html"));
};
exports.userForm = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/form.html"));
};
exports.userRegister = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/register.html"));
};
exports.userRegisterPost = (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const school = req.body.school;
  const fahtersName = req.body.fahtersName;
  const mothersName = req.body.mothersName;
  res.send(`<h1>Your name is ${name}. Your age is ${age}, School name is ${school} , your father's name is ${fahtersName}, & your mohter's name is ${mothersName}`);
};
exports.userPost = (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  res.send(`Your name is ${name} & age is ${age}`);
};
