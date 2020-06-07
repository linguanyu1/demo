
(function(){
    // 订单详情模版

    var itemTmpl = '<div data-id="$id" class="menu-item">'+
                        '<img class="img" src=$picture />'+
                        '<div class="menu-item-right">'+
                            '<p class="item-title">$name</p>'+
                            '<p class="item-desc two-line">$description</p>'+
                            '<p class="item-zan">$praise_content</p>'+
                            '<p class="item-price">¥$min_price<span class="unit">/$unit</span></p>'+
                        '</div>'+
                        '<div class="select-content">'+
                            '<div class="minus"></div>'+
                            '<div class="count">$chooseCount</div>'+
                            '<div class="plus"></div>'+
                        '</div>'+
                    '</div>';

    var list = null;

    /**
     * 渲染评价按钮
     * @param {*} data 
     */
    function getComment(data){
        let evaluation = !data.is_comment;
        if (evaluation) {
            return '<div class="evaluation clearfix">'+
                    '<div class="evaluation-btn">评价</div>'+
                '</div>';
            
        }

        return '';
    }

    /**
     * 渲染列表
     * @param [*] array 
     */
    function initRightItem(list) {
        $('.right-list-inner').html('');

        list.forEach(function(item, index){
            // console.log(item.chooseCount);
            if(!item.chooseCount) {
                item.chooseCount = 0;
            }
            var str = itemTmpl.replace('$picture',item.picture)
            .replace('$id',item.id)
            .replace('$name',item.name)
            .replace('$description',item.description)
            .replace('$praise_content',item.praise_content)
            .replace('$min_price',item.min_price)
            .replace('$unit',item.unit)
            .replace('$chooseCount',item.chooseCount);
            
            var $str = $(str);

            $str.data('itemData',item);

            $('.right-list-inner').append($str);

        });
    }

    /**
     * 渲染标题
     * @param [*] array 
     */
    function initRightTitle(str) {


        $('.right-title').text(str);
    }


    function addClick(){
        $('.menu-item').on('click','.plus', function(e){
            
            var $count = $(e.currentTarget).parent().find('.count');
            $count.text(parseInt($count.text()||'0')+1);

            var $item = $(e.currentTarget).parents('.menu-item').first();

            var itemData = $item.data('itemData');

            // window.ShopBar.addItems(itemData);

            itemData.chooseCount = itemData.chooseCount +1;

            window.ShopBar.renderItems();


        });
        $('.menu-item').on('click','.minus', function(e){
            
            var $count = $(e.currentTarget).parent().find('.count');
            var val = Math.max((parseInt($count.text()||'0')-1),0);
            
            if ($count.text() == 0) return;
            var $item = $(e.currentTarget).parents('.menu-item').first();

            var itemData = $item.data('itemData');

            // window.ShopBar.minusItem(itemData);

            $count.text(val);

            itemData.chooseCount = itemData.chooseCount -1;
            window.ShopBar.renderItems();
        });
    }

    /**
     * @constructor init
     * @description 列表单个组件
     */
    var refresh = function (data) {

        initRightItem(data.spus || []);
        initRightTitle(data.name);
        addClick();
    }

    window.Right = {
        refresh: refresh
    };


})();
