
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
        



import { DomDocumentHelper } from "../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { TransformFactory } from "../../../org/allbinary/logic/visual/transform/TransformFactory.js";

    
import { TransformInterface } from "../../../org/allbinary/logic/visual/transform/TransformInterface.js";

    
import { GeneratorTransformInfoData } from "../../../org/allbinary/logic/visual/transform/info/GeneratorTransformInfoData.js";

    
import { RootTransformInfoData } from "../../../org/allbinary/logic/visual/transform/info/RootTransformInfoData.js";

    
import { TransformInfoHttp } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoHttp.js";

    
import { TransformInfoInterface } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { TransformInfoObjectConfigAndManipulatorFactory } from "../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigAndManipulatorFactory.js";

    
import { TransformInfoObjectConfigInterface } from "../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigInterface.js";

    
import { TransformTemplateInterface } from "../../../org/allbinary/logic/visual/transform/template/TransformTemplateInterface.js";

    
import { CommonSeps } from "../../../org/allbinary/string/CommonSeps.js";

    
import { Document } from "../../../org/w3c/dom/Document.js";

    
import { HttpStoreComponentView } from "../../../views/business/context/modules/storefront/HttpStoreComponentView.js";

    

export class OverrideObjectConfigRootContextView extends HttpStoreComponentView {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (transformInfoInterface: Object)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("View Name: " +transformInfoInterface!.getName(), this, "OverrideObjectRootContextView()");
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public view(): string{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("View Name: " +this.getTransformInfoInterface()!.getName(), this, "view()");
    

                                    }
                                

    var rootTransformInfoInterface: TransformInfoInterface = TransformInfoHttp(this.getTransformInfoInterface();

                         as TransformInfoHttp) as TransformInfoInterface;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.getTransformInfoInterface()!.getStoreName());
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    

    var nameStart: string = stringBuffer!.toString()!;
        
        
;
    

                        if(this.getTransformInfoInterface()!.getName()!.indexOf(GeneratorTransformInfoData.NAME) > 0)
                        
                                    {
                                    rootTransformInfoInterface!.setName(nameStart +GeneratorTransformInfoData.NAME);
    

                                    }
                                
                             else 
                        if(this.getTransformInfoInterface()!.getName()!.indexOf(RootTransformInfoData.NAME) > 0)
                        
                                    {
                                    rootTransformInfoInterface!.setName(nameStart +RootTransformInfoData.NAME);
    

                                    }
                                
                        else {
                            


                            throw Error("Override Currently Not Supported")

                        }
                            

    var overrideObjectConfigDocument: Document = this.getTransformInfoInterface()!.getObjectConfigInterface()!.toXmlDoc()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Retrieved OverrideObjectConfig: " +DomDocumentHelper.toString(overrideObjectConfigDocument), this, "view()");
    

                                    }
                                

    var transformFactory: TransformFactory = TransformFactory.getInstance()!;
        
        
;
    

    var rootComponentInterface: TransformInterface = transformFactory!.getInstance(this.abeClientInformation, rootTransformInfoInterface!.getName(), rootTransformInfoInterface)!;
        
        
;
    

    var transformTemplateInterface: TransformTemplateInterface = rootComponentInterface as TransformTemplateInterface;
        
        
;
    

    var componentInterface: TransformInterface = transformFactory!.getInstance(this.abeClientInformation, transformTemplateInterface!.getName(), rootComponentInterface!.getTransformInfoInterface())!;
        
        
;
    

    var transformInfoObjectConfigInterface: TransformInfoObjectConfigInterface = TransformInfoObjectConfigAndManipulatorFactory.getInstance()!.getInstance(this.abeClientInformation, componentInterface!.getTransformInfoInterface(), overrideObjectConfigDocument)!;
        
        
;
    
componentInterface!.getTransformInfoInterface()!.setObjectConfigInterface(transformInfoObjectConfigInterface);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Set OverrideObjectConfig: " +componentInterface!.getTransformInfoInterface()!.getObjectConfigInterface()!.toString(), this, "view()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return componentInterface!.view();

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                            throw e
}

}


}
                
            

