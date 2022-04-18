import {useEffect, useState} from "react";
import { db }from '../firebase-config';
import { collection, getDocs }from 'firebase/firestore';
import NavBar from "./NavBar.js";
import MenuCard from "./Menucard";



function Home() {
    const [splcoffee,setSpecialCoffee] = useState([]);
    const chevalCollRef = collection(db,"desserts");

    useEffect(() => {
        const getCoffee = async () => {
        const data  = await getDocs(chevalCollRef);
        setSpecialCoffee(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }

        getCoffee().then(r => console.log("done"))
    },[]);

    return <div>
        <header>
        </header>
        <NavBar/>
        <>
            {
             splcoffee.map((splcoff) => {
               return(

                   <div key={splcoff.id}>
                       <h2> English : {splcoff.english}</h2>
                       <h2> Arabic : {splcoff.arabic}</h2>
                       <h2> Price : {splcoff.price} AED</h2>
                       <img src={splcoff.picture} alt="menu"/>

                           <MenuCard/>

                   </div>
               );})
            }
        </>
    </div>

}


export default Home;