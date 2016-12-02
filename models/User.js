module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('users', {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        token: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                User.hasOne(models.profiles);
                User.hasMany(models.posts);
                User.hasMany(models.comments);
            }
        }
    });

    return User;
};