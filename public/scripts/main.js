let fileReader = new FileReader();
let fileData = false;
fileReader.onloadend = function (event) {
  fileData = event.target.result;
};
function data(data) {
  fetch("/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ image: data }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch((err) => {
      console.log("Some Error");
      console.log(err);
    });
}

function sendData(form) {
  data(fileData);
}

function loadImage(input) {
  console.log(input.files);
  if (input.files.length > 0) {
    for (let i = 0; i < input.files.length; i++) {
      fileReader.readAsDataURL(input.files[i]);
    }
  }
}
