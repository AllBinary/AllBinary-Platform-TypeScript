
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

        


import { Time } from '../../../../../org/allbinary/business/time/Time.js';
//not GWT import const Time

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TimeLastModified extends Time {
        

    public constructor(...args: any[]) {
        if(args.length === 1 && typeof args[0] === 'string') {
            const time = args[0];
            super(time);
            this.constructor$0(time);
            
        }
        else if(args.length === 1) {
            const time = args[0];
            super(time);
            this.constructor$1(time);
            
        }
        
    }
    
    private constructor$0(time: string): void {
        

                            //For kotlin this is before the body of the constructor.
                    

    }
    
    private constructor$1(time: number): void {
        

                            //For kotlin this is before the body of the constructor.
                    

    }
    
}

