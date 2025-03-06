import { Input } from "../input/Input";
import Card from "../Card/Card"
import { Head } from "../Heading/Head";
export const Sign = () =>   
 <Card >
<Head heading="SIGNUP FORM"/>

<Input type="username"/>
<Input type="password" />
<Input type="confirm password" />
</Card>