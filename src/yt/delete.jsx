// import axios from "axios";

// import { useEffect, useState } from "react"
// import { useNavigate, useParams } from "react-router-dom";

// export function DeleteVideo(){
 
//     const[videos,setVideos]=useState([]);
//     let navigate =useNavigate();
//     let params = useParams();

//     useEffect(()=>{
//         axios.delete(`127.0.0.1:5000/delete-video/${params.id}`)
//         .then(response =>{
//             setVideos(response.data);
//         })
//     })
     
//     function  handleDelete(){
//         axios.delete(`http://127.0.0.1:5000/delete-video/${params.id}`);
//         navigate("/admindb")
//     }



//     return(
//         <div>
//            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
//         </div>
//     )
// }