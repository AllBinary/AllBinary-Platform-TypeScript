
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
        



            import HashMap from "@ohos.util.HashMap";
        

//import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { DynamicObjectData } from "../../../../../org/allbinary/business/DynamicObjectData.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbeFactory } from "../../../../../org/allbinary/logic/system/loader/AbeFactory.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { LicensingException } from "../../../../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class DbWorkFlowFactory
            extends Object
         {
        

    private static readonly instance: DbWorkFlowFactory = new DbWorkFlowFactory();
        
        

    public static getInstance(): DbWorkFlowFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class, LicensingException::class)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, hashMap: HashMap<any, any>): WorkFlowInterface{
    //var abeClientInformation = abeClientInformation
    //var hashMap = hashMap

        try {
            
    var className: string = hashMap!.get(DynamicObjectData.NAME);

                         as String;
        
        
;
    

    var params: any[] = new Array(1);
        
        
;
    

    var classes: Function[] = new Array(1);
        
        
;
    
classes[0]= hashMap!constructor;
    
params[0]= hashMap as Object;
    

    var anyType: any = AbeFactory.getInstance()!.getInstance(abeClientInformation, className, classes, params)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new WorkFlowWrapper(anyType) as WorkFlowInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "getInstance(HashMap)", e);
    

                                    }
                                



                            throw e
}

                //: 
 catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "getInstance(HashMap)", e);
    

                                    }
                                



                            throw e
}

}


}
                
            

