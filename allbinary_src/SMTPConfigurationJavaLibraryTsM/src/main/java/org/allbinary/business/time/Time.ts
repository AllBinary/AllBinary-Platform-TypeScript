
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Long } from '../../../../java/lang/Long.js';
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class Time
            extends Object
         {
        

    private timeLong: Long;

    public constructor(...args: any[]) {
        super();
        if(args.length === 1 && typeof args[0] === 'string') {
            this.constructor$0(args[0]);
        }
        else if(args.length === 1) {
            this.constructor$1(args[0]);
        }
        
    }
    
    private constructor$0(time: string): void {
        this.timeLong= new Long(time);
    

    }
    
    private constructor$1(time: number): void {
        this.timeLong= new Long(time);
    

    }
    
    public getLong(): Long{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.timeLong;
    
}


    public getlong(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.timeLong!.longValue();;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getLong()!.toString();;
    
}


}

