const express = require('express');
const router = express.Router();
const  users =[{name: "Kyle"}, {name: "Sally"}]
router.use(logger)


router.get('/', (req, res) => {
    res.send('User list');
});

router.get('/new', (req, res) => {
    res.send('User new form');
});

router.route("/:id")
  .get((req, res) =>{
    res.send(`got user with id  ${req.params.id}`)
    console.log(req.user)
  })
  .put( (req, res) =>{
      res.send(`updated user with id  ${req.params.id}`)
  })
  .delete((req, res) => {
      res.send(`deleted user with id ${req.params.id}`);
  })

router.param("id", (req, res, next, id)=>{
  console.log(id)
  req.user = users[id]
  next()
})

function logger(req, res, next){
  console.log(req.originalUrl)
  next()
}

module.exports = router;
