
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
        



import { UserDomNode } from "../../../org/allbinary/business/user/UserDomNode.js";

    
import { UserInterface } from "../../../org/allbinary/business/user/UserInterface.js";

    
import { DomNodeInterface } from "../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { TransformInfoInterface } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { HttpStoreComponentView } from "../../../views/business/context/modules/storefront/HttpStoreComponentView.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class UserView extends HttpStoreComponentView {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    user: UserInterface
public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
}


    public addDomNodeInterfaces(){
this.addDomNodeInterface(new UserDomNode(this.user) as DomNodeInterface);
    
}


                //@Throws(Error::class)
            
    public view(): string{

        try {
            this.addDomNodeInterfaces();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.view();

                        ;
    

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
                
            

