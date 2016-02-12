$.fn.textcounter = function(conf) {
    var obj = $(this);
    //find maxlength value. First check field's data-count-maxlength then conf.maxlength
    var maxLength = (obj.data("count-maxlength")?obj.data("count-maxlength"):(typeof conf != "undefined" && conf.maxlength?conf.maxlength:80));
    //If reverse is set true, counter will count to zero else zero to maxlength.
    var reverse = true;
    if(typeof conf != "undefined" && typeof conf.reverse != "undefined") {
        reverse = conf.reverse;
    } else if(typeof obj.data("count-reverse") != "undefined") {
        reverse = obj.data("count-reverse");
    }
    var countContainer = document.createElement("div");
    countContainer.setAttribute("class", "textcounter-count");
    countContainer.innerHTML = (obj.val()?(reverse?maxLength - obj.val().length:obj.val().length):(reverse?maxLength:0));
    $(this).after(countContainer);
    
    obj.on("keyup", function() {
        var next = $(this).next();
        var value = $(this).val();
        if(value.length >= maxLength) {
            $(this).val(function(){
                return value.substr(0, maxLength);
            });
            next.html((reverse?0:maxLength));
            return;
        }
        next.html((reverse?maxLength - value.length:value.length));
    });
};