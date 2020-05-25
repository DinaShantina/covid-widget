window.onload = () => {
  getData();
  fadeOut();
};

const URL = "http://jsonplaceholder.typicode.com/posts";
let number;
const getData = () => {
  number = document.getElementById("number-test");
  fetch(URL).then((response) => {
    return response
      .json()
      .then((data) => {
        const dataNumber = data[39].id;
        number.innerText = dataNumber;
      })
      .catch((error) => console.log(error));
  });
};

const fadeOut = () => {
  setTimeout(function () {
    document.getElementById("mydiv").style.opacity = "0";
    document.getElementById("mydiv").style.transition = "all 4s ease-out";
  }, 1000); // <-- time in milliseconds
};
