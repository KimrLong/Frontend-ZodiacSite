// $(document).ready(function () {
//     $('#myModal').on('show.bs.modal', function (e) {
//         var image = $(e.relatedTarget).attr('src');
//         $(".img-responsive").attr("src", image);
//     });
// });
// $(document).ready(function () {
//     $('#myModal').on('show.bs.modal', function (e) {
//         var x = newFunc();
//         var myHeading = "<p>Here are ${}'s Travel Habits</p>";
//         $("#modal-body").html(mtHeading + x);
//         $('modal').modal('show');
//     });
// });
//    $(document).on("click", ".open-modal", function () {
       
// 	 var x = newFunc(); 
//      var myHeading = "<p>These are (newFunc)'s Travel Habits </p>";
//      $("#modal-body").html(myHeading + x);   
//      $('#modal').modal('show');
//     });



$(document).on("click", ".open-modal", function () {
    var x = new Date(); 
    var myHeading = "<p>I Am Added Dynamically </p>";
    $("#modal-body").html(myHeading + x);   
    $('#myModal').modal('show');
});