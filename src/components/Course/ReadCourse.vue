<template>
  <div>
      <h1>get 1 course</h1>
     
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
          Courses: null
      };
  },
  async created() {
    let userId = this.$route.params.userId;
    this.user = (await UserService.show(userId)).data
    console.log(this.userId)
  }
};
</script>
<style scoped></style>