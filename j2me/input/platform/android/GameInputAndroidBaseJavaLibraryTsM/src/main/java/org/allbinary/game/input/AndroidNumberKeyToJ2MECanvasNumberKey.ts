
        /* Generated Code Do Not Modify */
        



import { Canvas } from "../../../../javax/microedition/lcdui/Canvas.js";

    
import { KeyEvent } from "../../../../android/view/KeyEvent.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AndroidNumberKeyToJ2MECanvasNumberKey
            extends Object
         {
        

    private static readonly androidtoJavaMicroEditionKeyMap: number[] = new Array(17);
        
        

    public static init(){
androidtoJavaMicroEditionKeyMap[KeyEvent.KEYCODE_0]= Canvas.KEY_NUM0;
    
androidtoJavaMicroEditionKeyMap[KeyEvent.KEYCODE_1]= Canvas.KEY_NUM1;
    
androidtoJavaMicroEditionKeyMap[KeyEvent.KEYCODE_2]= Canvas.KEY_NUM2;
    
androidtoJavaMicroEditionKeyMap[KeyEvent.KEYCODE_3]= Canvas.KEY_NUM3;
    
androidtoJavaMicroEditionKeyMap[KeyEvent.KEYCODE_4]= Canvas.KEY_NUM4;
    
androidtoJavaMicroEditionKeyMap[KeyEvent.KEYCODE_5]= Canvas.KEY_NUM5;
    
androidtoJavaMicroEditionKeyMap[KeyEvent.KEYCODE_6]= Canvas.KEY_NUM6;
    
androidtoJavaMicroEditionKeyMap[KeyEvent.KEYCODE_7]= Canvas.KEY_NUM7;
    
androidtoJavaMicroEditionKeyMap[KeyEvent.KEYCODE_8]= Canvas.KEY_NUM8;
    
androidtoJavaMicroEditionKeyMap[KeyEvent.KEYCODE_9]= Canvas.KEY_NUM9;
    
}


    public static getKey(key: number): number{
var key = key

                        if(key < androidtoJavaMicroEditionKeyMap!.length)
                        
                                    {
                                    
    var value: number = androidtoJavaMicroEditionKeyMap[key]!;
        
        
;
    

                        if(value != 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return value;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return key;
    
}

private constructor (){

            super();
        }


}
                
            

