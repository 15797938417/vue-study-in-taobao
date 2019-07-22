;
(function() {
    window.sectionTitle = {
        template: `
        <div class="table-responsive">
        <table class="table table-striped" >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Handle</th>
                </tr>
            </thead>
            
                <section-list   :emps='emps' :deleteList='deleteList'></section-list>
            
        </table>
    </div>`,
        props: {
            emps: Array,
            deleteList: Function
        },
        components: {
            'section-list': list
        },
        // data() {
        //     return emps
        // }
    }
})()