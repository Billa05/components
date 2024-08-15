import Table from "./Table";
import VisionPricingCalculator from "./VisionPricing";

export default function ApiPricing(){
    return(
    <>
    <div className="bg-[#1e293b] p-8 rounded-lg">
        <div>
            <div className="font-bold text-3xl text-[#a5b4fc]">Api Pricing</div>
            <br></br>
            <p className="text-white">Our API pricing is based on the model used and the number of tokens processed.</p>
            <p className="text-white">Here's a breakdown of the costs:</p>
        </div>

        <br></br>
        <Table/>
        <br />
        <VisionPricingCalculator/>
        <br />
        <div>
            <div className="font-bold text-2xl text-[#a5b4fc]">Token Estimation</div>
            <p className="text-white">On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>
        </div>
        <br />
        <div>
            <div className="font-bold text-2xl text-[#a5b4fc]">Billing</div>
            <p className="text-white">You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>
        </div>
    </div>
    </>
    )
}