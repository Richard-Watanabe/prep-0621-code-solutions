var person = {
  firstName: 'Richard',
  lastName: 'Watanabe',
  hobby: 'Video Games'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName);

person.job = 'none';
console.log("The person's current job is: " + person.job);

person.previousJob = 'insurance agent';
console.log("The person's previous job is: " + person.previousJob);
console.log('The complete person object: ', person);
