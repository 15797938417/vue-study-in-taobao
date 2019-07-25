;
(function() {
    window.tech = {
        template: `<!--科技栏目-->
        <div>
            <ul v-for='tech in techArr' :key='tech.id'>
                <li>
                    <span>{{tech.title}} </span>
                    <router-link :to="'/news/tech/detail/'+tech.id" tag='button' active-class='btn  btn-default btn-xs' exact> 查看</router-link>
                    <button @click='pushTech(tech.id)' class="btn  btn-default btn-xs">查看(Push)</button>&nbsp;
                    <button @click='replaceTech(tech.id)' class="btn btn-default btn-xs">查看(replace)</button>
                </li>
            </ul>
            <!--详情-->
            <router-view></router-view>
        </div>	`,
        data() {
            return {
                techArr: []
            }
        },
        methods: {
            pushTech(id) {
                this.$router.push('/news/tech/detail/' + id)
            },
            replaceTech(id) {
                //此处${id}是ES6的简写
                this.$router.replace(`/news/tech/detail/${id}`)
            }
        },

        created() {
            axios.get('http://127.0.0.1:5500/vue-08-router/02-bootstrap-ajax-router/db/tech.json')
                //这里函数一定要用箭头函数简写形式，不然的话在函数里面this代表的就是window，
                //如果用了如下的简写形式，那么this代表的就是此vue实例
                .then(response => { //function(response) {
                    // handle success
                    console.log(response);
                    this.techArr = response.data
                })
                .catch(function(error) {
                    // handle error
                    console.log(error);
                })
                .finally(function() {
                    // always executed
                });
        },
    }
})()