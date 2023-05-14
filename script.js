const form = document.querySelector(".portfolio-form");
const projectsList = document.querySelector(".projects-list");

form.addEventListener("submit", createObject);
function createObject(e) {
  e.preventDefault();
  const myFormData = new FormData(e.target);

  const formDataObject = Object.fromEntries(myFormData.entries());
  const project = document.createElement("li");
  project.innerHTML = `<a href="${formDataObject["project-name"]}">TEST</a>`;
  projectsList.appendChild(project);
}
