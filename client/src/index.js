const express = require("express")

const app = express();
const PORT = process.env.PORT || 5000;
const userRouter = require('./routes/wishlistRoutes')
app.set('view engine', 'ejs')
app.use(logger)


app.get("/", (req, res) => {
    res.render("../views/index", { text: "world" })
})

app.use('/users', userRouter)


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


app.post('/', (req, res) =>{
    res.send('created user')
})

function logger(req, res, next){
  console.log(req.originalUrl)
  next()
}