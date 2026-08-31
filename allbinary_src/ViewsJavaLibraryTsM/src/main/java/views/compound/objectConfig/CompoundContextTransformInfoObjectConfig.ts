
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
        
import { ByteArrayInputStream } from '../../../java/io/ByteArrayInputStream.js';
      //not GWT import const ByteArrayInputStream = globalThis.java.io.ByteArrayInputStream;

      
import { InputStream } from '../../../java/io/InputStream.js';
      //not GWT import const InputStream = globalThis.java.io.InputStream;

      
import { Vector } from '../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { DocumentToNode } from '../../../org/allbinary/data/tree/dom/document/DocumentToNode.js';
      //not GWT import const DocumentToNode = globalThis.org.allbinary.data.tree.dom.document.DocumentToNode;

      
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { Replace } from '../../../org/allbinary/logic/string/regex/replace/Replace.js';
      //not GWT import const Replace = globalThis.org.allbinary.logic.string.regex.replace.Replace;

      
import { AbeClientInformationInterface } from '../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { TransformFactory } from '../../../org/allbinary/logic/visual/transform/TransformFactory.js';
      //not GWT import const TransformFactory = globalThis.org.allbinary.logic.visual.transform.TransformFactory;

      
import { TransformInterface } from '../../../org/allbinary/logic/visual/transform/TransformInterface.js';
      //not GWT import const TransformInterface = globalThis.org.allbinary.logic.visual.transform.TransformInterface;

      
import { RootTransformInfoData } from '../../../org/allbinary/logic/visual/transform/info/RootTransformInfoData.js';
      //not GWT import const RootTransformInfoData = globalThis.org.allbinary.logic.visual.transform.info.RootTransformInfoData;

      
import { TransformInfoData } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoData.js';
      //not GWT import const TransformInfoData = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoData;

      
import { TransformInfoDomNode } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoDomNode.js';
      //not GWT import const TransformInfoDomNode = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoDomNode;

      
import { TransformInfoHttpInterface } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js';
      //not GWT import const TransformInfoHttpInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoHttpInterface;

      
import { TransformInfoInterface } from '../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { GenericStoreTransformInfoObjectConfig } from '../../../org/allbinary/logic/visual/transform/info/objectConfig/GenericStoreTransformInfoObjectConfig.js';
      //not GWT import const GenericStoreTransformInfoObjectConfig = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.GenericStoreTransformInfoObjectConfig;

      
//not plain js import { CommonSeps } from '../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
import { Document } from '../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CompoundContextTransformInfoObjectConfig extends GenericStoreTransformInfoObjectConfig {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (abeClientInformation: Object, transformInfoInterface: Object){
            super(abeClientInformation, transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


public constructor (abeClientInformation: Object, transformInfoInterface: Object, document: Object){
            super(abeClientInformation, transformInfoInterface, document);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setDocument(this.generate(this.toXmlDoc()));
    
}


public constructor (abeClientInformation: Object, transformInfoInterface: Object, name: string, type: string){
            super(abeClientInformation, transformInfoInterface, name, type);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setDocument(this.generate(this.toXmlDoc()));
    
}


                //@Throws(Exception.constructor)
            
    public get(): string{

    var storeName: string = this.getTransformInfoInterface()!.getStoreName()!;;
    

    var httpTransformInfoInterface: TransformInfoHttpInterface = this.getTransformInfoInterface() as TransformInfoHttpInterface;;
    

    var templateNameOverride: string = StringUtil.getInstance()!.getNonNull(httpTransformInfoInterface!.getPropertiesHashMap()!.get(TransformInfoData.getInstance()!.PARTIAL) as string)!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(storeName);
    
stringBuffer!.append(templateNameOverride);
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(RootTransformInfoData.NAME);
    

    var rootComponentInterface: TransformInterface = TransformFactory.getInstance()!.getInstance(abeClientInformation, stringBuffer!.toString(), this.getTransformInfoInterface())!;;
    

    var viewVector: Vector = this.getTransformDomNodes()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Root View Called with: " +viewVector!.length, this, "get(transformInfoInterface)");
    

                                    }
                                

    var rootView: string = rootComponentInterface!.view()!;;
    

    var startXMLHeader: string = "<xsl:text disable-output-escaping=\"yes\" ><![CDATA[";;
    

    var endXMLHeader: string = "]]></xsl:text>";;
    

    var size: number = viewVector!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var objectConfigTransformInfoDomNode: TransformInfoDomNode = viewVector!.get(index) as TransformInfoDomNode;;
    

    var templateKey: string = objectConfigTransformInfoDomNode!.getReplaceKey()!;;
    

    var componentInterface: TransformInterface = TransformFactory.getInstance()!.getInstance(abeClientInformation, objectConfigTransformInfoDomNode!.getTransformInfoInterface()!.getName(), this.getTransformInfoInterface())!;;
    

    var replacementViewString: string = componentInterface!.view()!;;
    
replacementViewString= DocumentToNode.convertDocumentToNodeString(replacementViewString);
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(startXMLHeader);
    
stringBuffer!.append(replacementViewString);
    
stringBuffer!.append(endXMLHeader);
    

    var templateValue: string = stringBuffer!.toString()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("Replacing: ");
    
stringBuffer!.append(templateKey);
    
stringBuffer!.append(" with ");
    
stringBuffer!.append(templateValue);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "get()");
    

                                    }
                                

    var replace: Replace = new Replace(templateKey, templateValue);;
    
rootView= replace.all(rootView);
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("End: Result of a compound view: " +rootView, this, "get()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rootView;
    
}


                //@Throws(Exception.constructor)
            
    public createInputStream(): InputStream{

    var completeTemplateViewBytes: number[] = this.get()!.getBytes()!;;
    

    var bais: ByteArrayInputStream = new ByteArrayInputStream(completeTemplateViewBytes);;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Template: " +String.fromCharCode(...completeTemplateViewBytes).toString(), this, "createInputStream()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bais;
    
}


}



