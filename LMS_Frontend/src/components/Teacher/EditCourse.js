import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
const baseUrl='http://localhost:8000/api';


function EditCourse(){
    const [cats,setCats]=useState([]);
    const [courseData, setCourseData]=useState({
        'category' : '',
        'title' : '',
        'description' : '',
        'prev_img' : '',
        'f_img' : '',
        'techs' : ''
    });
    const {course_id}=useParams();
    //Fetch categories when page load
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/category')
            .then((res)=>{
                setCats(res.data);
                // console.log(res.data);
                // console.log('Fetched categories:', res.data);
             });
        }catch(error){
            console.log(error);
        }
        //fetch current course data
        try{
            axios.get(baseUrl+'/teacher-course-detail/'+course_id)
            .then((res)=>{
                setCourseData({
                    category:res.data.category,
                    title:res.data.title,
                    description:res.data.description,
                    prev_img:res.data.featured_img,
                    f_img:'',
                    techs:res.data.techs,
                    
                });
             });
        }catch(error){
            console.log(error);
        }
        //End
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
    const formSubmit=()=>{
        const _formData = new FormData();
        _formData.append('category',courseData.category);
        _formData.append('teacher',1);
        _formData.append('title',courseData.title);
        _formData.append('description',courseData.description);
        if(courseData.f_img!==''){
            _formData.append('featured_img',courseData.f_img,courseData.f_img.name);
        }
        _formData.append('techs',courseData.techs);
        try{
            axios.put(baseUrl + '/teacher-course-detail/' + course_id + '/', _formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then((res)=>{
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
                window.location.href='/add-course';
             });
        }catch(error){
            console.log(error);
        }
    };

    //Page title
    useEffect(()=>{
        document.title='Edit Courses';
    })
    //console.log(cats);
    return(
       <div className="container mt-4">
            <div className="row">
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className="card">
                        <h5 className="card-header">Edit Courses</h5>
                        <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="category" className="form-label">Category</label>
                                       
                                            <select name="category" value={courseData.category} onChange={handleChange} className="form-control" >
                                                
                                                {cats.map((category,index)=>{return <option key={index} value={category.id}>{category.title}</option>})} 
                                            </select>
                                            

                                            {/* <input
                                            type="text"
                                            value={courseData.category.title}
                                            readOnly
                                            className="form-control"
                                            /> */}
                                                                                
                                    </div>

                                    <div className="mb-3">
                                        <label for="title" className="form-label">Title</label>
                                        <input type="text"  value={courseData.title} onChange={handleChange} name='title' id="title" className="form-control"/>
                                    </div>

                                    <div className="mb-3">
                                        <label for="description" className="form-label">Description</label>
                                        <textarea onChange={handleChange}  value={courseData.description} name='description' className="form-control" id="description"></textarea>
                                    </div>

                                    <div className="mb-3">
                                        <label for="image" className="form-label">Featured Image</label>
                                        
                                        <input type="file" onChange={handleFileChange} name='f_img' id="image" className="form-control"/>

                                        {courseData.prev_img &&
                                            <p className='mt-2'><img src={courseData.prev_img} width="300"/></p>   
                                        }  
                                       
                                    </div>

                                    <div className="mb-3">
                                        <label for="techs" className="form-label">Technologies</label>
                                        <textarea  value={courseData.techs} onChange={handleChange} name='techs' className="form-control" placeholder='HTML, CSS, Php, python, JavaScript' id="techs"></textarea>
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
export default EditCourse;