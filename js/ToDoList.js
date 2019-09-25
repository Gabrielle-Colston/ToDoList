$("li").on("click", function() {
    $(this).toggleClass("completed");
})

$("span").on("click", function(e) {
    $(this).parent().fadeOut(500,
        function() {
            $(this).remove();
        });

    e.stopPropagation();
})