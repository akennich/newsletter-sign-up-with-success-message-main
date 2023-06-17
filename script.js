const myclass = document.querySelector(".myclass");
const container2 = document.querySelector(".container2");
const div1 = document.querySelector(".div1");
const btn = document.querySelectorAll(".btn");
const span1 = document.querySelector(".mail");
const label1 = document.querySelector(".ermsg");

btn[0].addEventListener("click", (e) => {
let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (myclass.value.match(regex)) {
        e.preventDefault();
    div1.classList.add('view');
    container2.classList.remove('view');
    span1.innerHTML = myclass.value;
      } else {
        e.preventDefault();
myclass.classList.add('error');
label1.style.color = 'red';
      }
    }
  );
