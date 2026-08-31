
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
        
//not plain js import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { J2MEGameKey } from './J2MEGameKey.js';
//not GWT import const J2MEGameKey = globalThis.org.allbinary.game.input.J2MEGameKey;

                import { J2MEKeyFactory } from './J2MEKeyFactory.js';
//not GWT import const J2MEKeyFactory = globalThis.org.allbinary.game.input.J2MEKeyFactory;

                import { Input } from './Input.js';
//not GWT import const Input = globalThis.org.allbinary.game.input.Input;

                
export class PlatformKeyFactory
            extends Object
         {
        

    private static instance: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): PlatformKeyFactory{

                        if(PlatformKeyFactory.instance == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    PlatformKeyFactory.instance= new PlatformKeyFactory();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PlatformKeyFactory.instance as PlatformKeyFactory;
    
}


    public getString(keyCode: number): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return J2MEGameKey.getString(keyCode);;
    
}


    public isSubmission(input: Input): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return J2MEKeyFactory.getInstance()!.isSubmission(input);;
    
}


    public isDelete(input: Input): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return J2MEKeyFactory.getInstance()!.isDelete(input);;
    
}


    public isBackSpace(input: Input): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return J2MEKeyFactory.getInstance()!.isBackSpace(input);;
    
}


    public isLeft(input: Input): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return J2MEKeyFactory.getInstance()!.isLeft(input);;
    
}


    public isRight(input: Input): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return J2MEKeyFactory.getInstance()!.isRight(input);;
    
}


    public isUp(input: Input): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return J2MEKeyFactory.getInstance()!.isUp(input);;
    
}


    public isDown(input: Input): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return J2MEKeyFactory.getInstance()!.isDown(input);;
    
}


    public isEnter(input: Input): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return J2MEKeyFactory.getInstance()!.isEnter(input);;
    
}


}



