// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const DeletePost = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const handleDeletePost = () => {
        // e.preventDefault();

        axios
            .delete(`http://localhost:3333/posts/${id}`)
            .then(() => {
                navigate('/')
                alert('Successfully Deleted!')
            })
            .catch((error) => {
                alert("An error occured while deleting")
                console.log(error);
            })
    }

  return (
    <div>
        <div className="navbar">
            <Navbar />
        </div>
        <div className="box">
            <div className="dlt">
                Are you sure you want to delete this post?
            </div>
            <div className="btn">
                <button id='yesbtn' onClick={handleDeletePost}>Yes</button>
                <Link to={`/posts/details/${id}`}><button>No</button></Link>
            </div>
        </div>
    </div>
  )
}

export default DeletePost