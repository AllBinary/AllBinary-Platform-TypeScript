
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
        

//import { HashMap } from "../../java/util/HashMap.js";

    
import { HttpServletRequest } from "../../javax/servlet/http/HttpServletRequest.js";

    
import { PageContext } from "../../javax/servlet/jsp/PageContext.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbeFactory } from "../../org/allbinary/logic/system/loader/AbeFactory.js";

    
import { AbeClientInformationInterface } from "../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { LicensingException } from "../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { CommonStrings } from "../../org/allbinary/string/CommonStrings.js";

    

export class HelperFactory
            extends Object
         {
        

                //@Throws(LicensingException::class)
            
    public static getInstance(abeClientInformation: AbeClientInformationInterface, factoryName: string, className: string, hashMap: HashMap<any, any>, httpServletRequest: HttpServletRequest): any{
    //var abeClientInformation = abeClientInformation
    //var factoryName = factoryName
    //var className = className
    //var hashMap = hashMap
    //var httpServletRequest = httpServletRequest

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

        try {
            
    var params: any[] = new Array(2);
        
        
;
    

    var classes: Function[] = new Array(2);
        
        
;
    

    var abeFactory: AbeFactory = AbeFactory.getInstance()!;
        
        
;
    
classes[0]= hashMap!constructor;
    
classes[1]= abeFactory!constructor;
    
params[0]= hashMap as Object;
    
params[1]= httpServletRequest as Object;
    

    var anyType: any = abeFactory!.getInstance(abeClientInformation, className, classes, params)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed To Get Instance Args: HashMap=" +hashMap!.toString() +" HttpServletRequest=" +httpServletRequest;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    logUtil!.put(error, factoryName +"->HelperFactory", "getInstance(String, String, HashMap, PageContext)", e);
    

                                    }
                                



                            throw e
}

                //: 
 catch(e) 
            {

    var error: string = "Failed To Get Instance";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    logUtil!.put(error, factoryName +"->HelperFactory", "getInstance(String, String, HashMap, PageContext)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


                //@Throws(LicensingException::class)
            
    public static getInstance(abeClientInformation: AbeClientInformationInterface, factoryName: string, className: string, hashMap: HashMap<any, any>, pageContext: PageContext): any{
    //var abeClientInformation = abeClientInformation
    //var factoryName = factoryName
    //var className = className
    //var hashMap = hashMap
    //var pageContext = pageContext

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

        try {
            
    var params: any[] = new Array(2);
        
        
;
    

    var classes: Function[] = new Array(2);
        
        
;
    

    var abeFactory: AbeFactory = AbeFactory.getInstance()!;
        
        
;
    
classes[0]= hashMap!constructor;
    
classes[1]= abeFactory!constructor;
    
params[0]= hashMap as Object;
    
params[1]= pageContext as Object;
    

    var anyType: any = abeFactory!.getInstance(abeClientInformation, className, classes, params)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    var error: string = "Failed To Get Instance Args: HashMap=" +hashMap!.toString() +" PageContext=" +pageContext;
        
        
;
    
logUtil!.put(error, factoryName +"->HelperFactory", "getInstance(String, String, HashMap, PageContext)", e);
    

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
    
logUtil!.put(commonStrings!.EXCEPTION, factoryName +"->HelperFactory", "getInstance(String, String, HashMap, PageContext)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


                //@Throws(LicensingException::class)
            
    public static getInstance(abeClientInformation: AbeClientInformationInterface, factoryName: string, className: string, hashMap: HashMap<any, any>, specialhashMap: HashMap<any, any>, pageContext: PageContext): any{
    //var abeClientInformation = abeClientInformation
    //var factoryName = factoryName
    //var className = className
    //var hashMap = hashMap
    //var specialhashMap = specialhashMap
    //var pageContext = pageContext

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

        try {
            
    var params: any[] = new Array(3);
        
        
;
    

    var classes: Function[] = new Array(3);
        
        
;
    

    var abeFactory: AbeFactory = AbeFactory.getInstance()!;
        
        
;
    
classes[0]= hashMap!constructor;
    
classes[1]= specialhashMap!constructor;
    
classes[2]= abeFactory!constructor;
    
params[0]= hashMap as Object;
    
params[1]= specialhashMap as Object;
    
params[2]= pageContext as Object;
    

    var anyType: any = abeFactory!.getInstance(abeClientInformation, className, classes, params)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    var error: string = "Failed To Get Instance Args: HashMap=" +hashMap!.toString() +" PageContext=" +pageContext;
        
        
;
    
logUtil!.put(error, factoryName +"->HelperFactory", "getInstance(String, String, HashMap, PageContext)", e);
    

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
    
logUtil!.put(commonStrings!.EXCEPTION, factoryName +"->HelperFactory", "getInstance(String, String, HashMap, PageContext)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


                //@Throws(LicensingException::class)
            
    public static getInstance(abeClientInformation: AbeClientInformationInterface, factoryName: string, className: string): any{
    //var abeClientInformation = abeClientInformation
    //var factoryName = factoryName
    //var className = className

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

        try {
            
    var anyType: any = AbeFactory.getInstance()!.getInstance(abeClientInformation, className)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonStrings!.EXCEPTION, factoryName +"->HelperFactory", "getInstance(String, String, HashMap, PageContext)", e);
    

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
    
logUtil!.put(commonStrings!.EXCEPTION, factoryName +"->HelperFactory", "getInstance(String, String, HashMap, PageContext)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (){

            super();
            }


}
                
            

