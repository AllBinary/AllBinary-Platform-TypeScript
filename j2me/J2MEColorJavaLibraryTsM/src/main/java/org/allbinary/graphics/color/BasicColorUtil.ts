
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
        




export class BasicColorUtil
            extends Object
         {
        

    private static readonly instance: BasicColorUtil = new BasicColorUtil();
        
        

    public static getInstance(): BasicColorUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly ZERO_ARRAY: BasicColor[] = new Array(0);
        
        

    public readonly ALPHA: number = 0xFF000000.toInt();
        
        

    public readonly isAlpha: boolean = true;
        
        

    public readonly ffOpaque: boolean = true;
        
        

    public get(red: number, green: number, blue: number): number{
var red = red
var green = green
var blue = blue

    var value: number= 0


                        if(isAlpha)
                        
                                    {
                                    
                        if(ffOpaque)
                        
                                    {
                                    value= ALPHA

                                    }
                                

                                    }
                                
value= (red shl 16) or value
value= (green shl 8) or value
value= blue or value



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return value;
    
}


    public get(alphaValue: number, r: number, g: number, b: number): number{
    //var alphaValue = alphaValue
    //var r = r
    //var g = g
    //var b = b



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ((alphaValue shl 24) and ALPHA) +((r shl 16) and 0x00FF0000) +((g shl 8) and 0x0000FF00) +(b and 0x000000FF);
    
}


    public get(alphaValue: number, color: number): number{
    //var alphaValue = alphaValue
    //var color = color



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ((alphaValue shl 24) and ALPHA) +color;
    
}


    public invert(color: number): number{
    //var color = color



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (0xFFFFFF -color) or ALPHA;
    
}


}
                
            

