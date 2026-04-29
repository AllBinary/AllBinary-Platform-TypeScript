
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
        
import { WorkFlowInterface } from "./WorkFlowInterface.js";

export class TagWorkFlowFactory
            extends Object
         {
        

    private static readonly instance: TagWorkFlowFactory = new TagWorkFlowFactory();

    public static getInstance(): TagWorkFlowFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
private constructor (){

            super();
        }


                //@Throws(Error::class, LicensingException::class)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, propertiesHashMap: HashMap, pageContext: PageContext): WorkFlowInterface{
    //var abeClientInformation = abeClientInformation
    //var propertiesHashMap = propertiesHashMap
    //var pageContext = pageContext

        try {
            
    var workFlowClassName: string =  as StringpropertiesHashMap!.get(DynamicObjectData.NAME);;
;
    

    var params: any[] = new Array(2);
;
    

    var classes: Function[] = new Array(2);
;
    
classes[0]= propertiesHashMap!constructor;
    
classes[1]= AbeFactory.getInstance()!.constructor;
    
params[0]=  as ObjectpropertiesHashMap;
    
params[1]=  as ObjectpageContext;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  as WorkFlowInterfaceAbeFactory.getInstance()!.getInstance(abeClientInformation, workFlowClassName, classes, params);;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    var workFlowClassName: string =  as StringpropertiesHashMap!.get(DynamicObjectData.NAME);;
;
    

    var stringBuffer: StringMaker = new StringMaker();
;
    
stringBuffer!.append("Failed To Get Instance: ");
    
stringBuffer!.append(workFlowClassName);
    
stringBuffer!.append("->");
    
stringBuffer!.append(instance.constructor.name.toString()!);
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
;
    
this.logUtil!.put(stringBuffer!.toString(), this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e;
                    
}

                //: 
 catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    var workFlowClassName: string =  as StringpropertiesHashMap!.get(DynamicObjectData.NAME);;
;
    

    var stringBuffer: StringMaker = new StringMaker();
;
    
stringBuffer!.append("Failed To Get Instance: ");
    
stringBuffer!.append(workFlowClassName);
    
stringBuffer!.append("->");
    
stringBuffer!.append(instance.constructor.name.toString()!);
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
;
    
this.logUtil!.put(stringBuffer!.toString(), this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e;
                    
}

}


}
                
            

