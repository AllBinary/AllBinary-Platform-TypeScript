
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
        



import { awt } from "../../../../../../java/awt.js";

    
import { BufferedImage } from "../../../../../../java/awt/image/BufferedImage.js";

    
import { ColorCacheFactory } from "../../../../../../org/allbinary/graphics/color/ColorCacheFactory.js";

    
import { ColorCacheable } from "../../../../../../org/allbinary/graphics/color/ColorCacheable.js";

    
import { AutomaticCacheInterface } from "../../../../../../org/allbinary/logic/util/cache/AutomaticCacheInterface.js";

    

export class GraphicsAnalysisUtil
            extends Object
         {
        

    private static readonly MAX: number = 122;
        
        

                @Throws(Exception::class)
            
    public static getNominator(bufferedImage: BufferedImage, min_x: Integer, max_x: Integer, y: Integer): number{
var bufferedImage = bufferedImage
var min_x = min_x
var max_x = max_x
var y = y




                        for (
    var index: number = max_x.toInt()!;
        
        
index > min_x.toInt(); )
        {

    var colorInteger: Integer = Integer(Integer.valueOf(bufferedImage!.getRGB(index, y.toInt())))!;
        
        


    var automaticCacheInterface: AutomaticCacheInterface = ColorCacheFactory.getInstance()!;
        
        


    var colorCacheable: ColorCacheable = automaticCacheInterface!.get(colorInteger) as ColorCacheable;
        
        


    var color: Color = colorCacheable!.getColor()!;
        
        


    
                        if(color.getRed() < MAX && color.getGreen() < MAX && color.getBlue() < MAX)
                        
                                    {
                                    
                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return index -min_x.toInt();
    

                        }
                            
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}

private constructor (){

            super();
            }


}
                
            

