// const person = {
//   age: 26,
//   location:{
//     city: 'Philly',
//     temp:92
//   }
// };
// const{name:firstName = 'Anonymous', age} = person;
//
// const {temp: temperature, city} = person.location;
// console.log(`${firstName}`);
// const book ={
//   title:'Ego is the Enemy',
//   author:'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
// const {name:publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);
// const address = ['1299 S Juniper Street','Philadelphia','Pennsylvania','19147'];
// const [,city ,state='No state'] = address;
console.log(`You are in S ${city} ${state}`)
const item =['Coffe (hot)', '$2.00', '$2.50', '$2.75'];
const [hotCoffee, small, medium, hot] = item;
console.log(`A medium ${hotCoffee} costs ${medium}`);
