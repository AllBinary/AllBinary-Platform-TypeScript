
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
        



import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { PageContext } from "../../../../../javax/servlet/jsp/PageContext.js";

    
import { TransformInfoEntity } from "../../../../../org/allbinary/data/tables/transform/info/TransformInfoEntity.js";

    
import { TransformInfoEntityBuilder } from "../../../../../org/allbinary/data/tables/transform/info/TransformInfoEntityBuilder.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { TransformInfoData } from "../../../../../org/allbinary/logic/visual/transform/info/TransformInfoData.js";

    
import { TransformInfoHttpFactory } from "../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpFactory.js";

    
import { TransformInfoHttpInterface } from "../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js";

    
import { TransformInfoInterface } from "../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { TransformInfoObjectFactory } from "../../../../../org/allbinary/logic/visual/transform/info/TransformInfoObjectFactory.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class TransformFactory
            extends Object
         {
        

    private static readonly instance: TransformFactory = new TransformFactory();
        
        

    public static getInstance(): TransformFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

                @Throws(Exception::class)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, viewName: string, ownerTransformInfoInterface: TransformInfoInterface): TransformInterface{
    //var abeClientInformation = abeClientInformation
    //var viewName = viewName
    //var ownerTransformInfoInterface = ownerTransformInfoInterface

        try {
            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    put("Creating Transform: " +viewName, this, commonStrings!.GET_INSTANCE)

                                    }
                                

    var ownerTransformInfoHttpInterface: TransformInfoHttpInterface = ownerTransformInfoInterface as TransformInfoHttpInterface;
        
        


    var transformInfoEntity: TransformInfoEntity = TransformInfoEntityBuilder.getInstance()!;
        
        


    var transformInfoInterface: TransformInfoInterface = transformInfoEntity!.get(viewName, ownerTransformInfoHttpInterface!.getPropertiesHashMap(), ownerTransformInfoHttpInterface!.getPageContext())!;
        
        


    
                        if(transformInfoInterface == 
                                    null
                                )
                        
                                    {
                                    


                            throw Exception("No Such View In DB: " +viewName)

                                    }
                                
setChild()

    var anyType: any = {} = TransformInfoObjectFactory.getInstance()!.getInstance(abeClientInformation, transformInfoInterface)!;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    put("Created Transform: " +viewName, this, commonStrings!.GET_INSTANCE)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType as TransformInterface;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e)

                                    }
                                



                            throw e
}

}


                @Throws(Exception::class)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, propertiesHashMap: HashMap<Any, Any>, pageContext: PageContext): TransformInterface{
    //var abeClientInformation = abeClientInformation
    //var propertiesHashMap = propertiesHashMap
    //var pageContext = pageContext

        try {
            
    var transformInfoData: TransformInfoData = TransformInfoData.getInstance()!;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    put("Creating Transform: " +propertiesHashMap!.get(transformInfoData!.NAME), this, commonStrings!.GET_INSTANCE)

                                    }
                                

    var transformInfoEntity: TransformInfoEntity = TransformInfoEntityBuilder.getInstance()!;
        
        


    var transformInfoInterface: TransformInfoInterface = transformInfoEntity!.get(propertiesHashMap!.get(transformInfoData!.NAME) as String, propertiesHashMap, pageContext)!;
        
        


    
                        if(transformInfoInterface != 
                                    null
                                )
                        
                                    {
                                    override(propertiesHashMap)

                                    }
                                
                        else {
                            transformInfoInterface= TransformInfoHttpFactory.getInstance(propertiesHashMap, pageContext) as TransformInfoInterface

                        }
                            

    var anyType: any = {} = TransformInfoObjectFactory.getInstance()!.getInstance(abeClientInformation, transformInfoInterface)!;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    put("Created Transform: " +propertiesHashMap!.get(transformInfoData!.NAME), this, commonStrings!.GET_INSTANCE)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType as TransformInterface;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Failed To Get Instance: ")
append(propertiesHashMap!.get(TransformInfoData.getInstance()!.NAME) as String)
append("->TransformFactory")
put(stringBuffer!.toString(), this, commonStrings!.GET_INSTANCE, e)

                                    }
                                



                            throw e
}

}


                @Throws(Exception::class)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface): TransformInterface{
    //var abeClientInformation = abeClientInformation
    //var transformInfoInterface = transformInfoInterface

        try {
            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    put("Creating Transform: " +transformInfoInterface!.getName(), this, "getInstance(TransformInfoInterface)")

                                    }
                                

    var anyType: any = {} = TransformInfoObjectFactory.getInstance()!.getInstance(abeClientInformation, transformInfoInterface)!;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    put("Created Transform: " +transformInfoInterface!.getName(), this, "getInstance(TransformInfoInterface)")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType as TransformInterface;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "getInstance(TransformInfoInterface)", e)

                                    }
                                



                            throw e
}

}


}
                
            

