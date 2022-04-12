module.exports = mongoose => mongoose.model('user',
    mongoose.Schema(
        {
            userId : String,
            pw : String,
            userName : String,
            tel : String
        }, {timestamps : true}
    )
)