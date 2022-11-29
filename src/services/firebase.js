import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs} from "firebase/firestore"
import { doc, getDoc } from "firebase/firestore";
import { query, where, addDoc } from "firebase/firestore";

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
try {
const docRef = doc(DB, "products", id);
const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    return{
        ...docSnap.data(),
        id: docSnap.id,
    };
    } else {
    throw new Error("No existe el producto");
    }
}
catch(error){
    throw  error;
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

    const emptyArray = productsSnapShot.docs.length < 1;

    if (emptyArray) throw new Error("Categoría sin resultados");

    const products = productsSnapShot.docs.map (docu => {

        return {
            ...docu.data(),
            id: docu.id,
        };
    });
    return products;
}

export async function createBuyOrderFirestore(buyOrderData) {
    const collectionRef = collection(DB, "buyorders");
    const docRef = await addDoc(collectionRef, buyOrderData);
  
    return docRef.id;
}


// export async function exportItemsToFirestore(){
//     const items = [ 
//         {
//         "id": 1,
//         "title": "Messi",
//         "precio": "15000",
//         "stock": "10",
//         "categoria": "Champions",
//         "discount" :"40",
//         "descripcion": "Actual jugador del PSG",
//         "imagen": "https://cdn.futbin.com/content/fifa23/img/players/p50489671.png?v=23"
//       }, {
//         "id": 2,
//         "title": "Ronaldo",
//         "precio": "12000",
//         "stock": "7",
//         "categoria": "Europa",
//         "descripcion": "Actual jugador del Manchester united",
//         "imagen": "https://cdn.futbin.com/content/fifa23/img/players/p50352449.png?v=23"
//       } , {
//         "id": 3,
//         "title": "Mbappe",
//         "precio": "1000",
//         "stock": "7",
//         "categoria": "Champions",
//         "descripcion": "Actual jugador del PSG",
//         "imagen": "https://cdn.futbin.com/content/fifa23/img/players/p50563395.png?v=23"
//       }, {
//         "id": 4,
//         "title": "Lewandowski",
//         "precio": "15000",
//         "stock": "10",
//         "categoria": "Europa",
//         "descripcion": "Actual jugador del Barcelona",
//         "imagen": "https://cdn.futbin.com/content/fifa23/img/players/p50520193.png?v=23"
//       }, {
//         "id": 5,
//         "title": "Neymar",
//         "precio": "11000",
//         "stock": "11",
//         "categoria": "Conference",
//         "descripcion": "Actual jugador del PSG",
//         "imagen": "https://cdn.futbin.com/content/fifa23/img/players/p50522519.png?v=23"
//       }, {
//         "id": 6,
//         "title": "Martinez",
//         "precio": "5000",
//         "stock": "9",
//         "categoria": "Conference",
//         "descripcion": "Actual jugador del Inter",
//         "imagen": "https://cdn.futbin.com/content/fifa23/img/players/p50563126.png?v=23"
//       }, {
//         "id": 7,
//         "title": "Di Maria",
//         "precio": "11000",
//         "stock": "11",
//         "categoria": "Europa",
//         "descripcion": "Actual jugador de Juventus",
//         "imagen": "https://cdn.futbin.com/content/fifa23/img/players/p50515546.png?v=23"
//       }, {
//         "id": 8,
//         "title": "Perisic",
//         "precio": "2000",
//         "stock": "3",
//         "categoria": "Champions",
//         "descripcion": "Actual jugador del Tottenham",
//         "imagen": "https://cdn.futbin.com/content/fifa23/img/players/p50513106.png?v=23"
//       }, {
//         "id": 9,
//         "title": "Valverde",
//         "precio": "5000",
//         "stock": "9",
//         "categoria": "Champions",
//         "discount" :"10",
//         "descripcion": "Actual jugador del Real Madrid",
//         "imagen": "https://cdn.futbin.com/content/fifa23/img/players/p84125133.png?v=23"
//       }, {
//         "id": 10,
//         "title": "Salah",
//         "precio": "10000",
//         "stock": "10",
//         "categoria": "Champions",
//         "descripcion": "Actual jugador del Liverpool",
//         "imagen": "https://cdn.futbin.com/content/fifa23/img/players/p84095411.png?v=23"
//       }, {
//         "id": 11,
//         "title": "Falcao",
//         "precio": "1000",
//         "stock": "5",
//         "categoria": "Conference",
//         "descripcion": "Actual jugador del Rayo",
//         "imagen": "https://cdn.futbin.com/content/fifa23/img/players/p50499045.png?v=23"
//       }, {
//         "id": 12,
//         "title": "Son",
//         "precio": "11000",
//         "stock": "11",
//         "categoria": "Conference",
//         "discount" :"50",
//         "descripcion": "Actual jugador del Tottemham",
//         "imagen": "https://cdn.futbin.com/content/fifa23/img/players/p50531752.png?v=23"
//       }, {
//         "id": 13,
//         "title": "Fekir",
//         "precio": "6000",
//         "stock": "2",
//         "categoria": "Conference",
//         "descripcion": "Actual jugador del PSG",
//         "imagen": "https://cdn.futbin.com/content/fifa23/img/players/p50548242.png?v=23"
//       }, {
//         "id": 14,
//         "title": "Haaland",
//         "precio": "17000",
//         "stock": "19",
//         "categoria": "Champions",
//         "descripcion": "Actual jugador del Manchester City",
//         "imagen": "https://cdn.futbin.com/content/fifa23/img/players/p50570733.png?v=23"
//       }, {
//         "id": 15,
//         "title": "Muller",
//         "precio": "2000",
//         "stock": "2",
//         "categoria": "Conference",
//         "descripcion": "Actual jugador del Bayern Munich",
//         "imagen": "https://cdn.futbin.com/content/fifa23/img/players/p50521244.png?v=23"
//       }, {
//         "id": 16,
//         "title": "Havertz",
//         "precio": "1000",
//         "stock": "4",
//         "categoria": "Europa",
//         "descripcion": "Actual jugador del Chelsea",
//         "imagen": "https://cdn.futbin.com/content/fifa23/img/players/p84121870.png?v=23"
//       }, {
//         "id": 17,
//         "title": "Benzema",
//         "precio": "15000",
//         "stock": "10",
//         "categoria": "Europa",
//         "descripcion": "Actual jugador del Real Madrid",
//         "imagen": "https://cdn.futbin.com/content/fifa22/img/players/p218268961.png?v=23"
//       }, {
//         "id": 18,
//         "title": "Phillips",
//         "precio": "1200",
//         "stock": "3",
//         "categoria": "Europa",
//         "descripcion": "Actual jugador del Manchester City",
//         "imagen": "https://cdn.futbin.com/content/fifa23/img/players/p50555729.png?v=23"
//       }
//     ];
//     const collectionRef = collection(DB, "products");

//     for (let item of items) {
//       item.index = item.id;
//       delete item.id;
//       const docRef = await addDoc(collectionRef, item);
//     }
// }