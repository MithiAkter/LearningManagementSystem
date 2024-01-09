
import {useEffect,useState} from 'react';
import './TeacherLogin.css';


import axios from 'axios';//we can send and receive the data from the server by using axios

const baseUrl='http://localhost:8000/api';

function TeacherLogin(){
    const [teacherLoginData,setteacherLoginData]=useState({
        email:'',
        password:''
    });
    const [errorMsg,seterrorMsg]=useState();

    const handleChange=(event)=>{
        setteacherLoginData({
            ...teacherLoginData,
            [event.target.name]:event.target.value
        });
    }
    const submitForm=()=>{
        
        const teacherFormData=new FormData;
        teacherFormData.append('email',teacherLoginData.email)
        teacherFormData.append('password',teacherLoginData.password)
        try{
            axios.post(baseUrl+'/teacher-login',teacherFormData)
            .then((res)=>{
                // Clear the form fields by resetting the state
                setteacherLoginData({ 'email': '', 'password': '' });
                if (res.data.bool==true){
                    localStorage.setItem('teacherLoginStatus',true);
                    localStorage.setItem('teacherId',res.data.teacher_id);
                    
                    window.location.href='/teacher-dashboard';
                }else{
                    seterrorMsg(res.data.message)
                }
            });
        }catch(error){
            console.log(error);
        }    
    }
    
    const teacherLoginStatus=localStorage.getItem('teacherLoginStatus');
    if(teacherLoginStatus=='true'){
        window.location.href='/teacher-dashboard';
    }
    useEffect(()=>{
        document.title='Teacher Login';
    });
    return(
       <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header">Teacher Login</h5>
                        <div className="card-body">
                            {errorMsg && <p className='text-danger' >{errorMsg}</p>}
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" value={teacherLoginData.email} name='email' onChange={handleChange} className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password"  value={teacherLoginData.password} name='password' onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
                            </div>
                            {/* <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label id="remember-me-label" className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                            </div> */}
                            <button type="button" onClick={submitForm} className="btn btn-primary">Login</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}
export default TeacherLogin;