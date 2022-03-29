const express = require('express')
const pug = require('pug')
const {products} = require('./utils.js')
const path = require('path')

const app = express()
const port = process.env.PORT || 8000

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    let {limit, merchant} = req.query
    limit = parseInt(limit)
    res.render('index', {products, limit, merchant})
})

const posts = [
    {
        title: 'Laborum esse dolor ea dolor fugiat Lorem minim eu nostrud voluptate.',
        description: 'Commodo cupidatat enim eu adipisicing non amet sit sunt sunt. Nostrud ipsum elit reprehenderit exercitation.',
        image: 'https://source.unsplash.com/1600x900/?computer-software,engineering,software-development,computer-engineering'
    },
    {
        title: 'Minim excepteur et nostrud reprehenderit proident aute non et.',
        description: 'Tempor ea dolore officia non magna. Ut ullamco exercitation voluptate officia ea velit tempor excepteur ullamco enim nostrud consectetur commodo.',
        image: 'https://source.unsplash.com/1600x900/?engineering,software-development,computer-software,computer-engineering'
    },
    {
        title: 'Cupidatat eiusmod eiusmod eiusmod eiusmod.',
        description: 'Enim voluptate in laborum consequat cillum cillum labore fugiat mollit. Consequat amet velit aliqua enim eu sunt elit.',
        image: 'https://source.unsplash.com/1600x900/?blogpost,post,website'
    }
]

app.get('/blog/:id', (req, res) => {
    const postList = [...posts, ...posts]
    res.render('blog'+req.params.id, {tags: ['one', 'two', 'three'], posts: postList})
})

app.listen(port, (err) => console.log(err || 'Listen on port ' + port))