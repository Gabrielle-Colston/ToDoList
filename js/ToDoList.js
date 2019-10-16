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
        var newLi = "<li><span><i class='fas fa-trash-alt'></i></span>" + $(this).val() + "</li>"
        $("ul").append(newLi);

        $(this).val("");
    };
})

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
})