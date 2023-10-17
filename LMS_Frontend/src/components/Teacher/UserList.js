import {Link} from 'react-router-dom';

import TeacherSidebar from './TeacherSidebar';
import {useEffect, useState} from 'react';
import axios from 'axios';
const baseUrl='http://localhost:8000/api';


function UserList() {
    const [StudentData,setStudentData]=useState([]);
    const teacherId=localStorage.getItem('teacherId');


    
    //Fetch students when page load
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/fetch-all-enrolled-students/'+teacherId)
            .then((res)=>{
                setStudentData(res.data)
             });
        }catch(error){
            console.log(error);
        }

    },[]);

    //page title
    useEffect(()=>{
        document.title='User-list';
    })


    return (
            <div className="container mt-4">
                <div className="row">
                    <aside className='col-md-3'>
                        <TeacherSidebar />
                    </aside>
                    <section className='col-md-9'>
                            <div className="card">
                            <h5 className="card-header">All Students List</h5>
                                    <div className="card-body">
                                            <table className='table table-bordered'>
                                                <thead>
                                                    <tr style={{ textAlign: 'center'}}>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>Username</th>
                                                        <th>Interested Categories</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                        {StudentData.map((row,student,index)=> 
                                                            <tr> 
                                                                <td style={{ textAlign: 'center'}}> 
                                                                    {row.student.full_name}
                                                                </td>
                                                                <td style={{ textAlign: 'center'}}>{row.student.email}</td>
                                                                <td style={{ textAlign: 'center'}}>{row.student.username}</td>
                                                                <td style={{ textAlign: 'center'}}>
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
    
export default UserList;

