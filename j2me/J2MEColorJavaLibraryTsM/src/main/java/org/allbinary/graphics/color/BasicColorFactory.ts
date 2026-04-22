
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
        



import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicColorUtil } from "./BasicColorUtil.js";

import { BasicColor } from "./BasicColor.js";

export class BasicColorFactory
            extends Object
         {
        

    private static readonly instance: BasicColorFactory = new BasicColorFactory();
        
        

    public static getInstance(): BasicColorFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public createInstance(value: number): BasicColor{
    //var value = value



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new BasicColor(BasicColorUtil.getInstance()!.ALPHA, value, StringUtil.getInstance()!.EMPTY_STRING);
    
}


    public createInstanceA(alphaValue: number, value: number): BasicColor{
    //var alphaValue = alphaValue
    //var value = value



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new BasicColor(alphaValue, value, StringUtil.getInstance()!.EMPTY_STRING);
    
}


    public createInstanceAN(alphaValue: number, value: number, name: string): BasicColor{
    //var alphaValue = alphaValue
    //var value = value
    //var name = name



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new BasicColor(alphaValue, value, name);
    
}


    public createInstanceARGB(alphaValue: number, r: number, g: number, b: number, name: string): BasicColor{
    //var alphaValue = alphaValue
    //var r = r
    //var g = g
    //var b = b
    //var name = name

    var ALPHA_MASK: number = 0xFF000000;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new BasicColor(alphaValue, ((alphaValue<<24)&ALPHA_MASK) +((r<<16)&0x00FF0000) +((g<<8)&0x0000FF00) +(b&0x000000FF), StringUtil.getInstance()!.EMPTY_STRING);
    
}


    public readonly NULL_COLOR: BasicColor = this.createInstanceARGB(255, 255, 255, 255, "null color")!;
        
        

    public readonly TAN: BasicColor = this.createInstance(0xE9D8B5)!;
        
        

    public readonly SKIN_PINK: BasicColor = this.createInstance(0xFDCECE)!;
        
        

    public readonly RED: BasicColor = this.createInstanceAN(BasicColorUtil.getInstance()!.ALPHA, 0xFF0000, "red")!;
        
        

    public readonly LIGHT_RED: BasicColor = this.createInstanceAN(BasicColorUtil.getInstance()!.ALPHA, 0xFFA0A0, "light red")!;
        
        

    public readonly DARK_GREEN: BasicColor = this.createInstance(0x00FF00)!;
        
        

    public readonly GREEN: BasicColor = this.createInstanceAN(BasicColorUtil.getInstance()!.ALPHA, 0x00DD00, "green")!;
        
        

    public readonly LIGHT_GREEN: BasicColor = this.createInstance(0x007700)!;
        
        

    public readonly PURPLE: BasicColor = this.createInstanceAN(BasicColorUtil.getInstance()!.ALPHA, 0x400040, "purple")!;
        
        

    public readonly BLUE: BasicColor = this.createInstanceAN(BasicColorUtil.getInstance()!.ALPHA, 0x0000FF, "blue")!;
        
        

    public readonly LIGHT_BLUE: BasicColor = this.createInstance(0x00aaff)!;
        
        

    public readonly VERY_LIGHT_BLUE: BasicColor = this.createInstance(0x000033)!;
        
        

    public readonly PUCE: BasicColor = this.createInstance(0xFF00AA)!;
        
        

    public readonly AQUA: BasicColor = this.createInstance(0x00FFFF)!;
        
        

    public readonly YELLOW: BasicColor = this.createInstanceAN(BasicColorUtil.getInstance()!.ALPHA, 0xFFFF00, "yellow")!;
        
        

    public readonly PINK: BasicColor = this.createInstance(0xFF00FF)!;
        
        

    public readonly BLACK: BasicColor = this.createInstanceAN(BasicColorUtil.getInstance()!.ALPHA, 0x000000, "black")!;
        
        

    public readonly GREY: BasicColor = this.createInstanceAN(BasicColorUtil.getInstance()!.ALPHA, 0xAAAAAA, "grey")!;
        
        

    public readonly LIGHT_GREY: BasicColor = this.createInstance(0xC0C0C0)!;
        
        

    public readonly DARK_GREY: BasicColor = this.createInstance(0x404040)!;
        
        

    public readonly ORANGE: BasicColor = this.createInstance(0xe07718)!;
        
        

    public readonly BROWN: BasicColor = this.createInstance(0x956B00)!;
        
        

    public readonly WHITE: BasicColor = this.createInstance(0xFFFFFF)!;
        
        

    public readonly TRANSPARENT_COLOR: BasicColor = this.createInstanceAN(0x00000000, 0x000000, StringUtil.getInstance()!.EMPTY_STRING)!;
        
        

    public readonly TRANSPARENT_GREY: BasicColor = this.createInstanceAN(0x52000000, 0xECECEC, StringUtil.getInstance()!.EMPTY_STRING)!;
        
        

    public readonly TRANSPARENT_BLACK: BasicColor = this.createInstanceAN(0x52000000, 0x000000, StringUtil.getInstance()!.EMPTY_STRING)!;
        
        

    public readonly TRANSPARENT_RED: BasicColor = this.createInstanceAN(0x52000000, 0xFF0000, StringUtil.getInstance()!.EMPTY_STRING)!;
        
        

    public readonly CLEAR_COLOR: BasicColor = BLACK;
        
        

    public readonly BORDER_COLOR: BasicColor = WHITE;
        
        

}
                
            

