
function clean(){
  var versao = document.getElementById('textviewVersao');
  document.getElementById("msgDiv").innerHTML = "<label for='msg'>"+"Resetando Email!"+"</label> ";
  versao.value = "";

}

function gerarEmail(){
    document.getElementById("msgDiv").innerHTML = "<label for='msg'>"+"Gerando Email!"+"</label> ";
    //msg.value = "Gerando Email!";
    
    
  
  }

  function alteraLabel(texto) {
    document.getElementById("divTotal").innerHTML = "<label for='total'>"+texto+"</label> ";
  }
  
  