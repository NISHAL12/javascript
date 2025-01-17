const startingMinutes = 5;
let time = startingMinutes * 60;
const countdownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  countdownEl.innerHTML = `${minutes}:${seconds}`;

  time--;
}
const question = [
    {
      que: "Who is known as the Father of the Indian Space Program?",
      a: "Dr.Homi Bhabha",
      b: "Dr.Vikram Sarabhai",
      c: "Dr. A.P.J.Abdul Kalam",
      ans: "Dr.Vikram Sarabhai",
    },
    {
      que: "What was the name of the rocket that launched Chandrayaan-3?",
      a: "PSLV",
      b: "GSLV Mk III",
      c: "SLV",
      ans: "GSLV Mk III",
    },
    {
      que: "Which Indian scientist is associated with the Green Revolution?",
      a: "Dr. A.P.J. Abdul Kalam",
      b: "Dr. Homi Bhabha",
      c: "Dr. M.S. Swaminathan",
      ans: "Dr. M.S. Swaminathan",
    },
    {
      que: "Your total score  out of 3 is ",
    },
  ];
  
  let ques = document.getElementById("question");
  let op1 = document.getElementById("option1");
  let op2 = document.getElementById("option2");
  let op3 = document.getElementById("option3");
  let para = document.querySelectorAll("#para");
  let submit_btn = document.getElementById("submit_btn");
  let optval = document.querySelectorAll(".opt");
  let submit = document.getElementById("submit");
  let result_p = document.getElementById("result_p");
  let result_show = document.getElementById("show_result");
  let main = document.getElementById("main_cointainer");
  let reset_btn = document.getElementById("reset_btn");
  let count = 0;
  let ans_count = 0;
  
  function result() {
    ques.innerHTML = ` ${question[count].que}`;
    ques.style.height = "600px";
    ques.style.color = "white";
    ques.style.fontSize = "30px";
    op1.style.display = "none";
    op2.style.display = "none";
    op3.style.display = "none";
    submit_btn.style.display = "none";
    result_show.style.display = "block";
    result_p.innerHTML = `Your Score is  ${ans_count}`;
    main.style.backgroundColor = "red";
    reset_btn.style.display = "block";
  }
  function data() {
    ques.innerHTML = ` ${question[count].que}`;
    para[0].innerText = ` ${question[count].a}`;
    para[1].innerText = ` ${question[count].b}`;
    para[2].innerText = ` ${question[count].c}`;
     }
  data();
  console.log(count, question[count].ans);
  
  function optvalidation() {
    let valid = false;
  
    for (let i = 0; i < optval.length; i++) {
      if (!valid) {
        if (optval[i].checked) {
          valid = true;
          if (para[i].innerText == question[count].ans) {
            console.log("Correct Answe");
            ans_count++;
          } else {
            console.log("wrong Answer");
          }
          console.log("Checked");
          count++;
          optval[i].checked = false;
        }
      }
      console.log(count);
    }
    if (!valid) {
      alert("Please select the option");
      return;
    }
  }
  
  submit_btn.addEventListener("click", () => {
    if (count < question.length - 1) {
      optvalidation();
      if (count === question.length - 1) {
        result();
      } else {
        console.log(count);
        data();
      }
    }
  });
  
  reset_btn.addEventListener("click", () => {
    count = 0;
    ans_count = 0;
    op1.style.display = "block";
    op2.style.display = "block";
    op3.style.display = "block";
    submit_btn.style.display = "block";
    result_show.style.display = "none";
    reset_btn.style.display = "none";
    data();
  });