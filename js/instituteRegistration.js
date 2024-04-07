const states = document.getElementById("states");
const colleges = document.getElementById("colleges");

const details = {
  Gujrat: [
    "L.D.Collge of Engineering",
    "Gujrat College",
    "M.J. Science College",
    "Monark University",
  ],

  Rajasthan: [
    "M.K.College of Arts",
    "University rajasthann College",
    "Poornima University",
  ],

  Madhyapradesh: [
    "National Law Institue University",
    "Indian Institue of Management",
    "Amity University",
  ],

  Maharastra: [
    "Savitri Phule Pune University",
    "Institue of Chemical Technology",
    "Tata Institue of Social Sciences",
  ],
};

const selectInstitutionStateToSeeInstitueName = () => {
  const selectedState = states.value;
  console.log(selectedState);
  const selectedInstitueState = details[selectedState];

  const mapAllInstitue = selectedInstitueState.map((institue) => {
    return `<option value='${institue}'>${institue}</option>`;
  });

  colleges.innerHTML = mapAllInstitue;
};

states.addEventListener("change", selectInstitutionStateToSeeInstitueName);
selectInstitutionStateToSeeInstitueName();
