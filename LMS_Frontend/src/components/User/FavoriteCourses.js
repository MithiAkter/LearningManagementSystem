import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
function FavoriteCourses() {
    return (
            <div className="container mt-4">
                <div className="row">
                    <aside className='col-md-3'>
                        <Sidebar />
                    </aside>
                    <section className='col-md-9'>
                            <div className="card">
                            <h5 className="card-header">Favorite Courses</h5>
                                    <div className="card-body">
                                            <table className='table table-bordered'>
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Created By</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <td>Django development</td>
                                                    <td><Link to="/">Kona</Link></td>
                                                    <td>
                                                        <button className='btn btn-danger btn-sm active'>Delete</button>
                                                    </td>
                                                </tbody>
                                            </table>
                                    </div>
                            </div>
                    </section>
                </div>
        </div>
        )
    }
    
export default FavoriteCourses;

