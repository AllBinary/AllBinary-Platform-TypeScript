
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

        


















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AdvertisementAreaConstraintsInterface } from './AdvertisementAreaConstraintsInterface.js';
//not GWT import const  = globalThis.org.allbinary.business.advertisement.area.AdvertisementAreaConstraintsInterface;

                
export interface AdvertisementAreaInterface {
        

    getName(): string

    getStoreName(): string

    getDescription(): string

    getConstraints(): AdvertisementAreaConstraintsInterface

    getCampaign(): string

    setName(name: string)

    setStoreName(storeName: string)

    setDescription(description: string)

    setConstraints(advertisementConstraintsInterface: AdvertisementAreaConstraintsInterface)

    setCampaign(campaign: string)

}



