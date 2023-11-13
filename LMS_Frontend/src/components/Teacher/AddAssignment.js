import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Swal from 'sweetalert2';

const baseUrl='http://localhost:8000/api';

function AddAssignment(){
    const [assignmentData, setassignmentData]=useState({
        'title' : '',
        'detail' : ''
    });

    //Change Element Value
    const handleChange=(event)=>{
        setassignmentData({
            ...assignmentData,
            [event.target.name]:event.target.value
        });
    }
    
    const{teacher_id}=useParams();
    const{student_id}=useParams();
    
    //Submit Form Start
    const formSubmit=()=>{
        const _formData = new FormData();
        _formData.append('teacher',teacher_id);
        _formData.append('title',assignmentData.title);
        _formData.append('detail',assignmentData.detail);
        _formData.append('student',student_id);

        try{
            axios.post(baseUrl+'/student-assignment/'+teacher_id+'/'+student_id,_formData,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then((res)=>{
                if(res.status==200||res.status==201){
                    Swal.fire({
                        title: 'Assignment has been added!',
                        icon: 'success',
                        toast:true,
                        timer:5000,
                        position:'top-right',
                        timerProgressBar:true,
                        showConfirmButton:false
                    });
                    // setenrollStatus('success');
                    window.location.reload();
                }
            });

        }catch(error){
            console.log(error);
        }
    };
    //End

    //title
    useEffect(()=>{
        document.title='Add Assignment';
    });
    return(
       <div className="container mt-4">
            <div className="row">
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className="card">
                        <h5 className="card-header">Add Assignment</h5>
                        <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="title" className="form-label">Title</label>
                                        <input type="text" onChange={handleChange} name='title' id='title' className="form-control"/>
                                    </div>

                                    <div className="mb-3">
                                        <label for="detail" className="form-label">Detail</label>
                                        <textarea onChange={handleChange} name='detail' id='detail' className="form-control"></textarea>
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
export default AddAssignment;