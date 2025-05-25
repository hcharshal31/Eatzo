import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { initialPath } from "../utils/images";
import { useDispatch } from "react-redux";
import {removeItem, clearCart} from "../utils/cartSlice";
import EmptyCart from "./EmptyCart";

const Cart = () => {

    const dispatch = useDispatch();

    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems);

    const handleRemoveItem = index => {
        dispatch(removeItem(index));
    }

    const handleClearCart = (ev) =>{
        ev.preventDefault();
        dispatch(clearCart(cartItems));
    }

    if(cartItems.length <= 0){
        return(<EmptyCart />);
    }

    return (
        
        <div className="mt-30 pb-15">
            
            <div className="flex flex-col items-center">
                <h1 className="my-4 mx-auto text-center text-3xl font-bold">Cart</h1>
                {cartItems.length > 0 && <button className="w-50 border-1 p-2 rounded-sm bg-white" onClick={handleClearCart}>Clear Cart</button>}
            </div>
            
            {cartItems.map((item, index) => 
                (
                    <div key={item?.card?.info?.id || index} className="flex items-center justify-between m-5 rounded-lg bg-amber-200 border-gray-700 p-4 w-6/12 mx-auto">
                        <div className="w-8/12 my-5 mx-auto">
                            <h4 className="font-bold text-md">{item?.card?.info?.name} - <span className="text-md text-amber-600">{item?.card?.info?.ratings?.aggregatedRating?.rating}</span>&nbsp;<FontAwesomeIcon icon={faStar} style={{ color: "#d97706" }} /></h4>
                            <h4 className="text-amber-800 font-bold text-sm">For ₹{item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100}</h4>
                            <p className="text-sm">{item?.card?.info?.description}</p>
                        </div>
                        <div className="relative">
                            <button className="bg-amber-950 text-white text-sm border-0 w-15 h-6 rounded-md absolute bottom-[-12px] left-1/2 -translate-x-1/2" onClick={()=>handleRemoveItem(index)}>Remove</button>
                            <img className="w-40 h-24 rounded-md object-cover" src={initialPath + item?.card?.info?.imageId} />
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default Cart;