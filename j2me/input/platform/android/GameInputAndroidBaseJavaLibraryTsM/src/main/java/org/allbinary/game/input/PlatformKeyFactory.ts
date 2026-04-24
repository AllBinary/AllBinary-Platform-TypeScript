
        /* Generated Code Do Not Modify */
        




















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ActivityFractureControllerUtilFactory } from "./ActivityFractureControllerUtilFactory.js";

import { AndroidGameKey } from "./AndroidGameKey.js";

import { Input } from "./Input.js";

export class PlatformKeyFactory
            extends Object
         {
        

    private static readonly SINGLETON: PlatformKeyFactory = new PlatformKeyFactory();
        
        

    public static getInstance(): PlatformKeyFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    private readonly androidKeyFactory: AndroidKeyFactory = ActivityFractureControllerUtilFactory.getInstance()!;
        
        

    public getString(keyCode: number): string{
var keyCode = keyCode



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AndroidGameKey.getString(keyCode);;
    
}


    public isSubmission(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return androidKeyFactory!.isSubmission(input);;
    
}


    public isDelete(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return androidKeyFactory!.isDelete(input);;
    
}


    public isBackSpace(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return androidKeyFactory!.isBackSpace(input);;
    
}


    public isLeft(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return androidKeyFactory!.isLeft(input);;
    
}


    public isRight(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return androidKeyFactory!.isRight(input);;
    
}


    public isUp(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return androidKeyFactory!.isUp(input);;
    
}


    public isDown(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return androidKeyFactory!.isDown(input);;
    
}


    public isEnter(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return androidKeyFactory!.isEnter(input);;
    
}


}
                
            

