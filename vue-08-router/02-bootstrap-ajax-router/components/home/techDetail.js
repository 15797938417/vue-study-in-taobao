;
(function() {
    window.techDetail = {
        template: `
        <div class="jumbotron">
            <h2>{{techDetail.title}}</h2>
            <p>{{techDetail.content}}</p>
        </div>`,
        methods: {
            getRouteId() {
                // 将路径变量值赋值给id
                this.id = this.$route.params.id - 0
                    // 1. 异步获取所有数据
                axios.get('http://127.0.0.1:5500/vue-08-router/02-bootstrap-ajax-router/db/tech.json')
                    .then(response => {
                        const techArr = response.data
                            // 2. 通过 id 获取指定数据
                            // find 会将满足条件的数据返回，仅返回一条
                        this.techDetail = techArr.find((detail) => {
                            // this 要代表当前组件实现，则要使用箭头函数
                            return detail.id === this.id
                        })
                    })
                    .catch(error => {
                        alert(error.message)
                    })
            }

        },
        //此处用props传输数据在created()钩子函数中无法生效是因为在created阶段，还未进行模板的渲染与数据的挂载
        //所以那时候props还没有传输数据过来
        // props: {
        //     sportDetails: Array
        // },
        data() {
            return {
                id: null,
                techDetail: {},

            }
        },
        created() {

            this.getRouteId()
        },
        watch: {
            '$route': function() {
                this.getRouteId()
            }
        },
    }
})()