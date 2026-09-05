
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
        
import { DomDocumentHelper } from '../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { ContextTransformer } from '../../../org/allbinary/logic/visual/transform/ContextTransformer.js';
//not GWT import const ContextTransformer = globalThis.org.allbinary.logic.visual.transform.ContextTransformer;

      
import { TransformHttpRequestDocumentFactory } from '../../../org/allbinary/logic/visual/transform/data/TransformHttpRequestDocumentFactory.js';
//not GWT import const TransformHttpRequestDocumentFactory = globalThis.org.allbinary.logic.visual.transform.data.TransformHttpRequestDocumentFactory;

      
import { TransformInfoInterface } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { HttpComponentView } from '../../../views/HttpComponentView.js';
//not GWT import const HttpComponentView = globalThis.views.HttpComponentView;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class HttpContextView extends HttpComponentView {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("View Name: " +transformInfoInterface!.getName(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
this.setTransformDocumentInterface(TransformHttpRequestDocumentFactory.getInstance(this.getPageContext(), this.getWeblisketSession()));
    
}


                //@Throws(Exception.constructor)
            
    public view(): string{

        try {
            this.toXmlDoc();
    

    var success: string = DomDocumentHelper.toString(this.getDoc())!;;
    

    var result: string = new ContextTransformer(this.abeClientInformation, this.getTransformInfoInterface()).translate(success)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "view", e);
    

                                    }
                                



                            throw e;
                    
}

}


}



