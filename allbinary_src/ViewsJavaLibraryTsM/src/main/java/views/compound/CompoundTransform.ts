
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
        
import { InputStream } from '../../java/io/InputStream.js';
      //not GWT import const InputStream = globalThis.java.io.InputStream;

      
import { URIResolver } from '../../javax/xml/transform/URIResolver.js';
      //not GWT import const URIResolver = globalThis.javax.xml.transform.URIResolver;

      
import { BasicUriResolver } from '../../org/allbinary/data/tree/dom/BasicUriResolver.js';
      //not GWT import const BasicUriResolver = globalThis.org.allbinary.data.tree.dom.BasicUriResolver;

      
import { StoreUriResolver } from '../../org/allbinary/data/tree/dom/StoreUriResolver.js';
      //not GWT import const StoreUriResolver = globalThis.org.allbinary.data.tree.dom.StoreUriResolver;

      
//not plain js import { LogUtil } from '../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbeClientInformationInterface } from '../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { ServiceClientInformationInterfaceFactory } from '../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js';
      //not GWT import const ServiceClientInformationInterfaceFactory = globalThis.org.allbinary.logic.system.security.licensing.ServiceClientInformationInterfaceFactory;

      
import { AbTransformer } from '../../org/allbinary/logic/visual/transform/AbTransformer.js';
      //not GWT import const AbTransformer = globalThis.org.allbinary.logic.visual.transform.AbTransformer;

      
import { TransformInfoInterface } from '../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { CompoundContextTransformInfoObjectConfig } from '../../views/compound/objectConfig/CompoundContextTransformInfoObjectConfig.js';
      //not GWT import const CompoundContextTransformInfoObjectConfig = globalThis.views.compound.objectConfig.CompoundContextTransformInfoObjectConfig;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CompoundTransform extends AbTransformer {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setURIResolver(new StoreUriResolver(this.getTransformInfoInterface(), this.getURIResolver() as BasicUriResolver) as URIResolver);
    

    var objectConfig: CompoundContextTransformInfoObjectConfig = new CompoundContextTransformInfoObjectConfig(this.abeClientInformation, this.getTransformInfoInterface(), this.getTransformInfoInterface()!.getObjectConfigInterface()!.toXmlDoc());;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("\nObjectConfig: \n" +objectConfig!.toString(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                

    var templateInputStream: InputStream = objectConfig!.createInputStream()!;;
    
this.setInputStream(templateInputStream);
    
}


}



