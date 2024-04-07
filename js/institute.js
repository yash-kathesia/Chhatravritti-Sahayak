const instituteState = document.getElementById("instituteState");
const instituteName = document.getElementById("instituteName");

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
  const selectedState = instituteState.value;
  console.log(selectedState);
  const selectedInstitueState = details[selectedState];

  const mapAllInstitue = selectedInstitueState.map((institue) => {
    return `<option value='${institue}'>${institue}</option>`;
  });

  instituteName.innerHTML = mapAllInstitue;
};

instituteState.addEventListener(
  "change",
  selectInstitutionStateToSeeInstitueName
);
selectInstitutionStateToSeeInstitueName();
