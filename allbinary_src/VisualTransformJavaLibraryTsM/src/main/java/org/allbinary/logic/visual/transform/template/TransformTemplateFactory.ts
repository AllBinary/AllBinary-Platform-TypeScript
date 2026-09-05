
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { PageContext } from '../../../../../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { TransformInfoEntity } from '../../../../../../org/allbinary/data/tables/transform/info/TransformInfoEntity.js';
//not GWT import const TransformInfoEntity = globalThis.org.allbinary.data.tables.transform.info.TransformInfoEntity;

      
import { TransformInfoEntityBuilder } from '../../../../../../org/allbinary/data/tables/transform/info/TransformInfoEntityBuilder.js';
//not GWT import const TransformInfoEntityBuilder = globalThis.org.allbinary.data.tables.transform.info.TransformInfoEntityBuilder;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbeClientInformationInterface } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { TransformInfoInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { TransformInfoObjectFactory } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoObjectFactory.js';
//not GWT import const TransformInfoObjectFactory = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoObjectFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformTemplateInterface } from './TransformTemplateInterface.js';
//not GWT import - same folder const TransformTemplateInterface = globalThis.org.allbinary.logic.visual.transform.template.TransformTemplateInterface;

                
export class TransformTemplateFactory
            extends Object
         {
        

    private static readonly instance: TransformTemplateFactory = new TransformTemplateFactory();

    public static getInstance(): TransformTemplateFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TransformTemplateFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, templateName: string, propertiesHashMap: HashMap<any, any>, pageContext: PageContext): TransformTemplateInterface{

        try {
            
    var transformInfoEntity: TransformInfoEntity = TransformInfoEntityBuilder.getInstance()!;;
    

    var transformInfoInterface: TransformInfoInterface = transformInfoEntity!.get(templateName, propertiesHashMap, pageContext)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TransformInfoObjectFactory.getInstance()!.getInstance(abeClientInformation, transformInfoInterface) as TransformTemplateInterface;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed To Get Instance";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(error +templateName +"->TemplateFactory", this, "getInstance(viewName, HashMap, PageContext)", e);
    

                                    }
                                



                            throw e;
                    
}

}


}



