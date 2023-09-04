import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';



function AddCourses(){
    return(
       <div className="container mt-4">
            <div className="row">
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className="card">
                        <h5 className="card-header">Add Courses</h5>
                        <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Title</label>
                                        <input type="email" className="form-control"/>
                                    </div>

                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Description</label>
                                        <textarea className="form-control"></textarea>
                                    </div>

                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Course Video</label>
                                        <div>
                                        <input type="file" className="form-control" id="inputPassword"/>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Technologies</label>
                                        <textarea className="form-control"></textarea>
                                    </div>

                                </form>
                            <button className='btn btn-primary'>Submit</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default AddCourses;