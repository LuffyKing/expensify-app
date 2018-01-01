import * as firebase from 'firebase';
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export{firebase,googleAuthProvider, database as default};
// //child_removed
// database.ref('expenses').on('child_removed', (snapshot)=>{
//   console.log(snapshot.key, snapshot.val());
//
// });
// //child_changed
// database.ref('expenses').on('child_changed',(snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// //child_added
// database.ref('expenses').on('child_added',(snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses')
//         .on('value',(snapshot)=> {
//           const expenses = [];
//           snapshot.forEach((childSnapshot)=>{
//             expenses.push({
//               id:childSnapshot.key,
//               ...childSnapshot.val()
//             });
//           });
//           console.log(expenses);
//         });
// const addToDatabase = (content)=>{database.ref('expenses').push(content).then(() => {
//     console.log(content,'Data is saved');
// }).catch((e) => {
//   console.log('This failed.', e);
// });};
// let listOfExpenses = [{description:'Swordman',note:'Damola the great',amount:'$1234.45',createdAt:'11/12/2012'},{description:'Swordman',note:'Damola the great',amount:'$1234.45',createdAt:'11/12/2012'},{description:'Swordman',note:'Damola the great',amount:'$1234.45',createdAt:'11/12/2012'}];
// listOfExpenses.map((element)=>{
//   addToDatabase(element);
// });
//database.ref('notes/-L1Z-YKI6liF2mRjkOeV').remove()
// database.ref('notes').push({
//   title:'to do',
//   body:'react native, angular,python'
// });
// const firebaseNotes = {
//   notes:{'12':{title:'First note',body:'This is my note'}, '76':{title:'another note', body:'this is my note'}}
// }
// const notes = [{id:'12',title:'First note',body:'This is my note'}, {id:'76',title:'another note', body:'this is my note'}];
// database.ref('notes').set(notes);
// database.ref().set({
//   name:'Damola',
//   age:24,
//   stressLevel:6,
//   isSingle:true,
//   job:{title:'Software Developer',company:''},
//   location:{
//     city:'Philadelphia',
//     country:'United States'
//   }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed.', e);
// });
// const personalDetailSub = database.ref()
//                                   .on('value', (snapshot) => {
//                                       const val  = snapshot.val();
//
//                                       console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
//                                   }, (e)=>{console.log('Error with data fetching',e)});

// const onValueChange = database.ref().on('value', (snapshot) =>{
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e)
// });
// setTimeout(() => {
//   database.ref('age').set(29);
// },3500)
// setTimeout(() => {
//   database.ref().off(onValuechange);
// },7000)
// setTimeout(() => {
//   database.ref('age').set(30);
// },10500)
// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('Error fetching data', e)
//   });
//
// database.ref().remove().then(() => {
//   console.log('Remove succeeded');
// }).catch((error) => {
//   console.log("remove failed:"+error.message);
// });
// database.ref().update({
//   'job/company':'Amazon',
//   'location/city':'Seattle',
//   stressLevel:9
//
// });
// // database.ref('location/city').set('Lagos');
// // database.ref('location/country').set('Nigeria');
//
//
// database.ref('attributes').set({'height':170,'weight':90}).then(() => {
//   console.log('Attributes were saved');
// }).catch((e) => {
//   console.log('Attribute save operation failed');
//
// })
