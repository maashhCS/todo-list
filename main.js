(()=>{"use strict";var e={d:(t,n)=>{for(var c in n)e.o(n,c)&&!e.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:n[c]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{m:()=>r});const t=e=>({projectToDoArray:[],title:e,projectId:r.length});function n(){!function(){for(;c.firstChild;)c.removeChild(c.firstChild)}();for(let e=0;e<r.length;e++)if(r[e].projectId=e,s(r[e].title,r[e].projectId),e===r.length-1)return void l();l()}const c=document.querySelector(".project-cards"),i=document.querySelector(".project-cards");function s(e,t){const c=document.createElement("div");c.classList.add("project-card"),c.setAttribute("dataset",`${t}`);const s=document.createElement("div");s.classList.add("project-title"),s.innerText=`${e}`;const l=document.createElement("div");l.classList.add("edit-delete-div");const a=document.createElement("button");a.classList.add("project-edit");const d=document.createElement("img");d.setAttribute("draggable","false"),d.setAttribute("src","../src/svg/pencil-white.svg");const o=document.createElement("button");o.classList.add("project-delete");const u=document.createElement("img");if(u.setAttribute("draggable","false"),u.setAttribute("src","../src/svg/trash-can-outline-white.svg"),i.appendChild(c),c.appendChild(s),c.appendChild(l),l.appendChild(a),a.appendChild(d),l.appendChild(o),o.appendChild(u),""===e){const n=document.createElement("input");n.classList.add("edit-title-input"),n.setAttribute("type","text"),s.replaceWith(n),n.focus(),n.addEventListener("keydown",(c=>{if("Enter"===c.key||"Escape"===c.key){if(""===n.value)return;s.innerText=n.value,e=n.value,r[t].title=n.value,n.replaceWith(s)}}))}a.addEventListener("click",(()=>{const n=document.createElement("input");n.classList.add("edit-title-input"),n.setAttribute("type","text"),n.setAttribute("value",`${e}`),s.replaceWith(n),n.focus();const c=n.value.length;n.setSelectionRange(c,c),n.addEventListener("keydown",(c=>{if("Enter"===c.key||"Escape"===c.key){if(""===n.value)return;s.innerText=n.value,e=n.value,r[t].title=n.value,n.replaceWith(s)}}))})),o.addEventListener("click",(e=>{console.log(e),r.splice(e.target.parentElement.parentElement.parentElement.attributes[1].value,1),n(),console.log(r)}))}function l(){const e=document.createElement("button");e.classList.add("project-add-btn");const c=document.createElement("img");c.setAttribute("src","../src/svg/plus-box-outline-white.svg"),i.appendChild(e),e.appendChild(c),e.addEventListener("click",(()=>{r.push(t("")),n()}))}const r=[];r.push(t("Default")),r.push(t("Default2")),r.push(t("Default3")),r.push(t("Default4")),n()})();