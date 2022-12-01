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
const driving = document.querySelector(".skill_driving--js");
const edu_item_1 = document.querySelector(".edu_item_1--js");
const edu_item_2 = document.querySelector(".edu_item_2--js");
const exp_desc_1 = document.querySelector(".exp_desc_1--js");
const course_item_1 = document.querySelector(".course_item_1--js");
const interest_item_1 = document.querySelector(".interest_item_1--js");
const interest_item_2= document.querySelector(".interest_item_2--js");
const interest_item_3 = document.querySelector(".interest_item_3--js");
const interest_item_4 = document.querySelector(".interest_item_4--js");



// lagnuage switch functions
function ENGLanguageChange()
{
    desc_profile.innerHTML = "Applied Computer Science Student";
    desc.innerHTML = "I am a first-year student of Applied Computer Science at the University of Economics and Computer Science in Krakow. My first priority is development and pursuit of goals. My ambitions drive me to cultivate the acquired knowledge and to gain new experiences and skills.";
    download.innerHTML = "Download Resume";
    skills.innerHTML = "Expertise";
    eudcation.innerHTML = "Education";
    certification.innerHTML = "Certification";
    experience.innerHTML = "Experience";
    course.innerHTML = "Courses";
    interest.innerHTML = "Interest";
    contact.innerHTML = "Contact";
    driving.innerHTML = "Driving license category B";
    edu_item_1.innerHTML = "University class with a mathematical profile.";
    edu_item_2.innerHTML = "Microsoft is the strategic partner of my University, so the curriculum is based on the development, database and server environments of Microsoft.";
    exp_desc_1.innerHTML = "Bottling and warehouse worker";
    course_item_1.innerHTML = "Two-semester The Point English course at B2 level";
    interest_item_1.innerHTML = "Code";
    interest_item_2.innerHTML = "Database"
    interest_item_3.innerHTML = "Basketball";
    interest_item_4.innerHTML = "Maths";
}
function PLLanguageChange()
{
    desc_profile.innerHTML = "Student Informatyki Stosowanej";
    desc.innerHTML = "Jestem studentem Informatyki Stosowanej w Wyższej Szkole Ekonomii i Informatyki w Krakowie. Moim głównym zamierzeniem jest rozwijanie swoich umiejętności, zdobywanie wiedzy oraz nowych doświadczeń. W projektach znajduje się prosta aplikacja WPF do zarządzania bazą danych i przykładowy skrypt do utworzenia bazy wraz z procedurami i funkcjami.";
    download.innerHTML = "Pobierz CV";
    skills.innerHTML = "Umiejętności";
    eudcation.innerHTML = "Edukacja";
    certification.innerHTML = "Certyfikaty";
    experience.innerHTML = "Doświadczenie";
    course.innerHTML = "Kursy";
    interest.innerHTML = "Zainteresowania";
    contact.innerHTML = "Kontakt";
    driving.innerHTML = "Prawo jazdy kat. B";
    edu_item_1.innerHTML = "Klasa uniwersytecka o profilu matematycznym.";
    edu_item_2.innerHTML = "Partnerem strategicznym mojego kierunku jest Microsoft, więc program nauczania bazuje na środowiskach deweloperskich, bazodanowych i serwerowych Microsoft.";
    exp_desc_1.innerHTML = "Pracownik Rozlewu, Magazynu";
    course_item_1.innerHTML = "Dwusemestralny kurs The Point English na poziomie B2";
    interest_item_1.innerHTML = "Code";
    interest_item_2.innerHTML = "Database"
    interest_item_3.innerHTML = "Koszykówka";
    interest_item_4.innerHTML = "Matematyka";
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