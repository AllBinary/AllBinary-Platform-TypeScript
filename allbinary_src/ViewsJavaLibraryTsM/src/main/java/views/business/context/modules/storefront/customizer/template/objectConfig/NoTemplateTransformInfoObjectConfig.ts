
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
        



import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    
import { StoreFrontData } from "../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { DomDocumentHelper } from "../../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { LogUtil } from "../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { Replace } from "../../../../../../../../org/allbinary/logic/string/regex/replace/Replace.js";

    
import { TransformInfoData } from "../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoData.js";

    
import { TransformInfoInterface } from "../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { TransformInfoObjectConfig } from "../../../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfig.js";

    
import { TransformInfoObjectConfigData } from "../../../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigData.js";

    
import { TransformTemplateCustomizerUtil } from "../../../../../../../../org/allbinary/logic/visual/transform/template/util/TransformTemplateCustomizerUtil.js";

    
import { Document } from "../../../../../../../../org/w3c/dom/Document.js";

    

export class NoTemplateTransformInfoObjectConfig extends TransformInfoObjectConfig {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (transformInfoInterface: Object)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (transformInfoInterface: Object, document: Object)                        

                            : super(transformInfoInterface, document){

            super();
            var transformInfoInterface = transformInfoInterface
var document = document


                            //For kotlin this is before the body of the constructor.
                    
this.this.setDocument(this.generate(this.toXmlDoc()))
}

public constructor (transformInfoInterface: Object, name: string, type: string)                        

                            : super(transformInfoInterface, name, type){

            super();
            var transformInfoInterface = transformInfoInterface
var name = name
var type = type


                            //For kotlin this is before the body of the constructor.
                    
this.this.setDocument(this.generate(this.toXmlDoc()))
}


                //@Throws(Error::class)
            
    generate(objectConfigDocument: Document): Document{
var objectConfigDocument = objectConfigDocument

    var docString: string = DomDocumentHelper.toString(objectConfigDocument)!;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Initial ObjectConfig: " +docString, this, "generate()")

                                    }
                                

    var storeName: string = this.getTransformInfoInterface()!.getStoreName()!;
        
        


    var viewName: string = this.getTransformInfoInterface()!.getName()!;
        
        


    var hashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        


    var VARKEY: string = TransformInfoObjectConfigData.getInstance()!.VARKEY;
        
        

hashMap!.put(VARKEY +StoreFrontData.getInstance()!.NAME, storeName)
hashMap!.put(VARKEY +TransformInfoData.getInstance()!.OWNER, viewName)

    var pageName: string = TransformTemplateCustomizerUtil.getInstance()!.getPageNameHack(this.getTransformInfoInterface()!.getName(), this.getTransformInfoInterface()!.getStoreName())!;
        
        

hashMap!.put(VARKEY +TransformInfoData.getInstance()!.PARTIAL, pageName)

    var replace: Replace = new Replace(hashMap);
        
        


    var newObjectConfigDocument: Document = DomDocumentHelper.create(replace.all(docString))!;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Final ObjectConfig: " +DomDocumentHelper.toString(newObjectConfigDocument), this, "generate()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newObjectConfigDocument;
    
}


}
                
            

