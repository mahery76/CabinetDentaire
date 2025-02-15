import {collection, addDoc} from "firebase/firestore";
import {db} from "../utils/database";
const patientData = {
    Id_patient: "1",
    Nom_patient: "RAKOTO Lalatiana",
    Contact_patient: "032 33 325 45",
    Date_naissance: "03-05-2000",
    Profession_patient: "Etudiant",
    Adresse_patient: "Amoronakona Ambohimangakely"
}
export const addPatient = async (e) => {
    try {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "Patients"), patientData);
        console.log("document written with id :", docRef.id);
        alert("success")
    } catch (error) {
        console.error(error)
    }
}

