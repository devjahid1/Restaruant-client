
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";
import UseAuth from "../Hooks/UseAuth";
import useAxiousPublic from "../Hooks/useAxiousPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn} = UseAuth(AuthContext);
    const axiosPublic = useAxiousPublic();
    const navigate = useNavigate()
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res=>{
                console.log(res.data);
                navigate('/');
                
            })
        })
        .catch(error=>{
            console.log(error);
            
        })
    }
    return (
        <div className="px-8 pb-4">
            <div className="divider"></div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-neutral">
                    <FaGoogle className="mr-1"/>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;