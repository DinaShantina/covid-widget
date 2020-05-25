window.onload = () => {
  getData();
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
