
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
        



import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { UserEmailEventsConfiguration } from "../../../../../../../org/allbinary/logic/communication/smtp/configuration/user/event/UserEmailEventsConfiguration.js";

    
import { UserEmailEventsConfigurationInterface } from "../../../../../../../org/allbinary/logic/communication/smtp/configuration/user/event/UserEmailEventsConfigurationInterface.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    

export class UserEmailConfiguration
            extends Object
        
                , UserEmailConfigurationInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private userEmailEventsConfigurationInterface: UserEmailEventsConfigurationInterface
public constructor (){

            super();
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.CONSTRUCTOR, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
this.setUserEmailEventsConfigurationInterface(new UserEmailEventsConfiguration());
    
}

public constructor (hashMap: HashMap<any, any>){

            super();
            var hashMap = hashMap

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.CONSTRUCTOR, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
this.setUserEmailEventsConfigurationInterface(new UserEmailEventsConfiguration(hashMap));
    
}


    public getUserEmailEventsConfigurationInterface(): UserEmailEventsConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userEmailEventsConfigurationInterface;
    
}


    public setUserEmailEventsConfigurationInterface(userEmailEventsConfigurationInterface: UserEmailEventsConfigurationInterface){
var userEmailEventsConfigurationInterface = userEmailEventsConfigurationInterface
this.userEmailEventsConfigurationInterface= userEmailEventsConfigurationInterface;
    
}


}
                
            

