
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
        



            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../../java/lang/Integer.js';
        
//not game specific package import { awt } from '../../../../../../java/awt.js';
      const awt = globalThis.java.awt;

      
//not game specific package import { BufferedImage } from '../../../../../../java/awt/image/BufferedImage.js';
      const BufferedImage = globalThis.java.awt.image.BufferedImage;

      
//not game specific package import { ColorCacheFactory } from '../../../../../../org/allbinary/graphics/color/ColorCacheFactory.js';
      const ColorCacheFactory = globalThis.org.allbinary.graphics.color.ColorCacheFactory;

      
//not game specific package import { ColorCacheable } from '../../../../../../org/allbinary/graphics/color/ColorCacheable.js';
      const ColorCacheable = globalThis.org.allbinary.graphics.color.ColorCacheable;

      
//not game specific package import { AutomaticCacheInterface } from '../../../../../../org/allbinary/logic/util/cache/AutomaticCacheInterface.js';
      const AutomaticCacheInterface = globalThis.org.allbinary.logic.util.cache.AutomaticCacheInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Color } from './Color.js';

export class GraphicsAnalysisUtil
            extends Object
         {
        

    private static readonly MAX: number = 122;

                //@Throws(Exception.constructor)
            
    public static getNominator(bufferedImage: BufferedImage, min_x: Integer, max_x: Integer, y: Integer): number{




                        for (
    var index: number = max_x.intValue()!;index > min_x.intValue(); )
        {

    var colorInteger: Integer = Integer.valueOf(bufferedImage!.getRGB(index, y.intValue()))!;;
    

    var automaticCacheInterface: AutomaticCacheInterface = ColorCacheFactory.getInstance()!;;
    

    var colorCacheable: ColorCacheable = automaticCacheInterface!.get(colorInteger) as ColorCacheable;;
    

    var color: Color = colorCacheable!.getColor()!;;
    

                        if(color.getRed() < GraphicsAnalysisUtil.MAX && color.getGreen() < GraphicsAnalysisUtil.MAX && color.getBlue() < GraphicsAnalysisUtil.MAX)
                        
                                    {
                                    
                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return index -min_x.intValue();
    

                        }
                            
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


private constructor (){

            super();
        }


}
                
            

