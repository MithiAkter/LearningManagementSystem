import TeacherSidebar from './TeacherSidebar';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
const baseUrl='http://localhost:8000/api';


function TeacherChangePassword(){
    const [teacherData, setteacherData]=useState({
        'password' : ''

    });
    const teacherId=localStorage.getItem('teacherId');
     //Change Element Value
    const handleChange=(event)=>{
        setteacherData({
            ...teacherData,
            [event.target.name]:event.target.value
        });
    }
      //Submit Form Start
      const submitForm=()=> {
        const teacherFormData = new FormData();
        teacherFormData.append("password", teacherData.password)
 
        try{
            axios.post(baseUrl+'/teacher/change-password/'+teacherId+'/',teacherFormData).then((response)=>{
                if(response.status==200){
                    if(response.status==200){
                        Swal.fire({
                            title: 'Data has been updated',
                            icon: 'success',
                            toast:true,
                            timer:3000,
                            position:'top-right',
                            timerProgressBar:true,
                            showConfirmButton:false
                        });
                    }
                    // window.location.href='/teacher-logout';
                }else{
                    alert('Opps...Some error occured!!!');
                }
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
        document.title='Teacher Change Passoword';
    })
    return(
       <div className="container mt-4">
            <div className="row">
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                  
                        <div className="card">
                            <h5 className="card-header">Change Password</h5>
                            <div className="card-body">
                            
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-2 col-form-label">New Password</label>
                                <div className="col-sm-10">
                                <input type="text" name="password" value={teacherData.password} onChange={handleChange} className="form-control" id="inputPassword" required/>
                                </div>
                            </div>
                            <hr />
                            <button onClick={submitForm} className='btn btn-primary'>Update</button>
                            </div>
                        </div>
                </section>
            </div>
        </div>
    )
}
export default TeacherChangePassword;