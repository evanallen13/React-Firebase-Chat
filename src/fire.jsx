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
