
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
        
import { InputStream } from '../../../java/io/InputStream.js';

    
import { Image } from '../../../javax/microedition/lcdui/Image.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageFactory
            extends Object
         {
        

    private static readonly instance: ImageFactory = new ImageFactory();

    public static getInstance(): ImageFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                //@Throws(Exception.constructor)
            
    public createImageUrl(url: string): Image{
    //var url = url



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Image.createImage(url);;
    
}


                //@Throws(Exception.constructor)
            
    public createImage(caller: string, width: number, height: number): Image{
    //var caller = caller
    //var width = width
    //var height = height



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Image.createImage(width, height);;
    
}


                //@Throws(Exception.constructor)
            
    public createImageFromInputStream(key: any = {}, inputStream: InputStream): Image{
    //var key = key
    //var inputStream = inputStream

    var image: Image = Image.createImage(inputStream)!;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return image;
    
}


}
                
            

