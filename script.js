document.getElementById('showProfessional').addEventListener('click', function () {
    document.getElementById('professional').style.display = 'block';
    document.getElementById('casual').style.display = 'none';
});

document.getElementById('showCasual').addEventListener('click', function () {
    document.getElementById('professional').style.display = 'none';
    document.getElementById('casual').style.display = 'block';
});


var slideArray = ["img/guwahati.jpeg", "img/hobbies.webp", "img/sports.webp","img/leisure.webp"];
var captionArray = ["My Hometown", "My Hobbies", "My loved Sports", "My leisure activities"];

setupSlides();
setupDots();

var slideIndex = 1;     // slides indexed from 1
showSlides(slideIndex);

var timeout = null;
timeout = setTimeout(automaticChange, 7000);  // To avoid automatic slide change, comment this line

function setupSlides() {
    var i;
    var slideSet = document.getElementsByClassName("slideSet")[0];
    for (i = 0; i < slideArray.length; i++) {
        var slide = document.createElement('div');      // create a new slide
        slide.className = "mySlides fade";              // set its classes to ber mySlides and fade

        var number = document.createElement('div');     // create the numbertex to be included in the new slide 
        number.className = "numbertext"; 
        number.innerHTML = (i + 1) + " / " + slideArray.length;
        slide.appendChild(number);

        var image = document.createElement('img');      // create the img to be included in the new slide
        image.style.width = "100%";
        image.src = slideArray[i];
        slide.appendChild(image);

        var caption = document.createElement('div');    // create the caption to be included in the new slide
        caption.className = "text";
        caption.style.background = "black"; 
        caption.style.width = "97%"; 
        caption.style.textAlign = "center"
        caption.innerHTML = captionArray[i];
        slide.appendChild(caption);

        slideSet.appendChild(slide);                    // add the new slide to the slideSet                            
    }
}

function setupDots() {
    var i;
    var dotSet = document.getElementsByClassName("dots-container")[0];
    for (i = 0; i < slideArray.length; i++) {
        var dot = document.createElement('span'); // create a new element of type (tag) span
        dot.className = "dot";                    // give it class="dot"
        dot.index = i + 1;                        // give it an attribute index to remember its index
        dot.onclick = function () { currentSlide(this.index) };  // give it the onclick event
        dotSet.appendChild(dot);                  // add it as a child to to div "dots-container"
    }
}

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
    /* if automaticChange is on, reset the timer */
    if (timeout !== null) {
        clearTimeout(timeout);
        timeout = setTimeout(automaticChange, 7000);
    }
}

function currentSlide(n) {
    slideIndex = n
    showSlides(slideIndex);
    /* if automaticChange is on, reset the timer */
    if (timeout !== null) {
        clearTimeout(timeout);
        timeout = setTimeout(automaticChange, 7000);
    }
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }   // if beyond the last one, go to the first one
    if (n < 1) { slideIndex = slides.length }   // if before the first one, go to the last one
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function automaticChange() {
    slideIndex++;
    showSlides(slideIndex);
    timeout=setTimeout(automaticChange, 7000);   // call again automaticChange() after 7s
}

function validateForm() {
    var x = document.forms["myForm"]["name"].value;
     if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    x = document.forms["myForm"]["email"].value;
    if (x == "") {
        alert("Email must be filled out");
        return false;
    }
    x = document.forms["myForm"]["message"].value;
    if (x == "") {
        alert("Message must be filled out");
        return false;
    } 
    return true;
}
