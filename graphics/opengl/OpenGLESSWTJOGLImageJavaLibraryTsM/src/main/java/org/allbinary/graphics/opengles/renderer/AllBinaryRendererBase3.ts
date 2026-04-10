
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

    

export class AllBinaryRendererBase3
            extends Object
         {
        

    public readonly list: BasicArrayList = new BasicArrayList();
        
        

                @Throws(Exception::class)
            
    update(gl: GL10){
    //var gl = gl

        while(list.size() > 0)
        {

    var openGLESImage: OpenGLESImage = list.remove(0) as OpenGLESImage;
        
        


    
                        if(openGLESImage != 
                                    null
                                )
                        
                                    {
                                    set(gl)

                                    }
                                
}

}


    public add(image: Image){
    //var image = image
add(image)
}


}
                
            

