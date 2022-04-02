import { useEffect, useState } from "react"
import { gett } from "./Storage"

const useCaart = (products) => {

    const [crt, settc] = useState([]);

    useEffect(() => {
        const data = gett();
        const a = [];
        for (const id in data) {
            const fc = products.find(p => p.id === id);
            if (fc) {
                const quantity = data[id];
                fc.quantity = quantity;
                a.push(fc)
            }
        }
        settc(a)
    }, [products])
    return [crt,settc]
}
export default useCaart;