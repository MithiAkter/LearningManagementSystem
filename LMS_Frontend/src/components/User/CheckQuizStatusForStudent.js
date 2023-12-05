import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

const baseUrl='http://localhost:8000/api';

function CheckQuizStatusForStudent(props) {
    const [quizData,setquizData]=useState([]);
    const studentId=localStorage.getItem('studentId');
    

    //Fetch courses when page load
    useEffect(()=>{
        try{
            axios.get(`${baseUrl}/fetch-quiz-attempt-status/${props.quiz}/${props.student}`)
            .then((res)=>{
                setquizData(res.data);
             });
        }catch(error){
            console.log(error);
        }
    },[]);


    return (
        // <td><Link className='btn btn-warning btn-sm ms-2 text-white'
        // to={`/take-quiz/`+row.quiz.id}>Take Quiz</Link></td>
        <td style={{ textAlign: 'center'}}> 
            {quizData.bool==true &&
             <span className='text-success'>Attempted</span>
            }
            {quizData.bool==false &&
             <Link to={`/take-quiz/${props.quiz}`} className='btn btn-success btn-sm ms-2'>Take Quiz</Link>
            }
            
        </td>
        )
    }
    
export default CheckQuizStatusForStudent;

