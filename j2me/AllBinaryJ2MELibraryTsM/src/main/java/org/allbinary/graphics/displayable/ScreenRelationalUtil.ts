
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../../java/lang/Object.js';
        
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DisplayInfoSingleton } from './DisplayInfoSingleton.js';
//sameFolderImports - not GWT import - same folder const DisplayInfoSingleton

export class ScreenRelationalUtil
            extends Object
         {
        

    private static readonly instance: ScreenRelationalUtil = new ScreenRelationalUtil();

    public static getInstance(): ScreenRelationalUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ScreenRelationalUtil.instance;
    
}


    public getScaleImage(image: Image): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getScaleWH(image.getWidth(), image.getHeight());;
    
}


    public getScaleWH(aWidth: number, aHeight: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getScaleWHA(aWidth, aHeight, 20);;
    
}


    public getScaleWHA(aWidth: number, aHeight: number, add: number): number{

    let displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    

    let last: number[] = displayInfoSingleton!.getLast()!;;
    

    let width: number = last[displayInfoSingleton!.WIDTH]!;;
    

    let height: number = last[displayInfoSingleton!.HEIGHT]!;;
    

    let largestSize: number = width;;
    

                        if(largestSize < height)
                        
                                    {
                                    largestSize= height;
    

                                    }
                                

    let scale: number = (largestSize) /aWidth;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scale;
    
}


    public getScaledHeight(aWidth: number, aHeight: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return globalThis.Math.trunc((this.getScaleWH(aWidth, aHeight) *aHeight));
    
}


    public getScaledHeightAdd(aWidth: number, aHeight: number, add: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return globalThis.Math.trunc((this.getScaleWHA(aWidth, aHeight, add) *aHeight));
    
}


}

