import { useState } from "react";

export function useCart () {
    const [cartShoes , setCartShoes ] = useState([])
    return [cartShoes,setCartShoes]
}