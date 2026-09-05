
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
        
import { HashMap } from '../../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { ValidationInterface } from '../../../../../../../../../org/allbinary/logic/control/validate/ValidationInterface.js';
//not GWT import const ValidationInterface = globalThis.org.allbinary.logic.control.validate.ValidationInterface;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { StringValidationUtil } from '../../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
import { Document } from '../../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TitleView } from './TitleView.js';
//not GWT import - same folder const TitleView = globalThis.org.allbinary.logic.visual.transform.template.customizer.widgets.title.TitleView;

                import { TitleData } from './TitleData.js';
//not GWT import - same folder const TitleData = globalThis.org.allbinary.logic.visual.transform.template.customizer.widgets.title.TitleData;

                
export class TitleNotRequiredValidation extends TitleView implements ValidationInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (){
            super();
                    

                            //For kotlin this is before the body of the constructor.
                    
}


public constructor (node: Node){
            super(node);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


public constructor (hashMap: HashMap<any, any>){
            super(hashMap);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public isValid(): Boolean{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.IS_VALID);
    

                                    }
                                

    var valid: Boolean = Boolean.TRUE;;
    

                        if(!StringValidationUtil.getInstance()!.isValidNotRequired(this.getTitle(), 0, TitleData.getInstance()!.MAXLEN))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Title: ");
    
stringBuffer!.append(this.getTitle());
    
stringBuffer!.append("End: ");
    
stringBuffer!.appendboolean(valid);
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return valid;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to validate form", this, this.commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Title is not valid.");
    



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
                        return "Error Validating Form";
    
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



