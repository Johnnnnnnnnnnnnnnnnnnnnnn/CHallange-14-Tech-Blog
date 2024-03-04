const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {
    checkPassword(loginPassword) {
        return bcrypt.compareSync(loginPassword, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username :{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        password: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
        hooks: {
            async beforeCreate(newUser) {
                newUser.password = await bcrypt.hash(newUser.password, 10);
                return newUser;
            },
            async beforeUpdate(updateUser) {
                updateUser.password = await bcrypt.hash(updateUser.password, 10);
                return updateUser;
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "user",
    }
)

module.exports = User;