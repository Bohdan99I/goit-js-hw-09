!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body"),n=null,o="disabled";t.addEventListener("click",(function(){n=setInterval((function(){r.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}),1e3),t.setAttribute(o,o),e.removeAttribute(o)})),e.addEventListener("click",(function(){t.removeAttribute(o),e.setAttribute(o,o),clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.d0b053d9.js.map
