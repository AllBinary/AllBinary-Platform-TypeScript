
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
        
import { Runtime } from "./Runtime.js";

export class JvmStatistics
            extends Object
         {
        

    private runtime: Runtime
public constructor (){

            super();
        this.runtime= Runtime.getRuntime();
    
}


    public getFreeMemoryBytes(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.runtime.freeMemory();;
    
}


    public getFreeMemoryKilobytes(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getFreeMemoryBytes() /1024;
    
}


    public getFreeMemoryMegabytes(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getFreeMemoryKilobytes() /1024;
    
}


    public getMaxMemoryBytes(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.runtime.maxMemory();;
    
}


    public getMaxMemoryKilobytes(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getMaxMemoryBytes() /1024;
    
}


    public getMaxMemoryMegabytes(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getMaxMemoryKilobytes() /1024;
    
}


    public getTotalMemoryBytes(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.runtime.totalMemory();;
    
}


    public getTotalMemoryKilobytes(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getTotalMemoryBytes() /1024;
    
}


    public getTotalMemoryMegabytes(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getTotalMemoryKilobytes() /1024;
    
}


    public getFreeMemoryBytesLong(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getFreeMemoryBytes();
    
}


    public getFreeMemoryKilobytesLong(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getFreeMemoryKilobytes();
    
}


    public getFreeMemoryMegabytesLong(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getFreeMemoryMegabytes();
    
}


    public getMaxMemoryBytesLong(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getMaxMemoryBytes();
    
}


    public getMaxMemoryKilobytesLong(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getMaxMemoryKilobytes();
    
}


    public getMaxMemoryMegabytesLong(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getMaxMemoryMegabytes();
    
}


    public getTotalMemoryBytesLong(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getTotalMemoryBytes();
    
}


    public getTotalMemoryKilobytesLong(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getTotalMemoryKilobytes();
    
}


    public getTotalMemoryMegabytesLong(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getTotalMemoryMegabytes();
    
}


    public getFreeMemoryBytesString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getFreeMemoryBytesLong()!.toString();;
    
}


    public getFreeMemoryKilobytesString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getFreeMemoryKilobytesLong()!.toString();;
    
}


    public getFreeMemoryMegabytesString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getFreeMemoryMegabytesLong()!.toString();;
    
}


    public getMaxMemoryBytesString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getMaxMemoryBytesLong()!.toString();;
    
}


    public getMaxMemoryKilobytesString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getMaxMemoryKilobytesLong()!.toString();;
    
}


    public getMaxMemoryMegabytesString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getMaxMemoryMegabytesLong()!.toString();;
    
}


    public getTotalMemoryBytesString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getTotalMemoryBytesLong()!.toString();;
    
}


    public getTotalMemoryKilobytesString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getTotalMemoryKilobytesLong()!.toString();;
    
}


    public getTotalMemoryMegabytesString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getTotalMemoryMegabytesLong()!.toString();;
    
}


    public getNumberOfThreads(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Thread.activeCount();;
    
}


    public getNumberOfThreadsLong(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getNumberOfThreads();
    
}


    public getNumberOfThreadsString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getNumberOfThreadsLong()!.toString();;
    
}


    public collectGarbage(){
this.runtime.gc();
    
}


}
                
            

