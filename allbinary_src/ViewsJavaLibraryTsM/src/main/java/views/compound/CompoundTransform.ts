
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
        
//not game specific package import { InputStream } from '../../java/io/InputStream.js';
      const InputStream = globalThis.java.io.InputStream;

      
//not game specific package import { URIResolver } from '../../javax/xml/transform/URIResolver.js';
      const URIResolver = globalThis.javax.xml.transform.URIResolver;

      
//not game specific package import { BasicUriResolver } from '../../org/allbinary/data/tree/dom/BasicUriResolver.js';
      const BasicUriResolver = globalThis.org.allbinary.data.tree.dom.BasicUriResolver;

      
//not game specific package import { StoreUriResolver } from '../../org/allbinary/data/tree/dom/StoreUriResolver.js';
      const StoreUriResolver = globalThis.org.allbinary.data.tree.dom.StoreUriResolver;

      
//not game specific package import { LogUtil } from '../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { AbeClientInformationInterface } from '../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { ServiceClientInformationInterfaceFactory } from '../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js';
      const ServiceClientInformationInterfaceFactory = globalThis.org.allbinary.logic.system.security.licensing.ServiceClientInformationInterfaceFactory;

      
//not game specific package import { AbTransformer } from '../../org/allbinary/logic/visual/transform/AbTransformer.js';
      const AbTransformer = globalThis.org.allbinary.logic.visual.transform.AbTransformer;

      
//not game specific package import { TransformInfoInterface } from '../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
//not game specific package import { CompoundContextTransformInfoObjectConfig } from '../../views/compound/objectConfig/CompoundContextTransformInfoObjectConfig.js';
      const CompoundContextTransformInfoObjectConfig = globalThis.views.compound.objectConfig.CompoundContextTransformInfoObjectConfig;

      
















                                        
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
                
            

