import {useParams} from "react-router-dom";
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
const baseUrl='http://localhost:8000/api';

function TeacherDetail(){
    const [teacherData,setteacherData]=useState([]);
    const [courseData,setcourseData]=useState([]);
    const [skillList,setskillList]=useState([]);
    let {teacher_id} = useParams();
    const {skill_name}=useParams();
    //Fetch courses when page load
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/teacher/'+teacher_id)
            .then((res)=>{
                setteacherData(res.data);
                setcourseData(res.data.teacher_courses);
                setskillList(res.data.skill_list);
             });
        }catch(error){
            console.log(error);
        }

    },[]);
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                <img style={{ height: '100%', width: '80%', objectFit: 'cover' }} src={teacherData.profile_img} className="img-thumbnail" alt="Teacher Image"/>
                </div>
                <div className="col-8">
                     <h3 className="mt-3" style={{ color: 'rgb(76, 76, 150)' }} >{teacherData.full_name}</h3>
                     <p>{teacherData.detail}</p>
                     <p className="fw-bold">Email:&nbsp;{teacherData.email}</p>  
                     <p className="fw-bold">Qualification:&nbsp;{teacherData.qualification}</p>  
                     <p className="fw-bold">Contact:&nbsp;{teacherData.mobile_no}</p>  
                        <p className="fw-bold">Skills: &nbsp;
                            {skillList.map((skill, index) =>
                                <>
                                    <Link to={`/teacher-skill-courses/${skill.trim()}/${teacherData.id}`} className="badge badge-pill text-dark bg-warning">{skill.trim()}</Link>&nbsp;&nbsp;
                                    {/* <Link to={`/category/${skill.trim()}`} className="badge badge-pill text-dark bg-warning">{skill.trim()}</Link>&nbsp;&nbsp; */}
                                </>
                            )}</p>
                        {/* <p className="fw-bold">Recent Course : <Link to="/category/laravel">Laravel</Link></p> */}
                        {/* <p className="fw-bold">Rating:
                        4/5
                        </p> */}
                        <p className="fw-bold">Recent Course : &nbsp;
                            {courseData.map((course,index)=> 
                                    <>
                                        <Link to={`/detail/`+course.id} className="badge badge-pill text-dark bg-success text-white">{course.title}</Link>&nbsp;&nbsp;
                                        
                                        {/* <Link to={`/category/${skill.trim()}`} className="badge badge-pill text-dark bg-warning">{skill.trim()}</Link>&nbsp;&nbsp; */}
                                    </>
                            )}
                        </p>
                        {/* <p className="fw-bold">Rating:4/5</p> */}


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

