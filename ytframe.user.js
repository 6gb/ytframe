// ==UserScript==
// @name             ytframe
// @match            *://*.youtube.com/watch?v=*
// @version          1.0
// ==/UserScript==

const observer = new MutationObserver((mutationsList) => {
  if (!mutationsList.find(({ type }) => type === "childList")) return;
  const owner = document.getElementById("owner");
  if (!owner) return;
  const a = document.createElement("a");
  a.innerText = "ytframe";
  a.style.marginLeft = "50px";
  a.href = `https://6gb.github.io/ytframe/?v=${new URLSearchParams(window.location.search).get("v")}`;
  owner.appendChild(a);
  observer.disconnect();
});

observer.observe(document.body, { childList: true, subtree: true });
