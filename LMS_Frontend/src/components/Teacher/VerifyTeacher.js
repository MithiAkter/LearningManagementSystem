
import {useEffect,useState} from 'react';
import './TeacherLogin.css';


import axios from 'axios';//we can send and receive the data from the server by using axios

const baseUrl='http://localhost:8000/api';

function VerifyTeacher(){
    const [teacherData,setteacherData]=useState({
        otp_digit:'',
    });
    const [errorMsg,seterrorMsg]=useState();

    const handleChange=(event)=>{
        setteacherData({
            ...teacherData,
            [event.target.name]:event.target.value
        });
    }
    const submitForm=()=>{
        
        const teacherFormData=new FormData;
        try{
            axios.post(baseUrl+'/verify-teacher',teacherFormData)
            .then((res)=>{
                if (res.data.bool===true){
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
        document.title='Verify Teacher';
    });
    return(
       <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header">Enter 6 Digit OTP</h5>
                        <div className="card-body">
                            {errorMsg && <p className='text-danger' >{errorMsg}</p>}
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">OTP</label>
                                <input type="number" value={teacherData.otp_digit} name='otp_digit' onChange={handleChange} className="form-control"/>
                            </div>
                            <button type="button" onClick={submitForm} className="btn btn-primary">Verify</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}
export default VerifyTeacher;