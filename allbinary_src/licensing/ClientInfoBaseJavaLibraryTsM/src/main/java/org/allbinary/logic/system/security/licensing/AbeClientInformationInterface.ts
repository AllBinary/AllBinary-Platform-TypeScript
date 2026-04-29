
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
        



import { Hashtable } from "../../../../../../java/util/Hashtable.js";

    
import { GenericOperatingSystem } from "../../../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface AbeClientInformationInterface {
        

    init()

    getOperatingSystemInterface(): GenericOperatingSystem

    getName(): string

    getSpecialName(): string

    getVersion(): string

    getLicenseId(): string

    getLicenseServers(): BasicArrayList

    getLicenseServer(index: number): string

    getNumberOfLicenseServers(): number

    toHashtable(): Hashtable<any, any>

    isSameId(alicenseId: string): boolean

    isLargerOrDifferentServerList(vector: BasicArrayList): boolean

    isHardSale(): boolean

    toShortString(): string

}
                
            

