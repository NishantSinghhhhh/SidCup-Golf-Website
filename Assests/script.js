var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor");

document.addEventListener("mousemove", function (event) {
    // Use event.clientX and event.clientY to get the mouse coordinates
    crsr.style.left = event.clientX + "px";
    crsr.style.top = event.clientY + "px";
    
    blur.style.left = event.clientX -150 + "px";
    blur.style.top = event.clientY - 150 + "px";
});

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 1,
    height: "120px",
    delay: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top -50vh",
        end: "top -80vh",
        scrub: 2,
    }
});
