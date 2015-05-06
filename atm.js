

    $(document).ready(function () {
        var request;
        var account:
        $('#deposit1').click( function() { 
            request = $('#amount1').val();
            console.log(request);
            $("#balance1").html(request);
            alert(request);
        });  
    });



