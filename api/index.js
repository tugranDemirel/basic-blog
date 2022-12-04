import express from 'express'
import postRoutes from './routes/posts.js'
const app = express();

app.use(express.json())

app.use('/api/posts', postRoutes)

app.get('/', (req, res) => {
    res.send('test')
})

app.listen(8800, () => {
    console.log('connection')
})