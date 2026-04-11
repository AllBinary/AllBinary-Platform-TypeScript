
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
        



import { PageData } from "../../../../../../../../../org/allbinary/business/page/PageData.js";

    
import { DomNodeInterface } from "../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { ModDomHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { DomDocumentHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringValidationUtil } from "../../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { StoreTransformer } from "../../../../../../../../../org/allbinary/logic/visual/transform/StoreTransformer.js";

    
import { TransformInfoInterface } from "../../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { TitleBodyValidation } from "../../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/bodies/title/TitleBodyValidation.js";

    
import { TransformTemplateCustomizerUtil } from "../../../../../../../../../org/allbinary/logic/visual/transform/template/util/TransformTemplateCustomizerUtil.js";

    
import { StringEscapeUtils } from "../../../../../../../../../org/apache/commons/lang3/StringEscapeUtils.js";

    
import { Document } from "../../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../../org/w3c/dom/Node.js";

    
import { HttpStoreComponentView } from "../../../../../../../../../views/business/context/modules/storefront/HttpStoreComponentView.js";

    

export class TitleBodyCustomizerView extends HttpStoreComponentView
                , DomNodeInterface {
        

    private static readonly NAME: string = "None";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    titleBody: TitleBodyValidation
public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public addDomNodeInterfaces(){
this.addDomNodeInterface(this.titleBody as DomNodeInterface);
    
this.addDomNodeInterface(this as DomNodeInterface);
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var pageName: string = TransformTemplateCustomizerUtil.getInstance()!.getPageNameHack(this.getTransformInfoInterface()!.getName(), this.getWeblisketSession()!.getStoreName())!;
        
        
;
    

                        if(StringValidationUtil.getInstance()!.isEmpty(pageName))
                        
                                    {
                                    pageName= NAME;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createNameValueNodes(document, PageData.getInstance()!.NAME, pageName);

                        ;
    
}


                //@Throws(Error::class)
            
    public view(): string{

        try {
            
    var success: string = DomDocumentHelper.toString(this.getDoc())!;
        
        
;
    

    var result: string = StoreTransformer(this.abeClientInformation, this.getTransformInfoInterface()).
                            translate(success)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringEscapeUtils.unescapeHtml3(result);

                        ;
    

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
                
            

