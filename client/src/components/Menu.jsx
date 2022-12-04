import React from "react";

const Menu = () => {
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
    return (
        <div className="menu">
            <h1>Sevilen diğer gönderiler</h1>
            {
                posts.map((post) => (
                    <div className="post" key={post.id}>
                        <img src={post.img} alt=""/>
                        <h2>{post.title}</h2>
                        <button className="button">Okumaya Devam et</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Menu