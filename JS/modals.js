
console.log("happy");

$(()=>{

    $(".cardClick").click((e)=> {
        let birthDate;
        if (e.target.id == "capricorn"){
            birthDate = "2000-01-17"
        }
        console.log(e.target.id)
        console.log(newFunc(birthDate));
        console.log("modal");
        var myHeading = "<p>I Am Added Dynamically </p>";
        $("#modal-body").html(myHeading);   
        $('#myModal').modal('show');
        $(".btn").click(function(){
            $("#myModal").modal('hide');
        })
    });
})

