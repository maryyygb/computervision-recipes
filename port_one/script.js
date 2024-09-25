// Gap

let skills = document.querySelectorAll("p.gap");

for (let i = 0; i < skills.length; i++) {
  let percent = document.querySelectorAll("p.percent");
  let perVal = percent[i].textContent;

  skills[i].style.backgroundColor = "#e7712c";
  skills[i].style.height = "5px";
  skills[i].style.margin = "5px 0";
  skills[i].style.borderRadius = "10rem";

  switch (percent[i].textContent) {
    case "50%":
      skills[i].style.width = "50%";
      break;
    case "55%":
      skills[i].style.width = "55%";
      break;
    case "60%":
      skills[i].style.width = "60%";
      break;
    case "65%":
      skills[i].style.width = "65%";
      break;
    case "70%":
      skills[i].style.width = "70%";
      break;
    case "75%":
      skills[i].style.width = "75%";
      break;
    case "80%":
      skills[i].style.width = "80%";
      break;
    case "85%":
      skills[i].style.width = "85%";
      break;
    case "90%":
      skills[i].style.width = "90%";
      break;
    case "95%":
      skills[i].style.width = "95%";
      break;
    case "100%":
      skills[i].style.width = "100%";
      break;
  }
}
