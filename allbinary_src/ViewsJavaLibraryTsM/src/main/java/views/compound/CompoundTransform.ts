
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
        



import { InputStream } from "../../java/io/InputStream.js";

    
import { URIResolver } from "../../javax/xml/transform/URIResolver.js";

    
import { BasicUriResolver } from "../../org/allbinary/data/tree/dom/BasicUriResolver.js";

    
import { StoreUriResolver } from "../../org/allbinary/data/tree/dom/StoreUriResolver.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbeClientInformationInterface } from "../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { ServiceClientInformationInterfaceFactory } from "../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js";

    
import { AbTransformer } from "../../org/allbinary/logic/visual/transform/AbTransformer.js";

    
import { TransformInfoInterface } from "../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { CompoundContextTransformInfoObjectConfig } from "../../views/compound/objectConfig/CompoundContextTransformInfoObjectConfig.js";

    

export class CompoundTransform extends AbTransformer {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;
        
        
public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
this.setURIResolver(StoreUriResolver(this.getTransformInfoInterface(), this.getURIResolver();

                         as BasicUriResolver) as URIResolver);
    

    var objectConfig: CompoundContextTransformInfoObjectConfig = new CompoundContextTransformInfoObjectConfig(this.abeClientInformation, this.getTransformInfoInterface(), this.getTransformInfoInterface()!.getObjectConfigInterface()!.toXmlDoc());
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("\nObjectConfig: \n" +objectConfig!.toString(), this, "CompoundTransform(");
    

                                    }
                                

    var templateInputStream: InputStream = objectConfig!.createInputStream()!;
        
        
;
    
this.setInputStream(templateInputStream);
    
}


}
                
            

