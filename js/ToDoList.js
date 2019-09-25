$("ul").on("click","li", function() {
    $(this).toggleClass("completed");
})

$("ul").on("click","span", function(e) {
    $(this).parent().fadeOut(500,
        function() {
            $(this).remove();
        });

    e.stopPropagation();
})

$("input[type='text']").on("keypress", function(e) {
    if (e.which === 13) {
        var newLi = "<li><span>X </span>" + $(this).val() + "</li>"
        $("ul").append(newLi);

        $(this).val("");
    };
})