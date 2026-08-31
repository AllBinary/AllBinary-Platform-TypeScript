
        /* Generated Code Do Not Modify */
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Image } from '../../../../../javax/microedition/lcdui/Image.js';
      //not GWT import const Image = globalThis.javax.microedition.lcdui.Image;

      
import { NullImage } from '../../../../../javax/microedition/lcdui/NullImage.js';
      //not GWT import const NullImage = globalThis.javax.microedition.lcdui.NullImage;

      
import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ABCustomItem } from './ABCustomItem.js';

export class ABCustomImageItem extends ABCustomItem {
        

    yOffset: number = 0;

public constructor (label: string, image: Image, layout: number, altText: string, basicColor: BasicColor, yOffset: number){
            super(label, basicColor, basicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public getImage(): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullImage.NULL_IMAGE;
    
}


}



