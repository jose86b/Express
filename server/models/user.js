

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
      title: {
          type:Sequelize.STRING,
      },        
  });
  return User;
};