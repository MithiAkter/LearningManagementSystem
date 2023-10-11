import {useParams} from "react-router-dom";
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
const baseUrl='http://localhost:8000/api';

function TeacherDetail(){
    const [teacherData,setteacherData]=useState([]);
    const [courseData,setcourseData]=useState([]);
    let {teacher_id} = useParams();
    //Fetch courses when page load
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/teacher/'+teacher_id)
            .then((res)=>{
                setteacherData(res.data);
                setcourseData(res.data.teacher_courses);
             });
        }catch(error){
            console.log(error);
        }

    },[]);
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                <img src="/logo512.png" className="img-thumbnail" alt="Teacher Image"/>
                </div>
                <div className="col-8">
                     <h3>{teacherData.full_name}</h3>
                     <p>{teacherData.detail}</p>   
                        <p className="fw-bold">Skills : <Link to="/category/php"> PHP</Link>, <Link to="/category/python"> Python</Link>, 
                        <Link to="/category/js"> JavaScripts</Link>, <Link to="/category/django"> Django</Link>, 
                        <Link to="/category/react"> ReactJs</Link></p>
                        <p className="fw-bold">Recent Course : <Link to="/category/laravel">Laravel</Link></p>
                        <p className="fw-bold">Rating:
                        4/5
                        </p>
                </div>
            </div>
            {/* Course videos */}
            <div className="card mt-4" >
                    <h5 class="card-header">
                        Course List
                    </h5>
                    <div className="list-group list-group-flush">
                        {courseData.map((course,index)=>
                        <Link to={`/detail/${course.id}`} className='list-group-item list-group-item-action'>{course.title}</Link>
                        )}
                    </div>
            </div>
        </div>
        );
    }
    export default TeacherDetail;

