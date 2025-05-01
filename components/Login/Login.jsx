import { useState } from "react";
import Card from "../Card/Card";
import Input from "../input/Input";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { TT } from "../ToogleTab/TT";
import './Login.css';

function Login () {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <Card onSubmit={handleSubmit}>
            <Heading title="Login Form"/>
            <TT />

            <Input tp="text" ph="Email Address" name="email" onChange={handleChange} />
            <Input tp="password" ph="Password" name="password" onChange={handleChange} />

            <a id="lnk" href="">Forgot password?</a>

            
            <Button text="LOGIN" type="submit" />

            <p id="another">
                Not a member? <a href="">Signup now</a>
            </p>
        </Card>
    );
}
export default Login;