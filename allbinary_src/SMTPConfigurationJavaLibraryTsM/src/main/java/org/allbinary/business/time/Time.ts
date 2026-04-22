
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
        
export class Time
            extends Object
         {
        

    private timeLong: Long
public constructor (time: string){

            super();
        var time = time
this.timeLong= time as Long;
    
}

public constructor (time: number){

            super();
        var time = time
this.timeLong= time as Long;
    
}


    public getLong(): Long{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.timeLong;
    
}


    public getlong(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.timeLong!.longValue();

                        ;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getLong()!.toString();

                        ;
    
}


}
                
            

