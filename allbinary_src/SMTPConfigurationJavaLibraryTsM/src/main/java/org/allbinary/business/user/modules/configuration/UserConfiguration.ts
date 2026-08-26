
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
        
//not game specific package import { HashMap } from '../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { EntryData } from '../../../../../../org/allbinary/business/entry/EntryData.js';
      const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
//not game specific package import { TimeCreated } from '../../../../../../org/allbinary/business/time/created/TimeCreated.js';
      const TimeCreated = globalThis.org.allbinary.business.time.created.TimeCreated;

      
//not game specific package import { TimeLastModified } from '../../../../../../org/allbinary/business/time/modified/TimeLastModified.js';
      const TimeLastModified = globalThis.org.allbinary.business.time.modified.TimeLastModified;

      
//not game specific package import { UserEmailConfiguration } from '../../../../../../org/allbinary/logic/communication/smtp/configuration/user/UserEmailConfiguration.js';
      const UserEmailConfiguration = globalThis.org.allbinary.logic.communication.smtp.configuration.user.UserEmailConfiguration;

      
//not game specific package import { UserEmailConfigurationInterface } from '../../../../../../org/allbinary/logic/communication/smtp/configuration/user/UserEmailConfigurationInterface.js';
      const UserEmailConfigurationInterface = globalThis.org.allbinary.logic.communication.smtp.configuration.user.UserEmailConfigurationInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserConfigurationInterface } from './UserConfigurationInterface.js';

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
                
            

