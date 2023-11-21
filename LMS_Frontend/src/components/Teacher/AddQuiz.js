
import TeacherSidebar from './TeacherSidebar';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
const baseUrl='http://localhost:8000/api';

function AddQuiz(){
    const [quizData, setquizData]=useState({
        'title' : '',
        'detail' : ''
    });

    //Change Element Value
    const handleChange=(event)=>{
        setquizData({
            ...quizData,
            [event.target.name]:event.target.value
        });
    }

    //Submit Form Start
    const formSubmit=()=>{
        const teacherId=localStorage.getItem('teacherId');
        const _formData = new FormData();
        _formData.append('teacher',teacherId);
        _formData.append('title',quizData.title);
        _formData.append('detail',quizData.detail);
        try{
            axios.post(baseUrl+'/quiz/',_formData,{
            })
        //     .then((res)=>{
        //         //console.log(res.data);
        //         window.location.href='/add-quiz';//for clearing data
        //      });
        // }catch(error){
        //     console.log(error);
        // }
        // Show SweetAlert for success
        Swal.fire({
            icon: 'success',
            title: 'Quiz Added Successfully!',
            showConfirmButton: false,
            timer: 5000,
        });

        // Clear the form data
        window.location.href='/add-quiz';

        } catch (error) {
        console.log(error);
        // Show SweetAlert for error
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        });
        }
    };
  // Submit Form End



    
    //page title
    useEffect(()=>{
        document.title='Add Quiz';
    })
    //page title ends


    //console.log(cats);
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
                                        <input type="text" onChange={handleChange} name='title' id="title" className="form-control"/>
                                    </div>

                                    <div className="mb-3">
                                        <label for="description" className="form-label">Detail</label>
                                        <textarea onChange={handleChange} name='detail' className="form-control" id="detail"></textarea>
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
export default AddQuiz;