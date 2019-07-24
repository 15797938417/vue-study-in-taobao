;
(function() {
    let vm = new Vue({
        el: '#app',
        router,
        components: {
            App
        },
        //<app></app>可以简写为<app/>
        //此处的template的内容是用来替换当前vue指定el的id的元素
        //目前template共有三种用法：1.<template></template>标签 2.在components里面作为属性用来装代码 3.其实也是装代码，不过是不需要调用，直接将vue指定的元素替换
        template: '<app></app>',

    })
})()