
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

        


            import { Object } from '../../java/lang/Object.js';
        
            import { System } from '../../java/lang/System.js';
        
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { Resource } 
const Resource = globalThis.org.eclipse.swt.graphics.Resource;

      
import { SwtMutableImage } from '../../org/microemu/device/swt/SwtMutableImage.js';
//not GWT import const SwtMutableImage = globalThis.org.microemu.device.swt.SwtMutableImage;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DisposalUtil
            extends Object
         {
        

    private static readonly instance: DisposalUtil = new DisposalUtil();

    public static getInstance(): DisposalUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DisposalUtil.instance;
    
}


    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    public disposeImage(image: Image){

                        if(image == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                        if(image.isMutable())
                        
                                    {
                                    
    var mutableImage: SwtMutableImage = image as SwtMutableImage;;
    
this.disposeResource(mutableImage!.getImage() as Resource);
    

                                    }
                                
                        else {
                            
                        }
                            
}


    public disposeResource(resource: Resource){

                        if(!resource.isDisposed())
                        
                                    {
                                    console.log(this.commonStrings!.CLOSE);
    
resource.dispose();
    

                                    }
                                
}


}



