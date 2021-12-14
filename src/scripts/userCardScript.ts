import User from "../../classes/User";

const luciano = new User(
  "Luciano",
  "maduga665@hotmail.com",
  "https://github.com/madruga665.png",
  new Date(1986, 12, 08)
);
const cardProfile1 = <HTMLDivElement>document.querySelector(".card-profile1");
cardProfile1.style.height = "300px";
cardProfile1.style.padding = "35px";

const profileImg = <HTMLImageElement>document.createElement("img");
profileImg.src = luciano.getProfilePicture();
profileImg.alt = luciano.getName();
profileImg.style.width = "100px";
profileImg.classList.add("profile-img");
cardProfile1.appendChild(profileImg);

const profileName = <HTMLHeadingElement>document.createElement("h3");
profileName.innerText = luciano.getName();
profileName.classList.add("profile-name");
cardProfile1.appendChild(profileName);

const profileEmail = <HTMLParagraphElement>document.createElement("p");
profileEmail.innerText = luciano.getEmail();
profileEmail.classList.add("profile-email");
cardProfile1.appendChild(profileEmail);

const profileApresentation = <HTMLParagraphElement>document.createElement("p");
profileApresentation.innerText = luciano.apresentation();
profileApresentation.classList.add("profile-apresentation");
profileApresentation.style.marginTop = "25px";
cardProfile1.appendChild(profileApresentation);
