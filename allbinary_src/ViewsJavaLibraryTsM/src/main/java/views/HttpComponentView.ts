
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
        



            import Vector from "@ohos.util.Vector";
        

//import { Vector } from "../java/util/Vector.js";

    
import { DomNodeHelper } from "../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomNodeInterface } from "../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { DomDocumentHelper } from "../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { LogUtil } from "../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbeClientInformationInterface } from "../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { ServiceClientInformationInterfaceFactory } from "../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js";

    
import { BasicTransformer } from "../org/allbinary/logic/visual/transform/BasicTransformer.js";

    
import { TransformInterface } from "../org/allbinary/logic/visual/transform/TransformInterface.js";

    
import { TransformDocumentInterface } from "../org/allbinary/logic/visual/transform/data/TransformDocumentInterface.js";

    
import { TransformHttpRequestDocumentFactory } from "../org/allbinary/logic/visual/transform/data/TransformHttpRequestDocumentFactory.js";

    
import { TransformInfoHttpComposite } from "../org/allbinary/logic/visual/transform/info/TransformInfoHttpComposite.js";

    
import { TransformInfoInterface } from "../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { Document } from "../org/w3c/dom/Document.js";

    
import { Node } from "../org/w3c/dom/Node.js";

    

export class HttpComponentView extends TransformInfoHttpComposite
                , TransformInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;
        
        

    private domNodeInterfaceVector: Vector

    private transformDocumentInterface: TransformDocumentInterface
public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("View Name: " +transformInfoInterface!.getName(), this, "ComponentView()");
    

                                    }
                                
this.domNodeInterfaceVector= new Vector();
    
this.setTransformDocumentInterface(TransformHttpRequestDocumentFactory.getInstance(this.getPageContext(), this.getWeblisketSession()));
    
}


    public NO_TYPE: number = 0;
        
        

    public getTypeId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NO_TYPE;
    
}


    public getTransformDocumentInterface(): TransformDocumentInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return transformDocumentInterface;
    
}


    public setTransformDocumentInterface(transformDocumentInterface: TransformDocumentInterface){
var transformDocumentInterface = transformDocumentInterface
this.transformDocumentInterface= transformDocumentInterface;
    
}


    public addDomNodeInterface(domNodeInterface: DomNodeInterface){
var domNodeInterface = domNodeInterface
this.domNodeInterfaceVector!.add(domNodeInterface);
    
}


                //@Throws(Error::class)
            
    public toXmlDoc(): Document{

        try {
            
    var size: number = domNodeInterfaceVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var domNodeInterface: DomNodeInterface = domNodeInterfaceVector!.get(index);

                         as DomNodeInterface;
        
        
;
    
this.transformDocumentInterface!.getBaseNode()!.appendChild(domNodeInterface!.toXmlNode(this.transformDocumentInterface!.getDoc()));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getTransformDocumentInterface()!.getDoc();

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "toXmlDoc()", e);
    

                                    }
                                



                            throw e
}

}


                //@Throws(Error::class)
            
    public getDoc(): Document{

    var document: Document = this.getTransformInfoInterface()!.getDataDocument()!;
        
        
;
    

    var node: Node = DomNodeHelper.getFirstChildElement(document)!;
        
        
;
    

                        if(node != 
                                    null
                                )
                        
                                    {
                                    
    var dataNode: Node = this.getTransformDocumentInterface()!.getDoc()!.importNode(node, true)!;
        
        
;
    

                        if(dataNode != 
                                    null
                                )
                        
                                    {
                                    this.getTransformDocumentInterface()!.getBaseNode()!.appendChild(dataNode);
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getTransformDocumentInterface()!.getDoc();

                        ;
    
}


                //@Throws(Error::class)
            
    public view(): string{

        try {
            this.toXmlDoc();
    

    var success: string = DomDocumentHelper.toString(this.getDoc())!;
        
        
;
    

    var result: string = new BasicTransformer(this.abeClientInformation, this.getTransformInfoInterface()).
                            translate(success)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                            throw e
}

}


}
                
            

