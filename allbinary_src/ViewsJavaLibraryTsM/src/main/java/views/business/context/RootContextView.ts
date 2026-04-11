
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
        



            import Vector from "@ohos.util.Vector";
        

//import { Vector } from "../../../java/util/Vector.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringValidationUtil } from "../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { TransformFactory } from "../../../org/allbinary/logic/visual/transform/TransformFactory.js";

    
import { TransformInterface } from "../../../org/allbinary/logic/visual/transform/TransformInterface.js";

    
import { TransformInfo } from "../../../org/allbinary/logic/visual/transform/info/TransformInfo.js";

    
import { TransformInfoInterface } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { TransformTemplateInterface } from "../../../org/allbinary/logic/visual/transform/template/TransformTemplateInterface.js";

    
import { HttpStoreComponentView } from "../../../views/business/context/modules/storefront/HttpStoreComponentView.js";

    
import { NoTemplateTransformInfoObjectConfig } from "../../../views/business/context/modules/storefront/customizer/template/objectConfig/NoTemplateTransformInfoObjectConfig.js";

    

export class RootContextView extends HttpStoreComponentView
                , TransformTemplateInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("View Name: " +transformInfoInterface!.getName(), this, "RootContextView()");
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public view(): string{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("View Name: " +this.getTransformInfoInterface()!.getName(), this, "view()");
    

                                    }
                                

    var viewName: string = this.getName()!;
        
        
;
    

    var componentInterface: TransformInterface = TransformFactory.getInstance()!.getInstance(this.abeClientInformation, viewName, this.getTransformInfoInterface())!;
        
        
;
    



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


                //@Throws(Error::class)
            
    public getName(): string{

        try {
            
    var objectConfig: NoTemplateTransformInfoObjectConfig = new NoTemplateTransformInfoObjectConfig(this.getTransformInfoInterface(), this.getTransformInfoInterface()!.getObjectConfigInterface()!.toXmlDoc());
        
        
;
    

    var componentsVector: Vector = objectConfig!.getTransforms()!;
        
        
;
    

                        if(componentsVector!.length == 0)
                        
                                    {
                                    


                            throw new Error("Template View Not Set - No Components")

                                    }
                                

                        if(componentsVector!.length > 1)
                        
                                    {
                                    


                            throw new Error("To Many Root Template Views: " +componentsVector!.length)

                                    }
                                

    var transformInfoInterface: TransformInfo = componentsVector!.get(0);

                         as TransformInfo;
        
        
;
    

    var viewName: string = transformInfoInterface!.getName()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Root Template With View Name: " +viewName, this, "getName()");
    

                                    }
                                

                        if(StringValidationUtil.getInstance()!.isEmpty(viewName))
                        
                                    {
                                    


                            throw new Error("Template View Not Set - No View Name")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return viewName;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "getName()", e);
    

                                    }
                                



                            throw e
}

}


}
                
            

