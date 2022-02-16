var i = 1;
$(document).ready(function () {
    $("#add").click(function () {
        var fullName = $('#fullName').val()
        var markMath = $('#markMath').val()
        var markPhysical = $('#markPhysical').val()
        var markChemistry = $('#markChemistry').val()
        var avg = "?"
        var addr = "<tr><td>" + (i++) + "</td><td>" + fullName + "</td><td>" + markMath + "</td><td>" + markPhysical + "</td><td>" + markChemistry + "</td><td>" + avg + "</td></tr>"
        $('#myTable').append(addr);
        $('#fullName').val("") 
        $('#markMath').val("") 
        $('#markPhysical').val("") 
        $('#markChemistry').val("") 
         
    }); 
    $("#avger").click(function () {
        $("tr").each(function () {
            const markMath = $(this).children("td").eq(2).html();
            const markPhysical = $(this).children("td").eq(3).html();
            const markChemistry = $(this).children("td").eq(4).html();
            var avg = (parseFloat(markMath) + parseFloat(markPhysical) + parseFloat(markChemistry)) / 3;
            $(this).children("td").eq(5).html(avg.toFixed(1)) 
        });

    });
    $("#rank").click(function () {
        $("tr").each(function(){
           const avg =  $(this).children("td").eq(5).html()
           if (avg >= 8 ){
               this.style.color = "blue"
           }
        });

    });
});
