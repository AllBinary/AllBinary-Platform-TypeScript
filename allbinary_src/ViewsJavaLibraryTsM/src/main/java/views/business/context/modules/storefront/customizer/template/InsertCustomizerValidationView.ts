
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

    
import { Vector } from "../../../../../../../java/util/Vector.js";

    
import { TransformInfoEntityBuilder } from "../../../../../../../org/allbinary/data/tables/transform/info/TransformInfoEntityBuilder.js";

    
import { RequestParams } from "../../../../../../../org/allbinary/logic/communication/http/request/RequestParams.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { ValidationComponentInterface } from "../../../../../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js";

    
import { StringMaker } from "../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringValidationUtil } from "../../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { TransformFactory } from "../../../../../../../org/allbinary/logic/visual/transform/TransformFactory.js";

    
import { TransformInterface } from "../../../../../../../org/allbinary/logic/visual/transform/TransformInterface.js";

    
import { GeneratorTransformInfoData } from "../../../../../../../org/allbinary/logic/visual/transform/info/GeneratorTransformInfoData.js";

    
import { TransformInfo } from "../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfo.js";

    
import { TransformInfoData } from "../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoData.js";

    
import { TransformInfoInterface } from "../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { TransformInfosData } from "../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfosData.js";

    
import { CommonSeps } from "../../../../../../../org/allbinary/string/CommonSeps.js";

    
import { Document } from "../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../org/w3c/dom/Node.js";

    
import { HttpStoreComponentView } from "../../../../../../../views/business/context/modules/storefront/HttpStoreComponentView.js";

    
import { InsertTemplateCustomizerTransformInfoObjectConfig } from "../../../../../../../views/business/context/modules/storefront/customizer/template/objectConfig/InsertTemplateCustomizerTransformInfoObjectConfig.js";

    
import { NoTemplateTransformInfoObjectConfig } from "../../../../../../../views/business/context/modules/storefront/customizer/template/objectConfig/NoTemplateTransformInfoObjectConfig.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InsertCustomizerValidationView extends HttpStoreComponentView implements ValidationComponentInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private viewName: string
public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("View Name: " +transformInfoInterface!.getName(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                

    var requestHashMap: HashMap<any, any> = new RequestParams(this.getPageContext()).
                            toHashMap()!;
        
        
;
    
this.viewName= requestHashMap!.get(TransformInfoData.getInstance()!.NAME);

                         as String;
    
}


    public isValid(): Boolean{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Started Validation", this, commonStrings!.IS_VALID);
    

                                    }
                                

    var isValid: Boolean = Boolean.TRUE;
        
        
;
    

                        if(StringValidationUtil.getInstance()!.isEmpty(this.viewName))
                        
                                    {
                                    isValid= Boolean.FALSE;
    

                                    }
                                
                        else {
                            
    var objectConfig: NoTemplateTransformInfoObjectConfig = new NoTemplateTransformInfoObjectConfig(this.getTransformInfoInterface(), this.getTransformInfoInterface()!.getObjectConfigInterface()!.toXmlDoc());
        
        
;
    

    var componentVector: Vector = objectConfig!.getGroupTransforms()!;
        
        
;
    

    var size: number = componentVector!.length!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Pointing ");
    
stringBuffer!.appendint(componentVector!.length);
    
stringBuffer!.append(" Components");
    
this.logUtil!.putF(stringBuffer!.toString(), this, commonStrings!.IS_VALID);
    

                                    }
                                




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var transformInfo: TransformInfo = componentVector!.get(index);

                         as TransformInfo;
        
        
;
    

    var transformInfoName: string = transformInfo!.getName()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Setting Template Component with ViewName: " +transformInfoName, this, commonStrings!.IS_VALID);
    

                                    }
                                

    var componentInterface: TransformInterface = TransformFactory.getInstance()!.getInstance(this.abeClientInformation, transformInfoName, this.getTransformInfoInterface())!;
        
        
;
    

    var templateViewObjectConfig: InsertTemplateCustomizerTransformInfoObjectConfig = new InsertTemplateCustomizerTransformInfoObjectConfig(componentInterface!.getTransformInfoInterface(), componentInterface!.getTransformInfoInterface()!.getObjectConfigInterface()!.toXmlDoc());
        
        
;
    

    var storeName: string = this.getTransformInfoInterface()!.getStoreName()!;
        
        
;
    

    var endIndex: number = this.viewName!.indexOf(storeName) +storeName!.length;
        
        
;
    

    var storePrepend: string = this.viewName!.substring(0, endIndex)!;
        
        
;
    

    var viewNamePostfix: string = this.viewName!.substring(endIndex, this.viewName!.length)!;
        
        
;
    

    var newViewNameStringBuffer: StringMaker = new StringMaker();
        
        
;
    
newViewNameStringBuffer!.append(storePrepend);
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    

    var transformInfosData: TransformInfosData = TransformInfosData.getInstance()!;
        
        
;
    

                        if(transformInfoName!.indexOf(transformInfosData!.SMALL_PREVIEW) >= 0)
                        
                                    {
                                    newViewNameStringBuffer!.append(commonSeps!.SPACE);
    
newViewNameStringBuffer!.append(transformInfosData!.SMALL_PREVIEW);
    

                                    }
                                
                             else 
                        if(transformInfoName!.indexOf(transformInfosData!.PREVIEW) >= 0)
                        
                                    {
                                    newViewNameStringBuffer!.append(commonSeps!.SPACE);
    
newViewNameStringBuffer!.append(transformInfosData!.PREVIEW);
    

                                    }
                                
newViewNameStringBuffer!.append(commonSeps!.SPACE);
    
newViewNameStringBuffer!.append(viewNamePostfix);
    

                        if(transformInfoName!.indexOf(GeneratorTransformInfoData.NAME) >= 0)
                        
                                    {
                                    newViewNameStringBuffer!.append(commonSeps!.SPACE);
    
newViewNameStringBuffer!.append(GeneratorTransformInfoData.NAME);
    

                                    }
                                

    var newViewName: string = newViewNameStringBuffer!.toString()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Template Component: ");
    
stringBuffer!.append(transformInfoName);
    
stringBuffer!.append("\n Now Pointing To View Name: ");
    
stringBuffer!.append(newViewName);
    
this.logUtil!.putF(stringBuffer!.toString(), this, commonStrings!.IS_VALID);
    

                                    }
                                
templateViewObjectConfig!.set(newViewName);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Template Component: ");
    
stringBuffer!.append(transformInfoName);
    
stringBuffer!.append("\n with ObjectConfig: ");
    
stringBuffer!.append(templateViewObjectConfig!.toString());
    
this.logUtil!.putF(stringBuffer!.toString(), this, commonStrings!.IS_VALID);
    

                                    }
                                
componentInterface!.getTransformInfoInterface()!.setObjectConfigInterface(templateViewObjectConfig);
    

    var updatedTransformInfoHashMap: HashMap<any, any> = componentInterface!.getTransformInfoInterface()!.toHashMap()!;
        
        
;
    
TransformInfoEntityBuilder.getInstance()!.update(updatedTransformInfoHashMap);
    
}


                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isValid;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to validate", this, commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Error: Template Name Is Empty.");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Getting Validation Info";
    
}

}


    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: Document): Node{
var document = document



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Error::class)
            
    public view(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return views.ValidationOnlyTempUtil.getInstance()!.view(this);

                        ;
    
}


}
                
            

