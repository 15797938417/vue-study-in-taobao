;
(function() {
    window.list = {
        template: ` 
        <tbody>
            <tr v-for='(emp,index) in emps' :key='emp.id'>
                <td>{{emp.id}}</td>
                <td>{{emp.name}}</td>
                <td v-text='emp.salary'>ipsum</td>
                <td><a @click='deletelist(index)' >删除</a></td>
            </tr>
        </tbody>
       `,
        props: {
            emps: Array,
            deleteList: Function,
            index: Number
        },
        methods: {
            deletelist(index) {
                //此处的index千万不要跟this.index混淆了！！！
                this.deleteList(index)
            }
        },
    }
})()