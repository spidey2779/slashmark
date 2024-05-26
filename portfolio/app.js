window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector("nav").style.position =`fixed`;
    document.querySelector("nav").style.top ='0px';
    // document.querySelector("nav").style.background ='black';
    document.querySelector("nav").style.background ='red';
  
  } else {

    document.querySelector("nav").style.background ='transparent';

  }
}

// Gsap


gsap.to("#rot",{
  rotate:360,
  repeat:-1,
  delay:0.5,
  duration:1.5,
  ease:"linear"
})
gsap.from("#rot",{
  x:-100,
  delay:0.5,
  duration:0.8,
});


gsap.from(".miniMouse",{
  scale:0,
  opacity:0,
  delay:1.5,
  duration:1,

})
// menu icon 
let hamburger = document.querySelector(".hamburger");
let afterNav=document.querySelector('.afterNav')
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("clicked");
  afterNav.classList.toggle("active")
});



//mouse follower
function MouseFollower() {
  window.addEventListener("mousemove", function (details) {
    // console.log(details.clientX+" "+details.clientY)
    document.querySelector(".miniMouse").style.transform = 
    `translate(${details.clientX}px,${details.clientY}px)`;
  });
}

MouseFollower();


//mouse follower remove
window.addEventListener("mouseenter",()=>{
  document.querySelector(".miniMouse").style.opacity=0;
})
window.addEventListener("mouseleave",()=>{
  document.querySelector(".miniMouse").style.opacity=0.8;
})


//full gsap

gsap.from(".rightHome img",{
  x:200,
  delay:1,
  duration:1.5,
  opacity:0
})

let tl=gsap.timeline();
tl.from(".leftNav>h2,.rightNav a",{
  y:-100,
  delay:0.8,
  duration:0.8,
  stagger:0.5
})



gsap.from(".leftHome h3",{
  y:100,
  duration:0.8,
  delay:1.3,
  opacity:0,

})

// width of bars


const aboutSection = document.querySelector(".about");
const bars = document.querySelectorAll(".barMain .one");

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Trigger when 50% of the element is in the viewport
};

const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            bars.forEach((bar, index) => {
                const widthValue = bar.querySelector("span:last-child").textContent;
                gsap.fromTo(
                    bar,
                    { width: "0%" },
                    {
                        width: widthValue,
                        delay: 0.6,
                        duration: 1,
                        ease: "power2.inOut",
                    }
                );
                
            });
        }
    });
};

const observer = new IntersectionObserver(callback, options);
observer.observe(aboutSection);



