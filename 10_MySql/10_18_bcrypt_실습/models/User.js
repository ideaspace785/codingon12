const User = function (Sequelize, DataTypes) {
    const model = Sequelize.define(
        'user', {    // 테이블 형태를 여기서 정의 한다
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        pw: {
            type: DataTypes.STRING(255),
            allowNull: false

        },
        name: {
            type: DataTypes.STRING(15),
            allowNull: false

        },
        userid: {
            type: DataTypes.STRING(15),
            allowNull: false

        }
    },{
        freezeTableName: true,
        timestamps: false,
    }
    )
    return model
}
module.exports = User;