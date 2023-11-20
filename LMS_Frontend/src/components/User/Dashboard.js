import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import {useState, useEffect} from 'react';
import axios from 'axios';
import '../Teacher/TeacherDashboard.css';


const baseUrl='http://localhost:8000/api';

function Dashboard(){
    const [dashboardData,setdashboardData]=useState([]);
    const studentId=localStorage.getItem('studentId');


    //Fetch Courses
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/student/dashboard/'+studentId)
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
                    <Sidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='row d-flex justify-content-center' >

                        <div className="col-md-4">
                            <div className="card mx-auto">
                                <h5 className="card-header" style={{ backgroundColor: 'rgb(133,190,157)', color: 'white' }}>
                                    Total Courses
                                </h5>              
                                <div className="cardd-body">
                                    <h3 className="card-title text-center mt-1"><Link className='clr' to="/my-courses" >{dashboardData.enrolled_courses}</Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <h5 className="card-header" style={{ backgroundColor: 'rgb(202,124,171)', color: 'white' }}>
                                    Favorite Courses
                                </h5>   
                                <div className="cardd-body">
                                    <h3 className="card-title text-center mt-1"><Link className='clr' to="/favorite-courses" >{dashboardData.favorite_courses}</Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <h5 className="card-header" style={{ backgroundColor: 'rgb(106, 106, 171)', color: 'white' }}>
                                    Assignments
                                </h5>
                                <div className="cardd-body">
                                    <h5 className="card-title text-center mt-2" >
                                        <Link className='clr-stu' to="/my-assignments">Completed: {dashboardData.complete_assignments}</Link><br />
                                        <Link className='clr-stu' to="/my-assignments">Pending: {dashboardData.pending_assignments}</Link>
                                    </h5>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </section>
            </div>
       </div>
    )
}
export default Dashboard;