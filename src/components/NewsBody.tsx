import { useState } from "react";
import Nav from "./Nav";
import News from "./News";

export default function NewsBody() {

    const [category, setCategory] = useState("general")
    console.log(category)

    return(
        <>
            <Nav category={category} setCat={setCategory}/>
            <News category={category}/>
        </>
    )
}