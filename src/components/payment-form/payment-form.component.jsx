import { CardElement } from "@stripe/react-stripe-js";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";




//function for payment form
function PaymentForm () {

    return (
        <div>
            < CardElement />
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay Now </Button>
        </div>
    )
}



export default PaymentForm;