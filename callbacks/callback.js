const postExample = [
  { name: "Mark", age: 21, lastName: "Bravo" },
  { name: "Ryan", age: 22, lastName: "Good" },
];

//1.zadatak: imamo simulirane postove gore, cilje je uzeti postove tj fetchovati i preneti dole

function getPosts() {
  //timeout je zato sto da bi prikazao kako callback radi
  setTimeout(() => {
    let display = "";
    postExample.forEach((post, index) => {
      display += `<li>${post.name} ${post.age} ${post.lastName} </li>`;
    });

    document.body.innerHTML = display;
  }, 1000);
}

// getPosts();

//2.Zadatak je da kreiramo novi post dakle funkcija sa tajmautom na dve sekunde, da bi
//videli ulogu callbacka

function createPost(post, callback) {
  setTimeout(() => {
    postExample.push(post);
    callback();
  }, 2000);
}

//stavljamo 2 sekunde ne bili bila razlika od prethodne 2

//i tu nastupa asihrono programiranje, browser ne moze na vreme da uradi sta treba

//pa zato se koristimo asihronog, tj callbackovi tu dolaze

createPost({ name: "John", age: 41, lastName: "Deep" }, getPosts);

//bitno je da gornji getPost ide sasd u ovoj funkciji, spajamo dve funkcije na neki nacin
