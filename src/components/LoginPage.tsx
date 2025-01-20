import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
    const { status, isChecking } = useContext(AuthContext);

    if (isChecking) {
        return <div>Loading...</div>;
    }

    return (
        <div>{status}</div>
    )
}

export default LoginPage; 