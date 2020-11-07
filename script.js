// display date and time 
var currentDate = moment().format('LLLL');
$("#currentDay").text(currentDate);

//getting current hour in normal time
var hour = moment().hour();
console.log(hour);
var formatHour = moment().format('ha');//9am
var timeBlock = $(".time-block");

//assigning classes according to time to change background color
for (var i = 0; i < timeBlock.length; i++) {
    var blockTime = $(timeBlock[i]);
    var hourId = blockTime.attr("id");

    if (hourId === formatHour) {
        $(blockTime).children("#text-area").addClass("present");
    }
    if (moment(hourId, "ha").isBefore()) {
        $(blockTime).children("#text-area").addClass("past");
    }
    if (moment(hourId, "ha").isAfter()) {
        $(blockTime).children("#text-area").addClass("future");
    }
}

var saveBtn = $(".saveBtn");
//when save button is clicked store the text in local storage
function save(e) {
    e.preventDefault();
    var hour = $(this).parent().attr("id");
    var text = $(this).siblings("textarea").val();
    localStorage.setItem(hour, text);
};

//variables for textareas
var a9 = $("#9am").children("textarea");
var a10 = $("#10am").children("textarea");
var a11 = $("#11am").children("textarea");
var p12 = $("#12pm").children("textarea");
var p1 = $("#1pm").children("textarea");
var p2 = $("#2pm").children("textarea");
var p3 = $("#3pm").children("textarea");
var p4 = $("#4pm").children("textarea");
var p5 = $("#5pm").children("textarea");

// displays the stored value in the text area
a9.text(localStorage.getItem("9am"));
a10.text(localStorage.getItem("10am"));
a11.text(localStorage.getItem("11am"));
p12.text(localStorage.getItem("12pm"));
p1.text(localStorage.getItem("1pm"));
p2.text(localStorage.getItem("2pm"));
p3.text(localStorage.getItem("3pm"));
p4.text(localStorage.getItem("4pm"));
p5.text(localStorage.getItem("5pm"));

// calls the save function when save button clicked
saveBtn.on('click', save);

$(".clear").on("click", function () {
    localStorage.clear();
    location.reload();
})
