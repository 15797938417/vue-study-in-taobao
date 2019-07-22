;
(function() {
    window.App = {
        template: `<div>
        <!--头部导航区域-->
        <app-navbar></app-navbar>

        <!--核心区域:分左右两边-->
        <div class="container-fluid">
            <div class="row">

                <!--左边菜单栏区域-->
                <app-leaf></app-leaf>

                <!--右边主页面区域: 分上下两个区域-->
                <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                    
                    <app-home>
                        <h1 class="page-header" slot='headerName' style='color:red'>{{msg}}</h1>
                    </app-home>
                </div>
            </div>
        </div>
        </div>
        `,
        data() {
            return { msg: 'this is a slot test' }
        },
        components: {
            //驼峰写法和横线写法等效：AppNavbar===app-navbar
            AppNavbar: appNavbar,
            'app-leaf': appLeaf,
            'app-home': appHome,
        }
    }
})()