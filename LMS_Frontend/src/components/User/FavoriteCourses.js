import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import {useEffect, useState} from 'react';
import axios from 'axios';
const baseUrl='http://localhost:8000/api';



function FavoriteCourses() {
    const [courseData,setcourseData]=useState([]);
    const studentId=localStorage.getItem('studentId');
    
    //Fetch all courses when page load
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/fetch-favorite-courses/'+studentId)
            .then((res)=>{
                setcourseData(res.data)
             });
        }catch(error){
            console.log(error);
        }

    },[]);

    //page title
    useEffect(()=>{
        document.title='Favorite Courses';
    })
    return (
            <div className="container mt-4">
                <div className="row">
                    <aside className='col-md-3'>
                        <Sidebar />
                    </aside>
                    <section className='col-md-9'>
                            <div className="card">
                            <h5 className="card-header">Favorite Courses</h5>
                                    <div className="card-body">
                                            <table className='table table-bordered'>
                                                <thead>
                                                    <tr style={{ textAlign: 'center', fontSize: '18px', }}>
                                                        <th>Name</th>
                                                        <th>Created By</th>
                                                        {/* <th>Action</th> */}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {courseData.map((row,index)=> 
                                                    <tr style={{ textAlign: 'center'}}>
                                                        <td><Link  style={{fontSize: '17px', textDecoration: 'none', color: 'blue' }} to={`/detail/`+row.course.id}>{row.course.title}</Link></td>
                                                        <td><Link  style={{fontSize: '17px', textDecoration: 'none', color: 'blue' }} to={`/teacher-detail/`+row.course.teacher.id}>{row.course.teacher.full_name}</Link></td>
                                                        {/* <td>
                                                            <button className='btn btn-primary' style={{ width: '200px',  backgroundColor: 'rgb(31, 174, 91)', color: 'white',border: 'none' }}>Remove Enrollment</button>
                                                        </td> */}
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
    
export default FavoriteCourses;

