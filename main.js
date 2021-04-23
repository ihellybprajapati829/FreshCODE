function searchFun() {
    let filter = document.getElementById('myInput').value.toUpperCase();

    let myTable = document.getElementById('myTable');
    let tr = myTable.getElementsByTagName('tr');

    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[1];

        if (td) {
            let textvalue = td.textContent || td.innerHTML;

            if (textvalue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    }
} 
$(".selected-option").click(function (event) {
    event.stopPropagation(); //stop the click from bubbling to parent elements;
    $(".select-option-card").stop().fadeOut("fast");
    $(this).next(".select-option-card").stop().fadeToggle("fast");
});

$(".select-option-card li").click(function (event) {
    var x = $(this).text();
    $(this).parents(".select-option-card").hide();
    $(this).parents(".dropdown-list").find(".selected-option p").text(x);
});

//body click to close popup.
$(document).click(function () {
    $(".select-option-card").hide();
});
