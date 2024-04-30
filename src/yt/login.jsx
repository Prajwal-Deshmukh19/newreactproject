import axios from 'axios';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import './yt.css';

export function UserLogin(){
   const [users,setUsers] = useState([]);
   const [cookies,setcookie,removecookie]= useCookies('userid');
   let navigate = useNavigate();

   useEffect(()=>{
    axios.get('http://127.0.0.1:5000/users')
    .then(response =>{
       setUsers(response.data);
    })
   },[]);

    const formik = useFormik({
        initialValues:{
            UserId:'',
            Password:''
        },
        onSubmit:(formData) =>{
            var userdetails = users.find(user => user.UserId=== formData.UserId);
            if(userdetails.Password === formData.Password){
                setcookie('userid',formData.UserId);
                navigate('/dashboard');
            }else{

            }
        }
    })


    return(
        <div>
            <h2 className="text-center fw-bold" id="userlogin">User Login</h2>
         <div className='userbox'>
                 <form onSubmit={formik.handleSubmit}>
                 <dl>
                    <dt>UserId</dt>
                    <dd> <input type="text" placeholder='UserId' name='UserId' className='form-control' onChange={formik.handleChange} /> </dd>
                    <dt>Password</dt>
                    <dd> <input type="text" name="Password" placeholder='Password' className='form-control' onChange={formik.handleChange} /> </dd>
                    <button className="btn btn-primary text-center w-100">Login</button>
                   </dl>
                   
                 </form>
        </div>
        </div>
    )
}