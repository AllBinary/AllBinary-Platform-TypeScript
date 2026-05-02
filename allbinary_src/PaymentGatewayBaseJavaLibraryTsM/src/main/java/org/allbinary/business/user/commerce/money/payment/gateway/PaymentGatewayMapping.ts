
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
        



            import { Object } from "../../../../../../../../java/lang/Object.js";


        
            import { Exception } from "../../../../../../../../java/lang/Exception.js";
        
import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../../../java/util/Vector.js";

    
import { TableMappingInterface } from "../../../../../../../../org/allbinary/data/tables/TableMappingInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PaymentGatewayInterface } from "./PaymentGatewayInterface.js";

export class PaymentGatewayMapping
            extends Object
         implements TableMappingInterface {
        

    private paymentGatewayInterface: PaymentGatewayInterface
public constructor (paymentGatewayInterface: PaymentGatewayInterface){

            super();
        var paymentGatewayInterface = paymentGatewayInterface
this.paymentGatewayInterface= paymentGatewayInterface;
    
}


                //@Throws(Exception::class)
            
    public toHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paymentGatewayInterface!.toHashMap(false);;
    
}


    public toVector(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paymentGatewayInterface!.toVector(false);;
    
}


                //@Throws(Exception::class)
            
    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paymentGatewayInterface!.getKey() as Object;
    
}


}
                
            

