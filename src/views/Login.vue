<template>
    <AuthLayout>
      <div class="login-page-container">
        <img style="margin-bottom:30px" src="@/assets/icons/login.svg" alt="">
        <form @submit.prevent="login" class="login-form">
          <div class="error-text">{{error && error.message}} </div>
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
    async login(){
      try{
        let login = await axios.post('https://floating-ocean-48488.herokuapp.com/login',this.form)
        let data =  await login.data
        this.error =await  data.message
        if(await data.accessToken && await data.user){
          this.setAccessToken(data.accessToken)
          this.setUser(data.user)
          this.$router.push('/')
        }
      }catch(e){
        console.error('error:',e);
      }
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



