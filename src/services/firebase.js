import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs} from "firebase/firestore"
import { doc, getDoc } from "firebase/firestore";
import { query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwRBAmSbVrq5ReO0Y4xuOlcXIYTXxAXgQ",
  authDomain: "proyectolautareact.firebaseapp.com",
  projectId: "proyectolautareact",
  storageBucket: "proyectolautareact.appspot.com",
  messagingSenderId: "996338113605",
  appId: "1:996338113605:web:e0913f658d21e97d1e572c"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

const DB = getFirestore(FirebaseApp)

export function testDatabase(){}


export async function getSingleItemFromAPI(id){

const docRef = doc(DB, "products", id);
const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    return{
        ...docSnap.data(),
        id: docSnap.id,
    }
    } else {
    console.log("No existe el producto");
    }


}
export async function getItemFromAPI(){
    try{
        const collectionProducts = collection(DB,"products")
        let respuesta = await getDocs(collectionProducts);

        const products = respuesta.docs.map (docu => {

            return {
                ...docu.data(),
                id: docu.id,
            };
        });
        return (products);
    }
    catch{
        console.error();
    }
}


export async function getItemFromAPIByCategory(categoryID){
    const productsRef = collection(DB,"products");
    const myQuery = query(productsRef, where("categoria", "==", categoryID))

    const productsSnapShot =await getDocs(myQuery);
    const products = productsSnapShot.docs.map (docu => {

        return {
            ...docu.data(),
            id: docu.id,
        };
    });
    return products;
}