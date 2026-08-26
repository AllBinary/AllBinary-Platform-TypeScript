
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { URIResolver } from '../../../../../javax/xml/transform/URIResolver.js';
      const URIResolver = globalThis.javax.xml.transform.URIResolver;

      
//not game specific package import { BasicUriResolver } from '../../../../../org/allbinary/data/tree/dom/BasicUriResolver.js';
      const BasicUriResolver = globalThis.org.allbinary.data.tree.dom.BasicUriResolver;

      
//not game specific package import { ContextUriResolver } from '../../../../../org/allbinary/data/tree/dom/ContextUriResolver.js';
      const ContextUriResolver = globalThis.org.allbinary.data.tree.dom.ContextUriResolver;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { TransformInfoInterface } from '../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicTransformer } from './BasicTransformer.js';

export class ContextTransformer extends BasicTransformer {
        

public constructor (abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface){
            super(abeClientInformation, transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setURIResolver(new ContextUriResolver(this.getURIResolver() as BasicUriResolver) as URIResolver);
    
}


}
                
            

