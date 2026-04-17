
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

    
import { DynamicObjectData } from "../../../../../org/allbinary/business/DynamicObjectData.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AbeFactory } from "../../../../../org/allbinary/logic/system/loader/AbeFactory.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { LicensingException } from "../../../../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { StoreWorkFlowInterface } from "./StoreWorkFlowInterface.js";

export class StoreTagWorkFlowFactory
            extends Object
         {
        

    private static readonly instance: StoreTagWorkFlowFactory = new StoreTagWorkFlowFactory();
        
        

    public static getInstance(): StoreTagWorkFlowFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class, LicensingException::class)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, propertiesHashMap: HashMap<any, any>, pageContext: PageContext): StoreWorkFlowInterface{
    //var abeClientInformation = abeClientInformation
    //var propertiesHashMap = propertiesHashMap
    //var pageContext = pageContext

        try {
            
    var workFlowClassName: string = propertiesHashMap!.get(DynamicObjectData.NAME);

                         as String;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Creating WorkFlow: ");
    
stringBuffer!.append(workFlowClassName);
    
stringBuffer!.append("->");
    
stringBuffer!.append(instance.constructor.name.toString()!);
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.putF(stringBuffer!.toString(), this, commonStrings!.GET_INSTANCE);
    

                                    }
                                

    var params: any[] = new Array(2);
        
        
;
    

    var classes: Function[] = new Array(2);
        
        
;
    
classes[0]= propertiesHashMap!constructor;
    
classes[1]= AbeFactory.getInstance()!.constructor;
    
params[0]= propertiesHashMap as Object;
    
params[1]= pageContext as Object;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbeFactory.getInstance()!.getInstance(abeClientInformation, workFlowClassName, classes, params);

                         as StoreWorkFlowInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    var workFlowClassName: string = propertiesHashMap!.get(DynamicObjectData.NAME);

                         as String;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Error Creating WorkFlow: ");
    
stringBuffer!.append(workFlowClassName);
    
stringBuffer!.append("->");
    
stringBuffer!.append(instance.constructor.name.toString()!);
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(stringBuffer!.toString(), this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e
}

                //: 
 catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    var workFlowClassName: string = propertiesHashMap!.get(DynamicObjectData.NAME);

                         as String;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Error Creating WorkFlow: ");
    
stringBuffer!.append(workFlowClassName);
    
stringBuffer!.append("->");
    
stringBuffer!.append(instance.constructor.name.toString()!);
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(stringBuffer!.toString(), this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e
}

}


}
                
            

