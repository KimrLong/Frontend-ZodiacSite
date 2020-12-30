



$(document).on("click", ".open-modal", function () {
    var x = new Date(); 
    var myHeading = "<p>I Am Added Dynamically </p>";
    $("#modal-body").html(myHeading + x);   
    $('#myModal').modal('show');
    $(".btn").click(function(){
        $("#myModal").modal('hide');
    })
});