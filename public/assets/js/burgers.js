// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devour-it").on("click", function (event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");

        var newBurgerState = {
            id: id,
            devoured: devoured
        };

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function () {
                console.log("changed burger devoured to: ", devoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger_id").val().trim(),
            devoured: false
        };

        // Send the POST request.
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function (data) {
                console.log("added a burger: " + data);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
