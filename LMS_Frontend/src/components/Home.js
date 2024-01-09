import {Link} from 'react-router-dom';
import AllCourses from './AllCourses';
import {useEffect, useState} from 'react';
import axios from 'axios';
const baseUrl='http://localhost:8000/api';

function Home(){
    const [courseData,setCourseData]=useState([]);
    const [popularcourseData,setpopularcourseData]=useState([]);
    const [popularteacherData,setpopularteacherData]=useState([]);
    const [testimonialData,settestimonialData]=useState([]);

    //Fetch 4 courses when page load
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/course/?result=4')
            .then((res)=>{
                setCourseData(res.data.results)
             });
        }catch(error){
            console.log(error);
        }
    //Fetch popular courses 
        try{
            axios.get(baseUrl+'/popular-courses/?popular=1')
            .then((res)=>{
                setpopularcourseData(res.data)
             });
        }catch(error){
            console.log(error);
        }
    //Fetch popular teachers 
        try{
            axios.get(baseUrl+'/popular-teachers/?popular=1')
            .then((res)=>{
                setpopularteacherData(res.data)
             });
        }catch(error){
            console.log(error);
        }
    //Fetch student testimonial 
        try{
            axios.get(baseUrl+'/student-testimonial/')
            .then((res)=>{
                settestimonialData(res.data)
             });
        }catch(error){
            console.log(error);
        }

    },[]);


    useEffect(()=>{
        document.title='Home';
    });
    return (
        //container-fluid for the whole pages
        <div className="container mt-2">
        {/* start Leatest Courses*/}
            <h3 className="pb-1 mt-4 mb-4">Latest Courses<Link to="/all-courses" className="float-end">See all</Link></h3>
            <div className="row mb-4">
                {courseData && courseData.map((course,index)=>
                <div className="col-md-3 mb-4">
                    <div className="card" style={{ width: '300px', height: '300px' }}>
                    <Link to={`/detail/${course.id}`}><img src={course.featured_img} style={{ height: '190px', width: '100%', objectFit: 'cover' }} className="card-img-top" alt={course.title}/></Link>
                        <div className="card-body">
                            <h5 className="card-title text-center mt-1"><Link to={`/detail/${course.id}`} style={{ textDecoration: 'none', color: 'rgb(21, 21, 100)' }}
                                onMouseOver={(event) => (event.target.style.color = 'rgb(76, 76, 150)')}
                                onMouseOut={(event) => (event.target.style.color = 'rgb(21, 21, 100)')}
                            >{course.title}</Link></h5>
                        </div>
                    </div>
                </div> 
                )}

                
        </div>
            {/* end Leatest Courses*/} 
            {/* start popular Courses*/}

            <h3 className="pb-1 mt-4 mb-4">Popular Courses<Link to="/popular-courses" className="float-end">See all</Link></h3>
            <div className="row mb-4">
                {popularcourseData && popularcourseData.map((row,index)=>
                <div className="col-md-3 mb-4">
                    <div className="card" style={{ width: '300px', height: '320px' }}>
                    <Link to={`/detail/${row.course.id}`}><img src={row.course.featured_img} style={{ height: '190px', width: '100%', objectFit: 'cover' }} className="card-img-top" alt={row.course.title}/></Link>
                        <div className="card-body">
                            <h5 className="card-title text-center mt-1"><Link to={`/detail/${row.course.id}`} style={{ textDecoration: 'none', color: 'rgb(21, 21, 100)' }}
                                onMouseOver={(event) => (event.target.style.color = 'rgb(76, 76, 150)')}
                                onMouseOut={(event) => (event.target.style.color = 'rgb(21, 21, 100)')}
                            >{row.course.title}</Link></h5>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating: {row.rating}/5</span>
                                <span className='float-end '>Views: {row.course.course_views}</span>
                            </div>
                        </div>
                    </div>
                </div> 
                )}
            </div>
                
            {/* end popular Courses*/} 



            {/* start popular teachers*/}
            <h3 className="pb-1 mb-4 mt-4">Our Teachers<Link to="/popular-teachers" className="float-end">See all</Link></h3>
            <div className="row mb-4">
            {popularteacherData && popularteacherData.map((teacher,index)=>
                <div className="col-md-3">
                    <div className="card">
                    <Link to={`/teacher-detail/${teacher.id}`}><img src={teacher.profile_img} style={{ height: '280px', width: '100%', objectFit: 'cover' }} className="card-img-top" alt={teacher.full_name}/></Link>
                        <div className="card-body">
                            {/* <h5 className="card-title"><Link to={`/teacher-detail/${teacher.id}`}>{teacher.full_name}</Link></h5> */}
                            <h5 className="card-title text-center mt-1"><Link to={`/teacher-detail/${teacher.id}`} style={{ textDecoration: 'none', color: 'rgb(21, 21, 100)' }}
                                onMouseOver={(event) => (event.target.style.color = 'rgb(76, 76, 150)')}
                                onMouseOut={(event) => (event.target.style.color = 'rgb(21, 21, 100)')}
                            >{teacher.full_name}</Link></h5>
                        </div>
                        <div className="card-footer">
                            <div className="title mt-3" style={{textAlign: 'center'}}>
                                <span>Total Courses : {teacher.total_teacher_courses}</span>
                            </div>
                        </div>
                    </div>
                
            </div>
            )}
            </div>
            
            {/* end popular Courses*/} 


            {/* Start Student Testimonial */}
            <h3 className="pb-1 mb-4 mt-4">Student Testimonial</h3>
            <div id="carouselExampleIndicators" className="carousel slide  text-white py-5" data-bs-ride="carousel" style={{height: '400px', width: '100%',borderRadius: '10px',backgroundColor: '#5f7185' }}>
                <div className="carousel-indicators">
                {testimonialData && testimonialData.map((row,index)=>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={index === 0 ? "active" : ""}></button>
                )}
                </div>
                    <div className="carousel-inner">
                    {testimonialData && testimonialData.map((row,i)=>
                        <div className={i === 0 ? "carousel-item text-center active" : "carousel-item text-center"}>
                            <figure className="text-center" style={{marginTop: '100px',color: 'white'}}>
                                <blockquote className="blockquote">
                                    <p>{row.reviews}</p>
                                </blockquote>
                                <figcaption className="blockquote-footer" style={{color: '#fff'}}>
                                    {row.course.title} <cite title="Source Title">{row.student.full_name}</cite>
                                </figcaption>
                            </figure>
                        </div>
                    )}
                    </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            {/* end Student Testimonial */} 

            
        </div>


        
    );
  }
  
  export default Home;
  