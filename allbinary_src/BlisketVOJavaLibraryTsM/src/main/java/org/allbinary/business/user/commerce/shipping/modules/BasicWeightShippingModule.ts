
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
        



import { BasketInterface } from "../../../../../../../org/allbinary/business/user/commerce/inventory/basket/BasketInterface.js";

    
import { OrderInterface } from "../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderInterface.js";

    
import { Money } from "../../../../../../../org/allbinary/business/user/commerce/money/Money.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    

export class BasicWeightShippingModule
            extends Object
        
                , ShippingInterface {
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly name: string = "Basic Shipping (5 to 7 working days)";
        
        

    private readonly description: string = "We will soon provide a variety of shipping methods.";
        
        
public constructor (){

            super();
            }


    public getCost(order: OrderInterface): Money{
var order = order

    var basket: BasketInterface = order.getBasket()!;
        
        
;
    

    var money: Money = new Money();
        
        
;
    
money.add(basket.getTotalWeight());
    
money.multiply(1);
    
money.add("3.50");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return money;
    
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
                
            

