

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