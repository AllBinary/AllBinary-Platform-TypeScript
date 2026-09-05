
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
import { JsType } from '../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { InputStream } from '../../../java/io/InputStream.js';
//not GWT import const InputStream = globalThis.java.io.InputStream;

      
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //ImageCacheBaseAndroidJavaLibrary
export class ImageFactory
            extends Object
         {
        

    private static readonly instance: ImageFactory = new ImageFactory();

    public static getInstance(): ImageFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageFactory.instance;
    
}


                //@Throws(Exception.constructor)
            
    public createImageUrl(url: string): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Image.createImage(url);;
    
}


                //@Throws(Exception.constructor)
            
    public createImage(caller: string, width: number, height: number): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Image.createImageWH(width, height);;
    
}


                //@Throws(Exception.constructor)
            
    public createImageFromInputStream(key: any = {}, inputStream: InputStream): Image{

    var image: Image = Image.createImageFromInputStream(inputStream)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


}



