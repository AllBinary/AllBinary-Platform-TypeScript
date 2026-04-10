
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
        



import { CommonPhoneStrings } from "../../../../org/allbinary/string/CommonPhoneStrings.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    

export class PCKeyFactory
            extends Object
         {
        

    private static readonly SINGLETON: PCKeyFactory = new PCKeyFactory();
        
        

    public static getInstance(): PCKeyFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    public readonly UNKNOWN: PCGameKey = new PCGameKey(254, "UNKNOWN");
        
        

    public readonly ENTER: PCGameKey = new PCGameKey(13, "Enter");
        
        

    public readonly _A: PCGameKey = new PCGameKey(65, "A");
        
        

    public readonly _B: PCGameKey = new PCGameKey(66, "B");
        
        

    public readonly _C: PCGameKey = new PCGameKey(67, "C");
        
        

    public readonly _D: PCGameKey = new PCGameKey(68, "D");
        
        

    public readonly _E: PCGameKey = new PCGameKey(69, "E");
        
        

    public readonly _F: PCGameKey = new PCGameKey(70, "F");
        
        

    public readonly _G: PCGameKey = new PCGameKey(71, "G");
        
        

    public readonly _H: PCGameKey = new PCGameKey(72, "H");
        
        

    public readonly _I: PCGameKey = new PCGameKey(73, "I");
        
        

    public readonly _J: PCGameKey = new PCGameKey(74, "J");
        
        

    public readonly _K: PCGameKey = new PCGameKey(75, "K");
        
        

    public readonly _L: PCGameKey = new PCGameKey(76, "L");
        
        

    public readonly _M: PCGameKey = new PCGameKey(77, "M");
        
        

    public readonly _N: PCGameKey = new PCGameKey(78, "N");
        
        

    public readonly _O: PCGameKey = new PCGameKey(79, "O");
        
        

    public readonly _P: PCGameKey = new PCGameKey(80, "P");
        
        

    public readonly _Q: PCGameKey = new PCGameKey(81, "Q");
        
        

    public readonly _R: PCGameKey = new PCGameKey(82, "R");
        
        

    public readonly _S: PCGameKey = new PCGameKey(83, "S");
        
        

    public readonly _T: PCGameKey = new PCGameKey(84, "T");
        
        

    public readonly _U: PCGameKey = new PCGameKey(85, "U");
        
        

    public readonly _V: PCGameKey = new PCGameKey(86, "V");
        
        

    public readonly _W: PCGameKey = new PCGameKey(87, "W");
        
        

    public readonly _X: PCGameKey = new PCGameKey(88, "X");
        
        

    public readonly _Y: PCGameKey = new PCGameKey(89, "Y");
        
        

    public readonly _Z: PCGameKey = new PCGameKey(90, "Z");
        
        

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
        
        

    public readonly x: PCGameKey = new PCGameKey(120, "x");
        
        

    public readonly y: PCGameKey = new PCGameKey(121, "y");
        
        

    public readonly z: PCGameKey = new PCGameKey(122, "z");
        
        

    public readonly ZERO: PCGameKey = new PCGameKey(48, CommonPhoneStrings.getInstance()!.ZERO);
        
        

    public readonly ONE: PCGameKey = new PCGameKey(49, CommonPhoneStrings.getInstance()!.ONE);
        
        

    public readonly TWO: PCGameKey = new PCGameKey(50, CommonPhoneStrings.getInstance()!.TWO);
        
        

    public readonly THREE: PCGameKey = new PCGameKey(51, CommonPhoneStrings.getInstance()!.THREE);
        
        

    public readonly FOUR: PCGameKey = new PCGameKey(52, CommonPhoneStrings.getInstance()!.FOUR);
        
        

    public readonly FIVE: PCGameKey = new PCGameKey(53, CommonPhoneStrings.getInstance()!.FIVE);
        
        

    public readonly SIX: PCGameKey = new PCGameKey(54, CommonPhoneStrings.getInstance()!.SIX);
        
        

    public readonly SEVEN: PCGameKey = new PCGameKey(55, CommonPhoneStrings.getInstance()!.SEVEN);
        
        

    public readonly EIGHT: PCGameKey = new PCGameKey(56, CommonPhoneStrings.getInstance()!.EIGHT);
        
        

    public readonly NINE: PCGameKey = new PCGameKey(57, CommonPhoneStrings.getInstance()!.NINE);
        
        

    public readonly DPAD_UP: PCGameKey = new PCGameKey(38, CommonPhoneStrings.getInstance()!.UP);
        
        

    public readonly DPAD_DOWN: PCGameKey = new PCGameKey(40, CommonPhoneStrings.getInstance()!.DOWN);
        
        

    public readonly DPAD_LEFT: PCGameKey = new PCGameKey(37, CommonPhoneStrings.getInstance()!.LEFT);
        
        

    public readonly DPAD_RIGHT: PCGameKey = new PCGameKey(39, CommonPhoneStrings.getInstance()!.RIGHT);
        
        

    public readonly DPAD_UP2: PCGameKey = DPAD_UP;
        
        

    public readonly DPAD_DOWN2: PCGameKey = DPAD_DOWN;
        
        

    public readonly DPAD_LEFT2: PCGameKey = DPAD_LEFT;
        
        

    public readonly DPAD_RIGHT2: PCGameKey = DPAD_RIGHT;
        
        

    public readonly COMMA: PCGameKey = new PCGameKey(44, "COMMA");
        
        

    public readonly SPACE: PCGameKey = new PCGameKey(32, "SPACE");
        
        

    public readonly DEL: PCGameKey = new PCGameKey(46, "DEL");
        
        

    public readonly STAR: PCGameKey = new PCGameKey(42, CommonPhoneStrings.getInstance()!.STAR);
        
        

    public readonly QUESTION: PCGameKey = new PCGameKey(47, "?");
        
        

    public readonly PERIOD: PCGameKey = new PCGameKey(46, CommonSeps.getInstance()!.PERIOD);
        
        

    public readonly ESCAPE: PCGameKey = new PCGameKey(27, "Esc");
        
        

    public readonly BACK_SPACE: PCGameKey = new PCGameKey(8, "Backspace");
        
        

    public isSubmission(input: Input): boolean{
var input = input

    
                        if(input == ENTER)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isDelete(input: Input): boolean{
var input = input

    
                        if(input == DEL)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isBackSpace(input: Input): boolean{
var input = input

    
                        if(input == BACK_SPACE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isUp(input: Input): boolean{
var input = input

    
                        if(input == DPAD_UP || input == DPAD_UP2)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isDown(input: Input): boolean{
var input = input

    
                        if(input == DPAD_DOWN || input == DPAD_DOWN2)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isLeft(input: Input): boolean{
var input = input

    
                        if(input == DPAD_LEFT || input == DPAD_LEFT2)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isRight(input: Input): boolean{
var input = input

    
                        if(input == DPAD_RIGHT || input == DPAD_RIGHT2)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isEnter(input: Input): boolean{
var input = input

    
                        if(input == ENTER)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

