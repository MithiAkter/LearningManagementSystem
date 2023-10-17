import Sidebar from './Sidebar';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
const baseUrl='http://localhost:8000/api';


function ProfileSetting(){
    const [studentData, setstudentData]=useState({
        'full_name' : '',
        'email' : '',
        'username' : '',
        'interested_categories' : '',
        'profile_img' : '',
        'p_img' : ''
    });
    const studentId=localStorage.getItem('studentId');
    //Fetch categories when page load
    useEffect(()=>{
        //fetch current teacher data
        try{
            axios.get(baseUrl+'/student/'+studentId)
            .then((res)=>{
                setstudentData({
                    full_name:res.data.full_name,
                    email:res.data.email,
                    username:res.data.username,
                    interested_categories:res.data.interested_categories,
                    profile_img:res.data.profile_img,
                    p_img:'',
                    
                });
             });
        }catch(error){
            console.log(error);
        }
    },[]);
    //End

     //Change Element Value
     const handleChange=(event)=>{
        setstudentData({
            ...studentData,
            [event.target.name]:event.target.value
        });
    }
    const handleFileChange=(event)=>{
        setstudentData({
            ...studentData,
            [event.target.name]:event.target.files[0]
        });
    }
    //Change Element Value End


    //Submit Form Start
    const submitForm=()=> {
        const studentFormData = new FormData();
        studentFormData.append("full_name", studentData.full_name)
        studentFormData.append("email", studentData.email)
        studentFormData.append("username", studentData.username)
        studentFormData.append("interested_categories", studentData.interested_categories)

        if(studentData.p_img!==''){
            studentFormData.append('profile_img',studentData.p_img,studentData.p_img.name);
        }

        try{
            axios.put(baseUrl+'/student/'+studentId+'/',studentFormData,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }).then((response)=>{
                if(response.status===200){
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
        document.title='My Profile Settings';
    })

    return(
       <div className="container mt-4">
            <div className="row">
                <aside className='col-md-3'>
                    <Sidebar />
                </aside>
                <section className='col-md-9'>
                    <div className="card">
                        <h5 className="card-header">Profile Setting</h5>
                        <div className="card-body">
                        <div className="mb-3 row">
                            <label for="staticEmail" className="col-sm-2 col-form-label">Full Name</label>
                            <div className="col-sm-10">
                            <input type="text" name="full_name" value={studentData.full_name} onChange={handleChange} className="form-control"id="staticEmail"/>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                            <input type="email" name="email" value={studentData.email} onChange={handleChange}  className="form-control"id="staticEmail"/>
                            </div>
                        </div>

                        <div className="mb-3 row" >
                            <label for="image" className="col-sm-2 col-form-label">Profile  Photo</label>
                            <div className="col-sm-10">
                                <input type="file" onChange={handleFileChange} name='p_img' id="image" className="form-control"/>
                                {studentData.profile_img &&
                                    <p className='mt-3'><img src={studentData.profile_img} alt={studentData.full_name} width="200"/></p>   
                                } 
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                            <input type="text" name="username" value={studentData.username} onChange={handleChange}  className="form-control"id="staticUsername"/>
                            
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label for="staticEmail" className="col-sm-2 col-form-label">Interested Categories</label>
                            <div className="col-sm-10">
                            <textarea  name="interested_categories" value={studentData.interested_categories} onChange={handleChange} className="form-control"></textarea>
                            <div id="emailHelp" className="form-text">Php, Python, JavaScript,Reactjs</div>
                            </div>
                        </div>
                            <hr />
                            <button  className='btn btn-primary' onClick={submitForm} >Update</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default ProfileSetting;