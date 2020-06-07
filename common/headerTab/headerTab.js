
(function(){


    var itemTmpl = '<a class="$key tab-item" href="$key.html">$text</a>';


    function init(){
        var items = [{
            key: 'menu',
            text: '点菜'
        },{
            key: 'comment',
            text: '评价'
        },{
            key: 'restanurant',
            text: '商家'
        }];

        var str = '';

        items.forEach(function(item, index){
            str += itemTmpl.replace('$key',item.key)
                    .replace('$text',item.text);
        });

        $('.tab-bar').append(str);

        var arr = window.location.pathname.split('/');
        var page = arr[arr.length-1].replace('.html','');

        $('a.'+page).addClass('active');
    }


    init();



})();
