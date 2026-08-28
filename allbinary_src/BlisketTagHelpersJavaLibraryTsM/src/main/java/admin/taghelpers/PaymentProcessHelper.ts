
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
        



            import { Exception } from '../../java/lang/Exception.js';
        
//not game specific package import { HashMap } from '../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
      const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
//not game specific package import { TransformInfoHttpFactory } from '../../org/allbinary/logic/visual/transform/info/TransformInfoHttpFactory.js';
      const TransformInfoHttpFactory = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoHttpFactory;

      
//not game specific package import { TransformInfoHttpInterface } from '../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js';
      const TransformInfoHttpInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoHttpInterface;

      
//not game specific package import { PaymentProcessorComponent } from '../../views/admin/payment/PaymentProcessorComponent.js';
      const PaymentProcessorComponent = globalThis.views.admin.payment.PaymentProcessorComponent;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TagHelper } from './TagHelper.js';

export class PaymentProcessHelper extends TagHelper {
        

    private paymentProcessorComponent: PaymentProcessorComponent;

public constructor (propertiesHashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        
    var transformInfoInterface: TransformInfoHttpInterface = TransformInfoHttpFactory.getInstance(propertiesHashMap, pageContext) as TransformInfoHttpInterface;;
    
this.paymentProcessorComponent= new PaymentProcessorComponent(transformInfoInterface);
    
}


                //@Throws(Exception.constructor)
            
    public process(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paymentProcessorComponent!.view();;
    
}


}



