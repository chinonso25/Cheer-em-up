import app from "firebase/app";
import "firebase/auth";


const config = {
  apiKey: "AIzaSyCFg0pG_kXtd6UmUGiWniopfW7030IbfFI",
  authDomain: "prayersupport-5107b.firebaseapp.com",
  databaseURL: "https://prayersupport-5107b.firebaseio.com",
  projectId: "prayersupport-5107b",
  storageBucket: "",
  messagingSenderId: "340364043158",
  appId: "1:340364043158:web:4329166199eac84642f3b7"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}
export default new Firebase();
