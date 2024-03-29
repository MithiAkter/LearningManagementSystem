import {Link, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
const baseUrl='http://localhost:8000/api';

function CategoryCourses() {
    const [courseData,setCourseData]=useState([]);
    const [nextUrl,setnextUrl]=useState();
    const [previousUrl,setpreviousUrl]=useState();
    const {category_id,category_slug}=useParams();
    //Fetch courses when page load
    useEffect(()=>{
        fetchData(baseUrl+'/course/?category='+category_id);
    },[]);
    const paginationHandler = (url) => {
        fetchData(url);
    }
    function fetchData(url){
        try{
            axios.get(url)
            .then((res)=>{
                setCourseData(res.data.results)
             });
        }catch(error){
            console.log(error);
        }
    }
    return (
        
        <div className="container mt-3">
            {/* category Courses Starts */}
                <h3 className="pb-1 mb-4">{category_slug}</h3>
            <div className="row mb-4"> 
                {courseData && courseData.map((course,index)=>
                    <div className="col-md-3 mb-4">
                        <div className="card" style={{ width: '300px', height: '300px' }}>
                        <Link to={`/detail/${course.id}`}><img src={course.featured_img} className="card-img-top" alt={course.title} style={{ height: '190px', width: '100%', objectFit: 'cover' }}/></Link>
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
            {/* category Courses ends */}

            {/* Pagination Starts */}
            <nav aria-label="Page navigation example">
                <ul className="pagination mt-5 justify-content-center">
                    {previousUrl &&
                        <li className ="page-item"><button className ="page-link" onClick={()=>paginationHandler(previousUrl)}><i className="bi bi-arrow-left"></i>Previous</button></li>
                    }
                    {nextUrl &&
                        <li className ="page-item"><button className ="page-link" onClick={()=>paginationHandler(nextUrl)}><i className="bi bi-arrow-right"></i>Next</button></li>
                    }
                </ul>
            </nav>
            {/* Pagination Ends */}
        </div>
        
    );
  }
  
  export default CategoryCourses;