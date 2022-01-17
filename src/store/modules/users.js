import store from '@/store'
export default {
    state:{
        users:[]
    },
    mutations:{
        setUsers(state,users){
            state.users = users.users
        }
    },
    actions:{
       async fetchUsers({commit}){
            try{
                let data = await fetch('https://floating-ocean-48488.herokuapp.com/users', {
                    method: 'GET',
                    mode: 'cors',
                    headers:{
                    'Content-Type': 'application/json',
                    "Authorization" : `Bearer ${store.state.accessToken}`
                    },
                    body: JSON.stringify(this.form) 
                })
                data = await data.json()
                commit('setUsers',data)
                if(data.accessToken){
                    store.commit('setAccessToken',data.accessToken)
                }
            }catch(e){
                    console.log(e);
                    commit('setUsers',[])
            }
        }
    },
    getters:{
        users:s=>s.users
    }
}