
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
        



import { ByteArrayInputStream } from "../../../java/io/ByteArrayInputStream.js";

    
import { InputStream } from "../../../java/io/InputStream.js";

    
import { Vector } from "../../../java/util/Vector.js";

    
import { DocumentToNode } from "../../../org/allbinary/data/tree/dom/document/DocumentToNode.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    
import { Replace } from "../../../org/allbinary/logic/string/regex/replace/Replace.js";

    
import { AbeClientInformationInterface } from "../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { TransformFactory } from "../../../org/allbinary/logic/visual/transform/TransformFactory.js";

    
import { TransformInterface } from "../../../org/allbinary/logic/visual/transform/TransformInterface.js";

    
import { RootTransformInfoData } from "../../../org/allbinary/logic/visual/transform/info/RootTransformInfoData.js";

    
import { TransformInfoData } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoData.js";

    
import { TransformInfoDomNode } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoDomNode.js";

    
import { TransformInfoHttpInterface } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js";

    
import { TransformInfoInterface } from "../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { GenericStoreTransformInfoObjectConfig } from "../../../org/allbinary/logic/visual/transform/info/objectConfig/GenericStoreTransformInfoObjectConfig.js";

    
import { CommonSeps } from "../../../org/allbinary/string/CommonSeps.js";

    
import { Document } from "../../../org/w3c/dom/Document.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CompoundContextTransformInfoObjectConfig extends GenericStoreTransformInfoObjectConfig {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (abeClientInformation: Object, transformInfoInterface: Object){
            super(abeClientInformation, transformInfoInterface);
                        //var abeClientInformation = abeClientInformation
var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (abeClientInformation: Object, transformInfoInterface: Object, document: Object){
            super(abeClientInformation, transformInfoInterface, document);
                        //var abeClientInformation = abeClientInformation
var transformInfoInterface = transformInfoInterface
var document = document


                            //For kotlin this is before the body of the constructor.
                    
this.setDocument(this.generate(this.toXmlDoc()));
    
}

public constructor (abeClientInformation: Object, transformInfoInterface: Object, name: string, type: string){
            super(abeClientInformation, transformInfoInterface, name, type);
                        //var abeClientInformation = abeClientInformation
var transformInfoInterface = transformInfoInterface
var name = name
var type = type


                            //For kotlin this is before the body of the constructor.
                    
this.setDocument(this.generate(this.toXmlDoc()));
    
}


                //@Throws(Error::class)
            
    public get(): string{

    var storeName: string = this.getTransformInfoInterface()!.getStoreName()!;
        
        
;
    

    var httpTransformInfoInterface: TransformInfoHttpInterface = this.getTransformInfoInterface();

                         as TransformInfoHttpInterface;
        
        
;
    

    var templateNameOverride: string = StringUtil.getInstance()!.getInstance(httpTransformInfoInterface!.getPropertiesHashMap()!.get(TransformInfoData.getInstance()!.PARTIAL);

                         as String)!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(storeName);
    
stringBuffer!.append(templateNameOverride);
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(RootTransformInfoData.NAME);
    

    var rootComponentInterface: TransformInterface = TransformFactory.getInstance()!.getInstance(abeClientInformation, stringBuffer!.toString(), this.getTransformInfoInterface())!;
        
        
;
    

    var viewVector: Vector = this.getTransformDomNodes()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Root View Called with: " +viewVector!.length, this, "get(transformInfoInterface)");
    

                                    }
                                

    var rootView: string = rootComponentInterface!.view()!;
        
        
;
    

    var startXMLHeader: string = "<xsl:text disable-output-escaping=\"yes\" ><![CDATA[";
        
        
;
    

    var endXMLHeader: string = "]]></xsl:text>";
        
        
;
    

    var size: number = viewVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var objectConfigTransformInfoDomNode: TransformInfoDomNode = viewVector!.get(index);

                         as TransformInfoDomNode;
        
        
;
    

    var templateKey: string = objectConfigTransformInfoDomNode!.getReplaceKey()!;
        
        
;
    

    var componentInterface: TransformInterface = TransformFactory.getInstance()!.getInstance(abeClientInformation, objectConfigTransformInfoDomNode!.getTransformInfoInterface()!.getName(), this.getTransformInfoInterface())!;
        
        
;
    

    var replacementViewString: string = componentInterface!.view()!;
        
        
;
    
replacementViewString= DocumentToNode.convertDocumentToNodeString(replacementViewString);
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(startXMLHeader);
    
stringBuffer!.append(replacementViewString);
    
stringBuffer!.append(endXMLHeader);
    

    var templateValue: string = stringBuffer!.toString()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("Replacing: ");
    
stringBuffer!.append(templateKey);
    
stringBuffer!.append(" with ");
    
stringBuffer!.append(templateValue);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "get()");
    

                                    }
                                

    var replace: Replace = new Replace(templateKey, templateValue);
        
        
;
    
rootView= replace.all(rootView);
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("End: Result of a compound view: " +rootView, this, "get()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rootView;
    
}


                //@Throws(Error::class)
            
    public createInputStream(): InputStream{

    var completeTemplateViewBytes: number[] = this.get()!.encodeToByteArray()!;
        
        
;
    

    var bais: ByteArrayInputStream = new ByteArrayInputStream(completeTemplateViewBytes);
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Template: " +completeTemplateViewBytes.decodeToString().
                            toString(), this, "createInputStream()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bais;
    
}


}
                
            

