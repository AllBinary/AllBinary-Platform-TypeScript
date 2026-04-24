
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
        



import { GL10 } from "../../../../../javax/microedition/khronos/opengles/GL10.js";

    
import { Image } from "../../../../../javax/microedition/lcdui/Image.js";

    
import { OpenGLESImage } from "../../../../../org/allbinary/image/opengles/OpenGLESImage.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListD } from "../../../../../org/allbinary/util/BasicArrayListD.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AllBinaryRendererBase3
            extends Object
         {
        

    public readonly list: BasicArrayList = new BasicArrayListD();
        
        

                //@Throws(Error::class)
            
    update(gl: GL10){
    //var gl = gl

        while(this.list.size() > 0)
        {

    var openGLESImage: OpenGLESImage = this.list.remove(0); as OpenGLESImage;
        
        
;
    

                        if(openGLESImage != 
                                    null
                                )
                        
                                    {
                                    openGLESImage!.set(gl);
    

                                    }
                                
}

}


    public add(image: Image){
    //var image = image
this.list.add(image);
    
}


}
                
            

