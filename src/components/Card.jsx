import { initialPath } from "../utils/images";


const Card = (props) => {

    const {name, cuisines, cloudinaryImageId, avgRating} = props.resData;
    
    const resNameCut = name.length > 23? name.slice(0, 20)+"...": name;

    return (
    <div className="card flex bg-amber-200 w-50 justify-between flex-col p-2 rounded-md items-center align- h-60">
        <img src={initialPath + cloudinaryImageId} alt="Food image" className="card-img w-45 h-30 rounded-md object-cover" />
        <p className="w-[100%]">{cuisines[0]}</p>
        <p className="resName w-[100%]">{resNameCut}</p>
        <p className="w-[100%]">{avgRating}</p>
    </div>
    );
}

export const recCard = (Card)=>{
    return (props) => {
        return(
            <div>
                <label className="absolute mt-1 ml-1 rounded-md bg-black text-white w-30 text-sm p-[5px] shadow-white">Recommended</label>
                <Card {...props}/>
            </div>
        )
    }
}

export default Card;