Vue.component('test-component', {
    data: function () {
        return {
            user: [
                { nama: 'MoeXfire', umur: 26 },
                { nama: 'Tokek Bersayap', umur: 28 },
                { nama: 'Kagura Ayaka', umur: 30 }
            ]
        }
    },
    template: `<div>
                    <div class="row">
                                <div class="col-6">
                                    <table class="table">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col">NO</th>
                                                <th scope="col">Nama</th>
                                                <th scope="col">Umur</th>
                                            </tr>
                                        </thead>
                                        <tbody class="user" v-for="(user, index) in user">
                                            <tr>
                                                <th>{{index+1}}</th>
                                                <td>{{user.nama}}</td>
                                                <td>{{user.umur}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                </div>`
})


const List = { template: ' <test-component></test-component>' }
const Home = { template: '<div><h1>HOME</h1></div>' }

const routes = [
    { path: '/list', component: List },
    { path: '/', component: Home }
]

const router = new VueRouter({
    routes
})


new Vue({
    router
}).$mount('#app')