
function go(screen){
  fetch(screen)
    .then(r=>r.text())
    .then(html=>{
      document.getElementById("app").innerHTML = html;
    });
}
