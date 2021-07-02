module.exports = mongoose => {
    const User = mongoose.model(
        "user",
        mongoose.Schema({
            firstName: String,
            lastName: String,
            username: String,
            password: String
        }, { timestamps: true })
    );

    return User;
};