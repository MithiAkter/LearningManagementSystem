import TeacherSidebar from './TeacherSidebar';
import QuizResult from './QuizResult';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
const baseUrl='http://localhost:8000/api';


function AttemptedStudents() {
    const [studentData,setstudentData]=useState([]);
    const{quiz_id}=useParams();


    
    //Fetch students when page load
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/attempted-quiz/'+quiz_id)
            .then((res)=>{
                setstudentData(res.data)
             });
        }catch(error){
            console.log(error);
        }

    },[]);

    //page title
    useEffect(()=>{
        document.title='Attempt User-list';
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
                                                        <th>Result</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                        {studentData.map((row,index) => 
                                                            <tr> 
                                                                <td style={{ textAlign: 'center'}}> 
                                                                    {row.student.full_name}
                                                                </td>
                                                                <td style={{ textAlign: 'center'}}>{row.student.email}</td>
                                                                <td style={{ textAlign: 'center'}}>{row.student.username}</td>
                                                                <td style={{ textAlign: 'center'}}>
                                                                    <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target={`#resultModal${row.id}`}>
                                                                    Quiz Result
                                                                    </button>

                                                                    <div className="modal fade" id={`resultModal${row.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                        <QuizResult quiz={row.quiz.id} student={row.student.id}/>
                                                                    </div>
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
    
export default AttemptedStudents;

