$(function(){
    var $mainmenuItems = $("#main-menu ul").children("li"),
    total = $mainmenuItems.length,
        openIndex = 2,
        init = function(){
            bindEvents();
        if(validIndex(openIndex))
            {
                animate($mainmenuItems.eq(openIndex),true,700);
            }
        };
    bindEvents = function(){
        $mainmenuItems.children(".image").click(function(){
                var newIndex = $(this).parent().index(),
                $items = $mainmenuItems.eq(newIndex);
                if(openIndex === newIndex)
                {
                    animate($items,false,250);
                    openIndex = -1;
                }else
                {
                    if(validIndex(newIndex))
                        {
                            animate($mainmenuItems.eq(openIndex),false,250);
                            openIndex = newIndex;
                            animate($items,true,250);
                        }
                }   
            }); 
    }
    validIndex = function(indexToceck)
    {
        return (indexToceck >= 0) && (indexToceck <total );
    }
    animate = function($items,bool,speed){
        var $colorImage = $items.find(".color"),
        paraItems = bool ? {width:"420px"}:{width:"140px"},
        ColorImageParm = bool ? {left : "0px"}:{left : "140px"}
        $colorImage.animate(ColorImageParm,speed);
        $items.animate(paraItems,speed);
    }
    
    init();
});