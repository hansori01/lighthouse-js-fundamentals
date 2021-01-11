/*
Create a function called judgeVegetable() that will decide which veg. 
is best based on a given judging characteristic.
the parameters for judgeVegetable(vegetables, metric) 
  - veggies takes in the array of objects 
  - metric chooses which quality it judges.
the function must return the name of the person who submitted with
  vegetables.submitter (veg with the highest ranking in the metric)


if the contest had these contestents: 

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)

the winner would be 'Old Man Franklin'

*/


// function takes two arguments: vegetables and metric and outputs the name with highest 'metric' value
const judgeVegetable = (vegetables, metric) => {
  //stores the name pulled from array object
  let person = '';
  //stores metric value and gets compared to every round.
  let quality = 0;
  // loop iterates through the arrays and accesses the object values
  for (let i=0; i<vegetables.length; i++){
    // every loop checks if the 'metric' property has a > than 'quality' ?? check why .metric doesn't work?
    if (vegetables[i][metric] > quality) {
      // if > quality - the qualy becomes vegetables.metric
    quality = vegetables[i][metric];
    // if > quality 'submitter' key goes into person variable
    person = vegetables[i]['submitter'];
  }
  }
  // the winner's name gets returned.
  return person;
}

// the list of veggies and submitters are below
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
const metric = 'plumpness'
// prints who wins
console.log(judgeVegetable(vegetables, metric));




// other people's solution to the problem.

const judgeVegetable = function (vegetables, metric) {
  vegetables.sort(function (a, b) {
    return b[metric] - a[metric];
  });
  return vegetables[0].submitter
}

