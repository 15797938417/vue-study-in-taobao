//第一种方法，通过import导入完整版vue.js
// import Vue from 'vue/dist/vue.js'
//第二种方法，通过配置webpack文件
//第三种方法，最优方法，用render函数代替template
import Vue from 'vue'
import App from './App.vue'

// new Vue({
//     el: '#app',
//     template: '<App/>',
//     components: { App }
// })
new Vue({
    render: h => h(App)
}).$mount('#app')