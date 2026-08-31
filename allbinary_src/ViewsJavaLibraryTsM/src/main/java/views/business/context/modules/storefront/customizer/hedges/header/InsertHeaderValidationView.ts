
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

        


            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { StoreFrontFactory } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      //not GWT import const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
import { StoreFrontInterface } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      //not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { DomNodeInterface } from '../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      //not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { URLGLOBALS } from '../../../../../../../../org/allbinary/globals/URLGLOBALS.js';
      //not GWT import const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
import { MultipartRequestParams } from '../../../../../../../../org/allbinary/logic/communication/http/request/MultipartRequestParams.js';
      //not GWT import const MultipartRequestParams = globalThis.org.allbinary.logic.communication.http.request.MultipartRequestParams;

      
//not plain js import { LogUtil } from '../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { ValidationComponentInterface } from '../../../../../../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js';
      //not GWT import const ValidationComponentInterface = globalThis.org.allbinary.logic.control.validate.ValidationComponentInterface;

      
//not plain js import { StringMaker } from '../../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { TransformInfoInterface } from '../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { HeadingValidation } from '../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/hedges/heading/HeadingValidation.js';
      //not GWT import const HeadingValidation = globalThis.org.allbinary.logic.visual.transform.template.customizer.hedges.heading.HeadingValidation;

      
import { LogoData } from '../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/widgets/logo/LogoData.js';
      //not GWT import const LogoData = globalThis.org.allbinary.logic.visual.transform.template.customizer.widgets.logo.LogoData;

      
import { Document } from '../../../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { CustomizerUtil } from '../../../../../../../../views/business/context/modules/storefront/customizer/CustomizerUtil.js';
      //not GWT import const CustomizerUtil = globalThis.views.business.context.modules.storefront.customizer.CustomizerUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TopBarView } from './TopBarView.js';
//not GWT import const  = globalThis.views.business.context.modules.storefront.customizer.hedges.header.TopBarView;

                
export class InsertHeaderValidationView extends TopBarView implements ValidationComponentInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly LOGOPATH: string = "logo/";

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    

    var multipartRequestHashMap: HashMap<any, any> = new MultipartRequestParams(this.getPageContext()).toHashMap()!;;
    

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(this.getWeblisketSession()!.getStoreName())!;;
    

    var fullPath: string = URLGLOBALS.getWebappPath() +storeFrontInterface!.getCurrentHostNamePath() +this.LOGOPATH;;
    
multipartRequestHashMap!.put(LogoData.getInstance()!.IMAGEPATH, fullPath);
    
this.heading= new HeadingValidation(multipartRequestHashMap);
    
}


                //@Throws(Exception.constructor)
            
    public toXmlDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public isValid(): Boolean{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("topbarValidation", this, this.commonStrings!.IS_VALID);
    

                                    }
                                

    var isValid: Boolean = this.heading.isValid()!;;
    

                        if(isValid == Boolean.TRUE)
                        
                                    {
                                    CustomizerUtil.getInstance()!.insert(this.getTransformInfoInterface(), this as DomNodeInterface);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isValid;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to validate", this, this.commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.heading.validationInfo());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Getting Validation Info";
    
}

}


    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: Document): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}



