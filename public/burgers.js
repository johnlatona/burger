$(document).ready(function() {
    $(".devour-button").on("click", function() {
        var id = $(this).data("id");
        
        var newDevouredState = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(function() {
            console.log("changed devoured state to 0");
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: $("#new-burger").val().trim(),
            devoured: 0
        };

        $.ajax("api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("created new burger");
            location.reload();
        });
    });
});