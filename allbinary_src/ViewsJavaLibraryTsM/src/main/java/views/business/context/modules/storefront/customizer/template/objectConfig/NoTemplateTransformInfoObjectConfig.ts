
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
        
//not game specific package import { HashMap } from '../../../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { StoreFrontData } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
//not game specific package import { DomDocumentHelper } from '../../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
//not game specific package import { LogUtil } from '../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { Replace } from '../../../../../../../../org/allbinary/logic/string/regex/replace/Replace.js';
      const Replace = globalThis.org.allbinary.logic.string.regex.replace.Replace;

      
//not game specific package import { TransformInfoData } from '../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoData.js';
      const TransformInfoData = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoData;

      
//not game specific package import { TransformInfoInterface } from '../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
//not game specific package import { TransformInfoObjectConfig } from '../../../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfig.js';
      const TransformInfoObjectConfig = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.TransformInfoObjectConfig;

      
//not game specific package import { TransformInfoObjectConfigData } from '../../../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigData.js';
      const TransformInfoObjectConfigData = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.TransformInfoObjectConfigData;

      
//not game specific package import { TransformTemplateCustomizerUtil } from '../../../../../../../../org/allbinary/logic/visual/transform/template/util/TransformTemplateCustomizerUtil.js';
      const TransformTemplateCustomizerUtil = globalThis.org.allbinary.logic.visual.transform.template.util.TransformTemplateCustomizerUtil;

      
//not game specific package import { Document } from '../../../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class NoTemplateTransformInfoObjectConfig extends TransformInfoObjectConfig {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (transformInfoInterface: Object){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


public constructor (transformInfoInterface: Object, document: Object){
            super(transformInfoInterface, document);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setDocument(this.generate(this.toXmlDoc()));
    
}


public constructor (transformInfoInterface: Object, name: string, type: string){
            super(transformInfoInterface, name, type);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setDocument(this.generate(this.toXmlDoc()));
    
}


                //@Throws(Exception.constructor)
            
    generate(objectConfigDocument: Document): Document{

    var docString: string = DomDocumentHelper.toString(objectConfigDocument)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Initial ObjectConfig: " +docString, this, "generate()");
    

                                    }
                                

    var storeName: string = this.getTransformInfoInterface()!.getStoreName()!;;
    

    var viewName: string = this.getTransformInfoInterface()!.getName()!;;
    

    var hashMap: HashMap<any, any> = new HashMap<any, any>();;
    

    var VARKEY: string = TransformInfoObjectConfigData.getInstance()!.VARKEY;;
    
hashMap!.put(VARKEY +StoreFrontData.getInstance()!.NAME, storeName);
    
hashMap!.put(VARKEY +TransformInfoData.getInstance()!.OWNER, viewName);
    

    var pageName: string = TransformTemplateCustomizerUtil.getInstance()!.getPageNameHack(this.getTransformInfoInterface()!.getName(), this.getTransformInfoInterface()!.getStoreName())!;;
    
hashMap!.put(VARKEY +TransformInfoData.getInstance()!.PARTIAL, pageName);
    

    var replace: Replace = new Replace(hashMap);;
    

    var newObjectConfigDocument: Document = DomDocumentHelper.create(replace.all(docString))!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Final ObjectConfig: " +DomDocumentHelper.toString(newObjectConfigDocument), this, "generate()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newObjectConfigDocument;
    
}


}



