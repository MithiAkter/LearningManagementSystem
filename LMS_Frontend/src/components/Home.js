import {Link} from 'react-router-dom';
import AllCourses from './AllCourses';
import {useEffect, useState} from 'react';
import axios from 'axios';
const baseUrl='http://localhost:8000/api';

function Home(){
    const [courseData,setCourseData]=useState([]);

    //Fetch 4 courses when page load
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/course/?result=4')
            .then((res)=>{
                setCourseData(res.data)
             });
        }catch(error){
            console.log(error);
        }

    },[]);


    useEffect(()=>{
        document.title='PLMS | Home';
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
            {/* <h3 className="pb-1 mb-4 mt-4">Popular Courses <Link to="/popular-courses" className="float-end">See all</Link></h3>
            <div className="row"> 
                <div className="col-md-3">
                    <div className="card">
                    <a href="#"><img src="django.png" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Course Title</a></h5>
                        </div>

                        <div className="card-footer">
                            <div className="title">
                                <span>Rating : 4.5/5</span>
                                <span className="float-end">Views : 78945</span>
                            </div>
                        </div>

                    </div>
                </div> 


                <div className="col-md-3">
                    <div className="card">
                    <a href="#"><img src="django.png" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Course Title</a></h5>
                        </div>
                        
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating : 4.5/5</span>
                                <span className="float-end">Views : 78945</span>
                            </div>
                        </div>


                    </div>
                </div> 


                 <div className="col-md-3">
                    <div className="card">
                    <a href="#"><img src="django.png" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Course Title</a></h5>
                        </div>

                        <div className="card-footer">
                            <div className="title">
                                <span>Rating : 4.5/5</span>
                                <span className="float-end">Views : 78945</span>
                            </div>
                        </div>


                    </div>
                </div> 


                 <div className="col-md-3">
                    <div className="card">
                    <a href="#"><img src="django.png" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Course Title</a></h5>
                        </div>

                        <div className="card-footer">
                            <div className="title">
                                <span>Rating : 4.5/5</span>
                                <span className="float-end">Views : 78945</span>
                            </div>
                        </div>

                    </div>
                </div>   
            </div> */}
            {/* end popular Courses*/} 



            {/* start popular teachers*/}
            {/* <h3 className="pb-1 mb-4 mt-4">Popular Teachers <Link to="/popular-teachers" className="float-end">See all</Link></h3>
            <div className="row"> 
                <div className="col-md-3">
                    <div className="card">
                    <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/teacher-detail/1">Teacher's Name</Link></h5>
                        </div>

                        <div className="card-footer">
                            <div className="title">
                                <span>Rating : 4.5/5</span>
                            </div>
                        </div>


                    </div>
                </div> 


                <div className="col-md-3">
                    <div className="card">
                    <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/teacher-detail/1">Teacher's Name</Link></h5>
                        </div>

                        <div className="card-footer">
                            <div className="title">
                                <span>Rating : 4.5/5</span>
                            </div>
                        </div>


                    </div>
                </div> 


                 <div className="col-md-3">
                    <div className="card">
                    <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/teacher-detail/1">Teacher's Name</Link></h5>
                        </div>

                        <div className="card-footer">
                            <div className="title">
                                <span>Rating : 4.5/5</span>
                            </div>
                        </div>


                    </div>
                </div> 


                 <div className="col-md-3">
                    <div className="card">
                    <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/teacher-detail/1">Teacher's Name</Link></h5>
                        </div>

                        <div className="card-footer">
                            <div className="title">
                                <span>Rating : 4.5/5</span>
                            </div>
                        </div>


                    </div>
                </div>   
            </div> */}
            {/* end popular Courses*/} 


            {/* Start Student Testimonial */}
            {/* <h3 className="pb-1 mb-4 mt-4">Student Testimonial</h3>
            <div id="carouselExampleIndicators" className="carousel slide bg-dark text-white py-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="carousel-item">
                    <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="carousel-item">
                    <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div> */}
            {/* end Student Testimonial */} 

            
        </div>


        
    );
  }
  
  export default Home;
  