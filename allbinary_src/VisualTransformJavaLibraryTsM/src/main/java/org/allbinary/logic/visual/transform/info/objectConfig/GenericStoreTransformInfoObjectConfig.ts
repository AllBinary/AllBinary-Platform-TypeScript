
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
        



            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
//not game specific package import { HashMap } from '../../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { StoreFrontData } from '../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
//not game specific package import { DomDocumentHelper } from '../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
//not game specific package import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringMaker } from '../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { Replace } from '../../../../../../../org/allbinary/logic/string/regex/replace/Replace.js';
      const Replace = globalThis.org.allbinary.logic.string.regex.replace.Replace;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { RootTransformInfoData } from '../../../../../../../org/allbinary/logic/visual/transform/info/RootTransformInfoData.js';
      const RootTransformInfoData = globalThis.org.allbinary.logic.visual.transform.info.RootTransformInfoData;

      
//not game specific package import { TransformInfoData } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoData.js';
      const TransformInfoData = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoData;

      
//not game specific package import { TransformInfoHttp } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttp.js';
      const TransformInfoHttp = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoHttp;

      
//not game specific package import { TransformInfoInterface } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
//not game specific package import { TransformTemplateFactory } from '../../../../../../../org/allbinary/logic/visual/transform/template/TransformTemplateFactory.js';
      const TransformTemplateFactory = globalThis.org.allbinary.logic.visual.transform.template.TransformTemplateFactory;

      
//not game specific package import { TransformTemplateInterface } from '../../../../../../../org/allbinary/logic/visual/transform/template/TransformTemplateInterface.js';
      const TransformTemplateInterface = globalThis.org.allbinary.logic.visual.transform.template.TransformTemplateInterface;

      
//not game specific package import { TransformTemplateCustomizerUtil } from '../../../../../../../org/allbinary/logic/visual/transform/template/util/TransformTemplateCustomizerUtil.js';
      const TransformTemplateCustomizerUtil = globalThis.org.allbinary.logic.visual.transform.template.util.TransformTemplateCustomizerUtil;

      
//not game specific package import { CommonSeps } from '../../../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { Document } from '../../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoObjectConfig } from './TransformInfoObjectConfig.js';
import { TransformInfoObjectConfigData } from './TransformInfoObjectConfigData.js';

export class GenericStoreTransformInfoObjectConfig extends TransformInfoObjectConfig {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly abeClientInformation: AbeClientInformationInterface;

public constructor (abeClientInformation: Object, transformInfoInterface: Object){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.abeClientInformation= abeClientInformation;
    
}


public constructor (abeClientInformation: Object, transformInfoInterface: Object, document: Object){
            super(transformInfoInterface, document);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.abeClientInformation= abeClientInformation;
    
this.setDocument(this.generate(this.toXmlDoc()));
    
}


public constructor (abeClientInformation: Object, transformInfoInterface: Object, name: string, type: string){
            super(transformInfoInterface, name, type);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.abeClientInformation= abeClientInformation;
    
this.setDocument(this.generate(this.toXmlDoc()));
    
}


                //@Throws(Exception.constructor)
            
    generate(objectConfigDocument: Document): Document{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("TransformInfo: ");
    

                        if(this.getTransformInfoInterface() != 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append(this.getTransformInfoInterface()!.getName());
    

                                    }
                                
                        else {
                            stringBuffer!.append("No Owner!?#@");
    

                        }
                            
this.logUtil!.putF(stringBuffer!.toString(), this, "generate()");
    

                                    }
                                

    var transformInfoHttpStoreInterface: TransformInfoHttp = this.getTransformInfoInterface() as TransformInfoHttp;;
    

    var objectConfigDocumentString: string = DomDocumentHelper.toString(objectConfigDocument)!;;
    

    var replaceHashMap: HashMap<any, any> = this.createReplaceHashMap(transformInfoHttpStoreInterface, objectConfigDocumentString)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.generate(objectConfigDocumentString, replaceHashMap);;
    
}


                //@Throws(Exception.constructor)
            
    createReplaceHashMap(transformInfoHttpStoreInterface: TransformInfoHttp, objectConfigDocumentString: string): HashMap<any, any>{

    var storeName: string = transformInfoHttpStoreInterface!.getStoreName()!;;
    

    var hashMap: HashMap<any, any> = this.createHashMap(transformInfoHttpStoreInterface, objectConfigDocumentString)!;;
    

    var transformInfoObjectConfigData: TransformInfoObjectConfigData = TransformInfoObjectConfigData.getInstance()!;;
    
hashMap!.put(transformInfoObjectConfigData!.VARKEY +StoreFrontData.getInstance()!.NAME, storeName);
    

    var pageName: string = TransformTemplateCustomizerUtil.getInstance()!.getPageNameHack(this.getTransformInfoInterface()!.getName(), storeName)!;;
    
hashMap!.put(transformInfoObjectConfigData!.VARKEY +TransformInfoData.getInstance()!.PARTIAL, pageName);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    createHashMap(transformInfoHttpStoreInterface: TransformInfoHttp, objectConfigDocumentString: string): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();;
    

    var storeName: string = transformInfoHttpStoreInterface!.getStoreName()!;;
    

    var propertiesHashMap: HashMap<any, any> = transformInfoHttpStoreInterface!.getPropertiesHashMap()!;;
    

    var templateNameOverride: string = StringUtil.getInstance()!.getNonNull(propertiesHashMap!.get(TransformInfoData.getInstance()!.PARTIAL) as string)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("TemplateNameOverride: " +templateNameOverride, this, "generate()");
    

                                    }
                                

    var templateNameStringBuffer: StringMaker = new StringMaker();;
    
templateNameStringBuffer!.append(storeName);
    
templateNameStringBuffer!.append(templateNameOverride);
    
templateNameStringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
templateNameStringBuffer!.append(RootTransformInfoData.NAME);
    

    var templateNameKey: string = TransformInfoObjectConfigData.getInstance()!.VARKEY +TransformInfoData.getInstance()!.OWNER;;
    

                        if(objectConfigDocumentString!.indexOf(templateNameKey) !=  -1)
                        
                                    {
                                    
    var templateInterface: TransformTemplateInterface = TransformTemplateFactory.getInstance()!.getInstance(this.abeClientInformation, templateNameStringBuffer!.toString(), transformInfoHttpStoreInterface!.getPropertiesHashMap(), transformInfoHttpStoreInterface!.getPageContext())!;;
    

    var selectedTemplate: string = templateInterface!.getName()!;;
    
hashMap!.put(templateNameKey, selectedTemplate);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    generate(objectConfigDocumentString: string, hashMap: HashMap<any, any>): Document{

    var replace: Replace = new Replace(hashMap);;
    

    var newObjectConfigDocument: Document = DomDocumentHelper.create(replace.all(objectConfigDocumentString))!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Final ObjectConfig: " +DomDocumentHelper.toString(newObjectConfigDocument), this, "generate()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newObjectConfigDocument;
    
}


}



