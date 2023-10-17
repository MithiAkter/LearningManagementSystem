import Sidebar from './Sidebar';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
const baseUrl='http://localhost:8000/api';


function ChangePassword(){
    const [studentData, setstudentData]=useState({
        'password' : ''

    });
    const studentId=localStorage.getItem('studentId');
     //Change Element Value
    const handleChange=(event)=>{
        setstudentData({
            ...studentData,
            [event.target.name]:event.target.value
        });
    }
      //Submit Form Start
      const submitForm=()=> {
        const studentFormData = new FormData();
        studentFormData.append("password", studentData.password)
 
        try{
            axios.post(baseUrl+'/student/change-password/'+studentId+'/',studentFormData).then((response)=>{
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
                    // window.location.href='/user-logout';
                }else{
                    alert('Opps...Some error occured!!!');
                }
            });
        }catch(error){
            setstudentData({'status' : 'error'})
        }

    };
    //Submit Form End

    const studentLoginStatus=localStorage.getItem('studentLoginStatus')
    if(studentLoginStatus!='true'){
        window.location.href='/user-login';
    }


    //Page Title
    useEffect(()=>{
        document.title='Student Change Passoword';
    })
    return(
       <div className="container mt-4">
            <div className="row">
                <aside className='col-md-3'>
                    <Sidebar />
                </aside>
                <section className='col-md-9'>
                  
                        <div className="card">
                            <h5 className="card-header">Change Password</h5>
                            <div className="card-body">
                            
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-2 col-form-label">New Password</label>
                                <div className="col-sm-10">
                                <input type="text" name="password" value={studentData.password} onChange={handleChange} className="form-control" id="inputPassword" required/>
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
export default ChangePassword;