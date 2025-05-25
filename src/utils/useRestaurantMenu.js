import { useEffect, useState } from 'react';
import { menuApi } from './mockData'

const useRestaurantMenu = (resId) => {
    
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        try{
            let data = await fetch(menuApi+resId);
            const json = await data.json();
            // console.log(json)
            setResInfo(json);
            
        }catch(err){
            console.log(err);
        }
    }

    return resInfo;
}

export default useRestaurantMenu;