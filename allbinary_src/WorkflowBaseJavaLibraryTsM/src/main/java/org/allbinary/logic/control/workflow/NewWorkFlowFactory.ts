
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

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { AbeFactory } from "../../../../../org/allbinary/logic/system/loader/AbeFactory.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { LicensingException } from "../../../../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { WorkFlowInterface } from "./WorkFlowInterface.js";

export class NewWorkFlowFactory
            extends Object
         {
        

    private static readonly instance: NewWorkFlowFactory = new NewWorkFlowFactory();
        
        

    public static getInstance(): NewWorkFlowFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
        }


                //@Throws(Error::class, LicensingException::class)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, hashMap: HashMap<any, any>, pageContext: PageContext): WorkFlowInterface{
    //var abeClientInformation = abeClientInformation
    //var hashMap = hashMap
    //var pageContext = pageContext

        try {
            
    var className: string = hashMap!.get(DynamicObjectData.NAME); as String;
        
        
;
    

    var params: any[] = new Array(2);
        
        
;
    

    var classes: Function[] = new Array(2);
        
        
;
    
classes[0]= hashMap!constructor;
    
classes[1]= AbeFactory.getInstance()!.constructor;
    
params[0]= hashMap as Object;
    
params[1]= pageContext as Object;
    

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


                //@Throws(Error::class, LicensingException::class)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, className: string): WorkFlowInterface{
    //var abeClientInformation = abeClientInformation
    //var className = className

        try {
            
    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    

                        if(className != 
                                    null
                                 && className!.compareTo(stringUtil!.EMPTY_STRING) != 0)
                        
                                    {
                                    
    var anyType: any = AbeFactory.getInstance()!.getInstance(abeClientInformation, className, 
                            null, 
                            null)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new WorkFlowWrapper(anyType) as WorkFlowInterface;
    

                                    }
                                
                             else 
                        if()
                        

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e);
    

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
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e
}

}


}
                
            

