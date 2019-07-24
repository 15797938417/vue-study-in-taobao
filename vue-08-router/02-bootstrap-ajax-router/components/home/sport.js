;
(function() {
    window.sport = {
        template: `<!--体育栏目-->
        <div>
            <ul>
                <li v-for='(sport,index) in sportDetails' :key='sport.id'>
                    
                    <router-link :to="'/news/sport/detail/'+sport.id">{{sport.title}}</router-link>
                </li>
               
            </ul>
            <!--详情-->
            <router-view ></router-view>
        </div>  `,
        data() {
            return {
                sportDetails: []
            }
        },
        created() {
            axios.get('http://127.0.0.1:5500/vue-08-router/02-bootstrap-ajax-router/db/sport.json')
                //这里函数一定要用箭头函数简写形式，不然的话在函数里面this代表的就是window，
                //如果用了如下的简写形式，那么this代表的就是此vue实例
                .then(response => { //function(response) {
                    // handle success
                    console.log(response);
                    this.sportDetails = response.data
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