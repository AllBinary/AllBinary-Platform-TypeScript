
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
                        return J2MEGameKey.getString(keyCode);
    
}


    public isSubmission(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return J2MEKeyFactory.getInstance()!.isSubmission(input);
    
}


    public isDelete(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return J2MEKeyFactory.getInstance()!.isDelete(input);
    
}


    public isBackSpace(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return J2MEKeyFactory.getInstance()!.isBackSpace(input);
    
}


    public isLeft(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return J2MEKeyFactory.getInstance()!.isLeft(input);
    
}


    public isRight(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return J2MEKeyFactory.getInstance()!.isRight(input);
    
}


    public isUp(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return J2MEKeyFactory.getInstance()!.isUp(input);
    
}


    public isDown(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return J2MEKeyFactory.getInstance()!.isDown(input);
    
}


    public isEnter(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return J2MEKeyFactory.getInstance()!.isEnter(input);
    
}


}
                
            

