import { useRef, useState } from 'react'
import Navbar from "./Navbar";

export default function Home() {

    const [isLogined, setIslogined] = useState(false);

    
    return (
        <>
            <Navbar />

        </>
    )
}