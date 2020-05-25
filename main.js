window.onload = () => {
  getData();
  document.getElementById("mydiv").style.opacity = "1";
  document.getElementById("mydiv").style.transition = "all .3s ease-out";
  fadeOut();
};

const URL = "http://jsonplaceholder.typicode.com/posts";

let number;
const getData = async () => {
  number = document.getElementById("number-test");
  await fetch(URL).then((response) => {
    return response
      .json()
      .then((data) => {
        const dataNumber = data[39].id;
        number.innerText = dataNumber;
      })
      .catch((error) => console.log(error));
  });
};
// const fadeIn = () => {
//   setTimeout(function () {
//     document.getElementById("mydiv").style.opacity = "0.5";
//     document.getElementById("mydiv").style.transition = "all 1s ease-out";
//   }, 1000);

// };
const fadeOut = () => {
  setTimeout(function () {
    document.getElementById("mydiv").style.opacity = "0";
    document.getElementById("mydiv").style.transition = "all 3s ease-out";
  }, 3000); // <-- time in milliseconds
};
