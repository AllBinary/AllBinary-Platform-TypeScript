
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

        


            import { Exception } from '../../../java/lang/Exception.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { StringValidationUtil } from '../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
import { TransformFactory } from '../../../org/allbinary/logic/visual/transform/TransformFactory.js';
//not GWT import const TransformFactory = globalThis.org.allbinary.logic.visual.transform.TransformFactory;

      
import { TransformInterface } from '../../../org/allbinary/logic/visual/transform/TransformInterface.js';
//not GWT import const TransformInterface = globalThis.org.allbinary.logic.visual.transform.TransformInterface;

      
import { TransformInfo } from '../../../org/allbinary/logic/visual/transform/info/TransformInfo.js';
//not GWT import const TransformInfo = globalThis.org.allbinary.logic.visual.transform.info.TransformInfo;

      
import { TransformInfoInterface } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { TransformTemplateInterface } from '../../../org/allbinary/logic/visual/transform/template/TransformTemplateInterface.js';
//not GWT import const TransformTemplateInterface = globalThis.org.allbinary.logic.visual.transform.template.TransformTemplateInterface;

      
import { HttpStoreComponentView } from '../../../views/business/context/modules/storefront/HttpStoreComponentView.js';
//not GWT import const HttpStoreComponentView = globalThis.views.business.context.modules.storefront.HttpStoreComponentView;

      
import { NoTemplateTransformInfoObjectConfig } from '../../../views/business/context/modules/storefront/customizer/template/objectConfig/NoTemplateTransformInfoObjectConfig.js';
//not GWT import const NoTemplateTransformInfoObjectConfig = globalThis.views.business.context.modules.storefront.customizer.template.objectConfig.NoTemplateTransformInfoObjectConfig;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RootContextView extends HttpStoreComponentView implements TransformTemplateInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("View Name: " +transformInfoInterface!.getName(), this, "RootContextView()");
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public view(): string{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("View Name: " +this.getTransformInfoInterface()!.getName(), this, "view()");
    

                                    }
                                

    var viewName: string = this.getName()!;;
    

    var componentInterface: TransformInterface = TransformFactory.getInstance()!.getInstance(this.abeClientInformation, viewName, this.getTransformInfoInterface())!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return componentInterface!.view();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    public getName(): string{

        try {
            
    var objectConfig: NoTemplateTransformInfoObjectConfig = new NoTemplateTransformInfoObjectConfig(this.getTransformInfoInterface(), this.getTransformInfoInterface()!.getObjectConfigInterface()!.toXmlDoc());;
    

    var componentsVector: BasicArrayList = objectConfig!.getTransforms()!;;
    

                        if(componentsVector!.size() == 0)
                        
                                    {
                                    


                            throw new Exception("Template View Not Set - No Components");
                    

                                    }
                                

                        if(componentsVector!.size() > 1)
                        
                                    {
                                    


                            throw new Exception("To Many Root Template Views: " +componentsVector!.size());
                    

                                    }
                                

    var transformInfoInterface: TransformInfo = componentsVector!.get(0) as TransformInfo;;
    

    var viewName: string = transformInfoInterface!.getName()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Root Template With View Name: " +viewName, this, "getName()");
    

                                    }
                                

                        if(StringValidationUtil.getInstance()!.isEmpty(viewName))
                        
                                    {
                                    


                            throw new Exception("Template View Not Set - No View Name");
                    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return viewName;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getName()", e);
    

                                    }
                                



                            throw e;
                    
}

}


}



