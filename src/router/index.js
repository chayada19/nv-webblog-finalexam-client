import Vue from 'vue'
import Router from 'vue-router'
import CoursesIndex from '@/components/Course/Index'
import CourseUpdate from '@/components/Course/UpdateCourse'
import CourseRead from '@/components/Course/Readcourse'
import CourseCreate from '@/components/Course/CreateCourse'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/course/create',
      name: 'course-create',
      component: CourseCreate
    },
    {
      path: '/course/update/:courseId',
      name: 'course-update',
      component: CourseUpdate
    },
    {
      path: '/course/:courseId',
      name: 'course',
      component: CourseRead
    },
    {
      path: '/courses',
      name: 'courses',
      component: CoursesIndex
    },
    {
      path: '/course/delete/:courseId',
      name: 'courses',
      component: CoursesDelete
    },

    

  ]
})
