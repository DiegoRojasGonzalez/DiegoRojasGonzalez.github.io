(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&a(t)}).observe(document,{childList:!0,subtree:!0});function c(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=c(i);fetch(i.href,s)}})();document.querySelector("#app").innerHTML=`
<body>
  <section class="grid">
    <div class="gridL">
      <img class="profileImg" src="https://raw.githubusercontent.com/DiegoRojasGonzalez/Resources/main/DiegoRojasGonzalez.github.io/perfil.jpg">
    </div>
    <div class="gridR">
      <div class="tittle">
        <h1 class="name">Diego Ignacio Rojas Gonzalez</h1>
        <h2 class="speciality">Software Developer</h2>
      </div>
      <div class="rss">
        <a class="links " href="https://www.linkedin.com/in/diegoignaciorojasgonzalez/"><i class="ti ti-brand-linkedin"></i></a>
        <a class="links " href="https://github.com/DiegoRojasGonzalez/"><i class="ti ti-brand-github-filled"></i></a>
        <a class="links " href="https://github.com/DiegoRojasGonzalez/"><i class="ti ti-star"></i></a>
        <a class="links " href="mailto:gonzalez.rojas.ignacio.diego@gmail.com"><i class="ti ti-mail"></i></a>

      </div>
    </div>
  </section>
  <section class="grid">
    <div class="gridL">
      <h1 class="nameDesc profileImg">ABOUT ME ‣</h1>
    </div>
    <div class="gridR">
      <div class="desc">
        <p class="textDesc">Enthusiastic software developer. I have always carried with me curiosity to understand how
          things work and how they are composed.</p>
      </div>
    </div>

  </section>
  <section class="grid">
    <div class="gridL">
      <h1 class="nameDesc profileImg">EXPERIENCE ‣</h1>
    </div>
    <div class="gridR">
      <div class="desc">
        <p class="textDesc">
        <p class="textData">Freelancer</p>
        <p class="textData">May,2023 - Actually</p>
        </p>
      </div>
    </div>
  </section>

  </section>
  <section class="grid">
    <div class="gridL">
      <h1 class="nameDesc profileImg">EDUCATION ‣</h1>
    </div>
    <div class="gridR">
      <div class="desc">
        <p class="textDesc">
        <p class="textData">Centro de Formación Técnica San Agustín (CFT)</p>
        <p class="textData">| Analista programador | March, 2021 - May, 2023 | Graduate</p>
        
      </p>
      </div>
    </div>
  </section>
  
  </section>
  <section class="grid">
    <div class="gridL">
      <h1 class="nameDesc profileImg">CERTIFICATIONS ‣</h1>
    </div>
    <div class="gridR">
      <div class="desc">
        <p class="textDesc">
        <a href="https://www.linkedin.com/learning/certificates/0dc2564d923fa1d4b2e07904ba38dbb0828f030bd3f6ded910578c5cb90eee25" class="textData">Fundamentos profesionales de gestión de proyectos, por Microsoft y LinkedIn</a><br>
        <a href="https://dtmvamahs40ux.cloudfront.net/ComplementaryCourseCertificate/2925185/original/Diego_Ignacio_Rojas_Gonzalez20230714-251-1p4lhbg.jpg" class="textData">Data Structure And Algoritms in  Java</a><br>
        <a href="https://skillshop.exceedlms.com/student/award/HbiszeUgD1svhdnzi18xtJGL" class="textData">Desarrollo de app moviles</a><br>
        <a href="https://www.credly.com/badges/f039d8f8-eabd-4dd9-a7cd-6947cc45a0fa/" class="textData">Scrum Foundation Professional Certificate - SFPC™</a><br>
        <a href="https://www.linkedin.com/learning/certificates/3d71ac87f36ec9cb7a43fe4eeaede33737479d71e0b6bb08cb311953a0eb257f" class="textData">Fundamentos profesionales del desarrollo de software, por Microsoft y LinkedIn</a><br>
        <a href="https://www.sololearn.com/certificates/CC-ZV194JRD" class="textData">Introduction to Python</a><br>
        <a href="https://grow.google/" class="textData">Ciberseguridad en el Teletrabajo</a><br>
        <a href="https://www.sololearn.com/certificates/CC-Z4MPJOAH" class="textData">Introduction to SQL</a><br>
        <a href="https://www.sololearn.com/certificates/CC-NMVVDXRS" class="textData">SQL Intermediate</a><br>
        <a href="#" class="textData">Metodologías ágiles Scrum para MIPES</a><br>
        <a href="https://grow.google/" class="textData">Competencias digitales para profesionales</a><br>
        </p>
      </div>
    </div>
  </section>

  <section class="grid">
    <div class="gridL">
      <h1 class="nameDesc profileImg">SKILLS ‣</h1>
    </div>
    <div class="gridR desc">
        <div class="galery">
          <div title="react" class="item"><i class="ti ti-brand-react-native"></i></div>
          <div title="angular" class="item"><i class="ti ti-brand-angular"></i></div>
          <div title="android" class="item"><i class="ti ti-brand-android"></i></div>
          <div title="kotlin" class="item"><i class="ti ti-brand-kotlin"></i></div>
          <div title="mysql" class="item"><i class="ti ti-brand-mysql"></i></div>
          <div title="django" class="item"><i class="ti ti-brand-django"></i></div>
          <div title="vue" class="item"><i class="ti ti-brand-vue"></i></div>
          <div title="tailwind" class="item"><i class="ti ti-brand-tailwind"></i></div>
          <div title="typescript" class="item"><i class="ti ti-brand-typescript"></i></div>
          <div title="boostrap" class="item"><i class="ti ti-brand-bootstrap"></i></div>
          <div title="npm" class="item"><i class="ti ti-brand-npm"></i></div>
          <div title="javascript" class="item"><i class="ti ti-brand-javascript"></i></div>
          <div title="sql" class="item"><i class="ti ti-sql"></i></div>
          <div title="git" class="item"><i class="ti ti-brand-git"></i></div>
        </div>
      </p>
      </div>
    </div>
  </section>

  <section class="grid">
    <div class="gridL">
      <h1 class="nameDesc profileImg">MY PROJECTS ‣</h1>
    </div>
    <div class="gridR">
      <div class="desc">
        <p class="textDesc">
          <section class="grid">
            <a href="https://diegorojasgonzalez.github.io/Task-Wise/"  target="_blank" class="textData">Task Wise</a><br>
            <a href="https://diegorojasgonzalez.github.io/DevJobs-Chile/"  target="_blank" class="textData">DevJobs Chile</a><br>
            <a href="https://github.com/DiegoRojasGonzalez/Focus-Nice"  target="_blank" class="textData">Focus Nice</a><br>
            <a href="https://github.com/DiegoRojasGonzalez/Time-Zone"  target="_blank" class="textData">Time Zone</a><br>
            <a href="https://diegorojasgonzalez.github.io/White-Space/"  target="_blank" class="textData">White Space</a><br>

            
          </section>
          
        </p>
      </div>
    </div>
  </section>

  
</body>
`;
