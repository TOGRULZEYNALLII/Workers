const addbutton = document.getElementById("ADD");
const fullname = document.getElementById("fullname");
const age = document.getElementById("age");
const specialty = document.getElementById("specialty");
const experience = document.getElementById("experince");
const salary = document.getElementById("salary");
const resultfullname = document.getElementById("result-fullname");
const resultage = document.getElementById("result-age");
const resultspecialty = document.getElementById("result-specialty");
const resultexperinece = document.getElementById("result-experience");
const resultsalary = document.getElementById("result-salary");

const resultfullname3 = document.getElementById("resultfullname3");
const resultage3 = document.getElementById("resultage3");
const resultspecialty3 = document.getElementById("resultspecialty3");
const resultexperience3 = document.getElementById("resultexperience3");
const resultsalary3 = document.getElementById("resultsalary3");

const resultfullname2 = document.getElementById("resultfullname2");
const resultage2 = document.getElementById("resultage2");
const resultspecialty2 = document.getElementById("resultspecialty2");
const resultexperinece2 = document.getElementById("resultexperience2");
const resultsalary2 = document.getElementById("resultsalary2");

const resultfullname1 = document.getElementById("resultfullname1");
const resultage1 = document.getElementById("resultage1");
const resultspecialty1 = document.getElementById("resultspecialty1");
const resultexperinece1 = document.getElementById("resultexperience1");
const resultsalary1 = document.getElementById("resultsalary1");

const resultfullname0 = document.getElementById("resultfullname0");
const resultage0 = document.getElementById("resultage0");
const resultspecialty0 = document.getElementById("resultspecialty0");
const resultexperinece0 = document.getElementById("resultexperience0");
const resultsalary0 = document.getElementById("resultsalary0");
const url = "http://localhost:3000/posts";

async function fetchdata() {
  const response = await fetch(url);
  const data = await response.json();
  handle(data);
  handle2(data);
  handle3(data);
  handle4(data);
  handle5(data);
}
fetchdata();

async function handleTodo() {
  const dbfullname = fullname.value.trim();
  const dbage = age.value.trim();
  const dbspecialty = specialty.value.trim();
  const dbexperience = experience.value.trim();
  const dbsalary = salary.value.trim();
  if (dbfullname !== "") {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        dbfullname,
        dbage,
        dbspecialty,
        dbexperience,
        dbsalary,
      }),
    });
    const data = await response.json();
    htmlSet(data);
    input.value = "";
  }
}

addbutton.addEventListener("click", handleTodo);

fullname.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    handleTodo();
  }
});
function handle2(data) {
  resultfullname3.textContent = "fullname " + data[3].dbfullname;
  resultage3.textContent = "Age " + data[3].dbage;
  resultspecialty3.textContent = "specialty " + data[3].dbspecialty;
  resultexperience3.textContent = "experience " + data[3].dbexperience;
  resultsalary3.textContent = "salary " + data[3].dbsalary;
}
function handle(data) {
  resultfullname.textContent = "fullname " + data[4].dbfullname;
  resultage.textContent = "Age " + data[4].dbage;
  resultspecialty.textContent = "specialty " + data[4].dbspecialty;
  resultexperinece.textContent = "experience " + data[4].dbexperience;
  resultsalary.textContent = "salary " + data[4].dbsalary;
}
function handle3(data) {
  resultfullname2.textContent = "fullname " + data[2].dbfullname;
  resultage2.textContent = "Age " + data[2].dbage;
  resultspecialty2.textContent = "specialty " + data[2].dbspecialty;
  resultexperinece2.textContent = "experience " + data[2].dbexperience;
  resultsalary2.textContent = "salary " + data[2].dbsalary;
}
function handle4(data) {
  resultfullname1.textContent = "fullname " + data[1].dbfullname;
  resultage1.textContent = "Age " + data[1].dbage;
  resultspecialty1.textContent = "specialty " + data[1].dbspecialty;
  resultexperinece1.textContent = "experience " + data[1].dbexperience;
  resultsalary1.textContent = "salary " + data[1].dbsalary;
}
function handle5(data) {
  resultfullname0.textContent = "fullname " + data[0].dbfullname;
  resultage0.textContent = "Age " + data[0].dbage;
  resultspecialty0.textContent = "specialty " + data[0].dbspecialty;
  resultexperinece0.textContent = "experience " + data[0].dbexperience;
  resultsalary0.textContent = "salary " + data[0].dbsalary;
}
