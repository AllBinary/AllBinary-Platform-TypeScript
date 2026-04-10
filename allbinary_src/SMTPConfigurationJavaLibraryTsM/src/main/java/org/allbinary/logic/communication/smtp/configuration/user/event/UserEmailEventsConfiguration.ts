
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
        
        

    private emailEventHashMap: HashMap<Any, Any>
public constructor (){

            super();
            this.init()
}

public constructor (hashMap: HashMap<Any, Any>){

            super();
            var hashMap = hashMap
this.init()
}


    init(){
this.emailEventHashMap= HashMap<Any, Any>()

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    put(this.commonStrings!.CONSTRUCTOR, this, " Constructor")

                                    }
                                
}


    public getEventConfigurationHashMap(): HashMap<Any, Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.emailEventHashMap;
    
}


    public addUserEmailEventConfiguration(userEmailEventConfigurationInterface: UserEmailEventConfigurationInterface){
var userEmailEventConfigurationInterface = userEmailEventConfigurationInterface

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    put("Adding: " +userEmailEventConfigurationInterface!.log(), this, "addUserEmailEventConfiguration")

                                    }
                                
put(userEmailEventConfigurationInterface!.getName(), userEmailEventConfigurationInterface)
}


                @Throws(Exception::class)
            
    public getEventListener(abeClientInformation: AbeClientInformationInterface, userEmailEventNameData: UserEmailEventNameData, userInterface: UserInterface): UserEmailEventListenerInterface{
    //var abeClientInformation = abeClientInformation
    //var userEmailEventNameData = userEmailEventNameData
    //var userInterface = userInterface

    var userEmailEventConfigurationInterface: UserEmailEventConfigurationInterface = this.emailEventHashMap!.get(userEmailEventNameData!.toString()) as UserEmailEventConfigurationInterface;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UserEmailEventListenerFactory.getInstance(abeClientInformation, userEmailEventConfigurationInterface, userInterface);
    
}


}
                
            

