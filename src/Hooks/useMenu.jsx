import { useEffect, useState } from "react"

const useMenu = () =>{
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
        //LoadData
        useEffect(() =>{
            fetch(`menu.json`)
            .then(res => res.json())
            .then(data =>{
                setMenu(data)
                setLoading(false)
            
            })
        
        }, [])
        return [menu, loading]

}

export default useMenu;