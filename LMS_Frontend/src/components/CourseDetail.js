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
    const [ratingStatus,setratingStatus]=useState([]);
    const [AvgRating,setAvgRating]=useState([0]);
    const [favoriteStatus,setfavoriteStatus]=useState();


    let {course_id} = useParams();
    const studentId=localStorage.getItem('studentId');
        //Fetch courses when page load
        useEffect(()=>{
            try{
                axios.get(baseUrl+'/course/'+course_id)
                .then((res)=>{
                    console.log(res.data);
                    setcourseData(res.data);
                    setchaptereData(res.data.course_chapters);
                    setteacherData(res.data.teacher);
                    setrelatedcourseData(JSON.parse(res.data.related_videos));
                    settechList(res.data.tech_list);
                    if(res.data.course_rating !== '' && res.data.course_rating !== null){
                        setAvgRating(res.data.course_rating);
                    }
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
        //Fetch rating status 
            try{
                axios.get(baseUrl+'/fetch-rating-status/'+studentId+'/'+course_id)
                .then((res)=>{
                    // console.log(res.data);
                    if(res.data.bool==true){
                        setratingStatus('success');
                    }
                 });
            }catch(error){
                console.log(error);
            }
        //Fetch favorite status 
            try{
                axios.get(baseUrl+'/fetch-favorite-status/'+studentId+'/'+course_id)
                .then((res)=>{
                    // console.log(res.data);
                    if(res.data.bool==true){
                        setfavoriteStatus('success');
                    }else{
                        setfavoriteStatus(''); 
                    }
                 });
            }catch(error){
                console.log(error);
            }
            // axios.get(`${baseUrl}/fetch_favorite_status/${studentId}/${course_id}`)
            // .then((res) => {
            //     if (res.data.bool === true) {
            //         setfavoriteStatus('success');
            //     } else {
            //         setfavoriteStatus(''); 
            //     }
            // })
            // .catch((error) => {
            //     console.log(error);
            // });

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
                            timer:4000,
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
    //Mark as Favourite Course
    const markAsFavorite = () => {
            const _formData = new FormData();
            _formData.append('course',course_id);
            _formData.append('student',studentId);
            _formData.append('status',true);
            try{
                axios.post(baseUrl+'/student-add-favorite-course/',_formData,{
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                })
                .then((res)=>{
                    if(res.status===200||res.status===201){
                        Swal.fire({
                            title: 'You have successfully added in your wishlist',
                            icon: 'success',
                            toast:true,
                            timer:4000,
                            position:'top-right',
                            timerProgressBar:true,
                            showConfirmButton:false
                        });
                        setfavoriteStatus('success');
                        // window.location.reload();
                    }
                });
            }catch(error){
                console.log(error);
            } 
    }
    
    //End

    //Remove from facorite Courses
    const removeFavorite = (pk) => {
            const _formData = new FormData();
            _formData.append('course',course_id);
            _formData.append('student',studentId);
            _formData.append('status',false);
            try{
                axios.get(baseUrl+'/student-remove-favorite-course/'+course_id+'/'+studentId,{
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                })
                .then((res)=>{
                    if(res.status==200||res.status==201){
                        Swal.fire({
                            title: 'This course has been removed from your wishlist',
                            icon: 'success',
                            toast:true,
                            timer:4000,
                            position:'top-right',
                            timerProgressBar:true,
                            showConfirmButton:false
                        });
                        setfavoriteStatus('');
                    }
                });
            }catch(error){
                console.log(error);
            } 
    }

    


    
    
    //End
    //Add Rating
    const [ratingData, setratingData]=useState({
        'rating' : '',
        'reviews' : '',

    });

    //Change Element Value
    const handleChange=(event)=>{
        setratingData({
            ...ratingData,
            [event.target.name]:event.target.value
        });
    }

    const formSubmit=()=>{
        const _formData = new FormData();
        
        _formData.append('course',course_id);
        _formData.append('student',studentId);
        _formData.append('rating',ratingData.rating);
        _formData.append('reviews',ratingData.reviews);
       
        try{
            axios.post(baseUrl+'/course-rating/',_formData,)
            .then((res)=>{
                if(res.status==200||res.status==201){
                    Swal.fire({
                        title: 'Rating Has Been Saved',
                        icon: 'success',
                        toast:true,
                        timer:4000,
                        position:'top-right',
                        timerProgressBar:true,
                        showConfirmButton:false
                    });
                    // setenrollStatus('success');
                    // window.location.reload();
                }
            });

        }catch(error){
            console.log(error);
        }
    };
    return(
        <div className="container mt-3 pb-2">
            <div className="row">
                <div className="col-4">
                <img src={courseData.featured_img} className="img-thumbnail" alt={courseData.title}/>
                </div>
                <div className="col-8">
                     <h3>{courseData.title}</h3>
                     <p style={{ textAlign: 'justify', fontStyle: 'italic' }} >{courseData.description}</p>   
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
                        <p className="fw-bold">Rating: {AvgRating}/5
                        {enrollStatus === 'success' && userLoginStatus === 'success' && (
                                        <>
                                        {ratingStatus != 'success' &&
                                            <button className='btn btn-success ms-3 btn-sm' data-bs-toggle="modal" data-bs-target="#ratingModal">Rating</button>
                                        }
                                        {ratingStatus == 'success' &&
                                            // <button className='btn btn-success ms-3 btn-sm' data-bs-toggle="modal" data-bs-target="#ratingModal">You already rated this course</button>
                                            <small className='badge bg-info text-dark ms-3'>You already rated this course</small>
                                        }
                                            <div className="modal fade" id="ratingModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-lg">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">Rate for: {courseData.title} </h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            
                                                                <form>
                                                                        <div className="mb-3">
                                                                            <label for="exampleInputEmail1" className="form-label">Rating</label>
                                                                            <select onChange={handleChange} className='form-control' name='rating'>
                                                                                <option value="1">1</option>
                                                                                <option value="2">2</option>
                                                                                <option value="3">3</option>
                                                                                <option value="4">4</option>
                                                                                <option value="5">5</option>
                                                                            </select>
                                                                        
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label for="exampleInputPassword1" className="form-label">Review</label>
                                                                            <textarea onChange={handleChange} className="form-control" name='reviews' rows="3"></textarea>
                                                                        </div>
                                                                        <button type="button" onClick={formSubmit} className="btn btn-primary">Submit</button>
                                                                </form>
                                                           
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-success btn-sm " style={{ backgroundColor: 'rgb(55, 55, 100)', color: '#fff' }} data-bs-dismiss="modal">Close</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}

                        </p>


                        {enrollStatus === 'success' && userLoginStatus === 'success' &&
                            <div>
                                <p className="fw-bold">Status: <span className="btn btn-success ms-2" 
                                style={{ width: '290px', padding: '2px'}} >You are already enrolled in this course</span></p>
                            </div>
                        }
                        {/* {userLoginStatus === 'success' && enrollStatus !== 'success'  &&
                            <p><button onClick={enrollCourse} type="button" className="btn btn-success" >Enroll In This Course</button></p>
                        } */}
                        {userLoginStatus === 'success' && enrollStatus !== 'success'  &&
                            <div>
                                 <p><Link to="/payment-contact" type="button" className='btn btn-sm btn-warning' style={{ width: '150px', padding: '8px'}} >Enroll In This Course</Link></p>
                            </div>
                           
                        }
                        {userLoginStatus === 'success' && favoriteStatus !== 'success' &&
                            <p><button onClick={markAsFavorite} title="Add in your favorite Course List" type="button" className="btn btn-outline-danger" ><i 
                            className="bi bi-heart-fill"></i></button></p>
                        }
                        {userLoginStatus === 'success' && favoriteStatus === 'success' &&
                            <p><button onClick={removeFavorite} title="Remove from your favorite Course List" type="button" className="btn btn-danger" ><i 
                            className="bi bi-heart-fill"></i></button></p>
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
                                            <h5 className="modal-title"  id="exampleModalLabel">Video</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="ratio ratio-16x9">
                                            {/* <iframe src={chapter.video}  allowfullscreen></iframe> */}
                                                <video controls width="200">
                                                    <source src={chapter.video} type="video/webm" />
                                                    <source src={chapter.video}  type="video/mp4" />
                                                        Sorry, your browser doesn't suport embadded video.
                                                </video>
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

            <h3 className="pb-1 mb-4 mt-2">Related Courses</h3>
            <div className="row mb-4">
            {relatedcourseData.map((rcourse,index)=>
                <div className="col-md-3">
                    <div className="card" style={{ width: '300px', height: '300px' }}>
                    <Link target="__blank" to={`/detail/${rcourse.pk}`}><img src={`${siteUrl}media/${rcourse.fields.featured_img}`} className="card-img-top" alt={rcourse.fields.title} style={{ height: '190px', width: '100%', objectFit: 'cover' }}/></Link>
                        <div className="card-body">
                            <h5 className="card-title text-center mt-1"><Link target="__blank" to={`/detail/${rcourse.pk}`} style={{ textDecoration: 'none', color: 'rgb(21, 21, 100)' }}
                                onMouseOver={(event) => (event.target.style.color = 'rgb(76, 76, 150)')}
                                onMouseOut={(event) => (event.target.style.color = 'rgb(21, 21, 100)')}
                                >{rcourse.fields.title}</Link></h5>
                        </div>
                    </div>
                </div>
            )}

            </div>  
        </div>
    );
}
export default CourseDetail;