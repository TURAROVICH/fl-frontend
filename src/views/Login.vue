<template>
    <AuthLayout>
      <div class="login-page-container">
        <img style="margin-bottom:30px" src="@/assets/icons/login.svg" alt="">
        <form @submit.prevent="login" class="login-form">
          <div class="error-text">{{error}} </div>
          <Field @form="(pay) => form.email = pay" icon="login" type="email" placeholder="Email"/>
          <Field  @form="(pay) => form.password = pay" icon="password" placeholder="Пароль" />
          <button class="btn" type="submit"><span>Авторизоваться</span></button>
          <router-link to="/register" class="link">Еще нет аккаунта?</router-link>
        </form>
      </div>
    </AuthLayout>
</template>


<script>
import axios from 'axios'
import {mapMutations} from 'vuex'
export default {
  data:()=>({
    form:{},
    error:''
  }),
  methods:{
    ...mapMutations(['setAccessToken','setUser']),
    login(){
        axios.post('https://floating-ocean-48488.herokuapp.com/login',this.form)
        .then(({data})=>{

          if( data.accessToken &&  data.user){
            this.setAccessToken(data.accessToken)
            this.setUser(data.user)
            this.$router.push('/')
          }
        })
        .catch(e=>{
          if(e.response){
          this.error = e.response.data.message
          console.log(e.response.data);
          return
          }
          console.error('error:',e.message);
        })
    }
  }
}
</script>


<style lang="scss" scoped>
.login-page-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-form{
  display: flex;
  flex-direction: column;
  gap :20px;
}
.error-text{
  text-align: center;
  color:#fff;
}

</style>



