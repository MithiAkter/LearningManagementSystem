import {useEffect,useState} from 'react';
import axios from 'axios';//we can send and receive the data from the server by using axios
const baseUrl='http://localhost:8000/api/student/';

function Register(){
    const [studentData, setstudentData]=useState({
        'full_name' : '',
        'email' : '',
        'password' : '',
        'username' : '',
        'interested_categories' : '',
        'status' : ''
    });
     //Change Element Value
    const handleChange=(event)=>{
        setstudentData({
            ...studentData,
            [event.target.name]:event.target.value
        });
    }
    //Change Element Value End


    //Submit Form Start
    const submitForm=()=> {
        const studentFormData = new FormData();
        studentFormData.append("full_name", studentData.full_name)
        studentFormData.append("email", studentData.email)
        studentFormData.append("password", studentData.password)
        studentFormData.append("username", studentData.username)
        studentFormData.append("interested_categories", studentData.interested_categories)
        


        try{
            axios.post(baseUrl,studentFormData).then((response)=>{
                setstudentData({
                    'full_name' : '',
                    'email' : '',
                    'password' : '',
                    'username' : '',
                    'interested_categories' : '',
                    'status' : 'success'
                });
            });
        }catch(error){
            setstudentData({'status' : 'error'})
        }

    };

    //Submit Form End
    useEffect(()=>{
        document.title='Student Register';
    });
    // const studentLoginStatus=localStorage.getItem('studentLoginStatus')
    // if(studentLoginStatus=='true'){
    //     window.location.href='/student-dashboard';
    // }
    return(
       <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                {studentData.status=='success' && <p className='text-success'>Thanks for you registration</p> }
                {studentData.status=='error' && <p className='text-danger'>Something is wrong</p> }
                    <div className="card">
                        <h5 className="card-header">User Register</h5>
                        <div className="card-body">
                        
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Full Name</label>
                                <input value={studentData.full_name} type="text" name='full_name' onChange={handleChange} className="form-control"/>
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input value={studentData.email} type="email" name='email' onChange={handleChange} className="form-control"/>
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Username</label>
                                <input value={studentData.username} type="text" name='username' onChange={handleChange} className="form-control"/>
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input value={studentData.password} type="password" name='password' onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Interests in which course</label>
                                <textarea value={studentData.interested_categories}  onChange={handleChange} name='interested_categories' className="form-control"></textarea>
                                <div id="emailHelp" className="form-text">C, C++, Java, PHP, Python, JavaScripts, etc</div>
                            </div>
                            <button type="submit" onClick={submitForm} className="btn btn-primary">Register</button>
                     
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}
export default Register;