import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import {useEffect, useState} from 'react';
import axios from 'axios';
const baseUrl='http://localhost:8000/api';

function AddCourse(){
    const [cats,setCats]=useState([]);
    const [courseData, setCourseData]=useState({
        'category' : '',
        'title' : '',
        'description' : '',
        'f_img' : '',
        'techs' : ''
    });

    //Fetch categories when page load
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/category')
            .then((res)=>{
                setCats(res.data)
             });
        }catch(error){
            console.log(error);
        }

    },[]);
    //Change Element Value
    const handleChange=(event)=>{
        setCourseData({
            ...courseData,
            [event.target.name]:event.target.value
        });
    }
    const handleFileChange=(event)=>{
        setCourseData({
            ...courseData,
            [event.target.name]:event.target.files[0]
        });
    }

    //Submit Form Start
    const formSubmit=()=> {
        const _formData = new FormData();
        _formData.append('category', courseData.category);
        _formData.append('teacher', 1);
        _formData.append('title', courseData.title);
        _formData.append('description', courseData.description);
        _formData.append('featured_img', courseData.f_img, courseData.f_img.name);
        _formData.append('techs', courseData.techs);

        try{
            axios.post(baseUrl+'/course/',_formData,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then((res)=>{
                console.log(res.data);
             });
        }catch(error){
            console.log(error);
        }
    };
        
    //console.log(cats);
    return(
       <div className="container mt-4">
            <div className="row">
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className="card">
                        <h5 className="card-header">Add Courses</h5>
                        <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="category" className="form-label">Category</label>
                                            <select name="category" onChange={handleChange} className="form-control" >
                                                {cats.map((category,index)=>{return <option key={index} value={category.id} >{category.title}</option>})}
                                            </select>
                                    </div>

                                    <div className="mb-3">
                                        <label for="title" className="form-label">Title</label>
                                        <input type="text" onChange={handleChange} name='title' id="title" className="form-control"/>
                                    </div>

                                    <div className="mb-3">
                                        <label for="description" className="form-label">Description</label>
                                        <textarea onChange={handleChange} name='description' className="form-control" id="description"></textarea>
                                    </div>

                                    <div className="mb-3">
                                        <label for="video" className="form-label">Featured Image</label>
                                        
                                        <input type="file" onChange={handleFileChange} name='f_img' id="video" className="form-control"/>
                                       
                                    </div>

                                    <div className="mb-3">
                                        <label for="techs" className="form-label">Technologies</label>
                                        <textarea onChange={handleChange} name='techs' className="form-control" placeholder='HTML, CSS, Php, python, JavaScript' id="techs"></textarea>
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
export default AddCourse;