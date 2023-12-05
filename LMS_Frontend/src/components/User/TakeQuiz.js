import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
const baseUrl='http://localhost:8000/api';



function TakeQuiz() {
    const [questionData,setquestionData]=useState([]);
    const{quiz_id}=useParams();
    const studentId=localStorage.getItem('studentId');
    
    //Fetch all quiz when page load
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/quiz-questions/'+quiz_id+'/1')
            .then((res)=>{
                setquestionData(res.data)
             });
        }catch(error){
            console.log(error);
        }

    },[]);
    const submitAnswer =(question_id,right_ans)=>{
        const _formData = new FormData();
        _formData.append('student',studentId);
        _formData.append('quiz',quiz_id);
        _formData.append('question',question_id);
        _formData.append('right_ans',right_ans);
        try{
            axios.post(baseUrl+'/attempt-quiz/',_formData,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then((res)=>{
                if(res.status==200||res.status==201){
                    try{
                        axios.get(baseUrl+'/quiz-questions/'+quiz_id+'/next-question/'+question_id)
                        .then((res)=>{
                            setquestionData(res.data)
                         });
                    }catch(error){
                        console.log(error);
                    }
                }
                //console.log(res.data);
                // window.location.reload();
             });
        }catch(error){
            console.log(error);
        }
    }



    //page title
    useEffect(()=>{
        document.title='Take Quiz';
    })
    return (
            <div className="container mt-4">
                <div className="row">
                    <aside className='col-md-3'>
                        <Sidebar />
                    </aside>
                    <section className='col-md-9'>
                        <h4 className='mb-3 border-bottom pb-1'>Quiz Title</h4>
                            {questionData.map((row,index)=>
                                <div className="card">
                                <h5 className="card-header">{row.questions}</h5>
                                        <div className="card-body">
                                                <table className='table table-bordered'>
                                                    
                                                    <tbody>
                                                        
                                                            <>
                                                                <tr style={{ textAlign: 'center'}}>
                                                                    <td><button onClick={()=>submitAnswer(row.id,row.ans1)} 
                                                                    className='btn btn-outline-secondary btn-sm' style={{width: '10%'}}>{row.ans1}</button></td>
                                                                </tr>

                                                                <tr style={{ textAlign: 'center'}}>
                                                                    <td><button onClick={()=>submitAnswer(row.id,row.ans2)} 
                                                                    className='btn btn-outline-secondary btn-sm' style={{width: '10%'}}>{row.ans2}</button></td>
                                                                </tr>

                                                                <tr style={{ textAlign: 'center'}}>
                                                                    <td><button onClick={()=>submitAnswer(row.id,row.ans3)} 
                                                                    className='btn btn-outline-secondary btn-sm' style={{width: '10%'}}>{row.ans3}</button></td>
                                                                </tr>

                                                                <tr style={{ textAlign: 'center'}}>
                                                                    <td><button onClick={()=>submitAnswer(row.id,row.ans4)} 
                                                                    className='btn btn-outline-secondary btn-sm' style={{width: '10%'}}>{row.ans4}</button></td>
                                                                </tr>
                                                            </>
                                                        
                                                    </tbody>
                                                </table>
                                                
                                                
                                        </div>
                                </div>
                            )}
                    </section>
                </div>
        </div>
        )
    }
    
export default TakeQuiz;

