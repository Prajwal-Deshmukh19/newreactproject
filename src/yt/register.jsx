import axios from "axios"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"

export function RegisterUser() {
 let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      FullName: '',
      UserId: '',
      Password: '',
      Email: '',
      Mobile: ''
    },
    onSubmit: async(user) => {
     await axios.post('http://127.0.0.1:5000/user-reg', user)
      alert('Registered Successfully');
      navigate('/login');
      console.log("Registered");
    }
  })



  return (
    <div>
      <div id="reg" className="text-center fw-bold">Register</div>
      <div id="regbox">
        <form onSubmit={formik.handleSubmit}>
          <dl>
            <dt>FullName</dt>
            <dd><input type="text" placeholder="FullName" className="form-control" name="FullName" onChange={formik.handleChange} /></dd>
            <dt>UserId</dt>
            <dd><input type="text" placeholder="UserId" className="form-control" name="UserId" onChange={formik.handleChange} /></dd>
            <dt>Password</dt>
            <dd><input type="password" placeholder="Password" className="form-control" name="Password" onChange={formik.handleChange} /></dd>
            <dt>Email</dt>
            <dd><input type="text" placeholder="Email" className="form-control" name="Email" onChange={formik.handleChange} /></dd>
            <dt>Mobile</dt>
            <dd><input type="text" placeholder="Mobile" className="form-control" name="Mobile" onChange={formik.handleChange} /></dd>
            <button className="btn btn-success w-100">Register</button>
          </dl>
        </form>
      </div>
    </div>
  )
}