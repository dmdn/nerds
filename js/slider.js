$(function () {
    $("#slider-range").slider({
        // orientation: "vertical",
        step: 100,
        range: true,
        min: 0,
        max: 20000,
        values: [0, 15000],
        slide: function (event, ui) {
            $("#amount_1").val(ui.values[0]);
            $("#amount_2").val(ui.values[1]);
        }
    });
    $("#amount_1").val($("#slider-range").slider("values", 0));
    $("#amount_2").val($("#slider-range").slider("values", 1));

    // Change the location of the slider when you enter data into the first input element
    $("input#amount_1").change(function () {
        var value1 = $("input#amount_1").val();
        var value2 = $("input#amount_2").val();
        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $("input#amount_1").val(value1);
        }
        $("#slider-range").slider("values", 0, value1);
    });

    // Change the location of the slider when entering data into the second input element
    $("input#amount_2").change(function () {
        var value1 = $("input#amount_1").val();
        var value2 = $("input#amount_2").val();

        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $("input#amount_2").val(value2);
        }
        $("#slider-range").slider("values", 1, value2);
    });

    // Input field filtering
    jQuery('#amount_1, #amount_2').keypress(function (event) {
        var key, keyChar;
        if (!event) var event = window.event;

        if (event.keyCode) key = event.keyCode;
        else if (event.which) key = event.which;

        if (key == null || key == 0 || key == 8 || key == 13 || key == 9 || key == 46 || key == 37 || key == 39) return true;
        keyChar = String.fromCharCode(key);

        if (!/\d/.test(keyChar)) return false;

    });

});