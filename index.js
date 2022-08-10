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