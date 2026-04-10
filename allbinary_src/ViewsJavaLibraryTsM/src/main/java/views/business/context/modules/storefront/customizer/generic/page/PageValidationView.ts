
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

    
import { Vector } from "../../../../../../../../java/util/Vector.js";

    
import { TransformInfoEntity } from "../../../../../../../../org/allbinary/data/tables/transform/info/TransformInfoEntity.js";

    
import { TransformInfoEntityBuilder } from "../../../../../../../../org/allbinary/data/tables/transform/info/TransformInfoEntityBuilder.js";

    
import { DomDocumentHelper } from "../../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { LogUtil } from "../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { ValidationComponentInterface } from "../../../../../../../../org/allbinary/logic/control/validate/ValidationComponentInterface.js";

    
import { StringMaker } from "../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { TransformInfo } from "../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfo.js";

    
import { TransformInfoHttpInterface } from "../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js";

    
import { TransformInfoInterface } from "../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { TransformInfoObjectConfigInterface } from "../../../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigInterface.js";

    
import { PageValidation } from "../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/page/PageValidation.js";

    
import { TitleData } from "../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/widgets/title/TitleData.js";

    
import { Document } from "../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../org/w3c/dom/Node.js";

    
import { CustomizerUtil } from "../../../../../../../../views/business/context/modules/storefront/customizer/CustomizerUtil.js";

    

export class PageValidationView extends PageView
                , ValidationComponentInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("View Name: " +transformInfoInterface!.getName(), this, "PageViewValidation()")

                                    }
                                
}


    public isValid(): Boolean{

        try {
            
    var isValid: Boolean = Boolean.TRUE;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.START, this, commonStrings!.IS_VALID)

                                    }
                                

    var transformInfoEntityInterface: TransformInfoEntity = TransformInfoEntityBuilder.getInstance()!;
        
        


    var pageObjectConfigInterface: TransformInfoObjectConfigInterface = this.getTransformInfoInterface()!.getObjectConfigInterface()!;
        
        


    var allViewsToBeModifiedVector: Vector = pageObjectConfigInterface!.getGroupTransforms()!;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Views To Be Modified: " +allViewsToBeModifiedVector!.length, this, "get(transformInfoInterface)")

                                    }
                                

    var size: number = allViewsToBeModifiedVector!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var transformInfoInterface: TransformInfo = allViewsToBeModifiedVector!.get(index) as TransformInfo;
        
        


    var viewNameOfViewToBeModified: string = transformInfoInterface!.getName()!;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(this.getTransformInfoInterface()!.getName())
stringBuffer!.append(" is modifying view: ")
stringBuffer!.append(viewNameOfViewToBeModified)
logUtil!.put(stringBuffer!.toString(), this, "insert()")

                                    }
                                

    var httpTransformInfoInterface: TransformInfoHttpInterface = this.getTransformInfoInterface() as TransformInfoHttpInterface;
        
        


    var specifiedTransformInfoInterface: TransformInfoInterface = transformInfoEntityInterface!.get(viewNameOfViewToBeModified, httpTransformInfoInterface!.getPropertiesHashMap(), httpTransformInfoInterface!.getPageContext())!;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(this.getTransformInfoInterface()!.getName())
stringBuffer!.append(" is adding data to view: ")
stringBuffer!.append(viewNameOfViewToBeModified)
logUtil!.put(stringBuffer!.toString(), this, "insert()")

                                    }
                                

    var hashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        


    var title: string = specifiedTransformInfoInterface!.getName()!.substring(this.getTransformInfoInterface()!.getStoreName()!.length())!;
        
        


                        if(title.compareTo("index") == 0)
                        
                                    {
                                    hashMap!.put(TitleData.getInstance()!.TEXT, this.getTransformInfoInterface()!.getStoreName() +" - Home Page")

                                    }
                                
                        else {
                            hashMap!.put(TitleData.getInstance()!.TEXT, this.getTransformInfoInterface()!.getStoreName() +" -" +title)

                        }
                            

    var pageValidation: PageValidation = new PageValidation(hashMap);
        
        


                        if(pageValidation!.isValid() == Boolean.FALSE)
                        
                                    {
                                    isValid= Boolean.FALSE

                                    }
                                

                        if(isValid == Boolean.TRUE)
                        
                                    {
                                    
    var document: Document = DomDocumentHelper.create()!;
        
        

document.appendChild(pageValidation!.toXmlNode(document))

    var documentString: string = DomDocumentHelper.toString(document)!;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(viewNameOfViewToBeModified)
stringBuffer!.append(" is changing data in ")
stringBuffer!.append(specifiedTransformInfoInterface!.getDataFilePath()!.toString())
stringBuffer!.append(" to the following data:\n")
stringBuffer!.append(documentString)
logUtil!.put(stringBuffer!.toString(), this, commonStrings!.IS_VALID)

                                    }
                                
CustomizerUtil.getInstance()!.write(specifiedTransformInfoInterface, documentString)

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isValid;
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    logUtil!.put("Failed to validate", this, commonStrings!.IS_VALID, e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        


    var transformInfoEntityInterface: TransformInfoEntity = TransformInfoEntityBuilder.getInstance()!;
        
        


    var objectConfig: TransformInfoObjectConfigInterface = this.getTransformInfoInterface()!.getObjectConfigInterface()!;
        
        


    var httpTransformInfoInterface: TransformInfoHttpInterface = this.getTransformInfoInterface() as TransformInfoHttpInterface;
        
        


    var allViewsToBeModifiedVector: Vector = objectConfig!.getGroupTransforms()!;
        
        


    var size: number = allViewsToBeModifiedVector!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var transformInfoInterface: TransformInfo = allViewsToBeModifiedVector!.get(index) as TransformInfo;
        
        


    var viewNameOfViewToBeModified: string = transformInfoInterface!.getName()!;
        
        


    var specifiedTransformInfoInterface: TransformInfoInterface = transformInfoEntityInterface!.get(viewNameOfViewToBeModified, httpTransformInfoInterface!.getPropertiesHashMap(), httpTransformInfoInterface!.getPageContext())!;
        
        


    var hashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        


    var title: string = specifiedTransformInfoInterface!.getName()!.substring(this.getTransformInfoInterface()!.getStoreName()!.length())!;
        
        


                        if(title.compareTo("index") == 0)
                        
                                    {
                                    hashMap!.put(TitleData.getInstance()!.TEXT, this.getTransformInfoInterface()!.getStoreName() +" - Home Page")

                                    }
                                
                        else {
                            hashMap!.put(TitleData.getInstance()!.TEXT, this.getTransformInfoInterface()!.getStoreName() +" -" +title)

                        }
                            

    var pageValidation: PageValidation = new PageValidation(hashMap);
        
        


                        if(pageValidation!.isValid() == Boolean.FALSE)
                        
                                    {
                                    stringBuffer!.append("TransformInfo Name for PageValidation:" +specifiedTransformInfoInterface!.getName())
stringBuffer!.append("PageValidation:" +hashMap)
stringBuffer!.append("PageValidation Info:" +pageValidation!.validationInfo())

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "An auto generated page name was invalid.";
    
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


}
                
            

