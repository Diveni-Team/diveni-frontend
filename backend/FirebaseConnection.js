import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, query, where, getDocs, updateDoc,doc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAR3zhbelx7stTajKGZhBaDvBq289QcAv8",
  authDomain: "diveni-e73be.firebaseapp.com",
  databaseURL: "https://diveni-e73be-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "diveni-e73be",
  storageBucket: "diveni-e73be.appspot.com",
  messagingSenderId: "468420706356",
  appId: "1:468420706356:web:030182b3a43d8ed70d8a61",
  measurementId: "G-SVYJH1V6R5"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export const firestore = getFirestore();

export const createUserDocument = async (user, additionalData) => {
    if (!user) return;

    const db = getFirestore();

    const usersCollection = collection(db, 'users');

    const q = query(usersCollection, where('uid', '==', user.uid));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        const { email } = user;
        const { displayName } = additionalData;
        try {
            await addDoc(usersCollection, {
                uid: user.uid,
                displayName,
                email,
                createdAt: new Date(),
            });
        } catch (error) {
            console.log('Error in creating user', error);
        }
    }
}

export {auth, db};
