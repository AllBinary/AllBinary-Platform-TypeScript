
        /* Generated Code Do Not Modify */
        



//not game specific package import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RectangleFilledAnimation } from './RectangleFilledAnimation.js';

export class ARectangleFilledAnimation extends RectangleFilledAnimation {
        

    public x: number= 0;

    public y: number= 0;

public constructor (){
            super(0, 0, BasicColorFactory.getInstance()!.BLACK);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public nextFrame(){
}


    public paintXY(graphics: Graphics, unusedX: number, unusedY: number){
super.paintXY(graphics, this.x, this.y);
    
}


}
                
            

