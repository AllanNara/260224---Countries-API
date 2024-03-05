const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("activity", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }, 
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: 5,
        min: 1
      },
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    season: {
      type: DataTypes.ENUM(["SPRING", "SUMMER", "FALL", "WINTER", "any"]),
      defaultValue: "any"
    }
  }, {
    timestamps: false
  });
};
