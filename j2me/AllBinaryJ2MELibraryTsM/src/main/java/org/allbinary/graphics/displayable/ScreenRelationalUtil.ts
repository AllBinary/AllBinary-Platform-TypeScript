
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../java/lang/Object.js';


        
import { Image } from '../../../../javax/microedition/lcdui/Image.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DisplayInfoSingleton } from './DisplayInfoSingleton.js';

export class ScreenRelationalUtil
            extends Object
         {
        

    private static readonly instance: ScreenRelationalUtil = new ScreenRelationalUtil();

    public static getInstance(): ScreenRelationalUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ScreenRelationalUtil.instance;
    
}


    public getScaleImage(image: Image): number{
    //var image = image



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getScaleWH(image.getWidth(), image.getHeight());;
    
}


    public getScaleWH(aWidth: number, aHeight: number): number{
    //var aWidth = aWidth
    //var aHeight = aHeight



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getScaleWHA(aWidth, aHeight, 20);;
    
}


    public getScaleWHA(aWidth: number, aHeight: number, add: number): number{
    //var aWidth = aWidth
    //var aHeight = aHeight
    //var add = add

    var displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
;
    

    var last: number[] = displayInfoSingleton!.getLast()!;
;
    

    var width: number = last[displayInfoSingleton!.WIDTH]!;
;
    

    var height: number = last[displayInfoSingleton!.HEIGHT]!;
;
    

    var largestSize: number = width;
;
    

                        if(largestSize < height)
                        
                                    {
                                    largestSize= height;
    

                                    }
                                

    var scale: number = (largestSize) /aWidth;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scale;
    
}


    public getScaledHeight(aWidth: number, aHeight: number): number{
    //var aWidth = aWidth
    //var aHeight = aHeight



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Math.round((this.getScaleWH(aWidth, aHeight) *aHeight));
    
}


    public getScaledHeightAdd(aWidth: number, aHeight: number, add: number): number{
    //var aWidth = aWidth
    //var aHeight = aHeight
    //var add = add



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Math.round((this.getScaleWHA(aWidth, aHeight, add) *aHeight));
    
}


}
                
            

