import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC816_trn2vH1NS-SlD_qaA_IR6cqJoTu4",
  authDomain: "tweeds-2ebdb.firebaseapp.com",
  projectId: "tweeds-2ebdb",
  storageBucket: "tweeds-2ebdb.appspot.com",
  messagingSenderId: "100972096390",
  appId: "1:100972096390:web:635bbd7a28420296659a07",
  measurementId: "G-LQXRCPPBCG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
