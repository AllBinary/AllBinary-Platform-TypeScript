
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { BasicErrorNodeUtil } from '../../../../../org/allbinary/data/tree/dom/BasicErrorNodeUtil.js';
//not GWT import const BasicErrorNodeUtil = globalThis.org.allbinary.data.tree.dom.BasicErrorNodeUtil;

      
import { DomNodeInterface } from '../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { Document } from '../../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { EmailData } from './EmailData.js';
//not GWT import - same folder const EmailData = globalThis.org.allbinary.logic.communication.smtp.EmailData;

                import { Email } from './Email.js';
//not GWT import - same folder const Email = globalThis.org.allbinary.logic.communication.smtp.Email;

                
export class EmailsNotUsed
            extends Object
         implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    emailInfoVector: BasicArrayList;

public constructor (){

            super();
        this.emailInfoVector= new BasicArrayListD();
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENT))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, "toXmlNode");
    

                                    }
                                

    var node: Node = document.createElement(EmailData.NAME)!;;
    

    var size: number = this.emailInfoVector!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var email: Email = this.emailInfoVector!.get(index) as Email;;
    

    var emailNode: Node = email.toXmlNode(document)!;;
    

                        if(emailNode != 
                                    null
                                )
                        
                                    {
                                    node.appendChild(emailNode);
    

                                    }
                                
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENT))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.END, this, "toXmlNode()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "toXmlNode()", e);
    

                                    }
                                

    var error: string = "Error Processing Order.  Please contact us if error persists.<p/>";;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicErrorNodeUtil.get(document, error);;
    
}

}


}



