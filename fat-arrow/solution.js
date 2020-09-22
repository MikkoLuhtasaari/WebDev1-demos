function getGreeting(name) {
  return `Greetings, ${name}`;
}

const getGreeting2 = name => {
  return `Greetings, ${name}`;
}

const getGreeting3 = name => `Greetings, ${name}`;

const getATip = () => (
  {
    id: "asdkoqwriuj129081nk",
    header: "Drink water",
    content: "This is a long text explaining about drinking water"
  }
)

const people = [
  {
    name: "Teemu Teekkari",
    age: 25,
    occupation: "student"
  },
  {
    name: "John Doe",
    age: 85,
    occupation: "unknown"
  },
  {
    name: "Marina Childs",
    age: 30,
    occupation: "teacher"
  }
];

function studentNames() {
  return people.filter(function (person) {
    return person.occupation === "student";
  }).map(function (student) {
    return student.name;
  });
};

const studentNames2 = () => people.filter(person => person.occupation === "student").map(student => student.name);

console.log(studentNames());
console.log(studentNames2());