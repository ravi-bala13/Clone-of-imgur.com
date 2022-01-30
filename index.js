let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
var myHeaders = new Headers();
myHeaders.append("Authorization", "Client-ID 0a352154921e5ec");

var formdata = new FormData();

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

try {
  fetch(
    "https://api.imgur.com/3/gallery/top/viral/month/1?showViral=true&mature=true&album_previews=true",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      console.log("result:", result.data);
      showTags(result.data);
    });
} catch (error) {
  console.log("error:", error);
}

function showTags(tags) {
  let tags1 = tags.slice(0, 15);
  let tags2 = tags.slice(15, 30);
  let tags3 = tags.slice(30, 45);
  let tags4 = tags.slice(45, 60);
  console.log("all tags", tags1, tags2, tags3, tags4);

  tags1.forEach((element) => {
    if (element.images) {
      console.log("element:", element.images[0].type);
      if (element.images[0].type === "image/jpeg") {
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = element.images[0].link; //bals change this
        let h4 = document.createElement("h4");
        h4.textContent = element.title;
        h4.setAttribute("class", "name");
        div.append(image, h4);
        one.append(div);
      } else if (element.images[0].type === "video/mp4") {
        let video = document.createElement("video");
        video.src = element.images[0].link;
        video.controls = true;
      }
    } else if (element.link) {
      console.log("element:", element.link);
      let div = document.createElement("div");
      let image = document.createElement("img");
      image.src = element.link; //bals change this
      let h4 = document.createElement("h4");
      h4.textContent = element.title;
      h4.setAttribute("class", "name");
      div.append(image, h4);
      one.append(div);
    }
  });
  tags2.forEach((element) => {
    if (element.images) {
      console.log("element:", element.images[0].type);
      if (element.images[0].type === "image/jpeg") {
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = element.images[0].link; //bals change this
        let h4 = document.createElement("h4");
        h4.textContent = element.title;
        h4.setAttribute("class", "name");
        div.append(image, h4);
        two.append(div);
      } else if (element.images[0].type === "video/mp4") {
        let video = document.createElement("video");
        video.src = element.images[0].link;
        video.controls = true;
      }
    } else if (element.link) {
      console.log("element:", element.link);
      let div = document.createElement("div");
      let image = document.createElement("img");
      image.src = element.link; //bals change this
      let h4 = document.createElement("h4");
      h4.textContent = element.title;
      h4.setAttribute("class", "name");
      div.append(image, h4);
      two.append(div);
    }
  });
  tags3.forEach((element) => {
    if (element.images) {
      console.log("element:", element.images[0].type);
      if (element.images[0].type === "image/jpeg") {
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = element.images[0].link; //bals change this
        let h4 = document.createElement("h4");
        h4.textContent = element.title;
        h4.setAttribute("class", "name");
        div.append(image, h4);
        three.append(div);
      } else if (element.images[0].type === "video/mp4") {
        let video = document.createElement("video");
        video.src = element.images[0].link;
        video.controls = true;
      }
    } else if (element.link) {
      console.log("element:", element.link);
      let div = document.createElement("div");
      let image = document.createElement("img");
      image.src = element.link; //bals change this
      let h4 = document.createElement("h4");
      h4.textContent = element.title;
      h4.setAttribute("class", "name");
      div.append(image, h4);
      three.append(div);
    }
  });
  tags4.forEach((element) => {
    if (element.images) {
      console.log("element:", element.images[0].type);
      if (element.images[0].type === "image/jpeg") {
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = element.images[0].link; //bals change this
        let h4 = document.createElement("h4");
        h4.textContent = element.title;
        h4.setAttribute("class", "name");
        div.append(image, h4);
        four.append(div);
      } else if (element.images[0].type === "video/mp4") {
        let video = document.createElement("video");
        video.src = element.images[0].link;
        video.controls = true;
      }
    } else if (element.link) {
      console.log("element:", element.link);
      let div = document.createElement("div");
      let image = document.createElement("img");
      image.src = element.link; //bals change this
      let h4 = document.createElement("h4");
      h4.textContent = element.title;
      h4.setAttribute("class", "name");
      div.append(image, h4);
      four.append(div);
    }
  });
}
