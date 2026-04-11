
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
        



import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { EntryData } from "../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { TimeCreated } from "../../../../../../org/allbinary/business/time/created/TimeCreated.js";

    
import { TimeLastModified } from "../../../../../../org/allbinary/business/time/modified/TimeLastModified.js";

    
import { UserEmailConfiguration } from "../../../../../../org/allbinary/logic/communication/smtp/configuration/user/UserEmailConfiguration.js";

    
import { UserEmailConfigurationInterface } from "../../../../../../org/allbinary/logic/communication/smtp/configuration/user/UserEmailConfigurationInterface.js";

    

export class UserConfiguration
            extends Object
        
                , UserConfigurationInterface {
        

    private userEmailConfigurationInterface: UserEmailConfigurationInterface

    private timeCreated: TimeCreated

    private timeLastModified: TimeLastModified
public constructor (){

            super();
            this.userEmailConfigurationInterface= UserEmailConfiguration() as UserEmailConfigurationInterface;
    
this.timeCreated= TimeCreated(0);
    
this.timeLastModified= TimeLastModified(0);
    
}

public constructor (hashMap: HashMap<any, any>){

            super();
            var hashMap = hashMap
this.userEmailConfigurationInterface= UserEmailConfiguration(hashMap) as UserEmailConfigurationInterface;
    
this.timeCreated= TimeCreated(hashMap!.get(EntryData.getInstance()!.TIMECREATED);

                         as String);
    
this.timeLastModified= TimeLastModified(hashMap!.get(EntryData.getInstance()!.LASTMODIFIED);

                         as String);
    
}


    public getUserEmailConfigurationInterface(): UserEmailConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userEmailConfigurationInterface;
    
}


    public setUserEmailConfigurationInterface(userEmailConfigurationInterface: UserEmailConfigurationInterface){
var userEmailConfigurationInterface = userEmailConfigurationInterface
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
var timeCreated = timeCreated
this.timeCreated= timeCreated;
    
}


    public setTimeLastModified(timeLastModified: TimeLastModified){
var timeLastModified = timeLastModified
this.timeLastModified= timeLastModified;
    
}


}
                
            

