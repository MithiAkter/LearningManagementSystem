import {Link} from 'react-router-dom';
import {useParams} from "react-router-dom";
import TeacherSidebar from './TeacherSidebar';
import {useEffect, useState} from 'react';
import axios from 'axios';
const baseUrl='http://localhost:8000/api';

function EnrolledStudents() {
    const [StudentData,setStudentData]=useState([]);
    let {course_id} = useParams();
    

    //Fetch courses when page load
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/fetch-enrolled-students/'+course_id)
            .then((res)=>{
                setStudentData(res.data)
             });
        }catch(error){
            console.log(error);
        }

    },[]);

    //page title
    useEffect(()=>{
        document.title='My Courses';
    })


    return (
            <div className="container mt-4">
                <div className="row">
                    <aside className='col-md-3'>
                        <TeacherSidebar />
                    </aside>
                    <section className='col-md-9'>
                            <div className="card">
                            <h5 className="card-header">Enrolled Students List</h5>
                                    <div className="card-body">
                                            <table className='table table-bordered'>
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>Username</th>
                                                        <th>Interested Categories</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                        {StudentData.map((row,student,index)=> 
                                                            <tr> 
                                                                <td> 
                                                                    {row.student.full_name}
                                                                </td>
                                                                <td>{row.student.email}</td>
                                                                <td>{row.student.username}</td>
                                                                <td>
                                                                    {row.student.interested_categories}
                                                                </td>
                                                            </tr>
                                                        )}
                                                </tbody>
                                            </table>
                                    </div>
                            </div>
                    </section>
                </div>
        </div>
        )
    }
    
export default EnrolledStudents;

