<template>
    <div class="input">
        <img v-if="icon==='login'" src="@/assets/icons/user.png" alt="">
        <img v-if="icon==='password'" src="@/assets/icons/lock.png" alt="">

        <input v-model="input" :type="type" :placeholder="placeholder" required>
    </div>
</template>

<script>
export default {
    props:{
        icon:{
            type:String,
            default:'',
            required:true
        },
        type:{
            type:String,
            default:'text'
        },
        placeholder:{
            type:String,
            default:''
        }
    },
    data:()=>({
        input:''
    }),
    watch:{
        input(n){
            this.$emit('form',n)
        }
    }
    
}
</script>

<style lang="scss" scoped>
.input{
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    min-height: 45px;
    width: 300px;
    input{
        height: 40px;
        outline: none;
        border: none;
        width: 90%;
        font-weight: 300;
        font-size: 14px;
        line-height: 20px;
        text-transform: uppercase;
        color: #fff;
        background: transparent;
        padding: 0 20px;
    }
    ::placeholder{
        color:#fff;
    }
}
</style>