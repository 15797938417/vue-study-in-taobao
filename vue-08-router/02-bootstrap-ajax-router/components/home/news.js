;
(function() {
    window.news = {
        template: `<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <div class="header clearfix">
      <nav>
        <ul class="nav nav-pills">
            <!--此处的to=''需要将path写完整，在router.js可以写相对路径，这里不行-->
            <router-link to="/news/sport" tag='li' ><a>体育</a></router-link>
            <router-link tag='li' to='/news/tech'><a>科技</a></router-link>
        </ul>
      </nav>
      <hr>
    </div>
    <router-view></router-view>
    
    	 
</div>`
    }
})()