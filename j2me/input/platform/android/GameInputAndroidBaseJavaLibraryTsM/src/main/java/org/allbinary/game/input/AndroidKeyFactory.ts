
        /* Generated Code Do Not Modify */
        



import { KeyEvent } from "../../../../android/view/KeyEvent.js";

    
import { ActivityFractureUtil } from "../../../../org/allbinary/android/ActivityFractureUtil.js";

    
import { CommonPhoneStrings } from "../../../../org/allbinary/string/CommonPhoneStrings.js";

    
import { AbPathData } from "../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class AndroidKeyFactory extends ActivityFractureUtil {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public readonly UNKNOWN: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_UNKNOWN, "UNKNOWN");
        
        

    public KEYCODE_BUTTON_L1: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_R1: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_THUMBR: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_THUMBL: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_START: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_MODE: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_B: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_A: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_X: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_Y: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_L2: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_R2: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_SELECT: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_C: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_Z: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_1: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_10: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_11: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_12: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_13: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_14: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_15: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_16: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_2: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_3: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_4: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_5: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_6: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_7: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_8: AndroidGameKey = UNKNOWN;
        
        

    public KEYCODE_BUTTON_9: AndroidGameKey = UNKNOWN;
        
        

    public readonly SOFT_LEFT: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_SOFT_LEFT, "SOFT_LEFT");
        
        

    public readonly SOFT_RIGHT: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_SOFT_RIGHT, "SOFT_RIGHT");
        
        

    public readonly HOME: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_HOME, "HOME");
        
        

    public readonly BACK: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_BACK, "BACK");
        
        

    public readonly CALL: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_CALL, "CALL");
        
        

    public readonly ENDCALL: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_ENDCALL, "ENDCALL");
        
        

    public readonly ZERO: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_0, CommonPhoneStrings.getInstance()!.ZERO);
        
        

    public readonly ONE: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_1, CommonPhoneStrings.getInstance()!.ONE);
        
        

    public readonly TWO: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_2, CommonPhoneStrings.getInstance()!.TWO);
        
        

    public readonly THREE: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_3, CommonPhoneStrings.getInstance()!.THREE);
        
        

    public readonly FOUR: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_4, CommonPhoneStrings.getInstance()!.FOUR);
        
        

    public readonly FIVE: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_5, CommonPhoneStrings.getInstance()!.FIVE);
        
        

    public readonly SIX: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_6, CommonPhoneStrings.getInstance()!.SIX);
        
        

    public readonly SEVEN: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_7, CommonPhoneStrings.getInstance()!.SEVEN);
        
        

    public readonly EIGHT: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_8, CommonPhoneStrings.getInstance()!.EIGHT);
        
        

    public readonly NINE: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_9, CommonPhoneStrings.getInstance()!.NINE);
        
        

    public readonly STAR: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_STAR, CommonPhoneStrings.getInstance()!.STAR);
        
        

    public readonly POUND: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_POUND, CommonPhoneStrings.getInstance()!.POUND);
        
        

    public readonly DPAD_UP: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_DPAD_UP, "UP");
        
        

    public readonly DPAD_DOWN: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_DPAD_DOWN, "DOWN");
        
        

    public readonly DPAD_LEFT: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_DPAD_LEFT, "LEFT");
        
        

    public readonly DPAD_RIGHT: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_DPAD_RIGHT, "RIGHT");
        
        

    public readonly DPAD_CENTER: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_DPAD_CENTER, "CENTER");
        
        

    public readonly VOLUME_UP: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_VOLUME_UP, "VOLUME_UP");
        
        

    public readonly VOLUME_DOWN: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_VOLUME_DOWN, "VOLUME_DOWN");
        
        

    public readonly POWER: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_POWER, "POWER");
        
        

    public readonly CAMERA: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_CAMERA, "CAMERA");
        
        

    public readonly CLEAR: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_CLEAR, "CLEAR");
        
        

    public readonly A: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_A, "A");
        
        

    public readonly B: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_B, "B");
        
        

    public readonly C: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_C, "C");
        
        

    public readonly D: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_D, "D");
        
        

    public readonly E: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_E, "E");
        
        

    public readonly F: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_F, "F");
        
        

    public readonly G: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_G, "G");
        
        

    public readonly H: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_H, "H");
        
        

    public readonly I: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_I, "I");
        
        

    public readonly J: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_J, "J");
        
        

    public readonly K: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_K, "K");
        
        

    public readonly L: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_L, "L");
        
        

    public readonly M: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_M, "M");
        
        

    public readonly N: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_N, "N");
        
        

    public readonly O: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_O, "O");
        
        

    public readonly P: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_P, "P");
        
        

    public readonly Q: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_Q, "Q");
        
        

    public readonly R: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_R, "R");
        
        

    public readonly S: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_S, "S");
        
        

    public readonly T: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_T, "T");
        
        

    public readonly U: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_U, "U");
        
        

    public readonly V: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_V, "V");
        
        

    public readonly W: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_W, "W");
        
        

    public readonly X: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_X, "X");
        
        

    public readonly Y: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_Y, "Y");
        
        

    public readonly Z: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_Z, "Z");
        
        

    public readonly COMMA: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_COMMA, "COMMA");
        
        

    public readonly PERIOD: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_PERIOD, AbPathData.getInstance()!.EXTENSION_SEP);
        
        

    public readonly ALT_LEFT: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_ALT_LEFT, "ALT_LEFT");
        
        

    public readonly ALT_RIGHT: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_ALT_RIGHT, "ALT_RIGHT");
        
        

    public readonly SHIFT_LEFT: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_SHIFT_LEFT, "SHIFT_LEFT");
        
        

    public readonly SHIFT_RIGHT: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_SHIFT_RIGHT, "SHIFT_RIGHT");
        
        

    public readonly TAB: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_TAB, "TAB");
        
        

    public readonly SPACE: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_SPACE, "SPACE");
        
        

    public readonly SYM: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_SYM, "SYM");
        
        

    public readonly EXPLORER: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_EXPLORER, "EXPLORER");
        
        

    public readonly ENVELOPE: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_ENVELOPE, "ENVELOPE");
        
        

    public readonly ENTER: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_ENTER, "ENTER");
        
        

    public readonly DEL: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_DEL, "DEL");
        
        

    public readonly GRAVE: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_GRAVE, "GRAVE");
        
        

    public readonly MINUS: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_MINUS, "MINUS");
        
        

    public readonly EQUALS: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_EQUALS, "EQUALS");
        
        

    public readonly LEFT_BRACKET: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_LEFT_BRACKET, "LEFT_BRACKET");
        
        

    public readonly RIGHT_BRACKET: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_RIGHT_BRACKET, "RIGHT_BRACKET");
        
        

    public readonly BACKSLASH: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_BACKSLASH, "BACKSLASH");
        
        

    public readonly SEMICOLON: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_SEMICOLON, "SEMICOLON");
        
        

    public readonly APOSTROPHE: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_APOSTROPHE, "APOSTROPHE");
        
        

    public readonly SLASH: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_SLASH, "SLASH");
        
        

    public readonly AT: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_AT, "AT");
        
        

    public readonly NUM: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_NUM, "NUM");
        
        

    public readonly HEADSETHOOK: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_HEADSETHOOK, "HEADSETHOOK");
        
        

    public readonly FOCUS: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_FOCUS, "FOCUS");
        
        

    public readonly PLUS: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_PLUS, "PLUS");
        
        

    public readonly MENU: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_MENU, "MENU");
        
        

    public readonly NOTIFICATION: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_NOTIFICATION, "NOTIFICATION");
        
        

    public readonly SEARCH: AndroidGameKey = new AndroidGameKey(KeyEvent.KEYCODE_SEARCH, "SEARCH");
        
        

    public init(){

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put("Start/End", this, commonStrings!.INIT)
}


    public isSubmission(input: Input): boolean{
var input = input

    
                        if(input == ENTER)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                             else 
    
                        if(input == DPAD_CENTER)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isDelete(input: Input): boolean{
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isBackSpace(input: Input): boolean{
var input = input

    
                        if(input == DEL)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isLeft(input: Input): boolean{
var input = input

    
                        if(input == DPAD_LEFT)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isRight(input: Input): boolean{
var input = input

    
                        if(input == DPAD_RIGHT)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isUp(input: Input): boolean{
var input = input

    
                        if(input == DPAD_UP)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isDown(input: Input): boolean{
var input = input

    
                        if(input == DPAD_DOWN)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isEnter(input: Input): boolean{
var input = input

    
                        if(input == DPAD_CENTER)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                             else 
    
                        if(input == ENTER)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                             else 
    
                        if(input == CALL)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

