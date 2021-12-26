function toggleLanguage(language) {
    let intro = document.getElementById("intro");
    let description = document.getElementById("description");
    let formacionAc = document.getElementById("formacionAc");
    let certif = document.getElementById("certif");
    let lang = document.getElementById("lang");
    let cuali = document.getElementById("cualidades");
    if (language === "Spanish") {
      intro.innerHTML = "Hola! Soy Carolina Blanco";
      description.innerHTML = "Tengo 21 años y estoy en tercer año de la carrera Ingeniería en Sistemas de Información. Actualmente, en la búsqueda de oportunidades en el área de IT, esperando que las mismas me permitan fortalecer mis conocimientos respecto a las tecnologías actuales y dispuesta a aprender lo que se me requiera.";
      formacionAc.innerHTML ="<h2>FORMACION ACADEMICA</h2><h3>UNIVERSIDAD TECNOLOGICA NACIONAL</h3><p>INGENIERIA EN SISTEMAS DE INFORMACION<br>2019 – En curso<br>Estudiante de Ingenieria en Sistemas de Información, actualmente cursando tercer año.</p><br><br><h3>COLEGIO LANGE LEY</h3><p>TITULO BACHILLER EN RELACIONES INTERNACIONALES<br>2014 – 2018</p>";
      certif.innerHTML = "CERTIFICACIONES";
      lang.innerHTML ="<h2>IDIOMAS</h2><p> Nivel de Español: NATIVO<br>Nivel de Inglés: AVANZADO / BILINGUE<br>Nivel de Alemán y Portugués: BASICO</p>";
      cuali.innerHTML="<h2>CUALIDADES</h2> <p><i class="arrow right"></i> Responsabilidad<br><i class="arrow right"></i> Dirección y liderazgo<br><i class="arrow right"></i> Trabajo en equipo<br><i class="arrow right"></i> Capacidad de adaptación<br><i class="arrow right"></i> Resolución de problemas<br><i class="arrow right"></i> Dedicación</p>";
    }
    else {
      intro.innerHTML = "Hi! I am Carolina Blanco";
      description.innerHTML = "I am 21 years old and I am a student majoring in Systems engineering. Currently looking for opportunities in the IT field hopping to strengthen my knowledge regarding current technologies, and willing to learn anything that is required.";
      formacionAc.innerHTML = "<h2>EDUCATION</h2><h3>UNIVERSIDAD TECNOLOGICA NACIONAL</h3><p>INGENIERIA EN SISTEMAS DE INFORMACION<br>2019 – In progress<br>Systems engineering student, currently in third year.</p><br><br><h3>COLEGIO LANGE LEY</h3><p>TITULO BACHILLER EN RELACIONES INTERNACIONALES<br>2014 – 2018</p>";
      certif.innerHTML = "CERTIFICATIONS";
      lang.innerHTML = "<h2>LANGUAGES</h2><p>Spanish level: NATIVE<br>English level: ADVANCED / BILINGUAL<br>German and Portuguese levels: BASIC</p>";
    }
  }
