
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
                *  
                *  By agreeing to this license you and any business entity you represent are
                *  legally bound to the AllBinary Open License Version 1 legal agreement.
                *  
                *  You may obtain the AllBinary Open License Version 1 legal agreement from
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
                *  
                *  Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */
        



import { StringMaker } from "../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../../../org/allbinary/logic/string/StringUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PaymentGatewayPageData
            extends Object
         {
        

    private static readonly EXTENSION: string = ".jsp";
        
        

    private static readonly NAME: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    public static readonly FORWARDMAKEPAYMENT: string = "MakePayment.jsp";
        
        

    public static readonly PAYMENTOPTIONS: string = "PaymentOptions" +EXTENSION;
        
        

    public static readonly STARTCHECKOUT: string = "StartCheckout" +EXTENSION;
        
        

    public readonly MAKEPAYMENT: string

    public readonly CHECKOUT: string

    public readonly SHIPPING: string

    public readonly SHIPPINGADDRESS: string

    public readonly SHIPPINGADDRESSACTION: string

    public readonly BILLINGADDRESS: string

    public readonly PAYMENT: string

    public readonly AUTHORIZE: string

    public readonly FINISH: string
public constructor (location: string, paymentMethod: string){

            super();
            var location = location
var paymentMethod = paymentMethod

    var paymentMethodString: string = PaymentGatewayPageData.NAME +paymentMethod;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(location);
    
stringBuffer!.append("MakePayment");
    
stringBuffer!.append(EXTENSION);
    
MAKEPAYMENT= stringBuffer!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(paymentMethodString);
    
stringBuffer!.append("Checkout");
    
stringBuffer!.append(EXTENSION);
    
CHECKOUT= stringBuffer!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(paymentMethodString);
    
stringBuffer!.append("Shipping");
    
stringBuffer!.append(EXTENSION);
    
SHIPPING= stringBuffer!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(paymentMethodString);
    
stringBuffer!.append("ShippingAddress");
    
stringBuffer!.append(EXTENSION);
    
SHIPPINGADDRESS= stringBuffer!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(paymentMethodString);
    
stringBuffer!.append("ShippingAddressAction");
    
stringBuffer!.append(EXTENSION);
    
SHIPPINGADDRESSACTION= stringBuffer!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(paymentMethodString);
    
stringBuffer!.append("BillingAddress");
    
stringBuffer!.append(EXTENSION);
    
BILLINGADDRESS= stringBuffer!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(paymentMethodString);
    
stringBuffer!.append("Payment");
    
stringBuffer!.append(EXTENSION);
    
PAYMENT= stringBuffer!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(paymentMethodString);
    
stringBuffer!.append("Authorize");
    
stringBuffer!.append(EXTENSION);
    
AUTHORIZE= stringBuffer!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(paymentMethodString);
    
stringBuffer!.append("PaymentFinish");
    
stringBuffer!.append(EXTENSION);
    
FINISH= stringBuffer!.toString();
    
}


}
                
            

