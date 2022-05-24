import { useEffect, useState } from "react";

function Counter() {

    function addAngka() {
        setAngka(angka + 1);
    }

    function manipulateDOM() {
        console.log("Lifecycle: dimount");
        document.title = `Hasil: ${angka}`;
    }

    // Membuat state
    const [angka,setAngka] = useState(0);

    // useEffect: melakukan side effect
    useEffect(manipulateDOM, [angka]);

    console.log("Lifecycle: dirender");

    return(
        <div>
            <p>Result : {angka}</p>
            <button onClick={addAngka}>Add</button>
        </div>
    )
}

export default Counter;