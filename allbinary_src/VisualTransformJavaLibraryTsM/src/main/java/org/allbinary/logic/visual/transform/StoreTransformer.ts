
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
        



import { URIResolver } from "../../../../../javax/xml/transform/URIResolver.js";

    
import { BasicUriResolver } from "../../../../../org/allbinary/data/tree/dom/BasicUriResolver.js";

    
import { StoreUriResolver } from "../../../../../org/allbinary/data/tree/dom/StoreUriResolver.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { TransformInfoInterface } from "../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    

export class StoreTransformer extends BasicTransformer {
        
public constructor (abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface)                        

                            : super(abeClientInformation, transformInfoInterface){

            super();
                //var abeClientInformation = abeClientInformation
    //var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
this.setURIResolver(new StoreUriResolver(this.getTransformInfoInterface(), this.getURIResolver();

                         as BasicUriResolver) as URIResolver);
    
}


}
                
            

