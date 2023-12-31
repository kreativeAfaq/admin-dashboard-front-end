export const options_styles = {
  container: (provided) => ({
    ...provided,
    height: "100%",
    textAlign: "start",
  }),
  control: (provided, state) => ({
    ...provided,
    height: "100%",
    border: "1px solid rgba(220,220,220)",
    outline: "none",
    boxShadow: "none",
    cursor: "pointer",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: "100%",
    padding: "0px 10px",
  }),
  input: (provided) => ({
    ...provided,
    margin: "0px",
    padding: "0px",
  }),
};

export const GenderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

export const TeacherRoleOptions = [
  { label: "Head Master", value: 1 },
  { label: "Sr Teacher", value: 2 },
  { label: "Jr Teacher", value: 3 },
];

export const TeachingSubjectsOptions = [
  { label: "English", value: "english" },
  { label: "Math", value: "math" },
  { label: "Science", value: "science" },
  { label: "Hindi", value: "hindi" },
  { label: "Physics", value: "physics" },
  { label: "Computer", value: "computer" },
];

export const TeachingClassesOptions = [
  { label: "One", value: "One", id: 1 },
  { label: "Two", value: "Two", id: 2 },
  { label: "Three", value: "Three", id: 3 },
  { label: "Four", value: "Four", id: 4 },
  { label: "Five", value: "Five", id: 5 },
  { label: "Six", value: "Six", id: 6 },
  { label: "Seven", value: "Seven", id: 7 },
  { label: "Eight", value: "Eight", id: 8 },
  { label: "Nine", value: "Nine", id: 9 },
  { label: "Ten", value: "Ten", id: 10 },
];

export const EducationalBenefitsOptions = [
  { label: "Free Education", value: "freeeducation" },
  { label: "Free Books", value: "freebooks" },
  { label: "Free Transport", value: "freetransport" },
];

export const StaffDesignationOptions = [
  { label: "Watch Man", value: "watchman" },
  { label: "Warden", value: "warden" },
  { label: "Sweeper", value: "sweeper" },
];

export const statesData = [
  {
    label: "Andhra Pradesh",
    value: "andrapradesh",
    districts: [
      "Anantapur",
      "Chittoor",
      "East Godavari",
      "Guntur",
      "Krishna",
      "Kurnool",
      "Nellore",
      "Prakasam",
      "Srikakulam",
      "Visakhapatnam",
      "Vizianagaram",
      "West Godavari",
      "YSR Kadapa",
    ],
  },

  {
    label: "Telangana",
    value: "telangana",
    districts: [
      "Adilabad",
      "Bhadradri Kothagudem",
      "Hyderabad",
      "Jagtial",
      "Jangaon",
      "Jayashankar Bhoopalpally",
      "Jogulamba Gadwal",
      "Kamareddy",
      "Karimnagar",
      "Khammam",
      "Komaram Bheem Asifabad",
      "Mahabubabad",
      "Mahabubnagar",
      "Mancherial",
      "Medak",
      "Medchal",
      "Nagarkurnool",
      "Nalgonda",
      "Nirmal",
      "Nizamabad",
      "Peddapalli",
      "Rajanna Sircilla",
      "Rangareddy",
      "Sangareddy",
      "Siddipet",
      "Suryapet",
      "Vikarabad",
      "Wanaparthy",
      "Warangal (Rural)",
      "Warangal (Urban)",
      "Yadadri Bhuvanagiri",
    ],
  },
];

export const mandalData = [
  { label: "Gudivada", value: "gudivada" },
  { label: "Nandigama", value: "nandigama" },
];

export const villageData = [
  { label: "Chilakalapudi", value: "chilakalapudi" },
  { label: "Gundupalem", value: "gundupalem" },
];

export const classesOptions = [
  {
    name: "schools",
    classes: [
      { label: "Upto 5th Class", value: 5 },
      { label: "Upto 10th Class", value: 10 },
      { label: "Upto 12th Class", value: 12 },
    ],
  },
  {
    name: "colleges",
    classes: [
      { label: "Upto 12th Class", value: 12 },
      { label: "Upto 14th Class", value: 14 },
    ],
  },
  {
    name: "universities",
    classes: [
      { label: "Upto 16th Class", value: 16 },
      { label: "Upto 18th Class", value: 18 },
    ],
  },
];
