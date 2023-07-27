
function MostFrequentElement(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return null; 
    }
  
    const frequencyMap = {};
  
    // Loop through the array and count the frequency of each element
    arr.forEach((element) => {
      if (frequencyMap[element]) {
        frequencyMap[element]++;
      } else {
        frequencyMap[element] = 1;
      }
    });
  
    // Find the element with the highest frequency
    let mostFrequentElement;
    let highestFrequency = 0;
    for (const element in frequencyMap) {
      if (frequencyMap[element] > highestFrequency) {
        mostFrequentElement = element;
        highestFrequency = frequencyMap[element];
      }
    }
  
    return mostFrequentElement;
  }
  

const arr =  [3, 5, 2, 5, 3, 3, 1, 4, 5] ;
const result = MostFrequentElement(arr);
console.log(result);