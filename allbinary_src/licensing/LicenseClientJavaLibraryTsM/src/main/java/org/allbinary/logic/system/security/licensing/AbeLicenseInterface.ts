
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
        



import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

export interface AbeLicenseInterface {
        

    hasKey(): boolean

    public getKey(keyName: string): string

    public getLicenseId(): string

    public getServers(): BasicArrayList

    public getSpecial(): string

    public getLicenseType(): LicenseType

    public isValid(): boolean

    public toString(): string

}
                
            

