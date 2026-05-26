
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
        



            import { Object } from '../java/lang/Object.js';


        
            import { Exception } from '../java/lang/Exception.js';
        
import { HashMap } from '../java/util/HashMap.js';
      
import { PageContext } from '../javax/servlet/jsp/PageContext.js';
      
import { LogUtil } from '../org/allbinary/logic/communication/log/LogUtil.js';
      
import { ValidationComponentInterface } from '../org/allbinary/logic/control/validate/ValidationComponentInterface.js';
      
import { Document } from '../org/w3c/dom/Document.js';
      
import { Node } from '../org/w3c/dom/Node.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ViewHelper } from './ViewHelper.js';

export class ValidationViewHelper extends ViewHelper implements ValidationComponentInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private viewInterface: ValidationComponentInterface;

public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){
            super(hashMap, pageContext);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.viewInterface= this.getViewObject() as ValidationComponentInterface;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
}


    public isValid(): Boolean{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    this.logUtil!.putF("Started", this, this.commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.viewInterface!.isValid();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.viewInterface!.validationInfo();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "validationInfo()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Unknown Validation Error";
    
}

}


    public toValidationInfoDoc(): Document{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.viewInterface!.toValidationInfoDoc();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "toValidationInfoDoc()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public toValidationInfoNode(document: Document): Node{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.viewInterface!.toValidationInfoNode(document);;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "toValidationInfoNode()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


}
                
            

