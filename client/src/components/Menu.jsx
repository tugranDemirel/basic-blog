import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";

const Menu = ({ cat }) => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchData = async  () => {
            try{
                const res = await axios.get(`/posts/?cat=${cat}`)
                setPosts(res.data)
            }catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [cat])
    return (
        <div className="menu">
            <h1>Sevilen diğer gönderiler</h1>
            {
                posts.map((posts) => (
                    <div className="post" key={posts.id}>
                        <img src={posts.img} alt=""/>
                        <h2>{posts.title}</h2>
                        <button className="button">Okumaya Devam et</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Menu