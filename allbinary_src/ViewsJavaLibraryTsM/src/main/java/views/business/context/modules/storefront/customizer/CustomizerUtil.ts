
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
        



import { Vector } from "../../../../../../java/util/Vector.js";

    
import { TransformInfoEntity } from "../../../../../../org/allbinary/data/tables/transform/info/TransformInfoEntity.js";

    
import { TransformInfoEntityBuilder } from "../../../../../../org/allbinary/data/tables/transform/info/TransformInfoEntityBuilder.js";

    
import { DomNodeInterface } from "../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { DomDocumentHelper } from "../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { TransformInfo } from "../../../../../../org/allbinary/logic/visual/transform/info/TransformInfo.js";

    
import { TransformInfoHttpInterface } from "../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js";

    
import { TransformInfoInterface } from "../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { TransformInfoObjectConfigInterface } from "../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigInterface.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    

export class CustomizerUtil
            extends Object
         {
        

    private static readonly instance: CustomizerUtil = new CustomizerUtil();
        
        

    public static getInstance(): CustomizerUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


                @Throws(Exception::class)
            
    public getTransformInfoInterfaceToCustomize(customizerTransformInfoInterface: TransformInfoInterface, transformInfoInterface: TransformInfoInterface): TransformInfoInterface{
var customizerTransformInfoInterface = customizerTransformInfoInterface
var transformInfoInterface = transformInfoInterface

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    put("View Name: " +customizerTransformInfoInterface!.getName(), this, "getTransformInfoInterfaceToCustomize()")

                                    }
                                

    var transformInfoEntityInterface: TransformInfoEntity = TransformInfoEntityBuilder.getInstance()!;
        
        


    var viewName: string = transformInfoInterface!.getName()!;
        
        


    var httpTransformInfoInterface: TransformInfoHttpInterface = customizerTransformInfoInterface as TransformInfoHttpInterface;
        
        


    var customizedTransformInfoInterface: TransformInfoInterface = transformInfoEntityInterface!.get(viewName, httpTransformInfoInterface!.getPropertiesHashMap(), httpTransformInfoInterface!.getPageContext())!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return customizedTransformInfoInterface;
    
}


                @Throws(Exception::class)
            
    public getTransformInfoObjectConfigComponentNodesToCustomize(customizerTransformInfoInterface: Object, transformInfoInterface: Object): Vector{
var customizerTransformInfoInterface = customizerTransformInfoInterface
var transformInfoInterface = transformInfoInterface

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    put("View Name: " +customizerTransformInfoInterface!.getName(), this, "getTransformInfoObjectConfigComponentNodesToCustomize()")

                                    }
                                

    var transformInfoEntityInterface: TransformInfoEntity = TransformInfoEntityBuilder.getInstance()!;
        
        


    var viewName: string = transformInfoInterface!.getName()!;
        
        


    var httpTransformInfoInterface: TransformInfoHttpInterface = customizerTransformInfoInterface as TransformInfoHttpInterface;
        
        


    var customizedTransformInfoInterface: TransformInfoInterface = transformInfoEntityInterface!.get(viewName, httpTransformInfoInterface!.getPropertiesHashMap(), httpTransformInfoInterface!.getPageContext())!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getTransformInfoObjectConfigComponentNodes(customizedTransformInfoInterface);
    
}


                @Throws(Exception::class)
            
    public getTransformInfoObjectConfigComponentNodes(transformInfoInterface: Object): Vector{
var transformInfoInterface = transformInfoInterface

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    put("View Name: " +transformInfoInterface!.getName(), this, "getTransformInfoObjectConfigComponentNodes()")

                                    }
                                

    var transformInfoObjectConfigInterface: TransformInfoObjectConfigInterface = transformInfoInterface!.getObjectConfigInterface()!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return transformInfoObjectConfigInterface!.getTransforms();
    
}


                @Throws(Exception::class)
            
    public getTransformInfoObjectConfigGroupComponentNodes(transformInfoInterface: Object): Vector{
var transformInfoInterface = transformInfoInterface

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    put("View Name: " +transformInfoInterface!.getName(), this, "getTransformInfoObjectConfigComponentNodes()")

                                    }
                                

    var transformInfoObjectConfigInterface: TransformInfoObjectConfigInterface = transformInfoInterface!.getObjectConfigInterface()!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return transformInfoObjectConfigInterface!.getGroupTransforms();
    
}


                @Throws(Exception::class)
            
    public insert(transformInfoInterface: TransformInfoInterface, domNodeInterface: DomNodeInterface){
var transformInfoInterface = transformInfoInterface
var domNodeInterface = domNodeInterface

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    put("View Name: " +transformInfoInterface!.getName(), this, "insert()")

                                    }
                                

    var transformInfoEntityInterface: TransformInfoEntity = TransformInfoEntityBuilder.getInstance()!;
        
        


    var allViewsToBeModified: Vector = this.getTransformInfoObjectConfigGroupComponentNodes(transformInfoInterface)!;
        
        


    var document: Document = DomDocumentHelper.create()!;
        
        

