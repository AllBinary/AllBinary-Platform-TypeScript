
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../../java/lang/Object.js';


        
import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      
import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      
import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      
import { UpdateMyFontInterface } from '../../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      
import { UpdateMyFontProcessor } from '../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ABCustomItem } from './ABCustomItem.js';

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
                
            

