module.exports = (sequelize, DataTypes) => {
    const Content = sequelize.define('Content', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      videoCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      videoTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      videoTag: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      thumbNail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      publishDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("DRAFT", "PUBLISH"),
        allowNull: false,
      },
    });
  
    return Content;
  };
  