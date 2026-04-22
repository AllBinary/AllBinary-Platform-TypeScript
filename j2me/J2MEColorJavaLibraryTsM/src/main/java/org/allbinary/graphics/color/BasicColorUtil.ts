
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
        




















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicColorUtil
            extends Object
         {
        

    private static readonly instance: BasicColorUtil = new BasicColorUtil();
        
        

    public static getInstance(): BasicColorUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly ZERO_ARRAY: BasicColor[] = [];
        
        

    public readonly ALPHA: number = 0xFF000000;
        
        

    public readonly isAlpha: boolean = true;
        
        

    public readonly ffOpaque: boolean = true;
        
        

    public get(red: number, green: number, blue: number): number{
var red = red
var green = green
var blue = blue

    var value: number = 0;
        
        
;
    

                        if(this.isAlpha)
                        
                                    {
                                    
                        if(this.ffOpaque)
                        
                                    {
                                    value= this.ALPHA;
    

                                    }
                                

                                    }
                                
value= (red<<16) | value;
    
value= (green<<8) | value;
    
value= blue | value;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return value;
    
}


    public get(alphaValue: number, r: number, g: number, b: number): number{
    //var alphaValue = alphaValue
    //var r = r
    //var g = g
    //var b = b



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ((alphaValue<<24)&this.ALPHA) +((r<<16)&0x00FF0000) +((g<<8)&0x0000FF00) +(b&0x000000FF);
    
}


    public get(alphaValue: number, color: number): number{
    //var alphaValue = alphaValue
    //var color = color



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ((alphaValue<<24)&this.ALPHA) +color;
    
}


    public invert(color: number): number{
    //var color = color



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (0xFFFFFF -color) | this.ALPHA;
    
}


}
                
            

