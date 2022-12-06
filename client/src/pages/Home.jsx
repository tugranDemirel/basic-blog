import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";


{/*const posts = [*/}
//     {
//         id:1,
//         title: "lorem ipsum dolor sit amet consectetut",
//         desc: "lorem ipsum dolor sit amet consectetut",
//         img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//     },
//     {
//         id:2,
//         title: "lorem ipsum dolor sit amet consectetut",
//         desc: "lorem ipsum dolor sit amet consectetut",
//         img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//     },
//     {
//         id:3,
//         title: "lorem ipsum dolor sit amet consectetut",
//         desc: "lorem ipsum dolor sit amet consectetut",
//         img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//     },
//     {
//         id:4,
//         title: "lorem ipsum dolor sit amet consectetut",
//         desc: "lorem ipsum dolor sit amet consectetut",
//         img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
{/*    },*/}
{/*    {*/}
{/*        id:5,*/}
{/*        title: "lorem ipsum dolor sit amet consectetut",*/}
//         desc: "lorem ipsum dolor sit amet consectetut",
//         img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//     },
//     {
{/*        id:6,*/}
{/*        title: "lorem ipsum dolor sit amet consectetut",*/}
{/*        desc: "lorem ipsum dolor sit amet consectetut",*/}
{/*        img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"*/}
//     },
//     {
//         id:7,
{/*        title: "lorem ipsum dolor sit amet consectetut",*/}
//         desc: "lorem ipsum dolor sit amet consectetut",
//         img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//     },
//     {
//         id:8,
//         title: "lorem ipsum dolor sit amet consectetut",
//         desc: "lorem ipsum dolor sit amet consectetut",
//         img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//     },
//     {
//         id:9,
//         title: "lorem ipsum dolor sit amet consectetut",
//         desc: "lorem ipsum dolor sit amet consectetut",
//         img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//     },
// ]
const Home = () => {
    const [posts, setPosts] = useState([])
    const cat = useLocation().search
    const navigate = useNavigate()
    console.log(cat)
    useEffect(() => {
        const fetchData = async  () => {
            try{
                const res = await axios.get(`/posts${cat}`)
                setPosts(res.data)
            }catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [cat])
    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return  doc.body.textContent
    }
    return (
        <div className='home'>
            <div className="posts">
                {
                    posts.map((post) => (
                        <div key={post.id} className="post">
                            <div className="img">
                                <img src={`../upload/${post.img}`} alt=""/>
                                <div className="bg">

                                </div>
                            </div>
                            <div className="content">
                                <Link className="link" to={`/posts/${post.id}`}>
                                    <h1>{getText(post.title)}</h1>
                                </Link>
                                <p>{getText(post.desc)}</p>
                                <button onClick={e => window.location.href=`/posts/${post.id}`}>Okumaya Devam Et</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Home;