/* create a single object to organize the instructors based on their course.

40 mins - 
*/


const organizeInstructors = function (instructors) {
  // stores the array of teacher names per class
  let classGuide = {};
  // loops through objects held inside an array
  for (let subject of instructors) {
    // if the course in object = iOS
    if (subject.course === 'iOS') {
      // if there is no property for classGuide object
      if (!(classGuide.iOS)) {
      classGuide.iOS = [];
      classGuide.iOS.push(subject.name)
      } else {
        classGuide.iOS.push(subject.name)
      }
    } if (subject.course === 'Web') {
      if (!(classGuide.Web)) {
      classGuide.Web = [];
      classGuide.Web.push(subject.name)
      } else {
        classGuide.Web.push(subject.name)
      }
    } if (subject.course === 'Blockchain') {
      if (!(classGuide.Blockchain)) {
      classGuide.Blockchain = [];
      classGuide.Blockchain.push(subject.name)
      } else {
        classGuide.Blockchain.push(subject.name)
      }
    }
  }

  return classGuide;
}

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));





//second scenario. I want to learn how to return 
//while excluding the objects that doesn't have value within the array.

const organizeInstructors = function (instructors) {
  let classGuide = {
    Blockchain: [],
    iOS: [],
    Web: []
  };
  for (let subject of instructors) {
    if (subject.course === 'iOS') {
      classGuide.iOS.push(subject.name)
    } else if (subject.course === 'Web') {
      classGuide.Web.push(subject.name)
    } else if (subject.course === 'Blockchain') {
      classGuide.Blockchain.push(subject.name)
    }
  }

  return classGuide;
}
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));