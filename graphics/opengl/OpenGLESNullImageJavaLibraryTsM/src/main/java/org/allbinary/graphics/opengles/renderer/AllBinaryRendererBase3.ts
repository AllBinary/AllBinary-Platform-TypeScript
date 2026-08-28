
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { GL10 } from '../../../../../javax/microedition/khronos/opengles/GL10.js';
      const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;

      
//not game specific package import { Image } from '../../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { OpenGLESImage } from '../../../../../org/allbinary/image/opengles/OpenGLESImage.js';
      const OpenGLESImage = globalThis.org.allbinary.image.opengles.OpenGLESImage;

      
//not game specific package import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AllBinaryRendererBase3
            extends Object
         {
        

    public readonly list: BasicArrayList = new BasicArrayListD();

                //@Throws(Exception.constructor)
            
    update(gl: GL10){

        while(this.list.size() > 0)
        {

    var openGLESImage: OpenGLESImage = this.list.removeAt(0) as OpenGLESImage;;
    

                        if(openGLESImage != 
                                    null
                                )
                        
                                    {
                                    openGLESImage!.set(gl);
    

                                    }
                                
}

}


    public add(image: Image){
this.list.add(image);
    
}


}



