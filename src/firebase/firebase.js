
//Import statements: 
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, update , push } from 'firebase/database'
//Initialize the db

const config = {
  apiKey: "AIzaSyD4iE3NVP32RqkK0VQI4j39fiVtDl0P2XA",
  authDomain: "expensify-884e4.firebaseapp.com",
  databaseURL: "https://expensify-884e4-default-rtdb.firebaseio.com",
  projectId: "expensify-884e4",
  storageBucket: "expensify-884e4.appspot.com",
  messagingSenderId: "574490449181",
  appId: "1:574490449181:web:7f9ea64237cad14a68fdf4",
  measurementId: "G-4D1VCEE5QM"
}; 


const firebase = initializeApp(config)
const db = getDatabase()

export {firebase , db as default}

// const expenses = [{
//   description: 'Item One',
//   note: 'This is the first item',
//   amount: 4500,
//   createdAt: 0
//  }, {
//   description: 'Item Two',
//   note: 'This is the second item',
//   amount: 222,
//   createdAt: 0
//  }, {
//   description: 'Item Three',
//   note: 'This is the third item',
//   amount: 10500,
//   createdAt: 0
//  }]
  
//  expenses.forEach((expense) => push(ref(db, 'expenses'), expense));

// // push(ref(db, 'notes') ,{
// //   title: 'To Do',
// //   body: 'Go on a run'
// // })

// //Set initial values to db
// // set(ref(db), { name: 'Gal',
// //   age: 31,
// //   location: {
// //     city: 'Raanana',
// //     country: 'Israel'
// //   }
// // }).then(()=>{
// //   console.log('Data saved successfully')

// // }).catch((e)=>{
// //   console.log('Error : ' , e);
// // })

// // update(ref(db), {
// //   attributes: {
// //     height: 99,
// //     weight: 666
// //   }
// // })


