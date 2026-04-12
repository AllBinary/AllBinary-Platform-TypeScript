
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

    
import { UserInterface } from "../../../../../../../../org/allbinary/business/user/UserInterface.js";

    
import { LogUtil } from "../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { UserEmailEventListenerInterface } from "../../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventListenerInterface.js";

    
import { UserEmailEventNameData } from "../../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventNameData.js";

    
import { AbeClientInformationInterface } from "../../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { CommonStrings } from "../../../../../../../../org/allbinary/string/CommonStrings.js";

    

export class UserEmailEventsConfiguration
            extends Object
        
                , UserEmailEventsConfigurationInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private emailEventHashMap: HashMap<any, any>
public constructor (){

            super();
            this.init();
    
}

public constructor (hashMap: HashMap<any, any>){

            super();
            var hashMap = hashMap
this.init();
    
}


    init(){
this.emailEventHashMap= new HashMap<any, any>();
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.CONSTRUCTOR, this, " Constructor");
    

                                    }
                                
}


    public getEventConfigurationHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.emailEventHashMap;
    
}


    public addUserEmailEventConfiguration(userEmailEventConfigurationInterface: UserEmailEventConfigurationInterface){
var userEmailEventConfigurationInterface = userEmailEventConfigurationInterface

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Adding: " +userEmailEventConfigurationInterface!.log(), this, "addUserEmailEventConfiguration");
    

                                    }
                                
this.emailEventHashMap!.put(userEmailEventConfigurationInterface!.getName(), userEmailEventConfigurationInterface);
    
}


                //@Throws(Error::class)
            
    public getEventListener(abeClientInformation: AbeClientInformationInterface, userEmailEventNameData: UserEmailEventNameData, userInterface: UserInterface): UserEmailEventListenerInterface{
    //var abeClientInformation = abeClientInformation
    //var userEmailEventNameData = userEmailEventNameData
    //var userInterface = userInterface

    var userEmailEventConfigurationInterface: UserEmailEventConfigurationInterface = this.emailEventHashMap!.get(userEmailEventNameData!.toString());

                         as UserEmailEventConfigurationInterface;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UserEmailEventListenerFactory.getInstance(abeClientInformation, userEmailEventConfigurationInterface, userInterface);

                        ;
    
}


}
                
            

