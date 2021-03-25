const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        password: {
            type: password,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        // CreatedAt, UptadedAt
    }
);

module.exports = model("User", UserSchema);
