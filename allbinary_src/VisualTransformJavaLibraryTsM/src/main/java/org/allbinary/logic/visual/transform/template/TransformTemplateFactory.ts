
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
        



import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { PageContext } from "../../../../../../javax/servlet/jsp/PageContext.js";

    
import { TransformInfoEntity } from "../../../../../../org/allbinary/data/tables/transform/info/TransformInfoEntity.js";

    
import { TransformInfoEntityBuilder } from "../../../../../../org/allbinary/data/tables/transform/info/TransformInfoEntityBuilder.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbeClientInformationInterface } from "../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { TransformInfoInterface } from "../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { TransformInfoObjectFactory } from "../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoObjectFactory.js";

    

export class TransformTemplateFactory
            extends Object
         {
        

    private static readonly instance: TransformTemplateFactory = new TransformTemplateFactory();
        
        

    public static getInstance(): TransformTemplateFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


                @Throws(Exception::class)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, templateName: string, propertiesHashMap: HashMap<Any, Any>, pageContext: PageContext): TransformTemplateInterface{
    //var abeClientInformation = abeClientInformation
    //var templateName = templateName
    //var propertiesHashMap = propertiesHashMap
var pageContext = pageContext

        try {
            
    var transformInfoEntity: TransformInfoEntity = TransformInfoEntityBuilder.getInstance()!;
        
        


    var transformInfoInterface: TransformInfoInterface = transformInfoEntity!.get(templateName, propertiesHashMap, pageContext)!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TransformInfoObjectFactory.getInstance()!.getInstance(abeClientInformation, transformInfoInterface) as TransformTemplateInterface;
    
} catch(e: Exception)
            {

    var error: string = "Failed To Get Instance";
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    put(error +templateName +"->TemplateFactory", this, "getInstance(viewName, HashMap, PageContext)", e)

                                    }
                                



                            throw e
}

}


}
                
            

