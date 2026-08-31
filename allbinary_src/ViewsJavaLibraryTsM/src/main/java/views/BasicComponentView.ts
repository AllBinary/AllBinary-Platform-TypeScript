
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
        
import { DomDocumentHelper } from '../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      //not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
//not plain js import { LogUtil } from '../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbeClientInformationInterface } from '../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { ServiceClientInformationInterfaceFactory } from '../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js';
      //not GWT import const ServiceClientInformationInterfaceFactory = globalThis.org.allbinary.logic.system.security.licensing.ServiceClientInformationInterfaceFactory;

      
import { BasicTransformer } from '../org/allbinary/logic/visual/transform/BasicTransformer.js';
      //not GWT import const BasicTransformer = globalThis.org.allbinary.logic.visual.transform.BasicTransformer;

      
import { TransformInterface } from '../org/allbinary/logic/visual/transform/TransformInterface.js';
      //not GWT import const TransformInterface = globalThis.org.allbinary.logic.visual.transform.TransformInterface;

      
import { TransformDocumentFactory } from '../org/allbinary/logic/visual/transform/data/TransformDocumentFactory.js';
      //not GWT import const TransformDocumentFactory = globalThis.org.allbinary.logic.visual.transform.data.TransformDocumentFactory;

      
import { TransformDocumentInterface } from '../org/allbinary/logic/visual/transform/data/TransformDocumentInterface.js';
      //not GWT import const TransformDocumentInterface = globalThis.org.allbinary.logic.visual.transform.data.TransformDocumentInterface;

      
import { TransformInfoInterface } from '../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
//not plain js import { CommonStrings } from '../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { Document } from '../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicComponentView
            extends Object
         implements TransformInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;

    private transformDocumentInterface: TransformDocumentInterface;

    private transformInfoInterface: TransformInfoInterface;

public constructor (transformInfoInterface: TransformInfoInterface){

            super();
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("View Name: " +transformInfoInterface!.getName(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
this.setTransformInfoInterface(transformInfoInterface);
    
this.setTransformDocumentInterface(TransformDocumentFactory.getInstance());
    
}


    public NO_TYPE: number = 0;

    public getTypeId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.NO_TYPE;
    
}


    public getTransformDocumentInterface(): TransformDocumentInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.transformDocumentInterface;
    
}


    public setTransformDocumentInterface(transformDocumentInterface: TransformDocumentInterface){
this.transformDocumentInterface= transformDocumentInterface;
    
}


    public getTransformInfoInterface(): TransformInfoInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.transformInfoInterface;
    
}


    public setTransformInfoInterface(transformInfoInterface: TransformInfoInterface){
this.transformInfoInterface= transformInfoInterface;
    
}


    public toXmlDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.transformDocumentInterface!.getDoc();;
    
}


                //@Throws(Exception.constructor)
            
    public getDoc(): Document{

    var document: Document = this.getTransformInfoInterface()!.getDataDocument()!;;
    

    var dataNode: Node = this.getTransformDocumentInterface()!.getDoc()!.importNode(document.getFirstChild(), true)!;;
    

                        if(dataNode != 
                                    null
                                )
                        
                                    {
                                    this.getTransformDocumentInterface()!.getBaseNode()!.appendChild(dataNode);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getTransformDocumentInterface()!.getDoc();;
    
}


                //@Throws(Exception.constructor)
            
    public view(): string{

        try {
            
    var success: string = DomDocumentHelper.toString(this.getDoc())!;;
    

    var result: string = new BasicTransformer(this.abeClientInformation, this.getTransformInfoInterface()).translate(success)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                            throw e;
                    
}

}


}



