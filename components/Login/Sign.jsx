import Card from "../Card/Card"
import Input from "../input/Input";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import { TT } from "../ToogleTab/TT";
function Sign (){
    return (
        <>
        <Card>
            <Heading title="Signup Form"/>
            <TT/>
            <Input tp="text" ph="Enter Your Name"/>
            <Input tp="password" ph="Enter your Password"/>
            <Input tp="password" ph="Conform Password"/>
            <Button text="SIGNUP"/>
        </Card>
       
        </>

    )
}

export default Sign;