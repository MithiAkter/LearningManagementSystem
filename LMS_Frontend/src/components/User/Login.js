import {useEffect,useState} from 'react';
import axios from 'axios';//we can send and receive the data from the server by using axios
const baseUrl='http://localhost:8000/api';



function Login(){


    const [studentLoginData,setstudentLoginData]=useState({
        email:'',
        password:''
    });

    const [errorMsg,seterrorMsg]=useState();

    const handleChange=(event)=>{
        setstudentLoginData({
            ...studentLoginData,
            [event.target.name]:event.target.value
        });
    }


    // Submit Form Starts
    const submitForm=()=>{
        const studentFormData=new FormData();
        studentFormData.append('email',studentLoginData.email)
        studentFormData.append('password',studentLoginData.password)
        try{
            axios.post(baseUrl+'/student-login',studentFormData)
            .then((res)=>{
                // Clear the form fields by resetting the state
                setstudentLoginData({ 'email': '', 'password': '' });
                if (res.data.bool===true){
                    localStorage.setItem('studentLoginStatus',true);
                    localStorage.setItem('studentId',res.data.student_id);
                    
                    window.location.href='/user-dashboard';
                }else{
                    seterrorMsg('Invalid Email or Password!')
                }
            });
        }catch(error){
            console.log(error);
        }    
    }
    // Submit Form Ends



    // Verifying Login Status
    const studentLoginStatus=localStorage.getItem('studentLoginStatus');
    if(studentLoginStatus==='true'){
        window.location.href='/user-dashboard';
    }

    
    // Page Title Starts
    useEffect(()=>{
        document.title='Student Login';
    });
    // Page Title Ends



    return(
       <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header">User Login</h5>
                        <div className="card-body">
                        {errorMsg && <p className='text-danger' >{errorMsg}</p>}
                        
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" value={studentLoginData.email} name='email' onChange={handleChange} className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={studentLoginData.password} name='password' onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
                            </div>
                            {/* <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                            </div> */}
                            <button type="button" onClick={submitForm} className="btn btn-primary">Login</button>
                         
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}
export default Login;