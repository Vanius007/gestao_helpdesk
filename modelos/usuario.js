"use strict";

module.exports = function(sequelize, DataTypes) {
  var Usuario = sequelize.define("Usuario", {
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true

    },
    login: DataTypes.STRING,
     pw: DataTypes.STRING,
 titulo: DataTypes.STRING,
   nome: DataTypes.STRING,
  sobrenome: DataTypes.STRING,
   valid_id: DataTypes.STRING,
create_time: DataTypes.STRING,
  create_by: DataTypes.STRING,
  change_time: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
     //   User.hasMany(models.Task)
      }

    },
     timestamps: false,
     tableName:"usuarios"
  });

  return Usuario;
};


