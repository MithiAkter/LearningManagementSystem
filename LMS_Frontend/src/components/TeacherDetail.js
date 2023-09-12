import {Link} from 'react-router-dom';

function TeacherDetail(){
    
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                <img src="/logo512.png" className="img-thumbnail" alt="Teacher Image"/>
                </div>
                <div className="col-8">
                     <h3>Mithi  Akter Kona</h3>
                     <p>Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with .g-0 and use .col-md-* classes to make the card horizontal at the md breakpoint. 
                        Further adjustments may be needed depending on your card content.</p>   
                        <p className="fw-bold">Skills : <Link to="/category/php"> PHP</Link>, <Link to="/category/python"> Python</Link>, 
                        <Link to="/category/js"> JavaScripts</Link>, <Link to="/category/django"> Django</Link>, 
                        <Link to="/category/react"> ReactJs</Link></p>
                        <p className="fw-bold">Recent Course : <Link to="/category/laravel">Laravel</Link></p>
                        <p className="fw-bold">Rating:
                        4/5
                        </p>
                </div>
            </div>
            {/* Course videos */}
            <div className="card mt-4" >
                    <h5 class="card-header">
                        Course List
                    </h5>
                    <div className="list-group list-group-flush">
                        <Link to="/detail/1" className='list-group-item list-group-item-action'>React Js Course 1</Link>
                        <Link to="/detail/1" className='list-group-item list-group-item-action'>React Js Course 2</Link>
                        <Link to="/detail/1" className='list-group-item list-group-item-action'>React Js Course 3</Link>
                        <Link to="/detail/1" className='list-group-item list-group-item-action'>React Js Course 4</Link>
                        <Link to="/detail/1" className='list-group-item list-group-item-action'>React Js Course 5</Link>
                    </div>
            </div>
        </div>
        );
    }
    export default TeacherDetail;

