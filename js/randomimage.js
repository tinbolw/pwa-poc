async function getRandomImage() {
  return fetch("https://picsum.photos/200/300").then((res) => {
    // console.log(res);
    document.getElementById("random-image").src = res.url;
  });
}