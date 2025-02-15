import {collection, addDoc} from "firebase/firestore";
import {db} from "../utils/database";
const docteurData = {
    Id_docteur: "1",
    Nom_docteur: "RALOVA Heritiana",
    Contact_docteur: "032 33 325 45",
    Email_docteur: "lova@gmail.com",
    Password_docteur: "blabla"
}
export const addDocteur = async (e) => {
    try {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "Docteurs"), docteurData);
        console.log("document written with id :", docRef.id);
        alert("success")
    } catch (error) {
        console.error(error)
    }
}

