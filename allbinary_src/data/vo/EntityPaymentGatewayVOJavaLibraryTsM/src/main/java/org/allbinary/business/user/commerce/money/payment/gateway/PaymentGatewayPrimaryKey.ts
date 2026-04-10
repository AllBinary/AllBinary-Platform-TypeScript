
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
        



import { StoreFront } from "../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFront.js";

    
import { StringMaker } from "../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../../../../../org/allbinary/string/CommonSeps.js";

    

export class PaymentGatewayPrimaryKey
            extends Object
        
                , java.io.Serializable {
        

    private storeName: string

    private name: string
public constructor (storeName: string, gatewayName: string){

            super();
            var storeName = storeName
var gatewayName = gatewayName
this.setStoreName(storeName)
this.setName(gatewayName)
}


    public getStoreName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return storeName;
    
}


    public setStoreName(storeName: string){
var storeName = storeName
this.storeName= storeName
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


    public setName(name: string){
var name = name
this.name= name
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(PaymentGatewayPrimaryKey::class.toString()!)
stringBuffer!.append(StoreFront::class.toString()!)
stringBuffer!.append(" =")
stringBuffer!.append(this.getStoreName())
stringBuffer!.append(CommonSeps.getInstance()!.SPACE)
stringBuffer!.append(PaymentGateway::class.toString()!)
stringBuffer!.append("=")
stringBuffer!.append(this.getName())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


}
                
            

