<template>
  <div class="home">
   {{users.users}}
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: 'Home',
  data:()=>({
    data:null
  }),
  methods:{
    ...mapActions(['fetchUsers'])
  },
  computed:{
    ...mapState(['users'])
  },
  async mounted(){
     await this.fetchUsers()
  }
}
</script>
