import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import {useEffect, useState} from 'react';
import axios from 'axios';
const baseUrl='http://localhost:8000/api';



function TakeQuiz() {
    const [courseData,setcourseData]=useState([]);
    const studentId=localStorage.getItem('studentId');
    
    //Fetch all courses when page load
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/fetch-enrolled-courses/'+studentId)
            .then((res)=>{
                setcourseData(res.data)
             });
        }catch(error){
            console.log(error);
        }

    },[]);


    //page title
    useEffect(()=>{
        document.title='My Quiz List';
    })
    return (
            <div className="container mt-4">
                <div className="row">
                    <aside className='col-md-3'>
                        <Sidebar />
                    </aside>
                    <section className='col-md-9'>
                        <h4 className='mb-3 border-bottom pb-1'>Quiz Title</h4>
                            <div className="card">
                            <h5 className="card-header">Question Title</h5>
                                    <div className="card-body">
                                            <table className='table table-bordered'>
                                                
                                                <tbody>
                                                    <tr style={{ textAlign: 'center'}}>
                                                        <td style={{fontSize: '17px', textDecoration: 'none', color: 'blue' }}>
                                                            <input type="radio" />
                                                        </td>
                                                        <td style={{fontSize: '17px', textDecoration: 'none', color: 'blue' }}>
                                                            Option 1
                                                        </td>
                                                    </tr>
                                                    <tr style={{ textAlign: 'center'}}>
                                                        <td style={{fontSize: '17px', textDecoration: 'none', color: 'blue' }}>
                                                            <input type="radio" />
                                                        </td>
                                                        <td style={{fontSize: '17px', textDecoration: 'none', color: 'blue' }}>
                                                            Option 2
                                                        </td>
                                                    </tr>
                                                    <tr style={{ textAlign: 'center'}}>
                                                        <td style={{fontSize: '17px', textDecoration: 'none', color: 'blue' }}>
                                                            <input type="radio" />
                                                        </td>
                                                        <td style={{fontSize: '17px', textDecoration: 'none', color: 'blue' }}>
                                                            Option 3
                                                        </td>
                                                    </tr>
                                                    <tr style={{ textAlign: 'center'}}>
                                                        <td style={{fontSize: '17px', textDecoration: 'none', color: 'blue' }}>
                                                            <input type="radio" />
                                                        </td>
                                                        <td style={{fontSize: '17px', textDecoration: 'none', color: 'blue' }}>
                                                            Option 1
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <button className='btn btn-secondary'>Skip</button>
                                            <button className='btn btn-dark ms-2'>Submit</button>
                                    </div>
                            </div>
                    </section>
                </div>
        </div>
        )
    }
    
export default TakeQuiz;

