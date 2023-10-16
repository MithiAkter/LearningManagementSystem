import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './TeacherDashboard.css';


const baseUrl='http://localhost:8000/api';

function TeacherDashboard(){
    const [dashboardData,setdashboardData]=useState([]);
    const teacherId=localStorage.getItem('teacherId');


    //Fetch Courses
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/teacher/dashboard/'+teacherId)
            .then((res)=>{
                console.log(res);
                setdashboardData(res.data);
             });
        }catch(error){
            console.log(error);
        }
    },[]);

    useEffect(()=>{
        document.title='My Dashboard';
    });
    return(
       <div className="container mt-4">
            <div className="row">
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='row' >
                    <div className="col-md-4">
                        <div className="card">
                            <h5 className="card-header" style={{ backgroundColor: 'rgb(133,190,157)', color: 'white' }}>
                                Total Courses
                            </h5>              
                            <div className="cardd-body">
                                <h3 className="card-title text-center mt-1"><Link className='clr' to="/teacher-courses" >{dashboardData.total_teacher_courses}</Link></h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <h5 className="card-header" style={{ backgroundColor: 'rgb(202,124,171)', color: 'white' }}>
                                Total Students
                            </h5>   
                            <div className="cardd-body">
                                <h3 className="card-title text-center mt-1"><Link className='clr' to="/teacher-users" >{dashboardData.total_teacher_students}</Link></h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <h5 className="card-header" style={{ backgroundColor: 'rgb(106, 106, 171)', color: 'white' }}>
                                Total Chapters
                            </h5>
                            <div className="cardd-body">
                                <h3 className="card-title text-center mt-1"><Link className='clr' to="/teacher-courses" >{dashboardData.total_teacher_chapters}</Link></h3>
                            </div>
                        </div>
                    </div>

                    </div>
                </section>
            </div>
       </div>
    )
}
export default TeacherDashboard;