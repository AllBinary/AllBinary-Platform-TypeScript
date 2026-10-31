
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LicensingException extends Exception {
        

    public static readonly serialVersionUID: number = 1;

    public constructor(...args: any[]) {
        if(args.length === 0) {
            super();
            this.constructor$0();
            
        }
        else if(args.length === 1) {
            const msg = args[0];
            super(msg);
            this.constructor$1(msg);
            
        }
        
    }
    
    private constructor$0(): void {
        
    }
    
    private constructor$1(msg: string): void {
        

                            //For kotlin this is before the body of the constructor.
                    

    }
    
}

