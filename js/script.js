// Il programma dovrà chiedere all’utente il
// numero di chilometri che vuole
// percorrere e l’età del passeggero.
var bottoneGenera  = document.getElementById("genera");
bottoneGenera.addEventListener("click",
  function() {
    var kilometri = document.getElementById("kilometri").value;
    console.log(kilometri);
    var eta = document.getElementById("eta").value;
    console.log(eta);

    var prezzo = (kilometri * 0.21);

    var messaggio = "biglietto standard";
    if(eta == "minorenne") {
      messaggio = "Sconto Minorenni"
      prezzo *= 0.2;
      console.log(prezzo);
    } else if (eta == "over65") {
      messaggio = "Sconto Silver"
      prezzo *= 0.4;
      console.log(prezzo);
    } else  {
      messaggio = "Offerta Standard";
      prezzo;
      console.log(prezzo);
    }

    var passeggero = document.getElementById("nome").value;
    document.getElementById("passeggero").innerHTML = passeggero;

    var offerta = document.getElementById("offerta").value;
    document.getElementById("offerta").innerHTML = messaggio;


    var carrozza = Math.floor(Math.random()* 9 )+1;
    document.getElementById("carrozza").innerHTML = carrozza;

    var codice = Math.floor(Math.random()* 10000 )+90001;;
    document.getElementById("codice").innerHTML = codice;

    // Sulla base di queste informazioni dovrà
    // calcolare il prezzo totale del viaggio.
    var costo = document.getElementById("costo").value;
    document.getElementById("costo").innerHTML = prezzo.toFixed(2)+ "€";

    var bigliettoSection = document.getElementById("biglietto");
    bigliettoSection.className = "show";
    }
  )

var bottoneAnnulla  = document.getElementById("annulla");
bottoneAnnulla.addEventListener("click",
  function() {
    var bigliettoSection = document.getElementById("biglietto");
    bigliettoSection.className = "hidden";

    document.getElementById("kilometri").value="";
    document.getElementById("eta").value="";
    document.getElementById("nome").value="";
    }
  )
