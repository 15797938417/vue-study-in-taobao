;
(function() {
    window.appHome = {
        template: `<div>

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
                emps: [
                    { id: 1, name: '马云1', salary: '20000' },
                    { id: 2, name: '马云2', salary: '20000' },
                    { id: 3, name: '马云3', salary: '20000' },
                    { id: 4, name: '马云4', salary: '20000' },
                    { id: 5, name: '马云5', salary: '20000' },
                    { id: 6, name: '马云6', salary: '20000' },
                ]
            }
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