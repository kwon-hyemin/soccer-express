module.exports = mongoose => mongoose.model('board',
    mongoose.Schema(
        {
            passengerId : String,
            teamId : String,
            name : String,
            subject : String
        }, {timestamps : true}
    )
)