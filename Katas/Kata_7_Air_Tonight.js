/*

we are using a function to determine if the air is polluted or clean
grabbing multiple samples.

checkAir(samples, threshold)
samples = array of all the different samples, valued at clean or dirty.
threshold = a decimal number that determines if the percentage of the 
samples is under or exceeds it. 

For example, if the threshold is at .5 , the dirty air has to be less than 50% of the
collected samples to pass as Clean. If not, it will be passed as Polluted.

*/


//create a function that determines if the air is clean or polluted.
const checkAir = (samples, threshold) => {
  let sampleDirty = 0;
  for (let air of samples) {
    if (air === 'dirty') {
      sampleDirty += 1;
    }
  }
  let quality = sampleDirty / (samples.length + 1);
  if (quality > threshold) {
    return 'Polluted';
  }
  return 'Clean';
}

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))

