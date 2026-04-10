
        /* Generated Code Do Not Modify */
        



import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    

export class ScreenRelationalUtil
            extends Object
         {
        

    private static readonly instance: ScreenRelationalUtil = new ScreenRelationalUtil();
        
        

    public static getInstance(): ScreenRelationalUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public getScale(image: Image): number{
    //var image = image



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getScale(image.getWidth(), image.getHeight());
    
}


    public getScale(aWidth: number, aHeight: number): number{
    //var aWidth = aWidth
    //var aHeight = aHeight



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getScale(aWidth, aHeight, 20);
    
}


    public getScale(aWidth: number, aHeight: number, add: number): number{
    //var aWidth = aWidth
    //var aHeight = aHeight
    //var add = add

    var displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        


    var last: IntArray = displayInfoSingleton!.getLast()!;
        
        


    var width: number = last[displayInfoSingleton!.WIDTH]!.toFloat();
        
        


    var height: number = last[displayInfoSingleton!.HEIGHT]!.toFloat();
        
        


    var largestSize: number = width;
        
        


    
                        if(largestSize < height)
                        
                                    {
                                    largestSize= height

                                    }
                                

    var scale: number = (largestSize) /aWidth;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scale;
    
}


    public getScaledHeight(aWidth: number, aHeight: number): number{
    //var aWidth = aWidth
    //var aHeight = aHeight



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (this.getScale(aWidth, aHeight) *aHeight).toInt();
    
}


    public getScaledHeight(aWidth: number, aHeight: number, add: number): number{
    //var aWidth = aWidth
    //var aHeight = aHeight
    //var add = add



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (this.getScale(aWidth, aHeight, add) *aHeight).toInt();
    
}


}
                
            

