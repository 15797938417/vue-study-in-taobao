;
(function() {
    window.appHome = {
        template: `
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">     
        <!--右边上半区域-->
        <h1 class="page-header">Dashboard</h1>
        
        <home-dashboard :hobbies='hobbies' @delete_hobby='deleteHobby'></home-dashboard>
        <!--右边下半区域-->
        <h2 class="sub-header">Section title</h2>
        <section-title :emps='emps' :deleteList='deleteList'></section-title>
        <slot name='headerName'></slot>
    </div>`,
        components: {
            'home-dashboard': dashboard,
            'section-title': sectionTitle

        },
        data() {
            return {
                hobbies: ['看书', '台球', '睡觉', '撸代码'],
                emps: []
            }
        },
        created() {
            axios.get('http://127.0.0.1:5500/vue-08-router/02-bootstrap-ajax-router/components/home/emps.json')
                //这里函数一定要用箭头函数简写形式，不然的话在函数里面this代表的就是window，
                //如果用了如下的简写形式，那么this代表的就是此vue实例
                .then(response => { //function(response) {
                    // handle success
                    console.log(response);
                    this.emps = response.data
                })
                .catch(function(error) {
                    // handle error
                    console.log(error);
                })
                .finally(function() {
                    // always executed
                });
        },
        methods: {
            deleteList(index) {
                this.emps.splice(index, 1)
            },
            deleteHobby(index) {
                this.hobbies.splice(index, 1)
            }
        },


    }
})()