
$(function () {

    const now = dayjs();

    var reformatDay = dayjs(now.format('[Today is]  MMMM D, YYYY')).startOf("day").format("MMMM D, YYYY")
    $('#currentDay').text(reformatDay);
    console.log(reformatDay)


    $(".saveBtn").on("click", function(){
      var timeId = $(this).parent().attr("id")
      var activity = $(this).siblings(".description").val()
      localStorage.setItem(timeId, activity)
    })
for(var i = 9; i <= 17; i++){
  $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
}

function updateTimeColor(){
var currentHour = dayjs().hour()
console.log(currentHour)
$(".time-block").each(function(){
  var documentHours = parseInt($(this).attr("id").split("-")[1])
  if (documentHours < currentHour){
    $(this).addClass("past")  
  }else if(documentHours === currentHour){
$(this).addClass("present")
  }else{
    $(this).addClass("future")
    }


})
}

updateTimeColor()  

  });







