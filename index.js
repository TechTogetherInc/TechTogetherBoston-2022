
// FAQ

// Animate FAQ expand

let acc = document.getElementsByClassName("FAQ-question-header");
let arr = document.getElementsByClassName("FAQ-arrow");
let i;

for (i = 0; i < acc.length; i++) {

    // click function for the question itself
    acc[i].addEventListener("click", function() {

        // Show hidden answer
        let panel = this.nextElementSibling.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

        // Flip arrow
        let arrow = this.nextElementSibling;
        if (!arrow.style.transform) {
            arrow.style.transform = "rotate(180deg)";
        } else {
            arrow.style.transform = ""; 
        }

    });

    // click function for the arrows
    arr[i].addEventListener("click", function() {

        // Show hidden answer
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

        // Flip arrow
        let arrow = this;
        if (!arrow.style.transform) {
            arrow.style.transform = "rotate(180deg)";
        } else {
            arrow.style.transform = ""; 
        }

    });

}

// Landing page nav bar

// Open navbar on click
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("ghost-byte1").style.marginLeft = "250px";
  }
  
  // Close navbar on click */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("ghost-byte1").style.marginLeft = "0";
  }

// hackathon countdown
let hackathonDate = new Date("Oct 29, 2022 00:00:00").getTime();
var x = setInterval(function(){
      let today = new Date().getTime();

      //distance between now and the hackathon date:
      var difference = hackathonDate - today;

      //calculate days, hours, minutes and seconds 
      var days = Math.floor(difference / (1000 * 60 * 60 * 24));
      var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((difference % (1000 * 60)) / 1000);

      document.getElementById("time").innerHTML = "";

document.getElementById("days").innerHTML = days;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
document.getElementById("hours").innerHTML = hours;
  }, 1000);