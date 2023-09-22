import Header from './Header';
import Home from './Home';
import CourseDetail from "./CourseDetail";
import TeacherDetail from "./TeacherDetail";
import About from './About';
import Footer from './Footer';

// Users
import Login from './User/Login';
import Register from './User/Register';
import Dashboard from './User/Dashboard';
import MyCourses from './User/MyCourses';
import FavoriteCourses from './User/FavoriteCourses';
import RecommendedCourses from './User/RecommendedCourses';
import ProfileSetting from './User/ProfileSetting';
import ChangePassword from './User/ChangePassword';

// Teachers
import TeacherLogin from './Teacher/TeacherLogin';
import TeacherLogout from './Teacher/TeacherLogout';
import TeacherRegister from './Teacher/TeacherRegister';
import TeacherDashboard from './Teacher/TeacherDashboard';
import AddCourse from './Teacher/AddCourse';
import AddChapter from './Teacher/AddChapter';
import AllChapters from './Teacher/CourseChapters';
import EditChapter from './Teacher/EditChapter';

import TeacherCourses from './Teacher/TeacherCourses';
import UserList from './Teacher/UserList';
import TeacherProfileSetting from './Teacher/TeacherProfileSetting';
import TeacherChangePassword from './Teacher/TeacherChangePassword';


// List Pages
import AllCourses from './AllCourses';
import PopularCourses from './PopularCourses';
import PopularTeachers from './PopularTeachers';
import CategoryCourses from './CategoryCourses';



import {Routes as Switch, Route} from 'react-router-dom';







function Main() {
  return (
    <div className="App">
      <Header/>
        <Switch>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:course_id' element={<CourseDetail />} />
            <Route path='/teacher-detail/:teacher_id' element={<TeacherDetail />} />
            <Route path='/all-courses' element={<AllCourses />} />
            <Route path='/all-chapters/:course_id' element={<AllChapters />} />
            <Route path='/edit-chapter/:chapter_id' element={<EditChapter />} />
            
            <Route path='/popular-courses' element={<PopularCourses />} />
            <Route path='/popular-teachers' element={<PopularTeachers />} />
            <Route path='/category/:category_slug' element={<CategoryCourses />} />
            
            <Route path='/user-login' element={<Login />} />
            <Route path='/user-register' element={<Register />} />
            <Route path='/user-dashboard' element={<Dashboard />} />
            <Route path='/my-courses' element={<MyCourses />} />
            <Route path='/favorite-courses' element={<FavoriteCourses />} />
            <Route path='/recommended-courses' element={<RecommendedCourses />} />
            <Route path='/profile-setting' element={<ProfileSetting />} />
            <Route path='/change-password' element={<ChangePassword />} />

            <Route path='/teacher-login' element={<TeacherLogin />} />
            <Route path='/teacher-logout' element={<TeacherLogout />} />
            <Route path='/teacher-register' element={<TeacherRegister />} />
            <Route path='/teacher-dashboard' element={<TeacherDashboard />} />
            <Route path='/teacher-courses' element={<TeacherCourses />} />
            <Route path='/add-course' element={<AddCourse />} />
            <Route path='/add-chapter/:course_id' element={<AddChapter />} />
            <Route path='/teacher-users' element={<UserList />} />
            <Route path='/tacher-profile-setting' element={<TeacherProfileSetting />} />
            <Route path='/teacher-change-password' element={<TeacherChangePassword />} />
        </Switch>
      <Footer/>
    </div>
  );
}

export default Main;
