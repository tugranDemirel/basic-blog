import React, {useState} from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import moment from "moment";
const Write = () => {
    const state = useLocation().state
    const nagivate = useNavigate()
    const [value, setValue] = useState(state?.desc || '')
    const [title, setTitle] = useState(state?.title || '')
    const [file, setFile] = useState(null)
    const [cat, setCat] = useState(state?.cat || '')

    const upload = async () => {
        try{
            const formData = new FormData();
            formData.append('file', file)
            const res =  await axios.post('upload', formData)
            return res.data
        }catch (e) {
            console.log(e)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
       const imgUrl = await upload()
        try{
            state
                ? await axios.put(`/posts/${state.id}`, {
                    title,
                    desc: value,
                    cat,
                    img: file ? imgUrl : ""
                })
                : await axios.post(`/posts/`, {
                    title,
                    desc: value,
                    cat,
                    img: file ? imgUrl : "",
                    date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
                })
            return nagivate('/')
        }catch (e) {
            console.log(e)
        }
    }
    return (
        <div className="add">
            <div className="content">
                <input type="text" placeholder="title" value={title} onChange={e => setTitle(e.target.value)}/>
                <div className="editorContainer">
                    <ReactQuill className="editor" theme="snow" value={value} onChange={setValue}/>
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Yayın</h1>
                    <span>
                        <b>Status: </b> Draft
                        <b>Visibility: </b> Yayında
                    </span>
                    <input style={{display: 'none'}} type="file" name="" id="file" onChange={e => setFile(e.target.files[0])}/>
                    <label className="file" htmlFor="file">Görsel YÜkleyiniz</label>
                    <div className="buttons">
                        <button>Save as a draft</button>
                        <button onClick={handleSubmit}>Publish</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Kategori</h1>
                    <div className="cat">
                        <input type="radio" checked={cat === "art"} name="cat" value="art" id="art"/>
                        <label htmlFor="art">Art</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "technology"} name="cat" value="technology" id="technology" onChange={e => setCat(e.target.value)}/>
                        <label htmlFor="technology">Technology</label>
                        </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "science"} name="cat" value="science" id="science" onChange={e => setCat(e.target.value)}/>
                        <label htmlFor="science">Science</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "cinema"} name="cat" value="cinema" id="cinema" onChange={e => setCat(e.target.value)}/>
                        <label htmlFor="cinema">Cinema</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "design"} name="cat" value="design" id="design" onChange={e => setCat(e.target.value)}/>
                        <label htmlFor="art">Design</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "food"} name="cat" value="food" id="food" onChange={e => setCat(e.target.value)}/>
                        <label htmlFor="food">Food</label>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Write;