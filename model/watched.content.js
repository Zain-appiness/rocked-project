module.exports = (sequelize, DataTypes) => {
    const WatchedContent = sequelize.define('WatchedContent', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userEmail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      marked: {
        type: DataTypes.ENUM('MARKED', 'UNMARKED'),
        allowNull: true,
      },
    });
  
    return WatchedContent;
  };
  