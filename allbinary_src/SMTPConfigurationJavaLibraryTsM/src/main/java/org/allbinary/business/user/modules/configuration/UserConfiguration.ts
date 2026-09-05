
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
import { HashMap } from '../../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { EntryData } from '../../../../../../org/allbinary/business/entry/EntryData.js';
//not GWT import const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
import { TimeCreated } from '../../../../../../org/allbinary/business/time/created/TimeCreated.js';
//not GWT import const TimeCreated = globalThis.org.allbinary.business.time.created.TimeCreated;

      
import { TimeLastModified } from '../../../../../../org/allbinary/business/time/modified/TimeLastModified.js';
//not GWT import const TimeLastModified = globalThis.org.allbinary.business.time.modified.TimeLastModified;

      
import { UserEmailConfiguration } from '../../../../../../org/allbinary/logic/communication/smtp/configuration/user/UserEmailConfiguration.js';
//not GWT import const UserEmailConfiguration = globalThis.org.allbinary.logic.communication.smtp.configuration.user.UserEmailConfiguration;

      
import { UserEmailConfigurationInterface } from '../../../../../../org/allbinary/logic/communication/smtp/configuration/user/UserEmailConfigurationInterface.js';
//not GWT import const UserEmailConfigurationInterface = globalThis.org.allbinary.logic.communication.smtp.configuration.user.UserEmailConfigurationInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserConfigurationInterface } from './UserConfigurationInterface.js';
//not GWT import - same folder const UserConfigurationInterface = globalThis.org.allbinary.business.user.modules.configuration.UserConfigurationInterface;

                
export class UserConfiguration
            extends Object
         implements UserConfigurationInterface {
        

    private userEmailConfigurationInterface: UserEmailConfigurationInterface;

    private timeCreated: TimeCreated;

    private timeLastModified: TimeLastModified;

public constructor (){

            super();
        this.userEmailConfigurationInterface= new UserEmailConfiguration() as UserEmailConfigurationInterface;
    
this.timeCreated= new TimeCreated(0);
    
this.timeLastModified= new TimeLastModified(0);
    
}


public constructor (hashMap: HashMap<any, any>){

            super();
        this.userEmailConfigurationInterface= new UserEmailConfiguration(hashMap) as UserEmailConfigurationInterface;
    
this.timeCreated= new TimeCreated(hashMap!.get(EntryData.getInstance()!.TIMECREATED) as string);
    
this.timeLastModified= new TimeLastModified(hashMap!.get(EntryData.getInstance()!.LASTMODIFIED) as string);
    
}


    public getUserEmailConfigurationInterface(): UserEmailConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userEmailConfigurationInterface;
    
}


    public setUserEmailConfigurationInterface(userEmailConfigurationInterface: UserEmailConfigurationInterface){
this.userEmailConfigurationInterface= userEmailConfigurationInterface;
    
}


    public getTimeCreated(): TimeCreated{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.timeCreated;
    
}


    public getTimeLastModified(): TimeLastModified{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.timeLastModified;
    
}


    public setTimeCreated(timeCreated: TimeCreated){
this.timeCreated= timeCreated;
    
}


    public setTimeLastModified(timeLastModified: TimeLastModified){
this.timeLastModified= timeLastModified;
    
}


}



