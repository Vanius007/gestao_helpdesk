"use strict";

module.exports = function(sequelize, DataTypes) {
  var Grupo = sequelize.define("Grupo", {
  	id:{
  		type:DataTypes.INTEGER,
  		primaryKey:true

  	},
    name: DataTypes.STRING,
    comments:DataTypes.STRING,
    valid_id:DataTypes.STRING,
    create_time:DataTypes.STRING,
    create_by:DataTypes.STRING,
    change_time:DataTypes.STRING,
    change_by:DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
     //   User.hasMany(models.Task)
      }

    },
     timestamps: false,
     tableName:"groups"
  });

  return Grupo;
};
