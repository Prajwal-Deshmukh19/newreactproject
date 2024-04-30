import axios from "axios";

import { useFormik } from "formik";
import {  useState } from "react"
import { useNavigate } from "react-router-dom";

export function AddVideo(){
   const[videos,setVideos]=useState([]);
   let navigate = useNavigate();
   

   

   const formik = useFormik({
    initialValues: {
        VideoId:'',
        Title:'',
        Url:'',
        Likes:'',
        Comments:''

    },
    onSubmit: (user)=>{
       axios.post('http://127.0.0.1:5000/add-videos',user)
       alert("Added Successfully");
       navigate('/admindb')
    }
   })

    return(
        <div>
            <h3 className="fw-bold text-center p-4 text-success">Add New Videos.</h3>
            <form onSubmit={formik.handleSubmit} id="addvideos">
                <dl>
                    <dt>Video Id</dt>
                    <dd><input type="text" placeholder="VideoId" className="form-control" name="VideoId" onChange={formik.handleChange} /></dd>
                    <dt>Title</dt>
                    <dd><input type="text" placeholder="Title" className="form-control" name="Title" onChange={formik.handleChange} /></dd>
                    <dt>Video Url</dt>
                    <dd><input type="text" placeholder="Url" className="form-control" name="Url" onChange={formik.handleChange} /></dd>
                    <dt>Likes</dt>
                    <dd><input type="text" placeholder="Likes" className="form-control" name="Likes" onChange={formik.handleChange} /></dd>
                    <dt>Comments</dt>
                    <dd><input type="text" placeholder="Comments" className="form-control" name="Comments" onChange={formik.handleChange} /></dd>
                    <button  className="btn btn-success w-100">Add Videos</button>
                </dl>
            </form>
        </div>
    )
}