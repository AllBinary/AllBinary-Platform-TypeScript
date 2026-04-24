
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

    
import { LogUtil } from "../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringUtil } from "../../../../../../../../org/allbinary/logic/string/StringUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { UserEmailEventConfigurationInterface } from "./UserEmailEventConfigurationInterface.js";

import { UserEmailEventConfigurationData } from "./UserEmailEventConfigurationData.js";

export class UserEmailEventConfiguration
            extends Object
         implements UserEmailEventConfigurationInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private name: string

    private eventListenerClassPath: string
public constructor (){

            super();
        this.setName(StringUtil.getInstance()!.EMPTY_STRING);
    
this.setEventListenerClassPath(StringUtil.getInstance()!.EMPTY_STRING);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    this.logUtil!.putF("New", this, " Constructor");
    

                                    }
                                
}

public constructor (hashMap: HashMap<any, any>){

            super();
        var hashMap = hashMap
this.setName(hashMap!.get(UserEmailEventConfigurationData.NAME) as String);
    
this.setEventListenerClassPath(hashMap!.get(UserEmailEventConfigurationData.LISTENER_CLASSPATH) as String);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Log: " +this.log(), this, " Constructor");
    

                                    }
                                
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


    public setName(name: string){
var name = name
this.name= name;
    
}


    public getEventListenerClassPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return eventListenerClassPath;
    
}


    public setEventListenerClassPath(eventListenerClassPath: string){
var eventListenerClassPath = eventListenerClassPath
this.eventListenerClassPath= eventListenerClassPath;
    
}


    public log(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "\nUser Email Event Log Info:" +"\nName: " +this.getName() +"\nEventListenerClassPath: " +this.getEventListenerClassPath();
    
}


}
                
            

