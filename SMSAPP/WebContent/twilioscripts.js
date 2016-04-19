$(document).ready(function() {
        $("#btnSubmit").click(function(){
        // Your Twilio credentials
            var SID = "AC083434eed12da26597e09a8b5b517192";
            var Key = "b5f2f568a2439f30367f49dddc8885a4";
            var number = $("#number").val();
            var message = $('#message').val();
            $.ajax({
                type: 'POST',
                url: 'https://api.twilio.com/2010-04-01/Accounts/' + SID + '/Messages.json',
                data: {
                    "To" : '+91'+number,
                    "From" : '+12016902194',
                    "Body" : message
                },
                beforeSend: function (xhr) {
                    xhr.setRequestHeader ("Authorization", "Basic " + btoa(SID + ':' + Key));
                },
                success: function(data) {
                    console.log(data);
                                                                                alert('Message Sent Successfully');
                },
                error: function(data) {
                    console.log(data);
                                                                                alert('Please Try again Some error in sending');
                }
            });
        });
    });