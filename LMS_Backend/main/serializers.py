from rest_framework import serializers
from rest_framework.response import Response
from . import models

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Teacher
        fields = ['id' , 'full_name' ,'email' , 'password' , 'qualification' , 'mobile_no' , 'skills','profile_img','teacher_courses','skill_list']
        depth=1
        # def __init__(self, *args, **kwargs):
        #     super(TeacherSerializer, self).__init__(*args, **kwargs)
        #     request=self.context.get('request')
        #     self.Meta.depth = 0
        #     if request and request.method == 'GET':
        #         self.Meta.depth=1
#teacher dashboard
class TeacherDashboardSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Teacher
        fields = ['total_teacher_courses' , 'total_teacher_students' ,'total_teacher_chapters']



class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=models.CourseCategory
        fields = ['id' , 'title' , 'description']

# class CourseSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=models.Course
#         fields = [
#             'id' ,
#             'category' , 
#             'teacher', 
#             'title',
#             'description',
#             'featured_img',
#             'techs',
#             'course_chapters',
#             'related_videos',
#             'tech_list',
#             'total_enrolled_students',
#             'course_rating'
#             ]
        # depth=1
        # for fetching course and its all relationship
        # def __init__(self, *args, **kwargs):
        #     super(CourseSerializer, self).__init__(*args, **kwargs)
        #     request=self.context.get('request')
        #     self.Meta.depth = 0
        #     if request and request.method == 'GET':
        #         self.Meta.depth=1
#After modified
class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Course
        fields = [
            'id',
            'category',
            'teacher',
            'title',
            'description',
            'featured_img',
            'techs',
            'course_chapters',
            'related_videos',
            'tech_list',
            'total_enrolled_students',
            'course_rating'
        ]

    def __init__(self, *args, **kwargs):
        # Call the parent class's constructor
        super(CourseSerializer, self).__init__(*args, **kwargs)

        # Get the request from the context
        request = self.context.get('request')

        # Determine the depth based on the request method
        if request and request.method == 'GET':
            self.Meta.depth = 1  # Use depth=1 for GET requests
        else:
            self.Meta.depth = 0  # Use depth=0 for other requests

class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Chapter
        fields = ['id' , 'course', 'title','description','video','remarks']
        # depth=1
        def __init__(self, *args, **kwargs):
            super(ChapterSerializer, self).__init__(*args, **kwargs)
            request=self.context.get('request')
            self.Meta.depth = 0
            if request and request.method == 'GET':
                self.Meta.depth=1


            


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Student
        fields = ['id' , 'full_name' , 'email' , 'password' , 'username' , 'interested_categories','profile_img']

# class StudentCourseEnrollSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=models.StudentCourseEnrollment
#         fields = ['id' , 'course' , 'student','enrolled_time']
#         depth=1
#         def __init__(self, *args, **kwargs):
#             super(StudentCourseEnrollSerializer, self).__init__(*args, **kwargs)
#             request=self.context.get('request')
#             self.Meta.depth = 0
#             if request and request.method == 'GET':
#                 self.Meta.depth=1

#After modified
class StudentCourseEnrollSerializerCreate(serializers.ModelSerializer):
    class Meta:
        model = models.StudentCourseEnrollment
        fields = ['id', 'course', 'student', 'enrolled_time']


class StudentCourseEnrollSerializerView(serializers.ModelSerializer):
    class Meta:
        model = models.StudentCourseEnrollment
        fields = ['id', 'course', 'student', 'enrolled_time']
        depth = 2  # Set depth for viewing


class StudentCourseEnrollSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.StudentCourseEnrollment
        fields = ['id', 'course', 'student', 'enrolled_time']

    def __init__(self, *args, **kwargs):
        super(StudentCourseEnrollSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        
        if request and request.method == 'GET':
            self.Meta.depth = 2  # Set depth for viewing
        else:
            self.Meta.depth = 0  # Don't set depth for other methods


class CourseRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.CourseRating
        fields = ['id' , 'course' , 'student','rating','reviews','review_time']
        
        def __init__(self, *args, **kwargs):
            super(CourseRatingSerializer, self).__init__(*args, **kwargs)
            request=self.context.get('request')
            self.Meta.depth = 0
            if request and request.method == 'GET':
                self.Meta.depth=1
