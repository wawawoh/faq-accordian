//click on the plus
//p appened to the container
// plus becomes a minus

//each plus has its own id
// position and content

itemOne = document.querySelector(".item-one");
itemTwo = document.querySelector(".item-two");
itemThree = document.querySelector(".item-three");
itemFour = document.querySelector(".item-four");

currentButton = document.querySelectorAll("[data-button]");
currentButton.forEach((element) => {
  let on = false;
  element.addEventListener("click", () => {
    console.log("heyyy button press");
    buttonChange(on, element);

    switch (element.id) {
      case "one":
        console.log("1");
        render(itemOne, one, on);

        console.log(on);

        break;
      case "two":
        console.log("2");
        render(itemTwo, two, on);
        break;
      case "three":
        render(itemThree, three, on);
        break;
      case "four":
        render(itemFour, four, on);
        break;
    }
    on = !on;
  });
});
//
// when clciked
//render function
//content is put into posisition
const render = (location, item, option) => {
  if (option == false) {
    location.appendChild(item);
  } else item.remove();
};

buttonChange = (option, button) => {
  if (option == false) {
    button.setAttribute("src", "assets/images/icon-minus.svg");
  } else {
    button.setAttribute("src", "assets/images/icon-plus.svg");
  }

  //button
  //set attribute if image to different image
};

//render
//create p element
// popualate p element
//append p element to object
const one = document.createElement("p");
one.innerText = `Frontend Mentor offers realistic coding challenges to help developers improve their 
      frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
      all levels and ideal for portfolio building.
`;

const two = document.createElement("p");
two.innerText = `Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
        option providing access to a range of projects suitable for all skill levels.`;
const three = document.createElement("p");
three.innerText = `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
      way to showcase your skills to potential employers!`;
const four = document.createElement("p");
four.innerText = `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
    channel where you can ask questions and seek support from other community members.`;
