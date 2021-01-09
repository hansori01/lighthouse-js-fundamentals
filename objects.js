/* objects can hold functions inside themselves.
we can also store arrays within objects
 */


// this object is called umbrella
var umbrella = {
  // name of color
  color: "pink",
  // is it open? or closed?
  isOpen: true,
  // open function returns a message and either stays open, or opens umbrella.
  open: function() {
      if (umbrella.isOpen === true) {
          return "The umbrella is already opened!";
      } else {
          umbrella.isOpen = true;
          return "Julia opens the umbrella!";
      }
  }, // <----- don't forget this comma, as objects are separated by commas.
  // close function returns a message and either stays closed, or closes umbrella.
  close: function() {
      if (umbrella.isOpen === true) {
        umbrella.isOpen = false;
          return 'Julia closes the umbrella';
      } else {
          return 'It is already open';
      }
  },
  test: (say) => 'implicit return in an object method ' + say
};
console.log(umbrella.test('hi')) // umbrella is object '.' accesses the test key. 'hi' is the argument for 'say' cool!

