const postExamples = [
  { animal: "cat", color: "orange", age: 9 },
  { animal: "dog", color: "brown", age: 2 },
];

function getPostExample() {
  setTimeout(() => {
    display = "";
    postExamples.forEach((post, index) => {
      display += `<li>${post.animal} ${post.age} ${post.color}</li>`;
    });

    document.body.innerHTML = display;
  }, 1000);
}
function createNewPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      postExamples.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("error something went wrong");
      }
    }, 2000);
  });
}
createNewPost({ animal: "tiger", color: "yellow", age: 5 })
  .then(getPostExample)
  .catch((err) => console.log(err));
