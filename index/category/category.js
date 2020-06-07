(function(){
    // category类目
    var itemTmpl = '<div class="category-item">'+
                        '<img class="item-icon" src=$url />'+
                        '<p class="item-name">$name</p>'+
                    '</div>';

    function initCategory() {
        $.get('../json/head.json', function(data){
            console.log(data);
            //获取8条数据
            var list = data.data.primary_filter.splice(0,8);
            list.forEach(function(item, index){
                //把itemTmpl里面的$url全部替换
                var str = itemTmpl.replace('$url',item.url).
                replace('$name',item.name);


                $('.category-content').append(str);

            });
        });
    }


    function addClick(){
        $('.category-content').on('click','.category-item', function(){
           alert(11);
        });
    }


    function init() {
        initCategory();
        addClick();
    }


    init();
})();
