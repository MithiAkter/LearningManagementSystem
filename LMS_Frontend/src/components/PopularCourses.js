import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
const baseUrl='http://localhost:8000/api';



function AllCourses() {
    const [courseData,setCourseData]=useState([]);

    //Fetch courses when page load
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/popular-courses/?all=1')
            .then((res)=>{
                setCourseData(res.data)
             });
        }catch(error){
            console.log(error);
        }

    },[]);


  // title
useEffect(()=>{
document.title='Popular Courses';
});

    return (
        
        <div className="container mt-3">
            {/* Latest Courses Starts */}
                <h3 className="pb-1 mt-4 mb-4">Popular Courses</h3>
            <div className="row mb-4">
                {courseData && courseData.map((row,index)=>
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
            {/* Popular Courses ends */}
            
            {/* Pagination Starts */}
            <nav aria-label="Page navigation example">
                <ul className="pagination mt-5 justify-content-center">
                    <li className ="page-item"><a className ="page-link" href="#">Previous</a></li>
                    <li className ="page-item"><a className ="page-link" href="#">1</a></li>
                    <li className ="page-item"><a className ="page-link" href="#">2</a></li>
                    <li className ="page-item"><a className ="page-link" href="#">3</a></li>
                    <li className ="page-item"><a className ="page-link" href="#">Next</a></li>
                </ul>
            </nav>
            {/* Pagination Ends */}
        </div>
        
    );
  }
  
  export default AllCourses;