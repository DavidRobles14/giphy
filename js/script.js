// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */


$("#search-button").click(function(){
    var result = $("#search-term").val();
    var custom_api_url = "https://api.giphy.com/v1/gifs/search?q=" + result + "&rating=r&api_key=dc6zaTOxFJmzC";
    $.ajax({
        url: custom_api_url,
        method: "GET",
        success: function(response) {
            // YOUR CODE GOES HERE
            console.log(response);
            var pic_url = response.data[0].images.original.url;
            $(".text-center").html("");
            $(".img").append("<img src = '" + pic_url + "'/>");
        }
    });
    // Get the modal
    var modal = document.getElementById('myModal');
    
    // Get the button that opens the modal
    var btn = document.getElementsByClassName("img")[0];
    console.log(btn);
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on the button, open the modal 
    btn.onclick = function() {
      modal.style.display = "flex";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
});



