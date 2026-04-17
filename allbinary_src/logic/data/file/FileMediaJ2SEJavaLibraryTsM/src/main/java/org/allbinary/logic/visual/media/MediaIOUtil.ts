
        /* Generated Code Do Not Modify */
        



import { ImageIO } from "../../../../../javax/imageio/ImageIO.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MediaIOUtil
            extends Object
         {
        

    private static readonly instance: MediaIOUtil = new MediaIOUtil();
        
        

    public static getInstance(): MediaIOUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public getReaderFormatNames(): string[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageIO.getReaderFormatNames();

                        ;
    
}


    public getWriterFormatNames(): string[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageIO.getWriterFormatNames();

                        ;
    
}


}
                
            

