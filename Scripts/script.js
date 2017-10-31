$(function() {
    //fade in page on load
    $('#content').hide().delay(200).fadeIn(240);  

    var $row = $('.inn'); 
    var size = $row.length;  
    var i =0;
    var interval = setInterval(move,200);
    function move() {
        if (i > size-1) {
            clearInterval(interval);
        } else { 
            $row.eq(i).delay(100).animate({width:$row.eq(i).text(), opacity:1})
            i++; 
        }
    }

}); 




