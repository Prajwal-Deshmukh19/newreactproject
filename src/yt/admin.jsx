import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function AdminLogin() {
 
 const[users,setUsers]=useState([]);
    const[cookies,setcookie,removecookie]=useCookies('userid');
    let navigate = useNavigate();
     

    useEffect(()=>{
        axios.get("http://127.0.0.1:5000/users")
        .then(response =>{
            setUsers(response.data)
        });
    },[]);

    const formik = useFormik({
        initialValues: {
            UserId:'',
            Password:''
        },
        onSubmit :(formData)=>{
          var userdetails =users.find(user=> user.UserId===formData.UserId);
          if(userdetails.Password===formData.Password){
            setcookie('userid', formData.UserId);
            navigate('/admindb');
          }else{

          }
        }
    })



    return (
        <div>
            <div className="text-center fw-bold" id="admin"> Admin Login</div>
           <div id="admbox">
          <form action="" onSubmit={formik.handleSubmit}>
          <dl>
                <dt>UserId</dt>
                <dd><input type="text" placeholder="UserId" name="UserId" className="form-control" onChange={formik.handleChange} /></dd>
                <dt>Password</dt>
                <dd><input type="password" placeholder="Password" name="Password" className="form-control" onChange={formik.handleChange} /></dd>
                <button className="btn btn-danger w-100">Admin Login</button>
            </dl>
          </form>
           </div>
        </div>
    )
}