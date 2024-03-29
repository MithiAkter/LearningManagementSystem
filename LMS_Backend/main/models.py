from django.db import models
from django.core import serializers
# import moviepy.editor

# Teacher Model

class Teacher(models.Model):
    full_name = models.CharField(max_length = 100)
    email = models.CharField(max_length = 100)
    password = models.CharField(max_length = 100,blank=True,null=True)
    qualification = models.CharField(max_length = 200)
    mobile_no = models.CharField(max_length = 20)
    profile_img=models.ImageField(upload_to='teacher_profile_imgs/',null=True)
    skills = models.TextField()
    varify_status=models.BooleanField(default=False)
    otp_digit = models.CharField(max_length = 20,null=True)

    class Meta:
        verbose_name_plural = "1. Teachers"
    
    #Total Teacher Courses
    def total_teacher_courses(self):
        total_courses=Course.objects.filter(teacher=self).count()
        return total_courses
    
    #Total Teacher Courses
    def total_teacher_chapters(self):
        total_chapters=Chapter.objects.filter(course__teacher=self).count()
        return total_chapters
    
    #Total Teacher Courses
    def total_teacher_students(self):
        total_students=StudentCourseEnrollment.objects.filter(course__teacher=self).count()
        return total_students

    def skill_list(self):
        skill_list=self.skills.split(',')
        return skill_list
    
    def __str__(self): 
        return self.full_name
    
# Course Category Model
class CourseCategory(models.Model):
    title = models.CharField(max_length = 150)
    description =  models.TextField()

    class Meta:
        verbose_name_plural = "2. Course Categories"
# Total Courses of this category
    def total_course(self):
        return Course.objects.filter(category=self).count()
         
# for showing the title in admin panel
    def __str__(self): 
        return self.title
    
    
# Course Model
class Course(models.Model):
    category = models.ForeignKey(CourseCategory, on_delete=models.CASCADE,related_name='category_courses')
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE,related_name='teacher_courses')
    title = models.CharField(max_length = 150)
    description =  models.TextField()
    featured_img=models.ImageField(upload_to='course_imgs/',null=True)
    techs =  models.TextField(null=True)
    course_views =  models.BigIntegerField(default=0)
    class Meta:
        verbose_name_plural = "3. Courses"

    def related_videos(self):
        related_videos=Course.objects.filter(techs__icontains=self.techs)
        return serializers.serialize('json',related_videos)
    
    def tech_list(self):
        tech_list=self.techs.split(',')
        return tech_list
    
    def total_enrolled_students(self):
        total_enrolled_students=StudentCourseEnrollment.objects.filter(course=self).count()
        return total_enrolled_students
    
    def course_rating(self):
        course_rating=CourseRating.objects.filter(course=self).aggregate(avg_rating=models.Avg('rating'))
        return course_rating['avg_rating']

    
    def __str__(self): 
        return self.title

# Chapter Model
class Chapter(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE,related_name='course_chapters')
    title = models.CharField(max_length = 150)
    description =  models.TextField()
    video=models.FileField(upload_to='chapter_videos/',null=True)
    remarks =  models.TextField(null=True)
    
    class Meta:
        verbose_name_plural = "4. Chapters"


#Student Model
class Student(models.Model):
    full_name = models.CharField(max_length = 100)
    email = models.CharField(max_length = 100)
    password = models.CharField(max_length = 100,null=True)
    username = models.CharField(max_length = 200)
    interested_categories = models.TextField()
    profile_img=models.ImageField(upload_to='student_profile_imgs/',null=True)
    varify_status=models.BooleanField(default=False)
    otp_digit = models.CharField(max_length = 20,null=True)

    def __str__(self): 
        return self.full_name
    
    #Total Enrolled Courses
    def enrolled_courses(self):
        enrolled_courses=StudentCourseEnrollment.objects.filter(student=self).count()
        return enrolled_courses
  
    #Total Favorite Courses
    def favorite_courses(self):
        favorite_courses=StudentFavoriteCourse.objects.filter(student=self).count()
        return favorite_courses
    
    #Completed Assignments
    def complete_assignments(self):
        complete_assignments=StudentAssignment.objects.filter(student=self,student_status=True).count()
        if complete_assignments>0:
            return complete_assignments
        else:
            return 0
    
    #Pending Assignments
    def pending_assignments(self):
        pending_assignments=StudentAssignment.objects.filter(student=self,student_status=False).count()
        if pending_assignments>0:
            return pending_assignments
        else:
            return 0
    

    class Meta:
        verbose_name_plural = "5. Students"

