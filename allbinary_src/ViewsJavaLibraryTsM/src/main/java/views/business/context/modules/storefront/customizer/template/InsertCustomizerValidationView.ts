
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
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { TransformInfoEntityBuilder } from '../../../../../../../org/allbinary/data/tables/transform/info/TransformInfoEntityBuilder.js';
//not GWT import const TransformInfoEntityBuilder = globalThis.org.allbinary.data.tables.transform.info.TransformInfoEntityBuilder;

      
import { RequestParams } from '../../../../../../../org/allbinary/logic/communication/http/request/RequestParams.js';
//not GWT import const RequestParams = globalThis.org.allbinary.logic.communication.http.request.RequestParams;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { ValidationComponentInterface } from '../../../../../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js';
//not GWT import const ValidationComponentInterface = globalThis.org.allbinary.logic.control.validate.ValidationComponentInterface;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { StringValidationUtil } from '../../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
import { TransformFactory } from '../../../../../../../org/allbinary/logic/visual/transform/TransformFactory.js';
//not GWT import const TransformFactory = globalThis.org.allbinary.logic.visual.transform.TransformFactory;

      
import { TransformInterface } from '../../../../../../../org/allbinary/logic/visual/transform/TransformInterface.js';
//not GWT import const TransformInterface = globalThis.org.allbinary.logic.visual.transform.TransformInterface;

      
import { GeneratorTransformInfoData } from '../../../../../../../org/allbinary/logic/visual/transform/info/GeneratorTransformInfoData.js';
//not GWT import const GeneratorTransformInfoData = globalThis.org.allbinary.logic.visual.transform.info.GeneratorTransformInfoData;

      
import { TransformInfo } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfo.js';
//not GWT import const TransformInfo = globalThis.org.allbinary.logic.visual.transform.info.TransformInfo;

      
import { TransformInfoData } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoData.js';
//not GWT import const TransformInfoData = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoData;

      
import { TransformInfoInterface } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { TransformInfosData } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfosData.js';
//not GWT import const TransformInfosData = globalThis.org.allbinary.logic.visual.transform.info.TransformInfosData;

      
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
import { Document } from '../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { HttpStoreComponentView } from '../../../../../../../views/business/context/modules/storefront/HttpStoreComponentView.js';
//not GWT import const HttpStoreComponentView = globalThis.views.business.context.modules.storefront.HttpStoreComponentView;

      
import { InsertTemplateCustomizerTransformInfoObjectConfig } from '../../../../../../../views/business/context/modules/storefront/customizer/template/objectConfig/InsertTemplateCustomizerTransformInfoObjectConfig.js';
//not GWT import const InsertTemplateCustomizerTransformInfoObjectConfig = globalThis.views.business.context.modules.storefront.customizer.template.objectConfig.InsertTemplateCustomizerTransformInfoObjectConfig;

      
import { NoTemplateTransformInfoObjectConfig } from '../../../../../../../views/business/context/modules/storefront/customizer/template/objectConfig/NoTemplateTransformInfoObjectConfig.js';
//not GWT import const NoTemplateTransformInfoObjectConfig = globalThis.views.business.context.modules.storefront.customizer.template.objectConfig.NoTemplateTransformInfoObjectConfig;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //Sets Template Type
export class InsertCustomizerValidationView extends HttpStoreComponentView implements ValidationComponentInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private viewName: string;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("View Name: " +transformInfoInterface!.getName(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                

    var requestHashMap: HashMap<any, any> = new RequestParams(this.getPageContext()).toHashMap()!;;
    
this.viewName= requestHashMap!.get(TransformInfoData.getInstance()!.NAME) as string;
    
}


    public isValid(): Boolean{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Started Validation", this, this.commonStrings!.IS_VALID);
    

                                    }
                                

    var isValid: Boolean = Boolean.TRUE;;
    

                        if(StringValidationUtil.getInstance()!.isEmpty(this.viewName))
                        
                                    {
                                    isValid= Boolean.FALSE;
    

                                    }
                                
                        else {
                            
    var objectConfig: NoTemplateTransformInfoObjectConfig = new NoTemplateTransformInfoObjectConfig(this.getTransformInfoInterface(), this.getTransformInfoInterface()!.getObjectConfigInterface()!.toXmlDoc());;
    

    var componentVector: BasicArrayList = objectConfig!.getGroupTransforms()!;;
    

    var size: number = componentVector!.size()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Pointing ");
    
stringBuffer!.appendint(componentVector!.size());
    
stringBuffer!.append(" Components");
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.commonStrings!.IS_VALID);
    

                                    }
                                




                        for (
    var index: number = 0;index < size; index++)
        {

    var transformInfo: TransformInfo = componentVector!.get(index) as TransformInfo;;
    

    var transformInfoName: string = transformInfo!.getName()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Setting Template Component with ViewName: " +transformInfoName, this, this.commonStrings!.IS_VALID);
    

                                    }
                                

    var componentInterface: TransformInterface = TransformFactory.getInstance()!.getInstance(this.abeClientInformation, transformInfoName, this.getTransformInfoInterface())!;;
    

    var templateViewObjectConfig: InsertTemplateCustomizerTransformInfoObjectConfig = new InsertTemplateCustomizerTransformInfoObjectConfig(componentInterface!.getTransformInfoInterface(), componentInterface!.getTransformInfoInterface()!.getObjectConfigInterface()!.toXmlDoc());;
    

    var storeName: string = this.getTransformInfoInterface()!.getStoreName()!;;
    

    var endIndex: number = this.viewName!.indexOf(storeName) +storeName!.length;;
    

    var storePrepend: string = this.viewName!.substring(0, endIndex)!;;
    

    var viewNamePostfix: string = this.viewName!.substring(endIndex, this.viewName!.length)!;;
    

    var newViewNameStringBuffer: StringMaker = new StringMaker();;
    
newViewNameStringBuffer!.append(storePrepend);
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

    var transformInfosData: TransformInfosData = TransformInfosData.getInstance()!;;
    

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
                                

    var newViewName: string = newViewNameStringBuffer!.toString()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Template Component: ");
    
stringBuffer!.append(transformInfoName);
    
stringBuffer!.append("\n Now Pointing To View Name: ");
    
stringBuffer!.append(newViewName);
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.commonStrings!.IS_VALID);
    

                                    }
                                
templateViewObjectConfig!.set(newViewName);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Template Component: ");
    
stringBuffer!.append(transformInfoName);
    
stringBuffer!.append("\n with ObjectConfig: ");
    
stringBuffer!.append(templateViewObjectConfig!.toString());
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.commonStrings!.IS_VALID);
    

                                    }
                                
componentInterface!.getTransformInfoInterface()!.setObjectConfigInterface(templateViewObjectConfig);
    

    var updatedTransformInfoHashMap: HashMap<any, any> = componentInterface!.getTransformInfoInterface()!.toHashMap()!;;
    
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
                                    this.logUtil!.put("Failed to validate", this, this.commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Error: Template Name Is Empty.");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    

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



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Exception.constructor)
            
    public view(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return views.ValidationOnlyTempUtil.getInstance()!.view(this);;
    
}


}



