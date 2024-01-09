import {Link, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
const baseUrl='http://localhost:8000/api';

function Category() {
    const [categoryData,setcategoryData]=useState([]);
    //Fetch courses when page load
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/category/')
            .then((res)=>{
                setcategoryData(res.data)
             });
        }catch(error){
            console.log(error);
        }

    },[]);
      // title
useEffect(()=>{
document.title='All Categories';
});
    
    return (
        
        <div className="container mt-3">
            {/* Latest Courses Starts */}
                <h3 className="pb-1 mb-4">All Category of Courses which we have:</h3>
            <div className="row mb-4"> 
                {categoryData && categoryData.map((row,index)=>
                    <div className="col-md-3 mb-4">
                        <div className="card" style={{ width: '300px', height: '350px' }}>
                            <div className="card-body">
                                <h5 className="card-title text-center mt-1"><Link to={`/course/${row.id}/${row.title}`} style={{ textDecoration: 'none', color: 'rgb(21, 21, 100)' }}
                                    onMouseOver={(event) => (event.target.style.color = 'rgb(76, 76, 150)')}
                                    onMouseOut={(event) => (event.target.style.color = 'rgb(21, 21, 100)')}
                                >{row.title} ({row.total_course})</Link></h5>
                                <p className='card-text' style={{ textAlign: 'justify', padding: '10px'  }}>{row.description}</p>
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
  
  export default Category;