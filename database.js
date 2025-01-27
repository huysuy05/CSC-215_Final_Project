const mongoose = require("mongoose");
const dbUrl = "mongodb+srv://huysuy05:ditcumay@cluster05.gbowi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster05y";
const dbName = "all_task_db";

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    dbName: dbName
})
    .then(() => {console.log("Database created successfully")})
    .catch((err) => {console.log(`Oops, something's wrong: ${err}`)});

// create the schema for the db
const taskSchema = mongoose.Schema({
    task: {
        type: String,
        required: true,
        trim: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Model
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;