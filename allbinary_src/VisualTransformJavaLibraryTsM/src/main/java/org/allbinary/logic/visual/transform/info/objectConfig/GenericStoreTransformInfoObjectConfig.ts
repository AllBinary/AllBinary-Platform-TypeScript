
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
        



import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { StoreFrontData } from "../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { DomDocumentHelper } from "../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { Replace } from "../../../../../../../org/allbinary/logic/string/regex/replace/Replace.js";

    
import { AbeClientInformationInterface } from "../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { RootTransformInfoData } from "../../../../../../../org/allbinary/logic/visual/transform/info/RootTransformInfoData.js";

    
import { TransformInfoData } from "../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoData.js";

    
import { TransformInfoHttp } from "../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttp.js";

    
import { TransformInfoInterface } from "../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { TransformTemplateFactory } from "../../../../../../../org/allbinary/logic/visual/transform/template/TransformTemplateFactory.js";

    
import { TransformTemplateInterface } from "../../../../../../../org/allbinary/logic/visual/transform/template/TransformTemplateInterface.js";

    
import { TransformTemplateCustomizerUtil } from "../../../../../../../org/allbinary/logic/visual/transform/template/util/TransformTemplateCustomizerUtil.js";

    
import { CommonSeps } from "../../../../../../../org/allbinary/string/CommonSeps.js";

    
import { Document } from "../../../../../../../org/w3c/dom/Document.js";

    

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { TransformInfoObjectConfigData } from "./TransformInfoObjectConfigData.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { TransformInfoObjectConfigData } from "./TransformInfoObjectConfigData.js";

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

export class GenericStoreTransformInfoObjectConfig extends TransformInfoObjectConfig {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly abeClientInformation: AbeClientInformationInterface
public constructor (abeClientInformation: Object, transformInfoInterface: Object)                        

                            : super(transformInfoInterface){

            super();
                //var abeClientInformation = abeClientInformation
    //var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
this.abeClientInformation= abeClientInformation;
    
}

public constructor (abeClientInformation: Object, transformInfoInterface: Object, document: Object)                        

                            : super(transformInfoInterface, document){

            super();
                //var abeClientInformation = abeClientInformation
    //var transformInfoInterface = transformInfoInterface
    //var document = document


                            //For kotlin this is before the body of the constructor.
                    
this.abeClientInformation= abeClientInformation;
    
this.setDocument(this.generate(this.toXmlDoc()));
    
}

public constructor (abeClientInformation: Object, transformInfoInterface: Object, name: string, type: string)                        

                            : super(transformInfoInterface, name, type){

            super();
                //var abeClientInformation = abeClientInformation
    //var transformInfoInterface = transformInfoInterface
    //var name = name
    //var type = type


                            //For kotlin this is before the body of the constructor.
                    
this.abeClientInformation= abeClientInformation;
    
this.setDocument(this.generate(this.toXmlDoc()));
    
}


                //@Throws(Error::class)
            
    generate(objectConfigDocument: Document): Document{
    //var objectConfigDocument = objectConfigDocument

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
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
                                

    var transformInfoHttpStoreInterface: TransformInfoHttp = this.getTransformInfoInterface();

                         as TransformInfoHttp;
        
        
;
    

    var objectConfigDocumentString: string = DomDocumentHelper.toString(objectConfigDocument)!;
        
        
;
    

    var replaceHashMap: HashMap<any, any> = this.createReplaceHashMap(transformInfoHttpStoreInterface, objectConfigDocumentString)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.generate(objectConfigDocumentString, replaceHashMap);

                        ;
    
}


                //@Throws(Error::class)
            
    createReplaceHashMap(transformInfoHttpStoreInterface: TransformInfoHttp, objectConfigDocumentString: string): HashMap<any, any>{
    //var transformInfoHttpStoreInterface = transformInfoHttpStoreInterface
    //var objectConfigDocumentString = objectConfigDocumentString

    var storeName: string = transformInfoHttpStoreInterface!.getStoreName()!;
        
        
;
    

    var hashMap: HashMap<any, any> = this.createHashMap(transformInfoHttpStoreInterface, objectConfigDocumentString)!;
        
        
;
    

    var transformInfoObjectConfigData: TransformInfoObjectConfigData = TransformInfoObjectConfigData.getInstance()!;
        
        
;
    
hashMap!.put(transformInfoObjectConfigData!.VARKEY +StoreFrontData.getInstance()!.NAME, storeName);
    

    var pageName: string = TransformTemplateCustomizerUtil.getInstance()!.getPageNameHack(this.getTransformInfoInterface()!.getName(), storeName)!;
        
        
;
    
hashMap!.put(transformInfoObjectConfigData!.VARKEY +TransformInfoData.getInstance()!.PARTIAL, pageName);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Error::class)
            
    createHashMap(transformInfoHttpStoreInterface: TransformInfoHttp, objectConfigDocumentString: string): HashMap<any, any>{
    //var transformInfoHttpStoreInterface = transformInfoHttpStoreInterface
    //var objectConfigDocumentString = objectConfigDocumentString

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    

    var storeName: string = transformInfoHttpStoreInterface!.getStoreName()!;
        
        
;
    

    var propertiesHashMap: HashMap<any, any> = transformInfoHttpStoreInterface!.getPropertiesHashMap()!;
        
        
;
    

    var templateNameOverride: string = StringUtil.getInstance()!.getInstance(propertiesHashMap!.get(TransformInfoData.getInstance()!.PARTIAL);

                         as String)!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("TemplateNameOverride: " +templateNameOverride, this, "generate()");
    

                                    }
                                

    var templateNameStringBuffer: StringMaker = new StringMaker();
        
        
;
    
templateNameStringBuffer!.append(storeName);
    
templateNameStringBuffer!.append(templateNameOverride);
    
templateNameStringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
templateNameStringBuffer!.append(RootTransformInfoData.NAME);
    

    var templateNameKey: string = TransformInfoObjectConfigData.getInstance()!.VARKEY +TransformInfoData.getInstance()!.OWNER;
        
        
;
    

                        if(objectConfigDocumentString!.indexOf(templateNameKey) !=  -1)
                        
                                    {
                                    
    var templateInterface: TransformTemplateInterface = TransformTemplateFactory.getInstance()!.getInstance(abeClientInformation, templateNameStringBuffer!.toString(), transformInfoHttpStoreInterface!.getPropertiesHashMap(), transformInfoHttpStoreInterface!.getPageContext())!;
        
        
;
    

    var selectedTemplate: string = templateInterface!.getName()!;
        
        
;
    
hashMap!.put(templateNameKey, selectedTemplate);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Error::class)
            
    generate(objectConfigDocumentString: string, hashMap: HashMap<any, any>): Document{
var objectConfigDocumentString = objectConfigDocumentString
var hashMap = hashMap

    var replace: Replace = new Replace(hashMap);
        
        
;
    

    var newObjectConfigDocument: Document = DomDocumentHelper.create(replace.all(objectConfigDocumentString))!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Final ObjectConfig: " +DomDocumentHelper.toString(newObjectConfigDocument), this, "generate()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newObjectConfigDocument;
    
}


}
                
            

