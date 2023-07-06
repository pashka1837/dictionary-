(()=>{function h(e=!1,n=!1){let t=document.createElement("div"),o=document.createElement("div"),i=document.createElement("h2"),r=document.createElement("p");return t.classList.add("phoneticAndAudio"),o.classList.add("phonetic"),r.classList.add("transcript"),i.textContent=e||"This is a Dictionary.",r.textContent=n||"You can search for any word.",o.append(i,r),t.append(o),t}var d=document.body,V=document.querySelector("nav"),w=document.querySelector(".fontSelPopUp"),H=document.querySelector(".chosenFont"),y=document.querySelector(".fontSelect"),L=document.querySelector(".switch input"),u=document.querySelector(".cancelSearchBtn"),k=document.querySelector(".searchBtn"),c=document.querySelector(".search input "),s=document.querySelector(".search"),m={},_="https://api.dictionaryapi.dev/api/v2/entries/en",G=new Headers({Accept:"application/json"}),P=/\`|\-|\_|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|[0-9]/g;function q(e){return e.trim().toLowerCase().split(" ").filter(n=>n!=="").join(" ")}function C(){c.blur(),V.focus()}var S=async e=>new Promise(n=>setTimeout(n,e));function z(e){e.stopPropagation();let t=Array.from(w.firstElementChild.children).find(o=>o===e.target);t?(document.body.style=`font-family: ${t.dataset.font};`,H.textContent=t.textContent,c.style=`font-family: ${t.dataset.font};`,window.localStorage.setItem("font",t.dataset.font)):(w.classList.toggle("off"),window.removeEventListener("pointerdown",z),y.addEventListener("pointerdown",A))}function A(e){e.stopPropagation(),y.removeEventListener("pointerdown",A),w.classList.toggle("off"),window.addEventListener("pointerdown",z)}function $(){document.body.classList.toggle("dark-theme");let e=document.querySelector(".moonIcon");document.body.classList.contains("dark-theme")?(L.checked=!0,window.localStorage.setItem("darkTheme",1),e.src="./assets/images/icon-moon-dark.svg"):(L.checked=!1,window.localStorage.setItem("darkTheme",0),e.src="./assets/images/icon-moon.svg")}function J(){parseInt(window.localStorage.getItem("darkTheme"))===1&&$();let e=window.localStorage.getItem("font");if(e){let t=Array.from(w.firstElementChild.children).find(o=>o.dataset.font===e);t&&(H.textContent=t.textContent,document.body.style=`font-family: ${e};`,c.style=`font-family: ${e};`)}}function a(){let e=document.querySelector(".loader");s.classList.toggle("off"),e.classList.toggle("off")}function K(e,n=void 0){let t=document.createElement("div"),o=document.createElement("p"),i=document.createElement("h2"),r=document.createElement("p");return t.classList.add("errorFetch","unselectable"),o.classList.add("smile"),r.classList.add("message"),o.innerHTML=n??"&#128533;",i.textContent=e.title,r.textContent=`${e.message} ${e.resolution}`,t.append(o,i,r),t}function p(){let e=document.querySelector(".main"),n=document.querySelector(".errorFetch"),t=document.querySelector(".phoneticAndAudio");e&&e.remove(),t&&t.remove(),n&&n.remove()}function Q(){N({title:"Upps...",message:"Failed to fetch.",resolution:"Please, reload this page or check with your internet provider!"},"&#128531;",!0)}function N(e,n=void 0,t=!1){let o=K(e,n);if(p(),a(),!t){s.insertAdjacentElement("afterend",o);return}o.style="margin: calc(var(--height-of-navBar)*2) 6.1vw 0px 6.1vw;",s.insertAdjacentElement("afterend",o),s.remove()}function b(e){if(s.style="border: 2px solid #FF5252;",u.classList.add("red"),!s.nextElementSibling.classList.contains("errorInput")){let n=document.createElement("p");n.classList.add("errorInput"),s.insertAdjacentElement("afterend",n)}e===1&&(s.nextElementSibling.textContent="Uuuh, can\u2019t use characters..."),e===0&&(s.nextElementSibling.textContent="Whoops, can\u2019t be empty...")}async function Z(e){e.preventDefault(),e.stopPropagation(),c.removeEventListener("input",T),c.value="",j()}function j(){k.classList.add("off"),T(),c.addEventListener("input",T)}function ee(){s.nextElementSibling.classList.contains("errorInput")&&s.nextElementSibling.remove(),s.style="border: 2px solid var(--form-BG-color);",k.classList.remove("off"),u.classList.add("off"),c.removeEventListener("input",T)}function T(){s.nextElementSibling.classList.contains("errorInput")&&s.nextElementSibling.remove(),s.style="border: 2px solid #A445ED;",u.removeEventListener("pointerdown",Z);let e=q(c.value);!e||e.length===0?(c.value="",u.classList.add("off")):(u.classList.remove("off","red"),u.addEventListener("pointerdown",Z,{once:!0}),e.match(P)&&b(1))}function te(e){let n=q(e);return n.match(P)?(b(1),c.focus(),!1):!n||n.length===0?(b(0),c.focus(),!1):n}function ye(e,n){let t=[e];for(;t.length>0;){let o=t.shift();if(o.word===n)return o;o.children&&t.push(...o.children)}return null}function O(e,n){if(e.word===n)return[n];if(!e.children)return!1;let t;if(e.children.find(o=>t=O(o,n)),t)return[e.word].concat(t)}function x(e,n=!1){let t=new Date;t=t.getTime().toString().slice(4);let o=`${e} ${t}`;if(n)m.word=o,m.children=[];else if(!m.word)m.word=o,m.children=[];else{let i=localStorage.getItem("curWord"),r=ye(m,i),l={word:o,children:[]};r.children.push(l)}console.log(m),localStorage.setItem("curWord",o)}async function Le(){a(),await S(400),p();let e=h();a(),s.insertAdjacentElement("afterend",e)}async function U(){D();let e=localStorage.getItem("curWord"),n;if([m].find(o=>n=O(o,e)),!n||n.length<=1)return await Le();a(),p(),await S(400);let t=n[n.length-2];if(t.includes("error404"))return localStorage.setItem("curWord",t),a(),await U();localStorage.setItem("curWord",t),t=t.split(" ").shift(),c.value=t,a(),await v(!1,!0)}var Se=d.getBoundingClientRect().left,xe=d.getBoundingClientRect().top,M,ne=0,Y,oe=0,X,f,E={mouse:{down:"pointerdown",move:"pointermove",up:"pointerup"},touch:{down:"touchstart",move:"touchmove",up:"touchend"}};function B(){try{return document.createEvent("TouchEvent"),f="touch",!0}catch{return f="mouse",!1}}function re(e){M=(B()?e.touches[0].pageX:e.pageX)-Se,Y=(B()?e.touches[0].pageY:e.pageY)-xe}function ie(e){X=!0,re(e),ne=M,oe=Y}async function se(e){if(B()||e.preventDefault(),X){re(e);let n=M-ne,t=Y-oe;if(Math.abs(n)>Math.abs(t)&&n>120)return U()}}function g(){X=!1}B();async function F(){await S(400),d.addEventListener(E[f].down,ie),d.addEventListener(E[f].move,se),d.addEventListener(E[f].up,g),d.addEventListener("mouseleave",g),window.addEventListener("load",g)}function D(){d.removeEventListener(E[f].down,ie),d.removeEventListener(E[f].move,se),d.removeEventListener(E[f].up,g),d.removeEventListener("mouseleave",g),window.removeEventListener("load",g)}function ce(){throw Q(),Error("Something went wrong. ")}async function Ie(e,n){x("error404",n);let t=await e.json();throw N(t),await F(),Error("Definition not found!")}async function R(e,n=!1){let t=await fetch(`${_}/${e}`,{headers:G}).catch(()=>ce());if(t.status===400)return ce();if(t.status===404)return Ie(t,n);let o=await t.json();return console.log(o),o[0]}function ae(e){let n=document.createElement("div"),t=document.createElement("hr"),o=document.createElement("p"),i=document.createElement("a"),r=document.createElement("i");return n.classList.add("bottom"),o.classList.add("unselectable"),r.classList.add("fa-solid","fa-arrow-up-right-from-square","fa-2xs"),o.textContent="Source",i.textContent=" ",i.append(r),n.append(t,o,i),i.childNodes[0].textContent=e[0]||"https://en.wiktionary.org/wiki/",i.href=e[0]||"https://en.wiktionary.org/wiki/",n}function le(e,n){let t=document.createElement("li");if(t.textContent=e.definition,e.example&&e.example!==""){let o=document.createElement("p");o.classList.add("shallowText"),o.textContent=`"${e.example}"`,t.append(o)}n.append(t)}function de(e){if(!e||e.length===0)return!1;let n=document.createElement("ul");return e.length>4?e.slice(0,4).forEach(o=>le(o,n)):e.forEach(t=>le(t,n)),n}async function Ce(e){c.value=e,await v()}function Ae(e,n){let t=document.createElement("a");t.dataset.syn=e,t.textContent=`${e}/ `,t.addEventListener("pointerdown",async()=>await Ce(e),{once:!0}),n.append(t)}function me(e,n){if(!e||e.length===0)return!1;let t=e;if(t.length>4&&(t=t.slice(0,4)),t.length===0)return!1;let o=document.createElement("div"),i=document.createElement("p"),r=document.createElement("div");return o.classList.add("synonyms"),i.classList.add("shallowText","unselectable"),r.classList.add("synonymsResult"),i.textContent="Synonyms",t.forEach(l=>Ae(l,r)),o.append(i,r),o}function be(e){let n=document.createElement("div"),t=document.createElement("div"),o=document.createElement("p"),i=document.createElement("hr"),r=document.createElement("p");return n.classList.add("meaning",`${e.join("_")}`),t.classList.add("divider"),o.classList.add("partOfSpeech","unselectable"),r.classList.add("shallowText","unselectable"),o.textContent=`${e.join(" ")}`,r.textContent="Meaning",t.append(o,i),n.append(t,r),n}function ue(e,n,t,o){let i=n.trim().toLowerCase().split(" ").filter(W=>W!==""),r=be(i),l=de(e),I=me(t,o);return l&&r.append(l),I&&r.append(I),r}function Te(e){new Audio(e).play()}function fe(e,n=!1){return n?e.audio&&e.audio!==""?e:!1:e.text&&e.text!==""?e:!1}function De(e,n,t){let o=t,i;if(!e&&n.length>0){let r=n.find(fe);r?i=r.text:i=t}else i=e||t;return{searchedWord:o,transcriptWord:i}}function Be(e){let n=e.find(i=>fe(i,!0));if(!n)return!1;let t=n.audio,o=document.createElement("img");return o.classList.add("playTranscript"),o.src="./assets/images/icon-play.svg",o.alt="playTranscript",o.addEventListener("pointerdown",()=>Te(t)),o}function pe(e,n,t){let{searchedWord:o,transcriptWord:i}=De(e,n,t),r=h(o,i),l=Be(n);return l&&r.append(l),r}function he({meanings:e,phonetic:n=null,phonetics:t=null,sourceUrls:o=null,word:i}){let r=document.createElement("div"),l=ae(o),I=pe(n,t,i);r.classList.add("main"),e.forEach(W=>{let{definitions:ve,partOfSpeech:Ee,synonyms:ge}=W,we=ue(ve,Ee,ge,i);r.append(we)}),r.prepend(I),r.append(l),a(),s.insertAdjacentElement("afterend",r)}async function v(e,n=!1){e&&e.preventDefault(),D();let t=te(c.value);if(!t)return;c.value="",C(),a(),p();let o;e?o=await R(t,!0):o=await R(t),n||(e?x(t,!0):x(t)),he(o),await F()}var Fe=h();s.insertAdjacentElement("afterend",Fe);window.addEventListener("load",async()=>{if("serviceWorker"in navigator)try{await navigator.serviceWorker.register("sw.js",{type:"module"})}catch{console.log("serviceWorker failed")}});window.onload=J();document.body.addEventListener("pointerdown",C);L.addEventListener("change",$);c.addEventListener("blur",ee);c.addEventListener("focus",j);s.addEventListener("submit",v);y.addEventListener("pointerdown",A);})();
//# sourceMappingURL=app.js.map
