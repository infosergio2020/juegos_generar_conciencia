"use strict";class Accordion{constructor(t){this.rootEl=t,this.buttonEl=this.rootEl.querySelector("button[aria-expanded]");const e=this.buttonEl.getAttribute("aria-controls");this.contentEl=document.getElementById(e),this.open="true"===this.buttonEl.getAttribute("aria-expanded"),this.buttonEl.addEventListener("click",this.onButtonClick.bind(this))}
onButtonClick(){this.toggle(!this.open)}
toggle(t){t!==this.open&&(this.open=t,this.buttonEl.setAttribute("aria-expanded",`${t}`),t?(this.contentEl.removeAttribute("hidden"),console.log(this.contentEl.children[0].children[0].children),this.contentEl.children[0].children[0].children[0].focus()):this.contentEl.setAttribute("hidden",""))}
open(){this.toggle(!0)}
close(){this.toggle(!1)}}
const accordions=document.querySelectorAll(".accordion");accordions.forEach(t=>{new Accordion(t)})