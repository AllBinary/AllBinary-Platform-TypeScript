
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
        




export interface CpuInterface {
        

    public getProcessor(): string

    public getVendorId(): string

    public getCpuFamily(): string

    public getModel(): string

    public getModelName(): string

    public getStepping(): string

    public getCpuSpeed(): string

    public getCacheSize(): string

    public compareTo(cpuInterface: CpuInterface): boolean

}
                
            

