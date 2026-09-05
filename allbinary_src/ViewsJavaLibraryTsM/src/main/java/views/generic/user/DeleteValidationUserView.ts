
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
        
import { HashMap } from '../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { HttpServletRequest } from '../../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { UserName } from '../../../org/allbinary/business/user/username/UserName.js';
//not GWT import const UserName = globalThis.org.allbinary.business.user.username.UserName;

      
import { UserEntityFactory } from '../../../org/allbinary/data/tables/user/UserEntityFactory.js';
//not GWT import const UserEntityFactory = globalThis.org.allbinary.data.tables.user.UserEntityFactory;

      
import { RequestParams } from '../../../org/allbinary/logic/communication/http/request/RequestParams.js';
//not GWT import const RequestParams = globalThis.org.allbinary.logic.communication.http.request.RequestParams;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { ValidationComponentInterface } from '../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js';
//not GWT import const ValidationComponentInterface = globalThis.org.allbinary.logic.control.validate.ValidationComponentInterface;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { TransformInfoInterface } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { Document } from '../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserView } from './UserView.js';
//not GWT import - same folder const UserView = globalThis.views.generic.user.UserView;

                
export class DeleteValidationUserView extends UserView implements ValidationComponentInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private userName: string;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    

    var httpServletRequest: HttpServletRequest = this.getPageContext()!.getRequest() as HttpServletRequest;;
    

    var hashMap: HashMap<any, any> = new RequestParams(httpServletRequest).toHashMap()!;;
    
this.userName= new UserName(hashMap).get();
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("User Name: " +this.userName, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
}


    public isValid(): Boolean{

        try {
            
                        if(UserName.getInstance()!.isValid(this.userName) == Boolean.TRUE)
                        
                                    {
                                    this.user= UserEntityFactory.getInstance()!.getUser(this.userName);
    

                        if(this.user == 
                                    null
                                )
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                
                             else 
                        if()
                        



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

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
    

                        if(UserName.getInstance()!.isValid(this.userName) == Boolean.TRUE)
                        
                                    {
                                    this.user= UserEntityFactory.getInstance()!.getUser(this.userName);
    

                        if(this.user == 
                                    null
                                )
                        stringBuffer!.append("User does not exist.<br />")

                                    }
                                
                             else 
                        if()
                        



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



