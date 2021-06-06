import React, {useState } from 'react';
import Axios from 'axios';
import '../../App.css';

function CreatePost() {

    const [username, setUsername] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [description, setDescription] = useState("");

    const submitPost = () => {
        Axios.post('http://localhost:2500/api/create', {username: username, 
        title: title, 
        description: description, 
        text: text,
    });
    }

    return (
    <div className="container">
  <form>
    <label for="username">Username</label>
    <input onChange={(e) => {
        setUsername(e.target.value)
    }} type="text" id="fname" name="firstname" placeholder="Your username.."/>

    <label for="title">Title </label>
    <input  onChange={(e) => {
        setTitle(e.target.value)}} type="text" id="lname" name="lastname" placeholder="Your title here.."/>
         <label for="title">Description </label>
    <input  onChange={(e) => {
        setDescription(e.target.value)}} type="text" id="lname" name="lastname" placeholder="Your title here.."/>
    <label for="text">Post here</label>
    <textarea  onChange={(e) => {
        setText(e.target.value)}} id="subject" name="subject" placeholder="Write something.." style={{height: "200px"}}></textarea>
    <input type="submit" onClick={submitPost} value="Submit"/>
  </form>
</div>

    );
}

export default CreatePost;