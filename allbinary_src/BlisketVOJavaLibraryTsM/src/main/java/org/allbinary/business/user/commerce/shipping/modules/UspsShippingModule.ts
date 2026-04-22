
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
        



import { OrderInterface } from "../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderInterface.js";

    
import { Money } from "../../../../../../../org/allbinary/business/user/commerce/money/Money.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ShippingInterface } from "./ShippingInterface.js";

export class UspsShippingModule
            extends Object
         implements ShippingInterface {
        

    private readonly name: string = "USPS";
        
        

    private readonly description: string = "Snail Mail";
        
        
public constructor (){

            super();
        }


    public getCost(order: OrderInterface): Money{
var order = order



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Money();
    
}


    public getDescription(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.description;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


}
                
            

