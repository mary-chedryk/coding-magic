import"./assets/vendor-6837a909.js";(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();var a=document.getElementById("myModal"),h=document.getElementById("myBtn"),p=document.getElementsByClassName("close")[0];h.onclick=function(){a.style.display="block"};p.onclick=function(){a.style.display="none"};window.onclick=function(t){t.target==a&&(a.style.display="none")};document.getElementById("thankyou-modal");document.getElementById("myBtn");document.addEventListener("DOMContentLoaded",function(){let t=document.getElementById("checkYearBtn"),d=document.getElementById("yearInput"),o=document.getElementById("yearResult");if(!t||!d||!o){console.error("Помилка: Один із елементів не знайдено!");return}t.addEventListener("click",function(){let l=parseInt(d.value);if(isNaN(l)){o.textContent="Введіть коректний рік!",o.style.color="red";return}l%4===0&&l%100!==0||l%400===0?(o.textContent="Ви народилися у високосний рік!",o.style.color="green"):(o.textContent="Ви народилися не у високосний рік.",o.style.color="red")})});const u=document.getElementById("gameCanvas"),i=u.getContext("2d");let e={x:50,y:150,width:40,height:40,dy:0,gravity:.6,jumpPower:-12,grounded:!1},c=[],f=0,m=0,y=!1;function w(){i.fillStyle="black",i.fillRect(e.x,e.y,e.width,e.height)}function x(){i.fillStyle="red",c.forEach(t=>i.fillRect(t.x,t.y,t.width,t.height))}function v(){i.fillStyle="black",i.font="20px Arial",i.fillText("Score: "+m,10,30)}function g(){y||(i.clearRect(0,0,u.width,u.height),e.dy+=e.gravity,e.y+=e.dy,e.y>=150&&(e.y=150,e.dy=0,e.grounded=!0),f%90===0&&c.push({x:800,y:160,width:20,height:40}),c.forEach(t=>{t.x-=5,t.x+t.width<0&&(c.shift(),m++),e.x<t.x+t.width&&e.x+e.width>t.x&&e.y+e.height>t.y&&(y=!0,alert("Game Over! Refresh to restart."))}),w(),x(),v(),f++,requestAnimationFrame(g))}document.addEventListener("keydown",t=>{t.code==="KeyW"&&e.grounded&&(e.dy=e.jumpPower,e.grounded=!1)});g();
//# sourceMappingURL=commonHelpers.js.map
