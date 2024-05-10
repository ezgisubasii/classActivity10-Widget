$(document).ready(function() {
    var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    
    // move the focus to the first text box
    $("#arrival_date").focus();
    
    // the handler for the submit event of the form
    // executed when the submit button is clicked
    $("#reservation_form").submit(function(event) {

        console.log("d");
        var isValid = true;
        
        // validate the requested arrival date
        var arrivalDate = $("#arrival_date").val().trim();
        if (arrivalDate == "") {
            $("#arrival_date").next().text("This field is required.");
            isValid = false;
        } else {
            $("#arrival_date").next().text("");                
        }
        
        // validate the number of nights
        var nights = $("#nights").val().trim();
        if (nights == "") {
            $("#nights").next().text("This field is required.");
            isValid = false;
        } else if (isNaN($("#nights").val())) {
            $("#nights").next().text("This field must be numeric.");
            isValid = false;
        } else {
            $("#nights").next().text("");
        }

        // validate the name entry
        var name = $("#name").val().trim();
        if (name == "") {
            $("#name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#name").next().text("");
        }

        // validate the email entry with a regular expression
        var email = $("#email").val().trim();
        if (email == "") { 
            $("#email").next().text("This field is required.");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }

        // validate the phone number
        var phone = $("#phone").val().trim();
        if (phone == "") { 
            $("#phone").next().text("This field is required.");
            isValid = false; 
        } else {
            $("#phone").next().text("");
        }

        // if all fields are valid, let the form submit
        if (isValid) {
            // Formun gönderilmesine izin ver
            return true;
        } else {
            // Formun gönderilmesini engelle
            event.preventDefault();
            // Hatalı giriş alanlarına kaydırma (opsiyonel)
            $("html, body").animate({ scrollTop: $(".error").first().offset().top }, "slow");
            return false;
        }
    });

    // Submit Request butonuna tıklanınca formu gönder
    $("#submit").click(function(event) {
        console.log("dsd");
        
        $("#reservation_form").submit();
    });

    $(function() {
        $("#tabs").tabs();
        $("#arrival_date").datepicker({
            minDate: 0,
            maxDate: "+90d"
        });
        $("#policies").click(function() {
            $("#dialog").dialog({
                modal: true
            });
        });
    });
});
