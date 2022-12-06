import React, {useContext, useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import edit from '../img/edit.png'
import Delete from '../img/delete.png'
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import {AuthContext} from "../context/authContext";
const Single = () => {
    const [post, setPost] = useState({})
    const location = useLocation()
    const navigate = useNavigate()
    const postId = location.pathname.split("/")[2]
    const {currentUser} = useContext(AuthContext)
    useEffect(() => {
        const fetchData = async  () => {
            try{
                const res = await axios.get(`/posts/${postId}`)
                setPost(res.data)
            }catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [postId])

    const handleDelete = async () => {
        try{
            await axios.delete(`/posts/${postId}`)
            navigate('/')
        }catch (e) {
            console.log(e)
        }
    }

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return  doc.body.textContent
    }
    return (
        <div className="single">
            <div className="content">
                <img src={`../upload/${post?.img}`} alt=""/>
                <div className="user">
                    <img src={post.userImg} alt=""/>
                    <div className="info">
                        <span>{post.username}</span>
                        <p>{moment(post.date).fromNow()}</p>
                    </div>
                    { currentUser.username === post.username && <div className="edit">
                        <Link to={`/write?edit=${post.id}`} state={post}>
                            <img src={edit} alt=""/>
                        </Link>
                        <img onClick={handleDelete} src={Delete } alt=""/>
                    </div> }
                </div>
                <h1>{ getText(post.title) }</h1>
                {getText(post.desc)}
            </div>
            <div className="menu">
                <Menu post={post.cat}/>
            </div>
        </div>
    )
};

export default Single;