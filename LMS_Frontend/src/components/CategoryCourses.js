import {Link, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
const baseUrl='http://localhost:8000/api';

function CategoryCourses() {
    const [courseData,setCourseData]=useState([]);
    const {category_slug}=useParams();
    //Fetch courses when page load
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/course/?category='+category_slug)
            .then((res)=>{
                setCourseData(res.data)
             });
        }catch(error){
            console.log(error);
        }

    },[]);
    return (
        
        <div className="container mt-3">
            {/* Latest Courses Starts */}
                <h3 className="pb-1 mb-4">{category_slug}</h3>
            <div className="row mb-4"> 
                {courseData && courseData.map((course,index)=>
                    <div className="col-md-3 mb-4">
                        <div className="card" style={{ width: '300px', height: '300px' }}>
                        <Link to={`/detail/${course.id}`}><img src={course.featured_img} className="card-img-top" alt={course.title}/></Link>
                            <div className="card-body">
                                <h5 className="card-title text-center mt-3"><Link to={`/detail/${course.id}`} style={{ textDecoration: 'none', color: 'rgb(21, 21, 100)' }}
                                    onMouseOver={(event) => (event.target.style.color = 'rgb(76, 76, 150)')}
                                    onMouseOut={(event) => (event.target.style.color = 'rgb(21, 21, 100)')}
                                >{course.title}</Link></h5>
                            </div>
                        </div>
                    </div> 
                )}



            </div>
            {/* Latest Courses ends */}
            {/* Pagination Starts */}
            {/* <nav aria-label="Page navigation example">
                <ul class="pagination mt-5 justify-content-center">
                    <li className ="page-item"><a className ="page-link" href="#">Previous</a></li>
                    <li className ="page-item"><a className ="page-link" href="#">1</a></li>
                    <li className ="page-item"><a className ="page-link" href="#">2</a></li>
                    <li className ="page-item"><a className ="page-link" href="#">3</a></li>
                    <li className ="page-item"><a className ="page-link" href="#">Next</a></li>
                </ul>
            </nav> */}
            {/* Pagination Ends */}
        </div>
        
    );
  }
  
  export default CategoryCourses;