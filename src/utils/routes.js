const routes = [
  { route: "/", routeId: "", label: "Dashboard", icon: "grid" },
  {
    route: "/managment/schools",
    routeId: "schools",
    label: "Schools",
    icon: "business",
  },
  {
    route: "/managment/colleges",
    routeId: "colleges",
    label: "Colleges",
    icon: "business",
  },
  {
    route: "/managment/universities",
    routeId: "universities",
    label: "Universities",
    icon: "business",
  },
  { route: "/students", routeId: "students", label: "Students", icon: "book" },
  {
    route: "/teachers",
    routeId: "teachers",
    label: "Teachers",
    icon: "person",
  },
  {
    route: "/settings",
    routeId: "settings",
    label: "Settings",
    icon: "settings",
  },
];

export const managmentLabelData = [
  { id: "schools", singular: "School", Label: "Schools", type: 1 },
  { id: "colleges", singular: "College", Label: "Colleges", type: 2 },
  {
    id: "universities",
    singular: "University",
    Label: "Universities",
    type: 3,
  },
];

export const managmentStaffLabelData = [
  {
    id: "teachers",
    singular: "Teacher",
    Label: "Teachers",
    role: 1,
    filter: "teacher",
  },
  {
    id: "students",
    singular: "Student",
    Label: "Students",
    role: 2,
    filter: "student",
  },
  {
    id: "staff",
    singular: "Staff Member",
    Label: "Staff Members",
    role: 3,
    filter: "staff",
  },
];

export default routes;
