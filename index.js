const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCase(str) {
  str = str.toLowerCase()
  .split(' ') 
  .map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  });
  return str.join(' '); 
}

// titleCase("I'm a little tea pot");


// function titleCased(tutorials){
//   for(str in tutorials){
//     str = str.toLowerCase()
//     .split(' ') 
//     .map(function(word) {
//       return (word.charAt(0).toUpperCase() + word.slice(1));
//     });
//     return str.join(' '); 
//   }
//   return tutorials
// }

const titleCased = tutorials.map(function(str){
  str = str.toLowerCase()
  .split(' ') 
  .map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1))
    })
  return str.join(' ')
})

//titleCase("I'm a little tea pot");

// const titleCased = () => {
//   return tutorials
// }

// const titleCased = function() {
//   return tutorials
// }

// const titleCased = tutorials.map(function(tutorial) {
//   return str.toLowerCase().split(' ').map(function(word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(' ');
//   return tutorials
// })
