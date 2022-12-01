// buttons
const pl_btn = document.querySelector(".pl_button--js");
const eng_btn = document.querySelector(".eng_button--js");

// paragraphs
const desc_profile = document.querySelector(".profile_description--js");
const desc = document.querySelector(".description--js");
const download = document.querySelector(".download--js");
const skills = document.querySelector(".skills_title--js");
const reference = document.querySelector(".reference_title--js");
const eudcation = document.querySelector(".education_title--js");
const certification = document.querySelector(".certification_title--js");
const experience = document.querySelector(".experience_title--js");
const course = document.querySelector(".course_title--js");
const interest = document.querySelector(".interest_title--js");
const contact = document.querySelector(".contact_title--js");

// lagnuage switch functions
function ENGLanguageChange()
{
    desc_profile.innerHTML = "Applied Computer Science Student";
    desc.innerHTML = "I am a first-year student of Applied Computer Science at the University of Economics and Computer Science in Krakow. My first priority is development and pursuit of goals. My ambitions drive me to cultivate the acquired knowledge and to gain new experiences and skills.";
    download.innerHTML = "Download Resume";
    skills.innerHTML = "Expertise";
    reference.innerHTML = "Reference";
    eudcation.innerHTML = "Education";
    certification.innerHTML = "Certification";
    experience.innerHTML = "Experience";
    course.innerHTML = "Courses";
    interest.innerHTML = "Interest";
    contact = "Contact";
}
function PLLanguageChange()
{
    desc_profile.innerHTML = "Student Informatyki Stosowanej";
    desc.innerHTML = "opis";
    download.innerHTML = "Pobierz CV";
    skills.innerHTML = "Umiejętności";
    reference.innerHTML = "Referencje";
    eudcation.innerHTML = "Edukacja";
    certification.innerHTML = "Certyfikaty";
    experience.innerHTML = "Doświadczenie";
    course.innerHTML = "Kursy";
    interest.innerHTML = "Zainteresowania";
    contact = "Kontakt";
}

// click event
eng_btn.addEventListener("click", () => ENGLanguageChange());
pl_btn.addEventListener("click", () => PLLanguageChange());

// css file
const darkMode = document.querySelector(".modeChange--js");
var isDark = false;

function changeCSS() 
{
  if (isDark)
  {
   isDark = false;
   cssFile = "style.css";
  }
  else
  {
    isDark = true;
    cssFile = "dark_style.css";
  }

  var oldlink = document.getElementsByTagName("link").item(0);
  var newlink = document.createElement("link");
  newlink.setAttribute("rel", "stylesheet");
  newlink.setAttribute("type", "text/css");
  newlink.setAttribute("href", cssFile);

  document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}

darkMode.addEventListener("change", () => changeCSS());