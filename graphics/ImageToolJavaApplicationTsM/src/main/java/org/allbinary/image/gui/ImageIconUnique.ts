
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
        



import { BufferedImage } from "../../../../java/awt/image/BufferedImage.js";

    
import { swing } from "../../../../javax/swing.js";

    

export class ImageIconUnique extends ImageIcon {
        

    private id: number= 0
public constructor (bufferedImage: BufferedImage, index: number)                        

                            : super(bufferedImage){

            super();
            var bufferedImage = bufferedImage
var index = index


                            //For kotlin this is before the body of the constructor.
                    
this.this.setId(index)
}


    public getId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return id;
    
}


    public setId(id: number){
var id = id
this.id= id
}


}
                
            

