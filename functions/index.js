const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest(async(request, response) => {
//  response.send("Hello from Firebase!");

//  await admin.firestore().collection('users').get().then(doc => {
//      console.log(doc.size)
//      response.send('There are ' + doc.size + " users")
//  })

 const users = await admin.auth().listUsers(1000).then((list) => list.users)
 console.log(users)
 response.send('Users: ' + users.length)

});



exports.eventDoc = functions.firestore.document('users/{userid}/shortener/{docid}')
    .onWrite(async(change, context) => {
        console.log(change)
        console.log(context)
        const data = change.after.data()
        console.log(data)
        await admin.firestore().collection('shortener').doc(context.params.docid).set({
            longUrl: data.long,
            shortUrl: data.short
        })

    })
