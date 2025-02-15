import {collection, addDoc} from "firebase/firestore";
import {db} from "../utils/database";
const acteData = {
    Id_acte: "1",
    Id_patient: "1",
    Id_docteur: "1",
    Maladie: "RALOVA Heritiana",
    Dent: "22",
    Date: "lova@gmail.com",
    Montant: 10000,
    Montant_recu: 10000,
    Reste_a_payer: 0,
    Antibio_therapeutique: true

}
export const addActe = async (e) => {
    try {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "Actes"), acteData);
        console.log("document written with id :", docRef.id);
        alert("success")
    } catch (error) {
        console.error(error)
    }
}

