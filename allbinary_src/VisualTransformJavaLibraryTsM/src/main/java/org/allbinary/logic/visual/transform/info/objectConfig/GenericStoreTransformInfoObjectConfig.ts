
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
        
import { HashMap } from '../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { StoreFrontData } from '../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
//not GWT import const StoreFrontData

import { DomDocumentHelper } from '../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper

import { XmlDocumentHelper } from '../../../../../../../org/allbinary/data/tree/dom/document/XmlDocumentHelper.js';
//not GWT import const XmlDocumentHelper

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { Replace } from '../../../../../../../org/allbinary/logic/string/regex/replace/Replace.js';
//not GWT import const Replace

import { AbeClientInformationInterface } from '../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

import { RootTransformInfoData } from '../../../../../../../org/allbinary/logic/visual/transform/info/RootTransformInfoData.js';
//not GWT import const RootTransformInfoData

import { TransformInfoData } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoData.js';
//not GWT import const TransformInfoData

import { TransformInfoHttp } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttp.js';
//not GWT import const TransformInfoHttp

import { TransformInfoInterface } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

import { TransformTemplateFactory } from '../../../../../../../org/allbinary/logic/visual/transform/template/TransformTemplateFactory.js';
//not GWT import const TransformTemplateFactory

import { TransformTemplateInterface } from '../../../../../../../org/allbinary/logic/visual/transform/template/TransformTemplateInterface.js';
//not GWT import const TransformTemplateInterface

import { TransformTemplateCustomizerUtil } from '../../../../../../../org/allbinary/logic/visual/transform/template/util/TransformTemplateCustomizerUtil.js';
//not GWT import const TransformTemplateCustomizerUtil

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

import { Document } from '../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoObjectConfig } from './TransformInfoObjectConfig.js';
//sameFolderImports - not GWT import - same folder const TransformInfoObjectConfig
import { TransformInfoObjectConfigData } from './TransformInfoObjectConfigData.js';
//sameFolderImports - not GWT import - same folder const TransformInfoObjectConfigData

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

generate(...args: any[]): any {
   
    if (args.length === 1) return this.generate$overload1(args[0]);
   
    if (args.length === 2 && typeof args[0] === 'string') return this.generate$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: generate'); }
  
                //@Throws(Exception.constructor)
            
    generate$overload1(objectConfigDocument: Document): Document{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
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
                                

    let transformInfoHttpStoreInterface: TransformInfoHttp = this.getTransformInfoInterface() as TransformInfoHttp;;
    

    let objectConfigDocumentString: string = XmlDocumentHelper.toString(objectConfigDocument)!;;
    

    let replaceHashMap: HashMap<any, any> = this.createReplaceHashMap(transformInfoHttpStoreInterface, objectConfigDocumentString)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.generate(objectConfigDocumentString, replaceHashMap);;
    
}


                //@Throws(Exception.constructor)
            
    createReplaceHashMap(transformInfoHttpStoreInterface: TransformInfoHttp, objectConfigDocumentString: string): HashMap<any, any>{

    let storeName: string = transformInfoHttpStoreInterface!.getStoreName()!;;
    

    let hashMap: HashMap<any, any> = this.createHashMap(transformInfoHttpStoreInterface, objectConfigDocumentString)!;;
    

    let transformInfoObjectConfigData: TransformInfoObjectConfigData = TransformInfoObjectConfigData.getInstance()!;;
    
hashMap!.put(transformInfoObjectConfigData!.VARKEY +StoreFrontData.getInstance()!.NAME, storeName);
    

    let pageName: string = TransformTemplateCustomizerUtil.getInstance()!.getPageNameHack(this.getTransformInfoInterface()!.getName(), storeName)!;;
    
hashMap!.put(transformInfoObjectConfigData!.VARKEY +TransformInfoData.getInstance()!.PARTIAL, pageName);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    createHashMap(transformInfoHttpStoreInterface: TransformInfoHttp, objectConfigDocumentString: string): HashMap<any, any>{

    let hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    

    let storeName: string = transformInfoHttpStoreInterface!.getStoreName()!;;
    

    let propertiesHashMap: HashMap<any, any> = transformInfoHttpStoreInterface!.getPropertiesHashMap()!;;
    

    let templateNameOverride: string = StringUtil.getInstance()!.getNonNull(propertiesHashMap!.get(TransformInfoData.getInstance()!.PARTIAL) as string)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("TemplateNameOverride: " +templateNameOverride, this, "generate()");
    

                                    }
                                

    let templateNameStringBuffer: StringMaker = new StringMaker();;
    
templateNameStringBuffer!.append(storeName);
    
templateNameStringBuffer!.append(templateNameOverride);
    
templateNameStringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
templateNameStringBuffer!.append(RootTransformInfoData.NAME);
    

    let templateNameKey: string = TransformInfoObjectConfigData.getInstance()!.VARKEY +TransformInfoData.getInstance()!.OWNER;;
    

                        if(objectConfigDocumentString!.indexOf(templateNameKey) !=  -1)
                        
                                    {
                                    
    let templateInterface: TransformTemplateInterface = TransformTemplateFactory.getInstance()!.getInstance(this.abeClientInformation, templateNameStringBuffer!.toString(), transformInfoHttpStoreInterface!.getPropertiesHashMap(), transformInfoHttpStoreInterface!.getPageContext())!;;
    

    let selectedTemplate: string = templateInterface!.getName()!;;
    
hashMap!.put(templateNameKey, selectedTemplate);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    generate$overload2(objectConfigDocumentString: string, hashMap: HashMap<any, any>): Document{

    let replace: Replace = new Replace(hashMap);;
    

    let newObjectConfigDocument: Document = DomDocumentHelper.create(replace.all(objectConfigDocumentString))!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Final ObjectConfig: " +XmlDocumentHelper.toString(newObjectConfigDocument), this, "generate()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newObjectConfigDocument;
    
}


}

