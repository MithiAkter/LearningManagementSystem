import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
const baseUrl='http://localhost:8000/api';


function TeacherProfileSetting(){
    const [teacherData, setteacherData]=useState({
        'full_name' : '',
        'email' : '',
        'password' : '',
        'qualification' : '',
        'mobile_no' : '',
        'skills' : '',
        'status' : ''
    });
    const teacherId=localStorage.getItem('teacherId');

     //Change Element Value
     const handleChange=(event)=>{
        setteacherData({
            ...teacherData,
            [event.target.name]:event.target.value
        });
    }
    //Change Element Value End


    //Submit Form Start
    const submitForm=()=> {
        const teacherFormData = new FormData();
        teacherFormData.append("full_name", teacherData.full_name)
        teacherFormData.append("email", teacherData.email)
        teacherFormData.append("password", teacherData.password)
        teacherFormData.append("qualification", teacherData.qualification)
        teacherFormData.append("mobile_no", teacherData.mobile_no)
        teacherFormData.append("skills", teacherData.skills)


        try{
            axios.post(baseUrl,teacherFormData).then((response)=>{
                setteacherData({
                    'full_name' : '',
                    'email' : '',
                    'password' : '',
                    'qualification' : '',
                    'mobile_no' : '',
                    'skills' : '',
                    'status' : 'success'
                });
            });
        }catch(error){
            setteacherData({'status' : 'error'})
        }

    };
    //Submit Form End

    const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
    if(teacherLoginStatus!='true'){
        window.location.href='/teacher-login';
    }


    //Page Title
    useEffect(()=>{
        document.title='Profile Settings';
    })
    return(
       <div className="container mt-4">
            <div className="row">
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className="card">
                        <h5 className="card-header">Profile Setting</h5>
                        <div className="card-body">
                        <div className="mb-3 row">
                            <label for="staticEmail" className="col-sm-2 col-form-label">Full Name</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control"id="staticEmail"/>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control"id="staticEmail"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-2 col-form-label">Profile Photo</label>
                            <div className="col-sm-10">
                            <input type="file" className="form-control" id="inputPassword"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-2 col-form-label">Skills</label>
                            <div className="col-sm-10">
                            <textarea className="form-control"></textarea>
                            <div id="emailHelp" className="form-text">C, C++, Java, PHP, Python, JavaScripts, etc</div>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-2 col-form-label">Qualification</label>
                            <div className="col-sm-10">
                            <textarea className="form-control"></textarea>
                            <div id="emailHelp" className="form-text">B.Sc | M.Sc</div>
                            </div>
                        </div>
                            <hr />
                            <button className='btn btn-primary'>Update</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default TeacherProfileSetting;