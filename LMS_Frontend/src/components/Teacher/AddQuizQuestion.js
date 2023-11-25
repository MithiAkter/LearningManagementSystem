import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Swal from 'sweetalert2';

const baseUrl='http://localhost:8000/api';

function AddQuizQuestion(){
    const [questionData, setquestionData]=useState({
        'quiz' : '',
        'questions' : '',
        'ans1' : '',
        'ans2' : '',
        'ans3' : '',
        'ans4' : '',
        'right_ans' : ''
    });

    //Change Element Value
    const handleChange=(event)=>{
        setquestionData({
            ...questionData,
            [event.target.name]:event.target.value
        });
    }

    const{quiz_id}=useParams();
    //Submit Form Start
    const formSubmit=()=>{
        const _formData = new FormData();
        _formData.append('quiz',quiz_id);
        _formData.append('questions',questionData.questions);
        _formData.append('ans1',questionData.ans1);
        _formData.append('ans2',questionData.ans2);
        _formData.append('ans3',questionData.ans3);
        _formData.append('ans4',questionData.ans4);
        _formData.append('right_ans',questionData.right_ans);
        try{
            axios.post(baseUrl+'/quiz-questions/'+quiz_id,_formData,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then((res)=>{
                if(res.status==200||res.status==201){
                    Swal.fire({
                        title: 'Question has been added',
                        icon: 'success',
                        toast:true,
                        timer:3000,
                        position:'top-right',
                        timerProgressBar:true,
                        showConfirmButton:false
                    });
                }
                //console.log(res.data);
                // window.location.reload();
             });
        }catch(error){
            console.log(error);
        }
    };

    //title
    useEffect(()=>{
        document.title='Add Quiz';
    });


    return(
       <div className="container mt-4">
            <div className="row">
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className="card">
                        <h5 className="card-header">Add Quiz</h5>
                        <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="title" className="form-label">Title</label>
                                        <input type="text" onChange={handleChange} name='title' id='title' className="form-control"/>
                                    </div>

                                    <div className="mb-3">
                                        <label for="title" className="form-label">Ans 1</label>
                                        <input type="text" onChange={handleChange} name='ans1' id='ans1' className="form-control"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="title" className="form-label">Ans 2</label>
                                        <input type="text" onChange={handleChange} name='ans2' id='ans2' className="form-control"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="title" className="form-label">Ans 3</label>
                                        <input type="text" onChange={handleChange} name='ans3' id='ans3' className="form-control"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="title" className="form-label">Ans 4</label>
                                        <input type="text" onChange={handleChange} name='ans4' id='ans4' className="form-control"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="title" className="form-label">Right Answer</label>
                                        <input type="text" onChange={handleChange} name='right_ans' id='right_ans' className="form-control"/>
                                    </div>

                                    <button type="button" onClick={formSubmit} className='btn btn-primary'>Submit</button>
                                </form>
                            
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default AddQuizQuestion;