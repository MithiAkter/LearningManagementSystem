import {Link} from 'react-router-dom';
import {useEffect,useState} from 'react';
import axios from 'axios';//we can send and receive the data from the server by using axios

function TeacherRegister(){
    const [teacherData, setTeacherData]=useState({
        'full_name' : '',
        'email' : '',
        'password' : '',
        'qualification' : '',
        'mobile_no' : '',
        'skills' : '',
        'status' : ''
    });
    //Change Element Value
    const handleChange=(event)=>{
        console.log(event.target.name,event.target.value)
    }
    //Change Element Value End
    return(
       <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header">Teacher Register</h5>
                        <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                                <input onChange={handleChange}  name="full_name"  type="text" className="form-control"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input onChange={handleChange}  name="email" type="email" className="form-control"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input onChange={handleChange}  name="password" type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Qualification</label>
                                <input onChange={handleChange}  name="qualification" type="text" className="form-control"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Mobile Number</label>
                                <input onChange={handleChange}  name="mobile_no" type="number" className="form-control"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Skills</label>
                                <textarea onChange={handleChange}  name="skills" className="form-control"></textarea>
                                <div id="emailHelp" className="form-text">C, C++, Java, PHP, Python, JavaScripts, etc</div>
                            </div>

                            <button type="submit" className="btn btn-primary">Register</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}
export default TeacherRegister;