const header = document.getElementById("header");
const toggle = document.getElementById("toggle");
const navbar = document.getElementById("navbar");

toggle.onclick = function () {
  toggle.classList.toggle("active");
  navbar.classList.toggle("active");
  header.classList.toggle("active");
};
navbar.onclick = function () {
  navbar.classList.remove("active");
  toggle.classList.remove("active");
  header.classList.remove("active");
};
const about = document.getElementById("About-link");
const about_section = document.getElementById("About-section");
about.onclick = function () {
  about_section.scrollIntoView({ behavior: "smooth" });
};
const background = document.getElementById("Background-link");
const background_section = document.getElementById("Background-section");
background.onclick = function () {
  background_section.scrollIntoView({ behavior: "smooth" });
};
const skills = document.getElementById("Skills-link");
const skills_section = document.getElementById("Skills-section");
skills.onclick = function () {
  skills_section.scrollIntoView({ behavior: "smooth" });
};
const projects = document.getElementById("Projects-link");
const projects_section = document.getElementById("Projects-section");
projects.onclick = function () {
  projects_section.scrollIntoView({ behavior: "smooth" });
};
const experiences = document.getElementById("Experiences-link");
const experiences_section = document.getElementById("Experiences-section");
experiences.onclick = function () {
  experiences_section.scrollIntoView({ behavior: "smooth" });
};
const contact = document.getElementById("Contact-link");
const contact_section = document.getElementById("Contact-section");
contact.onclick = function () {
  contact_section.scrollIntoView({ behavior: "smooth" });
};
const link = document.getElementById("logo-link");
const link_section = document.getElementById("logo-section");
link.onclick = function () {
  link_section.scrollIntoView({ behavior: "smooth" });
};
// main script
