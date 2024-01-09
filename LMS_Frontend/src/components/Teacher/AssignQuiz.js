import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import CheckQuizinCourse from './CheckQuizinCourse';
import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
// import Swal from 'sweetalert2';


const baseUrl='http://localhost:8000/api';

function AssignQuiz() {
    const [quizData,setquizData]=useState([]);
    const [courseData,setcourseData]=useState([]);
    const teacherId=localStorage.getItem('teacherId');
    const{course_id}=useParams();
    

    //Fetch courses when page load
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/teacher-quiz/'+teacherId)
            .then((res)=>{
                setquizData(res.data);
             });
        }catch(error){
            console.log(error);
        }
        //fetch courses
        try{
            axios.get(baseUrl+'/course/'+course_id)
            .then((res)=>{
                // console.log(res.data);
                setcourseData(res.data);
                });
            }catch(error){
            console.log(error);
        }
    },[]);

    //page title
    useEffect(()=>{
        document.title='Assign Quiz';
    })


    return (
            <div className="container mt-4">
                <div className="row">
                    <aside className='col-md-3'>
                        <TeacherSidebar />
                    </aside>
                    <section className='col-md-9'>
                            <div className="card">
                            <h5 className="card-header">Assign Quiz to <span className='text-success'>[{courseData.title}]</span> </h5>
                                    <div className="card-body">
                                            <table className='table table-bordered'>
                                                <thead>
                                                    <tr style={{ textAlign: 'center' }}>
                                                        <th>Name</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                        {quizData.map((row,index)=> 
                                                            <tr> 
                                                                <td style={{ textAlign: 'center'}}> 
                                                                    <Link to={`/all-questions/`+row.id}>{row.title}</Link>
                                                                </td>
                                                                <CheckQuizinCourse quiz={row.id} course={course_id}/>

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
    
export default AssignQuiz;

