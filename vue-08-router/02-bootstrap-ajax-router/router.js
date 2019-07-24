;
(function() {
    window.router = new VueRouter({
        routes: [
            { path: '/', component: appHome },
            {
                path: '/news',
                component: news,
                children: [
                    //这里的path可以写相对路径也可以写绝对路径，注意相对路径没有‘/’符号
                    {
                        path: 'sport',
                        component: sport,
                        children: [
                            { path: '/news/sport/detail/:id', component: sportDetail }
                        ]
                    },
                    {
                        path: '/news/tech',
                        component: tech,
                        children: [
                            { path: '/news/tech/detail/:id', component: techDetail }
                        ]
                    },
                    //这里的path: ''代表的就是进入news组件后默认的路径，redirect就是让默认页面重新导航到制定路径
                    { path: '', redirect: 'sport' }
                ]
            },
            { path: '/about', component: about }
        ],
        linkActiveClass: 'active'
    })
})()