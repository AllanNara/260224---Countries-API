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
      validate: {
        max: 5,
        min: 1
      },
      defaultValue: 1
    },
    duration: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    seasion: {
      type: DataTypes.ENUM(["spring", "summer", "fall", "winter", "any"]),
      defaultValue: "any"
    }
  }, {
    timestamps: false
  });
}