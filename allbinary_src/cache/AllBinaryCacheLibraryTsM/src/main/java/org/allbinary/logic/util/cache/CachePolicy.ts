
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
        
export class CachePolicy
            extends Object
         {
        

    private readonly name: string

    private maxTime: number= 0

    private maxSize: number= 0
public constructor (name: string, maxTime: number, maxSize: number){

            super();
        var name = name
var maxTime = maxTime
var maxSize = maxSize
this.name= name;
    
this.setMaxTime(maxTime);
    
this.setMaxSize(maxSize);
    
}


    public getMaxTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return maxTime;
    
}


    public setMaxTime(maxTime: number){
var maxTime = maxTime
this.maxTime= maxTime;
    
}


    public getMaxSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return maxSize;
    
}


    public setMaxSize(maxSize: number){
var maxSize = maxSize
this.maxSize= maxSize;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


}
                
            

