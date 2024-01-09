import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl='http://localhost:8000/api';

function AllQuiz() {
    const [quizData,setquizData]=useState([]);
    const [totalResult,settotalResult]=useState([0]);
    const teacherId=localStorage.getItem('teacherId');
    

    //Fetch courses when page load
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/teacher-quiz/'+teacherId)
            .then((res)=>{
                setquizData(res.data)
             });
        }catch(error){
            console.log(error);
        }

    },[]);

    const handleDeleteClick=(quiz_id)=>{
        Swal.fire({
            title: 'Confirm!',
            text: 'Are you sure you want to delete this data?',
            icon: 'info',
            confirmButtonText: 'Continue',
            showCancelButton:true
          }).then((result)=>{
            if(result.isConfirmed){
                try{
                    axios.delete(baseUrl+'/quiz/'+quiz_id)
                    .then((res)=>{
                        Swal.fire('success','Data has been deleted.');
                            try{
                                axios.get(baseUrl+'/teacher-quiz/'+teacherId)
                                .then((res)=>{
                                    settotalResult(res.data.length)
                                    setquizData(res.data)
                                });
                            }catch(error){
                                console.log(error);
                            }
                     }); 
                }catch(error){
                    Swal.fire('error','Data has not been deleted!!');
                }
            }else{
                Swal.fire('error','Data has not been deleted!!');
            }
          });
    }

    //page title
    useEffect(()=>{
        document.title='All Quiz';
    })


    return (
            <div className="container mt-4">
                <div className="row">
                    <aside className='col-md-3'>
                        <TeacherSidebar />
                    </aside>
                    <section className='col-md-9'>
                            <div className="card">
                            <h5 className="card-header">All Quiz</h5>
                                    <div className="card-body">
                                            <table className='table table-bordered'>
                                                <thead>
                                                    <tr style={{ textAlign: 'center' }}>
                                                        <th>Name</th>
                                                        {/* <th>Total Questions</th> */}
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                        {quizData.map((row,index)=> 
                                                            <tr> 
                                                                <td style={{ textAlign: 'center'}}> 
                                                                    {/* <Link to={`/all-questions/`+row.id}>{row.title}</Link> */}
                                                                    {row.title}
                                                                </td>
                                                                {/* <td style={{ textAlign: 'center'}}><Link to="#">123</Link></td> */}
                                                                <td style={{ textAlign: 'center' }}>
                                                                    <Link className='btn btn-info btn-sm ' to={`/edit-quiz/`+row.id}>Edit</Link>
                                                                    <Link className='btn btn-success btn-sm ms-2' to={`/add-quiz-questions/`+row.id}>Add Questions</Link>
                                                                    <button onClick={()=>handleDeleteClick(row.id)} className='btn btn-danger btn-sm ms-2'>Delete</button>
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
    
export default AllQuiz;

