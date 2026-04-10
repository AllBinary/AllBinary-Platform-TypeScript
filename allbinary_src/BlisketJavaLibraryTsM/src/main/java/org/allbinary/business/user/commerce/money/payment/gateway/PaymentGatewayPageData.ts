
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
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

append(location)
append("MakePayment")
append(EXTENSION)
MAKEPAYMENT= stringBuffer!.toString()
delete(0, stringBuffer!.length())
append(paymentMethodString)
append("Checkout")
append(EXTENSION)
CHECKOUT= stringBuffer!.toString()
delete(0, stringBuffer!.length())
append(paymentMethodString)
append("Shipping")
append(EXTENSION)
SHIPPING= stringBuffer!.toString()
delete(0, stringBuffer!.length())
append(paymentMethodString)
append("ShippingAddress")
append(EXTENSION)
SHIPPINGADDRESS= stringBuffer!.toString()
delete(0, stringBuffer!.length())
append(paymentMethodString)
append("ShippingAddressAction")
append(EXTENSION)
SHIPPINGADDRESSACTION= stringBuffer!.toString()
delete(0, stringBuffer!.length())
append(paymentMethodString)
append("BillingAddress")
append(EXTENSION)
BILLINGADDRESS= stringBuffer!.toString()
delete(0, stringBuffer!.length())
append(paymentMethodString)
append("Payment")
append(EXTENSION)
PAYMENT= stringBuffer!.toString()
delete(0, stringBuffer!.length())
append(paymentMethodString)
append("Authorize")
append(EXTENSION)
AUTHORIZE= stringBuffer!.toString()
delete(0, stringBuffer!.length())
append(paymentMethodString)
append("PaymentFinish")
append(EXTENSION)
FINISH= stringBuffer!.toString()
}


}
                
            

