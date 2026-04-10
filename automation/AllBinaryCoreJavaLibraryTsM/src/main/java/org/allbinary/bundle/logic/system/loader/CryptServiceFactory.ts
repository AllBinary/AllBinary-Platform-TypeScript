
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
        



import { Bundle } from "../../../../../../org/osgi/framework/Bundle.js";

    
import { ServiceFactory } from "../../../../../../org/osgi/framework/ServiceFactory.js";

    
import { ServiceRegistration } from "../../../../../../org/osgi/framework/ServiceRegistration.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

export class CryptServiceFactory
            extends Object
        
                , ServiceFactory {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private cryptService: CryptService = new CryptService();
        
        
public constructor (){

            super();
            }


    public getService(bundle: Bundle, registration: ServiceRegistration): any = {}{
    //var bundle = bundle
    //var registration = registration
logUtil!.put(this.commonStrings!.START, this, "getService")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cryptService;
    
}


    public ungetService(bundle: Bundle, registration: ServiceRegistration, service: any = {}){
var bundle = bundle
var registration = registration
var service = service
}


}
                
            

