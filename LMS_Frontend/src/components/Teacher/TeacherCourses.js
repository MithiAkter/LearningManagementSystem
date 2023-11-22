import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import {useEffect, useState} from 'react';
import axios from 'axios';
const baseUrl='http://localhost:8000/api';

function MyCourses() {
    const [courseData,setCourseData]=useState([]);
    const teacherId=localStorage.getItem('teacherId');
    

    //Fetch courses when page load
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/teacher-courses/'+teacherId)
            .then((res)=>{
                setCourseData(res.data)
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
                            <h5 className="card-header">My Courses</h5>
                                    <div className="card-body">
                                            <table className='table table-bordered'>
                                                <thead>
                                                    <tr style={{ textAlign: 'center' }}>
                                                        <th>Name</th>
                                                        <th>Image</th>
                                                        <th>Total Enrolled</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                        {courseData.map((course,index)=> 
                                                            <tr> 
                                                                <td > 
                                                                    <Link to={`/all-chapters/`+course.id}>{course.title}</Link>
                                                                        <hr />
                                                                        {course.course_rating && 
                                                                            <span>Rating : {course.course_rating}/5</span>
                                                                        }
                                                                        {!course.course_rating && 
                                                                            <span>Rating : 0/5</span>
                                                                        }
                                                                    
                                                                </td>
                                                                    <td style={{ textAlign: 'center' }}>
                                                                        <img src={course.featured_img} width='80' className='rounded mt-3' alt={course.title} />
                                                                    </td>

                                                                <td style={{ textAlign: 'center'}}><Link to={`/enrolled-students/`+course.id}>{course.total_enrolled_students}</Link></td>
                                                                <td style={{ textAlign: 'center' }}>
                                                                    <Link className='btn btn-warning mt-3 text-white' to={`/edit-course/`+course.id}><i class="bi bi-pencil-square"></i></Link>
                                                                    <Link className='btn btn-success mt-3 ms-2' to={`/add-chapter/`+course.id}><i class="bi bi-folder-plus"></i></Link>
                                                                    {/* <button className='btn btn-danger btn-sm ms-2'>Delete</button> */}
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
    
export default MyCourses;

