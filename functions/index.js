const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
// const puppeteer = require('puppeteer');
const payload = {
  fUserId: '1929587090588927',
  companyKey: '-L0M_VQeWZQJ8GXg_Z8C',
  invoiceKey: '-L0qF5e1YZp1XijxX8ZO' 
}
exports.dbUpdate = functions.database
  .ref('/users/'+ payload.fUserId + '/companies/'+ payload.companyKey + '/invoices/' + payload.invoiceKey )
  .onWrite( event =>{
    const invoice = event.data.val();
     if(invoice.updated){
       return
     
      }
      console.log ('invoice', invoice)
    invoice.updated = true; //stops infinite loop when database is updated
    invoice.discount = "hi there";
    return event.data.ref.set(invoice)
  })
