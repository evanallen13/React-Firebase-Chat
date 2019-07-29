import * as firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyBeMRWDpDPPEG8Mv46GudU1l7fpGyoQ2O8",
    authDomain: "bacon-21ca3.firebaseapp.com",
    databaseURL: "https://bacon-21ca3.firebaseio.com",
    projectId: "bacon-21ca3",
    storageBucket: "bacon-21ca3.appspot.com",
    messagingSenderId: "226925895433",
    appId: "1:226925895433:web:c55d40b6b0cf6325"
});

class Fire{

    authListener(){
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    addMes(key,user,mes){
        const db = firebase.firestore();
        let data = {
            Key: key,
            User: user,
            Mes: mes
        }

        db.collection('Messages').doc(data.Key.toString()).set(data)
    }

    readMes(){
        let array = [];
        const db = firebase.firestore();
        const collection = db.collection('Messages')

        collection.onSnapshot((doc) => {
            doc.forEach(docs => {
                array.push({
                    Key : docs.data().Key,
                    User : docs.data().User,
                    Mes : docs.data().Mes
                })
            });
        })
        return array
    }

}
 Fire.shared = new Fire();
export default Fire;
