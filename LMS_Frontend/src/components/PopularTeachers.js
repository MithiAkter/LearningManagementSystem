import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:8000/api';

function PopularTeachers() {
    const [popularteacherData,setpopularteacherData]=useState([]);
    // const [teacher, setTeacher] = useState(null);
    //Fetch 4 courses when page load
    useEffect(()=>{
    //Fetch popular teachers 
        try{
            axios.get(baseUrl+'/popular-teachers/?popular=1')
            .then((res)=>{
                setpopularteacherData(res.data)
             });
        }catch(error){
            console.log(error);
        }

    },[]);


    useEffect(()=>{
        document.title='Popular Teachers';
    });
   
    // useEffect(() => {
    //     axios.get(baseUrl+'/teacher/').then((response) => {
    //         setTeacher(response.data);
            
    //     });
    // }, []);
    // console.log(teacher);
    return (
         <div className="container mt-3">
            {/* start popular teachers*/}
            <h3 className="pb-1 mb-4 mt-4">Popular Teachers <Link to="/popular-teachers" className="float-end">See all</Link></h3>
            <div className="row mb-4">
            {popularteacherData && popularteacherData.map((teacher,index)=>
                <div className="col-md-3">
                    <div className="card">
                    <Link to={`/teacher-detail/${teacher.id}`}><img src={teacher.profile_img} style={{ height: '100%', width: '100%', objectFit: 'cover' }} className="card-img-top" alt={teacher.full_name}/></Link>
                        <div className="card-body">
                            {/* <h5 className="card-title"><Link to={`/teacher-detail/${teacher.id}`}>{teacher.full_name}</Link></h5> */}
                            <h5 className="card-title text-center mt-1"><Link to={`/teacher-detail/${teacher.id}`} style={{ textDecoration: 'none', color: 'rgb(21, 21, 100)' }}
                                onMouseOver={(event) => (event.target.style.color = 'rgb(76, 76, 150)')}
                                onMouseOut={(event) => (event.target.style.color = 'rgb(21, 21, 100)')}
                            >{teacher.full_name}</Link></h5>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Total Courses : {teacher.total_teacher_courses}</span>
                            </div>
                        </div>
                    </div>
                
            </div>
            )}
            </div>
            
            {/* end popular Teachers*/} 
            
            {/* Popular Teachers ends */}
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
  
  export default PopularTeachers;