import {Link} from 'react-router-dom';
import {useParams} from "react-router-dom";
import {useState, useEffect} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

const siteUrl='http://localhost:8000/';
const baseUrl='http://localhost:8000/api';

function CourseDetail(){
    const [courseData,setcourseData]=useState([]);
    const [chapterData,setchaptereData]=useState([]);
    const [teacherData,setteacherData]=useState([]);
    const [relatedcourseData,setrelatedcourseData]=useState([]);
    const [techList,settechList]=useState([]);
    const [userLoginStatus,setuserLoginStatus]=useState([]);
    const [enrollStatus,setenrollStatus]=useState([]);

    let {course_id} = useParams();
    const studentId=localStorage.getItem('studentId');
        //Fetch courses when page load
        useEffect(()=>{
            try{
                axios.get(baseUrl+'/course/'+course_id)
                .then((res)=>{
                    // console.log(res.data);
                    setcourseData(res.data);
                    setchaptereData(res.data.course_chapters);
                    setteacherData(res.data.teacher);
                    setrelatedcourseData(JSON.parse(res.data.related_videos));
                    settechList(res.data.tech_list);
                    
                 });
            }catch(error){
                console.log(error);
            }

        //Fetch enroll status when page load 
            try{
                axios.get(baseUrl+'/fetch-enroll-status/'+studentId+'/'+course_id)
                .then((res)=>{
                    // console.log(res.data);
                    if(res.data.bool==true){
                        setenrollStatus('success');
                    }
                 });
            }catch(error){
                console.log(error);
            }

            // Verifying Login Status
            const studentLoginStatus=localStorage.getItem('studentLoginStatus');
            if(studentLoginStatus==='true'){
                setuserLoginStatus('success');
            }


        },[]);
        // console.log(relatedcourseData);


    // Enroll Course Funtionality
    const enrollCourse = () =>{
        const _formData = new FormData();
            _formData.append('course',course_id);
            _formData.append('student',studentId);
            try{
                axios.post(baseUrl+'/student-enroll-course/',_formData,{
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                })
                .then((res)=>{
                    if(res.status==200||res.status==201){
                        Swal.fire({
                            title: 'You have successfully enrolled in this course',
                            icon: 'success',
                            toast:true,
                            timer:10000,
                            position:'top-right',
                            timerProgressBar:true,
                            showConfirmButton:false
                        });
                        setenrollStatus('success');
                        // window.location.reload();
                    }
                });
            }catch(error){
                console.log(error);
            }        
    }

    
    return(
        <div className="container mt-3 pb-2">
            <div className="row">
                <div className="col-4">
                <img src={courseData.featured_img} className="img-thumbnail" alt={courseData.title}/>
                </div>
                <div className="col-8">
                     <h3>{courseData.title}</h3>
                     <p>{courseData.description}</p>   
                        <p className="fw-bold">Course By : <Link to={`/teacher-detail/${teacherData.id}`} >{teacherData.full_name}</Link></p>
                        <p className="fw-bold">Techs:&nbsp;
                            {techList.map((tech, index) =>
                            <>
                                <Link to={`/category/${tech.trim()}`} className="badge badge-pill text-dark bg-warning">{tech.trim()}</Link>&nbsp;&nbsp;
                            </>
                            )}
                        </p>
                        <p className="fw-bold">Duration : 3 Hours 30 minutes</p>
                        <p className="fw-bold">Total Enrolled : {courseData.total_enrolled_students} student(s)</p>
                        <p className="fw-bold">Rating:4/5</p>


                        {enrollStatus == 'success' && userLoginStatus == 'success' &&
                            <p><span className="btn btn-success">You are already enrolled in this course</span></p>
                        }
                        {userLoginStatus == 'success' && enrollStatus !== 'success'  &&
                            <p><button onClick={enrollCourse} type="button" className="btn btn-success" >Enroll In This Course</button></p>
                        }
                        {userLoginStatus !== 'success' &&
                            <p><Link to="/user-login" className="btn btn-success" >Please Login to In This Course</Link></p>
                        } 
                </div>
            </div>
            {/* Course videos */}

            {enrollStatus == 'success' && userLoginStatus == 'success' &&
                <div className="card mt-4" >
                        <h5 class="card-header">
                            In this Course
                        </h5>
                        <ul className="list-group list-group-flush">
                            {chapterData.map((chapter,index)=>
                                <li className="list-group-item d-flex justify-content-between align-items-center" key={chapter.id} >{chapter.title}
                                    <span className="float-end">
                                        <span className="me-5">1 Hour 30 Minutes</span>
                                        <button className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#videoModal1"><i class="bi bi-youtube"></i></button>
                                    </span> 

                                    {/* Video Modal Starts */}
                                    <div className="modal fade" id="videoModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-xl">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Video 1</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div class="ratio ratio-16x9">
                                            <iframe src={chapter.video} title={chapter.title} allowfullscreen></iframe>
                                            </div>
                                        </div>
                                        
                                        </div>
                                    </div>
                                    </div>
                                    {/* Video Modal Ends  */}
                                </li>
                            )}
                        </ul>
                </div>
            }

            <h3 className="pb-1 mb-4 mt-5">Related Courses</h3>
            <div className="row mb-4">
            {relatedcourseData.map((rcourse,index)=>
                <div className="col-md-3">
                    <div className="card">
                    <Link target="__blank" to={`/detail/${rcourse.pk}`}><img src={`${siteUrl}media/${rcourse.fields.featured_img}`} className="card-img-top" alt={rcourse.fields.title}/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to={`/detail/${rcourse.pk}`}>{rcourse.fields.title}</Link></h5>
                        </div>
                    </div>
                </div>
            )}

            </div>  
        </div>
    );
}
export default CourseDetail;