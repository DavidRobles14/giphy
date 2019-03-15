// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */


$("#search-button").click(function(){
    var result = $("#search-term").val();
    var custom_api_url = "https://api.giphy.com/v1/gifs/search?q=" + result + "&rating=pg&api_key=dc6zaTOxFJmzC";
    $.ajax({
        url: custom_api_url,
        method: "GET",
        success: function(response) {
            // YOUR CODE GOES HERE
            console.log(response);
            var pic_url = response.data[0].images.original.url;
            $(".text-center").html("");
            $("#img").append("<img src = '" + pic_url + "'/>");
        }
    });
  
});

