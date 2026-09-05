
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

        


            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
import { DomNodeInterface } from '../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { ValidationComponentInterface } from '../../../../../../../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js';
//not GWT import const ValidationComponentInterface = globalThis.org.allbinary.logic.control.validate.ValidationComponentInterface;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { TransformInfoInterface } from '../../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { TitleBodyValidation } from '../../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/bodies/title/TitleBodyValidation.js';
//not GWT import const TitleBodyValidation = globalThis.org.allbinary.logic.visual.transform.template.customizer.bodies.title.TitleBodyValidation;

      
import { Document } from '../../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { CustomizerUtil } from '../../../../../../../../../views/business/context/modules/storefront/customizer/CustomizerUtil.js';
//not GWT import const CustomizerUtil = globalThis.views.business.context.modules.storefront.customizer.CustomizerUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TitleBodyCustomizerView } from './TitleBodyCustomizerView.js';
//not GWT import - same folder const TitleBodyCustomizerView = globalThis.views.business.context.modules.storefront.customizer.bodies.generic.title.TitleBodyCustomizerView;

                
export class NewTitleBodyValidationView extends TitleBodyCustomizerView implements ValidationComponentInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("View Name: " +transformInfoInterface!.getName(), this, "NewTitleBodyValidationView()");
    

                                    }
                                
this.titleBody= new TitleBodyValidation();
    
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
                                    this.logUtil!.putF("View Name: " +this.getTransformInfoInterface()!.getName(), this, this.commonStrings!.IS_VALID);
    

                                    }
                                


                            {
                            CustomizerUtil.getInstance()!.insert(this.getTransformInfoInterface(), this.titleBody as DomNodeInterface);
    

                            }
                    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

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
    
stringBuffer!.append(this.titleBody!.validationInfo());
    



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


                //@Throws(Exception.constructor)
            
    public view(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return views.ValidationOnlyTempUtil.getInstance()!.view(this);;
    
}


}



