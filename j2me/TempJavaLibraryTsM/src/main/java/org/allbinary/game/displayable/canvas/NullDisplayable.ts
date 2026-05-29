
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../../java/lang/Object.js';


        
import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
      
import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class NullDisplayable extends Canvas {
        

    private static readonly SINGLETON: NullDisplayable = new NullDisplayable();

    public static getInstance(): NullDisplayable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullDisplayable.SINGLETON;
    
}


private constructor (){

            super();
        }


    public paint(graphics: Graphics){
}


}
                
            

