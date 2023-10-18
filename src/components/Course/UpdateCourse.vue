<template>
  <div>
      <h1>edit 1 course</h1>
     
      <div v-for="i in courses" v-bind:key="i.id">
          <div>title: {{ i.title }}</div>
          <div>instructor: {{ i.instructor }}</div>
          <div>description: {{ i.description }}</div>
          <div>total_student: {{ i.total_student.length }}</div>
          <div>status: {{ i.status }}</div>
          <div>type: {{ i.type }}</div>

          <div><button v-on:click="navigateTo('/course/' + i.id)">all courses</button></div>
          <div><button @click="navigateTo('/course/edit/' + i.id)">edit course</button></div>
          <div><button @click="deleteCourse(i)">delete course</button></div>
          <div><button v-on:click="logout">Logout</button></div>
          <hr>
      </div>
  </div>
</template>

<script>
import CoursesService from "@/services/CoursesService";
export default {
  data() {
    return {
      course: {
        title: "",
        instructor: "",
        description: "",
        total_student: "",
        status: "active"
      }
    };
  },
  methods: {
    async editCourse() {
      try {
        await CoursesService.put(this.course);
        this.$router.push({
          name: "courses"
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  async created() {
    try {
      let courseId = this.$route.params.courseId;
      this.course = (await CoursesService.show(courseId)).data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
<style scoped></style>
