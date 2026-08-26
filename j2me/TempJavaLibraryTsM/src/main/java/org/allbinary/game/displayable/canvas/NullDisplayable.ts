
        /* Generated Code Do Not Modify */
        



//not game specific package import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
      const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
//not game specific package import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //Temp should not be in any build
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
                
            

