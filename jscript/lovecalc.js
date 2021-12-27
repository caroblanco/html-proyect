
let lovecalc = {
    apiKey: "b531cf6c6bmsh531a570b8c214fdp121490jsn4860dfe93d61",
  
    fetchLoveCalc: function (name1,name2) {
        fetch(
            "https://love-calculator.p.rapidapi.com/getPercentage?sname="+name1+"&fname="+name2, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "love-calculator.p.rapidapi.com",
                "x-rapidapi-key": this.apiKey
            }
        })
        .then((response) => response.json())
        .then((data) => this.displayResults(data))
        .catch(err => {console.error(err);});
    },
  
    displayResults: function (data) {
      //ENTRE CORCHETES PONGO LO QUE QUIERO EXTRAER DEL JSON, DATA.(SECCION DEL JSON)
      //TRANSFORMA EN VARIABLES
      const { percentage,result } = data;
      console.log(percentage,result);
  
      //COMO SE MUESTRA
      document.querySelector(".result").innerText = "Result: " + percentage+"%";
      document.querySelector(".tip").innerText = result;
    },
    search: function () {
      this.fetchLoveCalc(document.getElementById("inputOne"), document.getElementById("inputTwo"));
    },
  };
  
  //ESPERAN QUE PASE ALGO
  document.querySelector(".lovecalc button").addEventListener("click", function () {
    lovecalc.search();
  });
  
  document
    .querySelector(".inputTwo")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        lovecalc.search();
      }
    });