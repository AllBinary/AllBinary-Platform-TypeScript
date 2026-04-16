
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
        



import { DomDocumentHelper } from "../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { LogUtil } from "../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbeClientInformationInterface } from "../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { ServiceClientInformationInterfaceFactory } from "../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js";

    
import { TransformInfoCustomUriTransformer } from "../org/allbinary/logic/visual/transform/TransformInfoCustomUriTransformer.js";

    
import { TransformInterface } from "../org/allbinary/logic/visual/transform/TransformInterface.js";

    
import { TransformDocumentFactory } from "../org/allbinary/logic/visual/transform/data/TransformDocumentFactory.js";

    
import { TransformDocumentInterface } from "../org/allbinary/logic/visual/transform/data/TransformDocumentInterface.js";

    
import { TransformInfoInterface } from "../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { CommonStrings } from "../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../org/w3c/dom/Document.js";

    
import { Node } from "../org/w3c/dom/Node.js";

    

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

export class CustomUriTransformView
            extends Object
        
                , TransformInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;
        
        

    private transformInfoInterface: TransformInfoInterface

    private transformDocumentInterface: TransformDocumentInterface
public constructor (transformInfoInterface: TransformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("View Name: " +transformInfoInterface!.getName(), this, commonStrings!.CONSTRUCTOR);
    

                                    }
                                
this.setTransformInfoInterface(transformInfoInterface);
    
this.setTransformDocumentInterface(TransformDocumentFactory.getInstance());
    
}


    public NO_TYPE: number = 0;
        
        

    public getTypeId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NO_TYPE;
    
}


    public getTransformInfoInterface(): TransformInfoInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return transformInfoInterface;
    
}


    public setTransformInfoInterface(transformInfoInterface: TransformInfoInterface){
var transformInfoInterface = transformInfoInterface
this.transformInfoInterface= transformInfoInterface;
    
}


    public getTransformDocumentInterface(): TransformDocumentInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.transformDocumentInterface;
    
}


    public setTransformDocumentInterface(transformDocumentInterface: TransformDocumentInterface){
var transformDocumentInterface = transformDocumentInterface
this.transformDocumentInterface= transformDocumentInterface;
    
}


    public toXmlDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.transformDocumentInterface!.getDoc();

                        ;
    
}


                //@Throws(Error::class)
            
    public getDoc(): Document{

    var document: Document = this.getTransformInfoInterface()!.getDataDocument()!;
        
        
;
    

    var dataNode: Node = this.getTransformDocumentInterface()!.getDoc()!.importNode(document.getFirstChild(), true)!;
        
        
;
    

                        if(dataNode != 
                                    null
                                )
                        
                                    {
                                    this.getTransformDocumentInterface()!.getBaseNode()!.appendChild(dataNode);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getTransformDocumentInterface()!.getDoc();

                        ;
    
}


                //@Throws(Error::class)
            
    public view(): string{

        try {
            
    var success: string = DomDocumentHelper.toString(this.getDoc())!;
        
        
;
    

    var result: string = new TransformInfoCustomUriTransformer(this.abeClientInformation, this.getTransformInfoInterface()).
                            translate(success)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                            throw e
}

}


}
                
            

