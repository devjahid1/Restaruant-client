import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import { replace, useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";


const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} = item;
    const {user} = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();
    const handleAddToCart = food =>{
      if(user && user.email){
        //TODO: send cart item to the database

        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          price
        }
        axiosSecure.post(`/carts`, cartItem)
        .then(res=>{
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
            refetch();
          }
          
        })
        
      }
      else{
        Swal.fire({
          title: "You Are Not Login !",
          text: "Please login to add to the cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login"
        }).then((result) => {
          if (result.isConfirmed) {
              navigate('/login',{state:{from:location}} )

          }
        });
      }
      
    }
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-5 py-1">${price}</p>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div onClick={handleAddToCart} className="card-actions justify-end">
      <button className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-4 border-orange-400">Add To Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;