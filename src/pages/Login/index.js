import "../../style.css";
import "./login.css"
import MenuPrincipal from "../../components/Layout/Menu/Principal";
import LoginComponent from "../../components/Login/loginComponent";

const Login = () => {
    return (
        <>
            <div>
                <MenuPrincipal />
                <div>
                    <LoginComponent />
                </div>
            </div>
        </>
    );
};

export default Login;