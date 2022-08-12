const headerEl = document.querySelector("header");
const scrollToTop = document.querySelector(".scrollToTop");

window.addEventListener("scroll",() => {
  let height =  headerEl.getBoundingClientRect().height;
  
  if(window.pageYOffset - height > 800){
    if(!headerEl.classList.contains("sticky")){
    headerEl.classList.add("sticky");
    } 
  }
  else{
    headerEl.classList.remove("sticky");
  }
  if(window.pageYOffset >2000){
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display="none";
  }
}
)

const glide = new Glide(".glide");
const captionsEl = document.querySelectorAll(".slide-caption");

glide.on(["mount.after","run.after"],() => {
    const caption = captionsEl[glide.index];
    anime({
        targets:caption.children,
        opacity:[0,1],
        duration:400,
        easing:"linear",
        delay:anime.stagger(400,{star:300}),
        translateY:[anime.stagger([40,10]),0]
    });
    
} );

glide.on("run.before",() => {
    document.querySelectorAll(".slide-caption > *").forEach(el => {
        el.style.opacity = 0 ;
    });
});

glide.mount();

const isotope = new Isotope(".cases",{
    layoutMode:"fitRows",
    itemSelector:".case-item"
})
// 成功案例筛选
const filterBtns = document.querySelector(".filter-btns");
// 当点击筛选按钮时
filterBtns.addEventListener("click", e => {
  let { target = {} } = e;
  const filterOption = target.getAttribute("data-filter");
  if (filterOption) {
    // 取消其他按钮active状态
    document
      .querySelectorAll(".filter-btn.active")
      .forEach(btn => btn.classList.remove("active"));
    target.classList.add("active");
    // 筛选
    isotope.arrange({ filter: filterOption });
  }
});

//滚动动画 
const staggeringOption = {
  delay:300,
  distance:"50px",
  duration:500,
  easing:"ease-in-out",
  origin:"bottom"
};

ScrollReveal().reveal(".feature",{... staggeringOption,interval:350});
ScrollReveal().reveal(".service-item",{... staggeringOption,interval:350});

// 折叠按钮
const burgerEl = document.querySelector(".burger");
const nav = document.querySelector("header nav");
burgerEl.addEventListener("click", () => {
  headerEl.classList.toggle("open");
});

const scroll = new SmoothScroll('nav a[href*="#"], .scrollToTop a[href*="#"]',{
  header:  "header",
  offset:80
})

document.addEventListener("scrollStart",() => {
  if(headerEl.classList.contains("open")){
    headerEl.classList.remove("open");
  }
})

const exploreBtnEls = document.querySelectorAll(".explore-btn");

exploreBtnEls.forEach(exploreBtnEl => {
  exploreBtnEl.addEventListener("click",() => {
    scroll.animateScroll(document.querySelector("#about-us"));
  });
});