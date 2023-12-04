import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import {useParams} from "react-router-dom";
import {useEffect, useState} from 'react';
import axios from 'axios';
const baseUrl='http://localhost:8000/api';



function CourseQuizList() {
    const [quizData,setquizData]=useState([]);
    const{course_id}=useParams();
    
    //Fetch all courses when page load
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/fetch-assigned-quiz/'+course_id)
            .then((res)=>{
                console.log(res.data);
                setquizData(res.data);
             });
        }catch(error){
            console.log(error);
        }

    },[]);


    //page title
    useEffect(()=>{
        document.title='My Quiz List';
    })
    return (
            <div className="container mt-4">
                <div className="row">
                    <aside className='col-md-3'>
                        <Sidebar />
                    </aside>
                    <section className='col-md-9'>
                            <div className="card">
                            <h5 className="card-header">My Quiz List</h5>
                                    <div className="card-body">
                                            <table className='table table-bordered'>
                                                <thead>
                                                    <tr style={{ textAlign: 'center', fontSize: '18px', }}>
                                                        <th>Quiz</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {quizData.map((row,index)=> 
                                                    <tr  style={{ textAlign: 'center'}}>
                                                        {/* <td style={{fontSize: '17px', textDecoration: 'none', color: 'blue' }}>{row.quiz.title}</td> */}
                                                        <td>
                                                            {row.quiz.title}
                                                        </td>
                                                                                                                
                                                        <td>
                                                            <Link className='btn btn-warning btn-sm ms-2 text-white' 
                                                            to={`/take-quiz/`+row.quiz.id}>Take Quiz</Link>
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
    
export default CourseQuizList;

