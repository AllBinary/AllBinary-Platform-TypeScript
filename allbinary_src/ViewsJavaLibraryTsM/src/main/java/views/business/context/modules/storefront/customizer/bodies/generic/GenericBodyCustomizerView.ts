
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

        


            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
import { PageData } from '../../../../../../../../org/allbinary/business/page/PageData.js';
//not GWT import const PageData = globalThis.org.allbinary.business.page.PageData;

      
import { DomNodeInterface } from '../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { ModDomHelper } from '../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
import { DomDocumentHelper } from '../../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { StringValidationUtil } from '../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
import { StoreTransformer } from '../../../../../../../../org/allbinary/logic/visual/transform/StoreTransformer.js';
//not GWT import const StoreTransformer = globalThis.org.allbinary.logic.visual.transform.StoreTransformer;

      
import { TransformInfoInterface } from '../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { GenericBodyValidation } from '../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/bodies/GenericBodyValidation.js';
//not GWT import const GenericBodyValidation = globalThis.org.allbinary.logic.visual.transform.template.customizer.bodies.GenericBodyValidation;

      
import { TransformTemplateCustomizerUtil } from '../../../../../../../../org/allbinary/logic/visual/transform/template/util/TransformTemplateCustomizerUtil.js';
//not GWT import const TransformTemplateCustomizerUtil = globalThis.org.allbinary.logic.visual.transform.template.util.TransformTemplateCustomizerUtil;

      
import { StringEscapeUtils } from '../../../../../../../../org/apache/commons/lang3/StringEscapeUtils.js';
//not GWT import const StringEscapeUtils = globalThis.org.apache.commons.lang3.StringEscapeUtils;

      
import { Document } from '../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { HttpStoreComponentView } from '../../../../../../../../views/business/context/modules/storefront/HttpStoreComponentView.js';
//not GWT import const HttpStoreComponentView = globalThis.views.business.context.modules.storefront.HttpStoreComponentView;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GenericBodyCustomizerView extends HttpStoreComponentView implements DomNodeInterface {
        

    private static readonly NAME: string = "None";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    body: GenericBodyValidation;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public addDomNodeInterfaces(){
this.addDomNodeInterface(this.body as DomNodeInterface);
    
this.addDomNodeInterface(this as DomNodeInterface);
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var pageName: string = TransformTemplateCustomizerUtil.getInstance()!.getPageNameHack(this.getTransformInfoInterface()!.getName(), this.getWeblisketSession()!.getStoreName())!;;
    

                        if(StringValidationUtil.getInstance()!.isEmpty(pageName))
                        
                                    {
                                    pageName= GenericBodyCustomizerView.NAME;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createNameValueNodes(document, PageData.getInstance()!.NAME, pageName);;
    
}


                //@Throws(Exception.constructor)
            
    public view(): string{

        try {
            this.addDomNodeInterfaces();
    

    var success: string = DomDocumentHelper.toString(this.getDoc())!;;
    

    var result: string = new StoreTransformer(this.abeClientInformation, this.getTransformInfoInterface()).translate(success)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringEscapeUtils.unescapeHtml3(result);;
    

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



