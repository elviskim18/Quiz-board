/*get current data and time*/
const d = new Date();
document.getElementById("currentDate").innerHTML = d;

/*confirm page to proceed to page two*/
function doConfirm() {  
    if(confirm ("You will be redirected to the quiz page "))
    {
      window.location.href="./Assets/pages/quiz.html";
    }
    }  

