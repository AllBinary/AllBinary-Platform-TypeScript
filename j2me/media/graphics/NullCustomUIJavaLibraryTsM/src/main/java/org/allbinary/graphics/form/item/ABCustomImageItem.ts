
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Image } from '../../../../../javax/microedition/lcdui/Image.js';
      
import { NullImage } from '../../../../../javax/microedition/lcdui/NullImage.js';
      
import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      

















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
                
            

