import React from 'react';
import {Link} from "react-router-dom";
const posts = [
    {
        id:1,
        title: "lorem ipsum dolor sit amet consectetut",
        desc: "lorem ipsum dolor sit amet consectetut",
        img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:2,
        title: "lorem ipsum dolor sit amet consectetut",
        desc: "lorem ipsum dolor sit amet consectetut",
        img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:3,
        title: "lorem ipsum dolor sit amet consectetut",
        desc: "lorem ipsum dolor sit amet consectetut",
        img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:4,
        title: "lorem ipsum dolor sit amet consectetut",
        desc: "lorem ipsum dolor sit amet consectetut",
        img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:5,
        title: "lorem ipsum dolor sit amet consectetut",
        desc: "lorem ipsum dolor sit amet consectetut",
        img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:6,
        title: "lorem ipsum dolor sit amet consectetut",
        desc: "lorem ipsum dolor sit amet consectetut",
        img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:7,
        title: "lorem ipsum dolor sit amet consectetut",
        desc: "lorem ipsum dolor sit amet consectetut",
        img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:8,
        title: "lorem ipsum dolor sit amet consectetut",
        desc: "lorem ipsum dolor sit amet consectetut",
        img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:9,
        title: "lorem ipsum dolor sit amet consectetut",
        desc: "lorem ipsum dolor sit amet consectetut",
        img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
]
const Home = () => {
    return (
        <div className='home'>
            <div className="posts">
                {
                    posts.map((post) => (
                        <div key={post.id} className="post">
                            <div className="img">
                                <img src={post.img} alt=""/>
                                <div className="bg">

                                </div>
                            </div>
                            <div className="content">
                                <Link className="link" to={`/post/${post.id}`}>
                                    <h1>{post.title}</h1>
                                </Link>
                                <p>{post.desc}</p>
                                <button>Okumaya Devam Et</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Home;