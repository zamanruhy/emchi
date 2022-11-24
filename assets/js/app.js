const base = "";
const components = "";
function script$1() {
  const els = Array.from(document.querySelectorAll(".dropdown"));
  if (!els.length)
    return;
  els.forEach((el) => {
    function onClickOut(e) {
      if (!el.contains(e.target)) {
        el.open = false;
      }
    }
    el.addEventListener("toggle", (e) => {
      if (el.open) {
        window.addEventListener("click", onClickOut);
      } else {
        window.removeEventListener("click", onClickOut);
      }
    });
  });
}
{
  script$1();
}
function script() {
  const els = Array.from(document.querySelectorAll(".tabs"));
  if (!els.length)
    return;
  els.forEach((el) => {
    const tabEls = Array.from(el.querySelectorAll('[role="tab"]'));
    const panelEls = el.querySelectorAll('[role="tabpanel"]');
    tabEls.forEach((tabEl) => {
      tabEl.addEventListener("click", (e) => {
        const index = tabEls.indexOf(tabEl);
        tabEls.forEach((n) => n.classList.remove("active"));
        panelEls.forEach((n) => n.classList.add("hidden"));
        tabEl.classList.add("active");
        panelEls[index].classList.remove("hidden");
        window.dispatchEvent(new CustomEvent("resize"));
      });
    });
  });
}
{
  script();
}
const utilities = "";
