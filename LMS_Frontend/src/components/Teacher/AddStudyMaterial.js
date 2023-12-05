import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Swal from 'sweetalert2';

const baseUrl='http://localhost:8000/api';

function AddStudyMaterial(){
    const [studyData, setstudyData]=useState({
        'title' : '',
        'description' : '',
        'upload' : '',
        'remarks' : ''
    });

    //Change Element Value
    const handleChange=(event)=>{
        setstudyData({
            ...studyData,
            [event.target.name]:event.target.value
        });
    }
    const handleFileChange=(event)=>{
        window.URL = window.URL || window.webkitURL;
        var upload = document.createElement('upload');
        upload.src = URL.createObjectURL(event.target.files[0]);

        setstudyData({
            ...studyData,
            [event.target.name]:event.target.files[0]
        });
    }
    const{course_id}=useParams();
    //Submit Form Start
    const formSubmit=()=>{
        const _formData = new FormData();
        
        _formData.append('course',course_id);
        _formData.append('title',studyData.title);
        _formData.append('description',studyData.description);
        _formData.append('upload',studyData.upload,studyData.upload.name);
        _formData.append('remarks',studyData.remarks);
        try{
            axios.post(baseUrl+'/study-materials/'+course_id,_formData,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then((res)=>{
                if(res.status==200||res.status==201){
                    Swal.fire({
                        title: 'Study Material has been added',
                        icon: 'success',
                        toast:true,
                        timer:8000,
                        position:'top-right',
                        timerProgressBar:true,
                        showConfirmButton:false
                    });
                }
                //console.log(res.data);
                window.location.reload();
             });
        }catch(error){
            console.log(error);
        }
    };

    //title
    useEffect(()=>{
        document.title='Add Chapter';
    });

    
    return(
       <div className="container mt-4">
            <div className="row">
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className="card">
                        <h5 className="card-header">Add Study Material</h5>
                        <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="title" className="form-label">Title</label>
                                        <input type="text" onChange={handleChange} name='title' id='title' className="form-control"/>
                                    </div>

                                    <div className="mb-3">
                                        <label for="description" className="form-label">Description</label>
                                        <textarea onChange={handleChange} name='description' id='description' className="form-control"></textarea>
                                    </div>

                                    <div className="mb-3">
                                        <label for="upload" className="form-label">Upload</label>
                                        
                                        <input type="file" id='upload' onChange={handleFileChange} name='upload' className="form-control"/>
                                       
                                    </div>

                                    <div className="mb-3">
                                        <label for="remarks" className="form-label">Remarks</label>
                                        <textarea onChange={handleChange} name='remarks' className="form-control" id="remarks"></textarea>
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
export default AddStudyMaterial;