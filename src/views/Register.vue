<template>
    <AuthLayout>
      <div class="login-page-container">
        <img style="margin-bottom:30px" src="@/assets/icons/login.svg" alt="">
        <form @submit.prevent="register" class="login-form">
          <div class="error-text">{{error}} </div>
          <Field  @form="(pay) => form.name = pay"  icon="login" type="text" placeholder="Имя" />
          <Field  @form="(pay) => form.email = pay"  icon="login" type="email" placeholder="Email" />
          <Field  @form="(pay) => form.password = pay"  icon="password" placeholder="Пароль" />
          <button class="btn" type="submit"><span>Зарегистрироваться</span></button>
          <router-link to="/login" class="link">Уже есть аккаунт?</router-link>
        </form>
      </div>
    </AuthLayout>
</template>


<script>
import {mapMutations} from 'vuex'
import axios from 'axios'
export default {
  data:()=>({
    form:{},
    error:''
  }),
  methods:{
    ...mapMutations(['setAccessToken','setUser']),
    async register(){
      axios.post('https://floating-ocean-48488.herokuapp.com/register',this.form)
        .then(data=>{
         if(data.accessToken && data.user){
          this.setAccessToken(data.accessToken)
          this.setUser(data.user)
          this.$router.push('/')
        }
        })
        .catch(e=>{
           if(e.response){
            this.error = e.response.data.message
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



