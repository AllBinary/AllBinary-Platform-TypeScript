
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
        



import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    

export class OpenGLImageSpecificFactory
            extends Object
         {
        

    private static readonly instance: OpenGLImageSpecificFactory = new OpenGLImageSpecificFactory();
        
        

    public static getInstance(): OpenGLImageSpecificFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private imageFactory: OpenGLImageFactory = OpenGLImageFactory.NULL_OPENGL_IMAGE_FACTORY;
        
        

    public updating: boolean = false;
        
        

    public setImageFactory(imageFactory: OpenGLImageFactory){
var imageFactory = imageFactory
this.imageFactory= imageFactory
put(StringMaker().
                            append("Selected Image Factory: ")!.append(StringUtil.getInstance()!.toString(this.imageFactory))!.toString(), this, "setImageFactory")
}


    public getImageFactory(): OpenGLImageFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageFactory;
    
}


}
                
            

