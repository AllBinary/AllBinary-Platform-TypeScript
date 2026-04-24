
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



import { Image } from "../../javax/microedition/lcdui/Image.js";

    
import { CommonStrings } from "../../org/allbinary/string/CommonStrings.js";

    
import { Resource } from "../../org/eclipse/swt/graphics/Resource.js";

    
import { SwtImmutableImage } from "../../org/microemu/device/swt/SwtImmutableImage.js";

    
import { SwtMutableImage } from "../../org/microemu/device/swt/SwtMutableImage.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DisposalUtil
            extends Object
         {
        

    private static readonly instance: DisposalUtil = new DisposalUtil();
        
        

    public static getInstance(): DisposalUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    public dispose(image: Image){
    //var image = image

                        if(image == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                        if(image.isMutable())
                        
                                    {
                                    
    var mutableImage: SwtMutableImage = image as SwtMutableImage;
        
        
;
    
this.dispose(mutableImage!.getImage() as Resource);
    

                                    }
                                
                        else {
                            
                        }
                            
}


    public dispose(resource: Resource){
    //var resource = resource

                        if(!resource.isDisposed();)
                        
                                    {
                                    console.log(this.commonStrings!.CLOSE);
    
resource.dispose();
    

                                    }
                                
}


}
                
            

