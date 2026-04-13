
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
                *  
                *  By agreeing to this license you and any business entity you represent are
                *  legally bound to the AllBinary Open License Version 1 legal agreement.
                *  
                *  You may obtain the AllBinary Open License Version 1 legal agreement from
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
                *  
                *  Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */
        



            import { Integer } from "../../../../../java/lang/Integer.js";
        
import { BufferedImage } from "../../../../../../java/awt/image/BufferedImage.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../../../org/allbinary/string/CommonSeps.js";

    

export class MagicGameObject extends MeteredGameObject
                , MagicGameObjectInterface {
        

    private readonly MP_LABEL: string = "MP:";
        
        
public constructor (bufferedImage: BufferedImage[], minX: Object, maxX: Object, y: Object)                        

                            : super(bufferedImage, minX, maxX, y){

            super();
            var bufferedImage = bufferedImage
var minX = minX
var maxX = maxX
var y = y


                            //For kotlin this is before the body of the constructor.
                    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE);
    
stringBuffer!.append(MP_LABEL);
    
stringBuffer!.append(super.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

