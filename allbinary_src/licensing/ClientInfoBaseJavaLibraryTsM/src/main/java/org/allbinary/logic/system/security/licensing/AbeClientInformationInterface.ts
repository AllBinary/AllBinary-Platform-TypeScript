
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

        


import { GenericOperatingSystem } from '../../../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js';
//not GWT import const GenericOperatingSystem

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface AbeClientInformationInterface {
        

    init(): void;

    getOperatingSystemInterface(): GenericOperatingSystem;

    getName(): string;

    getSpecialName(): string;

    getVersion(): string;

    getLicenseId(): string;

    getLicenseServers(): BasicArrayList;

    getLicenseServer(index: number): string;

    getNumberOfLicenseServers(): number;

    toHashtable(): ABHashtable<any, any>;

    isSameId(alicenseId: string): boolean;

    isLargerOrDifferentServerList(vector: BasicArrayList): boolean;

    isHardSale(): boolean;

    toShortString(): string;

}

