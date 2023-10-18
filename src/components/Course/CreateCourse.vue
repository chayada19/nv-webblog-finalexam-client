<template>
  <div>
    <h1>create 1 course</h1>
    <div v-on:submit.prevent="createUser">
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
import UsersService from "@/services/UserService";

export default {
  data() {
    return {
      user: {
        name: "",
        lastname: "",
        email: "",
        password: "",
        status: "active"
      }
    };
  },
  methods: {
    async createUser() {
      try {
        await UsersService.post(this.user);
        this.$router.push({
          name: "users"
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style scoped></style>
 