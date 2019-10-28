Vue.component('list-component', {
    data: function () {
        return {
            user: [
                { nama: 'Andy Reztyan', umur: 26 },
                { nama: 'Bambang Gentolet', umur: 28 },
                { nama: 'Ahmad Tamvan', umur: 30 }
            ]
        }
    },
    template: `<div>
                    <div class="row">
                                <div class="col-6">
                                <h1>TEAM - A</h1>
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


Vue.component('home-component', {
    data: function () {
        return {
            gambar: "./img.png",
            Fb: 'https://www.facebook.com/',
            IG: 'https://www.instagram.com/'
        }
    },
    template: `<div>
                    <h1>HOME</h1>
                    <br>
                    <img v-bind:src="gambar">
                    <p>Conect Us: </p>
                    <a v-bind:href="Fb">Facebook</a>
                    <a v-bind:href="IG">Instagram</a>
                </div>`
})


const List = { template: ' <list-component></list-component>' }
const Home = { template: '<home-component></home-component>' }

const routes = [
    { path: '/list', component: List },
    { path: '/', component: Home }
]

const router = new VueRouter({
    routes
})


var vue = new Vue({
    router,
    el: '#app',
    data: {
        list_vue: [
            { materi: "Event" },
            { materi: "Model Binding" },
            { materi: "Render List" },
            { materi: "Component" },
        ]
    }

}).$mount('#app')