
      $(document).ready(function() {
                               
                                                $("#btnSubmit").click(function(){
                                                                var number = $(':input[type="number"]').val();
                                                                var message = $('#message').val();
                                                                $.ajax({
                                                                type: 'POST',
                                                                url: 'http://api.clickatell.com/http/sendmsg?user=rahulrsingh09&password=EgQJOJZWVSSbPX&api_id=3597527&to=91'+number+'&text='+message,              
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