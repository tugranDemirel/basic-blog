import {db} from '../db.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const register = (req, res) => {

    // Kullanıcı var mı yok mu kontrolü
    const q = "SELECT * FROM users WHERE email =? OR username =?"
    const email = req.body.email
    const username = req.body.name
    const password = req.body.password
    db.query(q, [email, username], (err, data) => {
        console.log(username, email)
        if (data.length) return res.status(409).json('User already exist')

        // Hash the password and create a user
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const q = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)"
        const values = [
            username,
            email,
            hash
        ]
        db.query(q, [values], (err, data) => {
            console.log('buradayızz')
            if(err) return res.json(err)
            return res.status(200).json('User has been created.')
        })

    })
}
export const login = (req, res) => {
    const username = req.body.username
    const password = req.body.password
    // CHECK USER
    const q = "SELECT * FROM users WHERE username=?"
    db.query(q, [username], (err, data) => {
        if (err) return res.json(err)
        if (data.length === 0) return res.status(404).json('user nor found')

        // CHECK PASSWORD
        const isPasswordCorrect = bcrypt.compareSync(password, data[0].password)
        if (!isPasswordCorrect) return res.status(400).json('Wrong username or password')

        const token = jwt.sign({id: data[0].id}, "jwtkey");
        const  {passowrd, ...other} = data[0]
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(other)
    })
}
export const logout = (req, res) => {
    res.clearCookie("access_token", {
        sameSite:"none",
        secure: true
    }).status(200).json("User has been logged out")
}