#Student Course Enrollment
class StudentCourseEnrollment(models.Model):
    course=models.ForeignKey(Course,on_delete=models.CASCADE,related_name='enrolled_courses')
    student=models.ForeignKey(Student,on_delete=models.CASCADE,related_name='enrolled_students')
    enrolled_time=models.DateTimeField(auto_now_add=True)

    
    class Meta:
        verbose_name_plural = "6. Enrolled Courses"
    
    def __str__(self): 
        return f"{self.course}-{self.student}"

#Student Favourite Course
class StudentFavoriteCourse(models.Model):
    course=models.ForeignKey(Course,on_delete=models.CASCADE)
    student=models.ForeignKey(Student,on_delete=models.CASCADE)
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE,null=True)
    status=models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "7. Student Favourite Course"
    
    def __str__(self): 
        return f"{self.course}-{self.student}"

        
#Course Rating and Reviews
class CourseRating(models.Model):
    course=models.ForeignKey(Course,on_delete=models.CASCADE)
    student=models.ForeignKey(Student,on_delete=models.CASCADE)
    rating=models.PositiveBigIntegerField(default=0)
    reviews=models.TextField(null=True)
    review_time=models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "8. Course Ratings"

    def __str__(self): 
        return f"{self.course}-{self.student}-{self.rating}"
    
#Course Rating and Reviews
class StudentAssignment(models.Model):
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE)
    student=models.ForeignKey(Student,on_delete=models.CASCADE)
    title=models.CharField(max_length = 200)
    detail=models.TextField(null=True)
    student_status=models.BooleanField(default=False,null=True)
    add_time=models.DateTimeField(auto_now_add=True)

    def __str__(self): 
        return f"{self.title}"
    
    class Meta:
        verbose_name_plural = "9. Student Assignments"

#Notification Model
class Notification(models.Model):
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE,null=True)
    student=models.ForeignKey(Student,on_delete=models.CASCADE,null=True)
    notif_subject=models.CharField(max_length = 200,verbose_name='Notification Subject',null=True)
    notif_for=models.CharField(max_length = 200,verbose_name='Notification for')
    notif_created_time=models.DateTimeField(auto_now_add=True)
    notifiread_status=models.BooleanField(default=False,verbose_name='Notification Status')

    class Meta:
        verbose_name_plural = "10. Notifications"

#Quiz Model
class Quiz(models.Model):
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE)
    title=models.CharField(max_length = 200)
    detail=models.TextField()
    add_time=models.DateTimeField(auto_now_add=True)

    def assign_status(self):
        return CourseQuiz.objects.filter(quiz=self).count()
    
    def __str__(self): 
            return f"{self.title}"
    
    class Meta:
        verbose_name_plural = "11. Quiz"

#Quiz Questions Model
class QuizQuestions(models.Model):
    quiz=models.ForeignKey(Quiz,on_delete=models.CASCADE)
    questions=models.CharField(max_length = 200)
    ans1=models.CharField(max_length = 200)
    ans2=models.CharField(max_length = 200)
    ans3=models.CharField(max_length = 200)
    ans4=models.CharField(max_length = 200)
    right_ans=models.CharField(max_length = 200)
    add_time=models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "12. Quiz Questions"

#Add Quiz to Course
class CourseQuiz(models.Model):
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE,null=True)
    course=models.ForeignKey(Course,on_delete=models.CASCADE,null=True)
    quiz=models.ForeignKey(Quiz,on_delete=models.CASCADE,null=True)
    add_time=models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "13. Course Quiz"

#Attempt quiz question by student
class AttemptQuiz(models.Model):
    student=models.ForeignKey(Student,on_delete=models.CASCADE,null=True)
    quiz=models.ForeignKey(Quiz,on_delete=models.CASCADE,null=True)
    question=models.ForeignKey(QuizQuestions,on_delete=models.CASCADE,null=True)
    right_ans=models.CharField(max_length = 200,null=True)
    add_time=models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = "14. Attempted Questions"

#Study Material
class StudyMaterial(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length = 150)
    description =  models.TextField()
    upload=models.FileField(upload_to='study_materials/',null=True)
    remarks =  models.TextField(null=True)
    
    def __str__(self): 
        return f"{self.title}"
    
    class Meta:
        verbose_name_plural = "15. Course Study Materials"