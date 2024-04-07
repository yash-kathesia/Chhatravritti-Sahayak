const stateSelect = document.getElementById("stateSelect");
const categorySelect = document.getElementById("categorySelect");
const scholarships = document.getElementById("scholarships");
const scholarshipSelectBox = document.getElementById("scholarshipSelectBox");

//scholarship data
const scholarshipData = {
  Gujrat: {
    general: [
      "BCK-80 Instrumental Assistance For Medical,Engineering,Diploma students(SEBC)",
      " BCK-98 Fellowship scheme for M.Phil, Ph.D students(SEBC)",
    ],

    sebc: [
      " BCK-80 Instrumental Assistance For Medical,Engineering,Diploma students(SEBC)",
      "BCK-98 Fellowship scheme for M.Phil, Ph.D students(SEBC)",
      "PM -YASASVI Post Matric Scholarship For OBC, EBC And DNT Students",
    ],

    sc: [
      "(BCk-6.1) Post Matric Scholarship for SC students (Government of India Scheme)",
      "Gujrat sc2",
      "(BCk-6.1) Post Matric Scholarship for SC students (Government of India Scheme)(Freeship Card Student Only)",
    ],
    st: [
      "VKY 164 Instrumental Assistance for First Year Students of Medical , Engineering , Diploma Courses",
      " Umbrella Scheme for Education of ST Students Post-Matric Scholarship",
    ],
  },

  Rajasthan: {
    general: [
      "CM HIGHER EDUCATION SCHOLARSHIP SCHEME",
      "DEVNARAYAN GIRLS STUDENT SCHOLAR INCENTIVE SCHEME (GRADUATE AND POSTGRADUATE LEVEL)",
    ],

    sebc: [
      "RAJIV GANDHI SCHOLARSHIP FOR ACADEMIC EXCELLENCE (RGS)",
      "CM HIGHER EDUCATION SCHOLARSHIP SCHEME",
      "DEVNARAYAN GIRLS STUDENT SCHOLAR INCENTIVE SCHEME (GRADUATE AND POSTGRADUATE LEVEL)",
    ],

    sc: [
      "CM HIGHER EDUCATION SCHOLARSHIP SCHEME",
      "RAJIV GANDHI SCHOLARSHIP FOR ACADEMIC EXCELLENCE (RGS)",
    ],

    st: [
      "CM HIGHER EDUCATION SCHOLARSHIP SCHEME",
      "CM Student Kalyan Scholarship",
    ],
  },

  Maharastra: {
    general: [
      "	Dr. Punjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna, Maharashtra",
      "Jawaharlal Nehru University Scheme, Maharashtra",
    ],

    sebc: [
      "Tuition Fees and Examination Fees to VJNT Students, Maharashtra",
      "	Rajarshi Chhatrapati Shahu Maharaj Merit Scholarship, Maharashtra",
      "	Dr. Punjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna, Maharashtra",
    ],

    sc: [
      " Rajarshi Chatrapati Shahu Maharaj Shikshan Shulkh Shikshavrutti Yojana(EBC)",
      "	Dr. Punjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna, Maharashtra",
      "Jawaharlal Nehru University Scheme, Maharashtra",
    ],

    st: [
      " Rajarshi Chatrapati Shahu Maharaj Shikshan Shulkh Shikshavrutti Yojana(EBC)",
      "	Dr. Punjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna, Maharashtra",
      "Jawaharlal Nehru University Scheme, Maharashtra",
    ],
  },
};

//function for select scholarship

const displayScholarshis = () => {
  const selectedState = stateSelect.value;
  const selectedCategory = categorySelect.value;

  const selelectedScholarships =
    scholarshipData[selectedState][selectedCategory];

  const scholarshipHTML = selelectedScholarships.map((scholarship) => {
    return `<option value='${scholarship}'>${scholarship} </option>`;
  });
  // .join("");

  scholarshipSelectBox.innerHTML = scholarshipHTML;
};

stateSelect.addEventListener("change", displayScholarshis);
categorySelect.addEventListener("change", displayScholarshis);

displayScholarshis();
