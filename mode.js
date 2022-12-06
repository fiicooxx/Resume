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