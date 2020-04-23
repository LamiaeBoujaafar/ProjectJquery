$(function(){
    var $mainmenuItems = $("#main-menu ul").children("li"),
    total = $mainmenuItems.length,
        openIndex = -1,
        init = function(){
            $mainmenuItems.children(".image").click(function(){
                var newIndex = $(this).parent().index(),
                $items = $mainmenuItems.eq(newIndex),
                $colorImage = $items.find(".color");
                $colorImage.animate({left : "0px"},250);
                $items.animate({width:"420px"},250);
                openIndex = newIndex;
                
                
            });
        };
    init();
});