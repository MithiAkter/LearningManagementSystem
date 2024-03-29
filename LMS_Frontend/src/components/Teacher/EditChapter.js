import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
const baseUrl='http://localhost:8000/api';


function EditChapter(){
    const [chapterData,setChapterData]=useState({
        'course':'',
        'title' : '',
        'description' : '',
        'prev_video' : '',
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


    const{chapter_id}=useParams();
    //Submit Form Start
    const formSubmit=()=>{
        const _formData =new FormData();
        _formData.append('course',chapterData.course.id);
        _formData.append('title',chapterData.title);
        _formData.append('description',chapterData.description);
        if(chapterData.video!==''){
            _formData.append('video',chapterData.video,chapterData.video.name);
        }
        // _formData.append('video',chapterData.video,chapterData.video.name);
        _formData.append('remarks',chapterData.remarks);
        try{
            axios.put(baseUrl + '/chapter/' + chapter_id, _formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }) 
            .then((res)=>{
                console.log("Response:", res);
                if(res.status==200){
                        Swal.fire({
                            title: 'Data has been updated',
                            icon: 'success',
                            toast:true,
                            timer:3000,
                            position:'top-right',
                            timerProgressBar:true,
                            showConfirmButton:false
                        });
                }
                //console.log(res.data);
             });
        }catch(error){
            console.log(error);
        }
    };
    //Fetch courses when page load
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/chapter/'+chapter_id)
            .then((res)=>{
                setChapterData({
                    course:res.data.course,
                    title:res.data.title,
                    description:res.data.description,
                    prev_video:res.data.video,
                    remarks:res.data.remarks,
                    video:''
                    
                });
             });
        }catch(error){
            console.log(error);
        }

    },[]);

    //Submit Form End

    //Page Title
    useEffect(()=>{
        document.title='Edit Chapter';
    })
    //Page Title Ends
    return (
        <div className="container mt-4">
        <div className="row">
            <aside className='col-md-3'>
                <TeacherSidebar />
            </aside>
            <section className='col-md-9'>
                <div className="card">
                    <h5 className="card-header">Update Chapter</h5>
                    <div className="card-body">
                            <form>
                                
                                <div className="mb-3">
                                    <label for="title" className="form-label">Title</label>
                                    <input type="text" value={chapterData.title} onChange={handleChange} name='title' id='title' className="form-control"/>
                                </div>

                                <div className="mb-3">
                                    <label for="description" className="form-label">Description</label>
                                    <textarea value={chapterData.description} onChange={handleChange} name='description' id='description' className="form-control"></textarea>
                                </div>

                                <div className="mb-3">
                                    <label for="video" className="form-label">Video</label>
                                    
                                    <input type="file" id='video' onChange={handleFileChange} name='video' className="form-control"/>
                                    {chapterData.prev_video &&
                                    <video controls width="100%" height="240" className='mt-2'>
                                        <source src={chapterData.prev_video} type="video/mp4" />
                                    </video>      
                                    }                                 
                                </div>

                                <div className="mb-3">
                                    <label for="techs" className="form-label">Remarks</label>
                                    <textarea onChange={handleChange} value={chapterData.remarks} name='remarks' className="form-control" placeholder='This video is focused on basic introduction' id="techs"></textarea>
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
    
export default EditChapter;


        
        