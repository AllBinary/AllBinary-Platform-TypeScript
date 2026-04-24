
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
        
import { PCGameKey } from "./PCGameKey.js";

import { PCKeyFactory } from "./PCKeyFactory.js";

import { Input } from "./Input.js";

export class PlatformKeyFactory
            extends Object
         {
        

    private static readonly SINGLETON: PlatformKeyFactory = new PlatformKeyFactory();
        
        

    public static getInstance(): PlatformKeyFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    public getString(keyCode: number): string{
var keyCode = keyCode



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PCGameKey.getString(keyCode);;
    
}


    public isSubmission(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PCKeyFactory.getInstance()!.isSubmission(input);;
    
}


    public isDelete(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PCKeyFactory.getInstance()!.isDelete(input);;
    
}


    public isBackSpace(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PCKeyFactory.getInstance()!.isBackSpace(input);;
    
}


    public isUp(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PCKeyFactory.getInstance()!.isUp(input);;
    
}


    public isDown(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PCKeyFactory.getInstance()!.isDown(input);;
    
}


    public isEnter(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PCKeyFactory.getInstance()!.isEnter(input);;
    
}


    public isLeft(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PCKeyFactory.getInstance()!.isLeft(input);;
    
}


    public isRight(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PCKeyFactory.getInstance()!.isRight(input);;
    
}


}
                
            

