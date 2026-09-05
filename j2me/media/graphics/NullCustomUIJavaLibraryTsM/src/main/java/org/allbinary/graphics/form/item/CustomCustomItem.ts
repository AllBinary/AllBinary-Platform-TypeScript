
        /* Generated Code Do Not Modify */

        


//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
import { UpdateMyFontInterface } from '../../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
//not GWT import const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;

      
import { UpdateMyFontProcessor } from '../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ABCustomItem } from './ABCustomItem.js';
//not GWT import - same folder const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;

                
export class CustomCustomItem extends ABCustomItem implements UpdateMyFontInterface {
        

    readonly updateMyFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    myFontProcessor: MyFontProcessor = this.updateMyFontProcessor;

protected constructor (label: string, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(label, backgroundBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public updateMeasurement(graphics: Graphics){
}


}



