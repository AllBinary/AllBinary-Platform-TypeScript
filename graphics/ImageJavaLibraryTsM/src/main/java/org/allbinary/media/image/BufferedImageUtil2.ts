
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../../java/lang/Object.js';
        
import { awt } from '../../../../java/awt.js';
//not GWT import const awt

import { BufferedImage } from '../../../../java/awt/image/BufferedImage.js';
//not GWT import const BufferedImage

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageUtil } from './ImageUtil.js';
//sameFolderImports - not GWT import - same folder const ImageUtil
import { Graphics2D } from './Graphics2D.js';
//sameFolderImports - not GWT import - same folder const Graphics2D

export class BufferedImageUtil2
            extends Object
         {
        

    private static readonly instance: BufferedImageUtil2 = new BufferedImageUtil2();

    public static getInstance(): BufferedImageUtil2{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BufferedImageUtil2.instance;
    
}


    private readonly imageUtil: ImageUtil = ImageUtil.getInstance()!;

    public createSpriteImage(bufferedImageArray: BufferedImage[]): BufferedImage{

    let columns: number = bufferedImageArray!.length
                ;;
    

    let max: number = columns;;
    

    let rows: number = 0;;
    

                        if(bufferedImageArray!.length < columns)
                        
                                    {
                                    columns= bufferedImageArray!.length;
    

                                    }
                                
rows= (globalThis.Math.trunc(bufferedImageArray!.length /columns));
    

                        if(bufferedImageArray!.length % columns != 0)
                        
                                    {
                                    rows++;
    

                                    }
                                

    let bufferedImage: BufferedImage = this.imageUtil!.create(bufferedImageArray[0]!.getWidth(
                            null) *columns, bufferedImageArray[0]!.getHeight(
                            null) *rows)!;;
    

    let g: Graphics2D = bufferedImage!.createGraphics()!;;
    

    let columnIndex: number = 0;;
    

    let rowIndex: number = 0;;
    




                        for (
    let index: number = 0;index < bufferedImageArray!.length; index++)
        {

                        if(globalThis.Math.trunc(index /max) != 0 && index % max == 0)
                        
                                    {
                                    rowIndex++;
    
columnIndex= 0;
    

                                    }
                                
g.drawImage(bufferedImageArray[index]!, bufferedImageArray[index]!.getWidth(
                            null) *columnIndex, bufferedImageArray[index]!.getHeight(
                            null) *rowIndex, bufferedImageArray[index]!.getWidth(
                            null), bufferedImageArray[index]!.getHeight(
                            null), 
                            null);
    
columnIndex++;
    
}

g.dispose();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImage;
    
}


}

