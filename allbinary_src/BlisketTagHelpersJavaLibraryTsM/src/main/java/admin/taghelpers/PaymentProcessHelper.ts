
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
        



import { HashMap } from "../../java/util/HashMap.js";

    
import { PageContext } from "../../javax/servlet/jsp/PageContext.js";

    
import { TransformInfoHttpFactory } from "../../org/allbinary/logic/visual/transform/info/TransformInfoHttpFactory.js";

    
import { TransformInfoHttpInterface } from "../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js";

    
import { PaymentProcessorComponent } from "../../views/admin/payment/PaymentProcessorComponent.js";

    

export class PaymentProcessHelper extends TagHelper {
        

    private paymentProcessorComponent: PaymentProcessorComponent
public constructor (propertiesHashMap: HashMap<any, any>, pageContext: PageContext){

            super();
            var propertiesHashMap = propertiesHashMap
var pageContext = pageContext

    var transformInfoInterface: TransformInfoHttpInterface = TransformInfoHttpFactory.getInstance(propertiesHashMap, pageContext);

                         as TransformInfoHttpInterface;
        
        
;
    
this.paymentProcessorComponent= PaymentProcessorComponent(transformInfoInterface);
    
}


                //@Throws(Error::class)
            
    public process(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paymentProcessorComponent!.view();

                        ;
    
}


}
                
            

