import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
const baseUrl='http://localhost:8000/api';

function AddChapter(){
    const [chapterData, setChapterData]=useState({
        'title' : '',
        'description' : '',
        'video' : '',
        'remarks' : ''
    });

    //Change Element Value
    const handleChange=(event)=>{
        setChapterData({
            ...chapterData,
            [event.target.name]:event.target.value
        });
    }
    const handleFileChange=(event)=>{
        setChapterData({
            ...chapterData,
            [event.target.name]:event.target.files[0]
        });
    }
    const{course_id}=useParams();
    //Submit Form Start
    const formSubmit=()=>{
        const _formData = new FormData();
        
        _formData.append('course',course_id);
        _formData.append('title',chapterData.title);
        _formData.append('description',chapterData.description);
        _formData.append('video',chapterData.video,chapterData.video.name);
        _formData.append('remarks',chapterData.remarks);
        try{
            axios.post(baseUrl+'/chapter/',_formData,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then((res)=>{
                //console.log(res.data);
                window.location.href='/add-chapter/1';
             });
        }catch(error){
            console.log(error);
        }
    };
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
                        <h5 className="card-header">Add Chapter</h5>
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
                                        <label for="video" className="form-label">Video</label>
                                        
                                        <input type="file" id='video' onChange={handleFileChange} name='video' className="form-control"/>
                                       
                                    </div>

                                    <div className="mb-3">
                                        <label for="techs" className="form-label">Remarks</label>
                                        <textarea onChange={handleChange} name='remarks' className="form-control" placeholder='This video is focused on basic introduction' id="techs"></textarea>
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
export default AddChapter;