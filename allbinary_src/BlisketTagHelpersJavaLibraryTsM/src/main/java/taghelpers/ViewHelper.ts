
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
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { PageContext } from '../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbeClientInformationInterface } from '../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { ServiceClientInformationInterfaceFactory } from '../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js';
//not GWT import const ServiceClientInformationInterfaceFactory = globalThis.org.allbinary.logic.system.security.licensing.ServiceClientInformationInterfaceFactory;

      
import { TransformFactory } from '../org/allbinary/logic/visual/transform/TransformFactory.js';
//not GWT import const TransformFactory = globalThis.org.allbinary.logic.visual.transform.TransformFactory;

      
import { TransformInterface } from '../org/allbinary/logic/visual/transform/TransformInterface.js';
//not GWT import const TransformInterface = globalThis.org.allbinary.logic.visual.transform.TransformInterface;

      
import { TransformDocumentInterface } from '../org/allbinary/logic/visual/transform/data/TransformDocumentInterface.js';
//not GWT import const TransformDocumentInterface = globalThis.org.allbinary.logic.visual.transform.data.TransformDocumentInterface;

      
import { TransformInfoInterface } from '../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { Document } from '../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ViewHelper
            extends Object
         implements TransformInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;

    private componentInterface: TransformInterface;

public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        this.componentInterface= TransformFactory.getInstance()!.getInstance(this.abeClientInformation, hashMap, pageContext);
    
}


    public NO_TYPE: number = 0;

    public getTypeId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.NO_TYPE;
    
}


                //@Throws(Exception.constructor)
            
    public view(): string{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.componentInterface!.view();;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to View: ";;
    

                        if(this.componentInterface != 
                                    null
                                )
                        error += this.componentInterface!.constructor.name.toString()!
                             else 
                        if()
                        

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    public toXmlDoc(): Document{

        try {
            


                            throw new Exception("Hmm: " +this.componentInterface!.getTransformDocumentInterface()!.getDoc());
                    

                //: 
} catch(e) 
            {

    var error: string = "Failed to View: ";;
    

                        if(this.componentInterface != 
                                    null
                                )
                        error += this.componentInterface!.constructor.name.toString()!
                             else 
                        if()
                        

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                            throw e;
                    
}

}


    public getViewObject(): TransformInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.componentInterface;
    
}


                //@Throws(Exception.constructor)
            
    public getTransformInfoInterface(): TransformInfoInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.componentInterface!.getTransformInfoInterface();;
    
}


    public getTransformDocumentInterface(): TransformDocumentInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public setTransformDocumentInterface(viewDocumentInterface: TransformDocumentInterface){



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


}



