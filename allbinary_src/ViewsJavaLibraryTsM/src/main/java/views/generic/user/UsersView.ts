
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
        



import { Vector } from "../../../java/util/Vector.js";

    
import { UserDomNode } from "../../../org/allbinary/business/user/UserDomNode.js";

    
import { UsersData } from "../../../org/allbinary/business/user/UsersData.js";

    
import { User } from "../../../org/allbinary/business/user/modules/User.js";

    
import { DomNodeInterface } from "../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { TransformInfoInterface } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { Document } from "../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../org/w3c/dom/Node.js";

    
import { HttpStoreComponentView } from "../../../views/business/context/modules/storefront/HttpStoreComponentView.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class UsersView extends HttpStoreComponentView implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    userVector: Vector
public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
}


    public toXmlNode(document: Document): Node{
var document = document

        try {
            
    var usersNode: Node = document.createElement(UsersData.NAME)!;
        
        
;
    

    var size: number = this.userVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var userInterface: User = this.userVector!.get(index); as User;
        
        
;
    

                        if(userInterface != 
                                    null
                                )
                        
                                    {
                                    
    var node: Node = new UserDomNode(userInterface).
                            toXmlNode(document)!;
        
        
;
    
usersNode!.appendChild(node);
    

                                    }
                                
                        else {
                            this.logUtil!.putF("UserHelper", this, "toXmlNode");
    

                        }
                            
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return usersNode;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.XSLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "toXmlNode", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public addDomNodeInterfaces(){
this.addDomNodeInterface(this as DomNodeInterface);
    
}


                //@Throws(Error::class)
            
    public view(): string{

        try {
            this.addDomNodeInterfaces();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.view();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                            throw e
}

}


}
                
            

