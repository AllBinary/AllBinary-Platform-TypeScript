
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
        
//not plain js import { PositionStrings } 
const PositionStrings = globalThis.org.allbinary.math.PositionStrings;

      
//not plain js import { CommonPhoneStrings } 
const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;

      
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //not plain js - same folder import { ABKeyEventWrapper } 
const ABKeyEventWrapper = globalThis.org.allbinary.game.input.ABKeyEventWrapper;

                import { PCGameKey } from './PCGameKey.js';
//not GWT import - same folder const PCGameKey = globalThis.org.allbinary.game.input.PCGameKey;

                import { Input } from './Input.js';
//not GWT import - same folder const Input = globalThis.org.allbinary.game.input.Input;

                
export class PCKeyFactory
            extends Object
         {
        

    private static readonly SINGLETON: PCKeyFactory = new PCKeyFactory();

    public static getInstance(): PCKeyFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PCKeyFactory.SINGLETON;
    
}


    private readonly keyEventWrapper: ABKeyEventWrapper = ABKeyEventWrapper.getInstance()!;

    public readonly UNKNOWN: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_UNDEFINED, "UNKNOWN");

    public readonly ENTER: PCGameKey = new PCGameKey(5, "Enter");

    public readonly _A: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_A, "A");

    public readonly _B: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_B, "B");

    public readonly _C: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_C, "C");

    public readonly _D: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_D, "D");

    public readonly _E: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_E, "E");

    public readonly _F: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_F, "F");

    public readonly _G: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_G, "G");

    public readonly _H: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_H, "H");

    public readonly _I: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_I, "I");

    public readonly _J: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_J, "J");

    public readonly _K: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_K, "K");

    public readonly _L: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_L, "L");

    public readonly _M: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_M, "M");

    public readonly _N: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_N, "N");

    public readonly _O: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_O, "O");

    public readonly _P: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_P, "P");

    public readonly _Q: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_Q, "Q");

    public readonly _R: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_R, "R");

    public readonly _S: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_S, "S");

    public readonly _T: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_T, "T");

    public readonly _U: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_U, "U");

    public readonly _V: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_V, "V");

    public readonly _W: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_W, "W");

    public readonly _X: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_X, "X");

    public readonly _Y: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_Y, "Y");

    public readonly _Z: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_Z, "Z");

    public readonly a: PCGameKey = new PCGameKey(97, "a");

    public readonly b: PCGameKey = new PCGameKey(98, "b");

    public readonly c: PCGameKey = new PCGameKey(99, "c");

    public readonly d: PCGameKey = new PCGameKey(100, "d");

    public readonly e: PCGameKey = new PCGameKey(101, "e");

    public readonly f: PCGameKey = new PCGameKey(102, "f");

    public readonly g: PCGameKey = new PCGameKey(103, "g");

    public readonly h: PCGameKey = new PCGameKey(104, "h");

    public readonly i: PCGameKey = new PCGameKey(105, "i");

    public readonly j: PCGameKey = new PCGameKey(106, "j");

    public readonly k: PCGameKey = new PCGameKey(107, "k");

    public readonly l: PCGameKey = new PCGameKey(108, "l");

    public readonly m: PCGameKey = new PCGameKey(109, "m");

    public readonly n: PCGameKey = new PCGameKey(110, "n");

    public readonly o: PCGameKey = new PCGameKey(111, "o");

    public readonly p: PCGameKey = new PCGameKey(112, "p");

    public readonly q: PCGameKey = new PCGameKey(113, "q");

    public readonly r: PCGameKey = new PCGameKey(114, "r");

    public readonly s: PCGameKey = new PCGameKey(115, "s");

    public readonly t: PCGameKey = new PCGameKey(116, "t");

    public readonly u: PCGameKey = new PCGameKey(117, "u");

    public readonly v: PCGameKey = new PCGameKey(118, "v");

    public readonly w: PCGameKey = new PCGameKey(119, "w");

    public readonly x: PCGameKey = new PCGameKey(120, PositionStrings.getInstance()!.X);

    public readonly y: PCGameKey = new PCGameKey(121, PositionStrings.getInstance()!.Y);

    public readonly z: PCGameKey = new PCGameKey(122, "z");

    public readonly ZERO: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_0, CommonPhoneStrings.getInstance()!.ZERO);

    public readonly ONE: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_1, CommonPhoneStrings.getInstance()!.ONE);

    public readonly TWO: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_2, CommonPhoneStrings.getInstance()!.TWO);

    public readonly THREE: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_3, CommonPhoneStrings.getInstance()!.THREE);

    public readonly FOUR: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_4, CommonPhoneStrings.getInstance()!.FOUR);

    public readonly FIVE: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_5, CommonPhoneStrings.getInstance()!.FIVE);

    public readonly SIX: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_6, CommonPhoneStrings.getInstance()!.SIX);

    public readonly SEVEN: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_7, CommonPhoneStrings.getInstance()!.SEVEN);

    public readonly EIGHT: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_8, CommonPhoneStrings.getInstance()!.EIGHT);

    public readonly NINE: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_9, CommonPhoneStrings.getInstance()!.NINE);

    public readonly DPAD_UP: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_UP, CommonPhoneStrings.getInstance()!.UP);

    public readonly DPAD_DOWN: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_DOWN, CommonPhoneStrings.getInstance()!.DOWN);

    public readonly DPAD_LEFT: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_LEFT, CommonPhoneStrings.getInstance()!.LEFT);

    public readonly DPAD_RIGHT: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_RIGHT, CommonPhoneStrings.getInstance()!.RIGHT);

    public readonly DPAD_UP2: PCGameKey = this.DPAD_UP;

    public readonly DPAD_DOWN2: PCGameKey = this.DPAD_DOWN;

    public readonly DPAD_LEFT2: PCGameKey = this.DPAD_LEFT;

    public readonly DPAD_RIGHT2: PCGameKey = this.DPAD_RIGHT;

    public readonly COMMA: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_COMMA, "COMMA");

    public readonly SPACE: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_SPACE, "SPACE");

    public readonly DEL: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_DELETE, "DEL");

    public readonly STAR: PCGameKey = new PCGameKey(42, CommonPhoneStrings.getInstance()!.STAR);

    public readonly QUESTION: PCGameKey = new PCGameKey(47, "?");

    public readonly PERIOD: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_PERIOD, CommonSeps.getInstance()!.PERIOD);

    public readonly ESCAPE: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_ESCAPE, "Esc");

    public readonly BACK_SPACE: PCGameKey = new PCGameKey(this.keyEventWrapper!.VK_BACK_SPACE, "Backspace");

    public isSubmission(input: Input): boolean{

                        if(input == this.ENTER)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isDelete(input: Input): boolean{

                        if(input == this.DEL)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isBackSpace(input: Input): boolean{

                        if(input == this.BACK_SPACE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isUp(input: Input): boolean{

                        if(input == this.DPAD_UP || input == this.DPAD_UP2)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isDown(input: Input): boolean{

                        if(input == this.DPAD_DOWN || input == this.DPAD_DOWN2)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isLeft(input: Input): boolean{

                        if(input == this.DPAD_LEFT || input == this.DPAD_LEFT2)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isRight(input: Input): boolean{

                        if(input == this.DPAD_RIGHT || input == this.DPAD_RIGHT2)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isEnter(input: Input): boolean{

                        if(input == this.ENTER)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}



