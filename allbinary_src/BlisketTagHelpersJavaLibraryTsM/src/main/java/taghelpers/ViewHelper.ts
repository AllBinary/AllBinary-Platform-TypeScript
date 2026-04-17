
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
        



import { HashMap } from "../java/util/HashMap.js";

    
import { PageContext } from "../javax/servlet/jsp/PageContext.js";

    
import { LogUtil } from "../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbeClientInformationInterface } from "../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { ServiceClientInformationInterfaceFactory } from "../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js";

    
import { TransformFactory } from "../org/allbinary/logic/visual/transform/TransformFactory.js";

    
import { TransformInterface } from "../org/allbinary/logic/visual/transform/TransformInterface.js";

    
import { TransformDocumentInterface } from "../org/allbinary/logic/visual/transform/data/TransformDocumentInterface.js";

    
import { TransformInfoInterface } from "../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { CommonStrings } from "../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../org/w3c/dom/Document.js";

    

export class ViewHelper
            extends Object
        
                , TransformInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;
        
        

    private componentInterface: TransformInterface
public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
            var hashMap = hashMap
var pageContext = pageContext
this.componentInterface= TransformFactory.getInstance()!.getInstance(this.abeClientInformation, hashMap, pageContext);
    
}


    public NO_TYPE: number = 0;
        
        

    public getTypeId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NO_TYPE;
    
}


                //@Throws(Error::class)
            
    public view(): string{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return componentInterface!.view();

                        ;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to View: ";
        
        
;
    

                        if(this.componentInterface != 
                                    null
                                )
                        error += this.componentInterface!..constructor.name.toString()!
                             else 
                        if()
                        

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                            throw e
}

}


                //@Throws(Error::class)
            
    public toXmlDoc(): Document{

        try {
            


                            throw new Error("Hmm: " +componentInterface!.getTransformDocumentInterface()!.getDoc())

                //: 
} catch(e) 
            {

    var error: string = "Failed to View: ";
        
        
;
    

                        if(this.componentInterface != 
                                    null
                                )
                        error += this.componentInterface!..constructor.name.toString()!
                             else 
                        if()
                        

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                            throw e
}

}


    public getViewObject(): TransformInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.componentInterface;
    
}


                //@Throws(Error::class)
            
    public getTransformInfoInterface(): TransformInfoInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.componentInterface!.getTransformInfoInterface();

                        ;
    
}


    public getTransformDocumentInterface(): TransformDocumentInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public setTransformDocumentInterface(viewDocumentInterface: TransformDocumentInterface){
var viewDocumentInterface = viewDocumentInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


}
                
            

