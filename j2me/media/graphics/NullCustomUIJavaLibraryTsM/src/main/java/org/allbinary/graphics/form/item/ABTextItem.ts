
        /* Generated Code Do Not Modify */

        


//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CustomCustomItem } from './CustomCustomItem.js';
//not GWT import - same folder const CustomCustomItem = globalThis.org.allbinary.graphics.form.item.CustomCustomItem;

                import { ABCustomItemInterface } from './ABCustomItemInterface.js';
//not GWT import - same folder const ABCustomItemInterface = globalThis.org.allbinary.graphics.form.item.ABCustomItemInterface;

                import { ABStringComponent } from './ABStringComponent.js';
//not GWT import - same folder const ABStringComponent = globalThis.org.allbinary.graphics.form.item.ABStringComponent;

                
export class ABTextItem extends CustomCustomItem implements ABCustomItemInterface {
        

public constructor (label: string, layout: number, altText: string, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(label, backgroundBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public keyPressed(keyCode: number){
}


    public paintUnselected(graphics: Graphics, x: number, y: number){
}


    public getLabelStringComponent(): ABStringComponent{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ABStringComponent.NULL_STRING_COMPONENT;
    
}


}



