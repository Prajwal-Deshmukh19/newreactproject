import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export function EditVideos(){
  const[videos,setVideos]=useState([{VideoId:0, Title:'', Url:'', Likes:0, Comments:0}]);
  let navigate=useNavigate();
  let params = useParams();

  const formik = useFormik({
    initialValues: {
        Title:videos[0].Title,
        Url:videos[0].Url,
        Likes:videos[0].Likes,
        Comments:videos[0].Comments
    },
    enableReinitialize:true,
    onSubmit :async (values)=>{
        try{
           await axios.put(`http://127.0.0.1:5000/edit-video/${params.id}`,values);
            navigate("/admindb")
        }catch(err){
            console.log("err white update data: ", err)
        }
        
    }
  })

    return(
        <div>
            <h2 className="fw-bold text-center text-info">Edit Video.</h2>
            <form onSubmit={formik.handleSubmit} id="addvideos">
                <dl>
                    <dt>VideoId</dt>
                    <dd><input type="text" placeholder="VideoId" className="form-control" name="VideoId" value={params.id} onChange={formik.handleChange} /></dd>
                    <dt>Title</dt>
                    <dd><input type="text" placeholder="Tile" className="form-control" name="Title" onChange={formik.handleChange} /></dd>
                    <dt>Video Url</dt>
                    <dd><input type="text" placeholder="Video Url" className="form-control" name="Url"  onChange={formik.handleChange} /></dd>
                    <dt>Likes</dt>
                    <dd><input type="text" placeholder="Likes" className="form-control" name="Likes"  onChange={formik.handleChange} /></dd>
                    <dt>Comments</dt>
                    <dd><input type="text" placeholder="Comments" className="form-control" name="Comments"  onChange={formik.handleChange} /></dd>
                </dl>
                <button className="btn btn-info w-100">Save</button>
            </form>
        </div>
    )
}