appendChild(domNodeInterface!.toXmlNode(document))

    var documentString: string = DomDocumentHelper.toString(document)!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    append("Total Views For Modification: ")
appendint(allViewsToBeModified!.length)
append(" New Xml/Data: ")
append(documentString)
put(stringBuffer!.toString(), this, "insert()")

                                    }
                                
setData(documentString)

    var size: number = allViewsToBeModified!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var transformInfo: TransformInfo = allViewsToBeModified!.get(index) as TransformInfo;
        
        


    var viewNameOfViewToBeModified: string = transformInfo!.getName()!;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    delete(0, stringBuffer!.length())
append(transformInfoInterface!.getName())
append(" is modifying view: ")
append(viewNameOfViewToBeModified)
put(stringBuffer!.toString(), this, "insert()")

                                    }
                                

    var httpTransformInfoInterface: TransformInfoHttpInterface = transformInfoInterface as TransformInfoHttpInterface;
        
        


    var specifiedTransformInfoInterface: TransformInfoInterface = transformInfoEntityInterface!.get(viewNameOfViewToBeModified, httpTransformInfoInterface!.getPropertiesHashMap(), httpTransformInfoInterface!.getPageContext())!;
        
        


    
                        if(specifiedTransformInfoInterface == 
                                    null
                                )
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    delete(0, stringBuffer!.length())
append(transformInfoInterface!.getName())
append(" is unable to add data to view: ")
append(viewNameOfViewToBeModified)
append(" since it does not exist")
put(stringBuffer!.toString(), this, "insert()")

                                    }
                                

                                    }
                                
                        else {
                            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    put(transformInfoInterface!.getName() +" is adding data to view: " +viewNameOfViewToBeModified, this, "insert()")

                                    }
                                

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    delete(0, stringBuffer!.length())
append(viewNameOfViewToBeModified)
append(" is changing data in ")
append(specifiedTransformInfoInterface!.getDataFilePath()!.toString())
append(" to the following data:\n")
append(documentString)
put(stringBuffer!.toString(), this, "insert()")

                                    }
                                
this.write(specifiedTransformInfoInterface, documentString)

                        }
                            
}

}


                @Throws(Exception::class)
            
    public write(specifiedTransformInfoInterface: TransformInfoInterface, documentString: string){
var specifiedTransformInfoInterface = specifiedTransformInfoInterface
var documentString = documentString

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    put("View Name: " +specifiedTransformInfoInterface!.getName(), this, "write()")

                                    }
                                

    var transformInfoEntityInterface: TransformInfoEntity = TransformInfoEntityBuilder.getInstance()!;
        
        

setData(documentString)
update(specifiedTransformInfoInterface!.toHashMap())
}


                @Throws(Exception::class)
            
    public getViewDataForComponentsInObjectConfig(transformInfoInterface: Object): Document{
var transformInfoInterface = transformInfoInterface

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    put("View Name: " +transformInfoInterface!.getName(), this, "getViewDataForComponentsInObjectConfig()")

                                    }
                                

    var transformInfoObjectConfigInterface: TransformInfoObjectConfigInterface = transformInfoInterface!.getObjectConfigInterface()!;
        
        


    var allViewsToBeModified: Vector = transformInfoObjectConfigInterface!.getGroupTransforms()!;
        
        


    var transformInfoEntityInterface: TransformInfoEntity = TransformInfoEntityBuilder.getInstance()!;
        
        


    var size: number = allViewsToBeModified!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var nextTransformInfoInterface: TransformInfo = allViewsToBeModified!.get(index) as TransformInfo;
        
        


    var viewNameOfViewToBeModified: string = nextTransformInfoInterface!.getName()!;
        
        


    var httpTransformInfoInterface: TransformInfoHttpInterface = transformInfoInterface as TransformInfoHttpInterface;
        
        


    var specifiedTransformInfoInterface: TransformInfoInterface = transformInfoEntityInterface!.get(viewNameOfViewToBeModified, httpTransformInfoInterface!.getPropertiesHashMap(), httpTransformInfoInterface!.getPageContext())!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return specifiedTransformInfoInterface!.getDataDocument();
    
}




                            throw Exception("No Components Specified in ObjectConfig")
}


}
                
            

