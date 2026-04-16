
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
        



import { TimeCreated } from "../../../../../../org/allbinary/business/time/created/TimeCreated.js";

    
import { TimeLastModified } from "../../../../../../org/allbinary/business/time/modified/TimeLastModified.js";

    
import { UserEmailConfigurationInterface } from "../../../../../../org/allbinary/logic/communication/smtp/configuration/user/UserEmailConfigurationInterface.js";

    

export interface UserConfigurationInterface {
        

    public getUserEmailConfigurationInterface(): UserEmailConfigurationInterface

    public setUserEmailConfigurationInterface(userEmailConfigurationInterface: UserEmailConfigurationInterface)

    public getTimeCreated(): TimeCreated

    public getTimeLastModified(): TimeLastModified

    public setTimeCreated(timeCreated: TimeCreated)

    public setTimeLastModified(timeLastModified: TimeLastModified)

}
                
            

