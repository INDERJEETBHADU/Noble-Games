function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu").classList.toggle("cross")
}
const Preload = document.getElementById("preload")
setTimeout(() => {
    document.body.classList.remove("overflow-hidden");
    Preload.classList.add("d-none")
}, "5000");


// footer_button
let mybutton = document.getElementById("footer_btn")
let mynav = document.getElementById("mynav")

window.onscroll = function () { scrollfunction() };

function scrollfunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block"
        mynav.classList.add("nav-colored");
        mynav.classList.remove("nav-transparent");
    } else {
        mybutton.style.display = "none"
        mynav.classList.add("nav-transparent");
        mynav.classList.remove("nav-colored");
    }
}
function topfunction() {
    document.documentElement.scrollTop = 0;
}

$('.responsive').slick({
    dots: false,
    infinite: false,
    speed: 300,
    arrows: false,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});