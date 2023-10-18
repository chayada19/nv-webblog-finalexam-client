<template>
    <div>
        <h1>get all courses</h1>
        <div>
            <h2>จำนวนผู้ใช้ {{ courses.length }}</h2>
        </div>
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
            Courses: []
        };
    },
    methods: {

        logout() {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push({
                name: 'login'
            })
        },
        navigateTo(route) {
            this.$router.push(route)
        },
        async deleteCourse(course) {
            let result = confirm("Want of delete?")
            if (result) {
                try {
                    await CoursesService.delete(course)
                    this.refreshData();
                } catch (err) {
                    console.log(err);
                }
            }
        },
        async refreshData() {
            this.courses = (await CoursesService.index()).data;
        }

    },


    async created() {
        try {
            this.users = (await UsersService.index()).data;
        } catch (err) {
            console.log(err)
        }

    }
};
</script>
  
<style scoped>
.error {
    color: red;
}
</style>