import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";

const useMenu = () =>{
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
        //LoadData
        useEffect(() =>{
            fetch(`http://localhost:5000/menu`)
            .then(res => res.json())
            .then(data =>{
                setMenu(data)
                setLoading(false)
            
            })
        
        }, [])
        return [menu, loading]

}

export default useMenu;