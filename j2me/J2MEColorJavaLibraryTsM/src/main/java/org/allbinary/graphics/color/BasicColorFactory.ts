
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
        
export class BasicColorFactory
            extends Object
         {
        

    private static readonly instance: BasicColorFactory = new BasicColorFactory();
        
        

    public static getInstance(): BasicColorFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly NULL_COLOR: BasicColor = new BasicColor(255, 255, 255, 255, "null color");
        
        

    public readonly TAN: BasicColor = new BasicColor(0xE9D8B5);
        
        

    public readonly SKIN_PINK: BasicColor = new BasicColor(0xFDCECE);
        
        

    public readonly RED: BasicColor = new BasicColor(0xFF0000, "red");
        
        

    public readonly LIGHT_RED: BasicColor = new BasicColor(0xFFA0A0, "light red");
        
        

    public readonly DARK_GREEN: BasicColor = new BasicColor(0x00FF00);
        
        

    public readonly GREEN: BasicColor = new BasicColor(0x00DD00, "green");
        
        

    public readonly LIGHT_GREEN: BasicColor = new BasicColor(0x007700);
        
        

    public readonly PURPLE: BasicColor = new BasicColor(0x400040, "purple");
        
        

    public readonly BLUE: BasicColor = new BasicColor(0x0000FF, "blue");
        
        

    public readonly LIGHT_BLUE: BasicColor = new BasicColor(0x00aaff);
        
        

    public readonly VERY_LIGHT_BLUE: BasicColor = new BasicColor(0x000033);
        
        

    public readonly PUCE: BasicColor = new BasicColor(0xFF00AA);
        
        

    public readonly AQUA: BasicColor = new BasicColor(0x00FFFF);
        
        

    public readonly YELLOW: BasicColor = new BasicColor(0xFFFF00, "yellow");
        
        

    public readonly PINK: BasicColor = new BasicColor(0xFF00FF);
        
        

    public readonly BLACK: BasicColor = new BasicColor(0x000000, "black");
        
        

    public readonly GREY: BasicColor = new BasicColor(0xAAAAAA, "grey");
        
        

    public readonly LIGHT_GREY: BasicColor = new BasicColor(0xC0C0C0);
        
        

    public readonly DARK_GREY: BasicColor = new BasicColor(0x404040);
        
        

    public readonly ORANGE: BasicColor = new BasicColor(0xe07718);
        
        

    public readonly BROWN: BasicColor = new BasicColor(0x956B00);
        
        

    public readonly WHITE: BasicColor = new BasicColor(0xFFFFFF);
        
        

    public readonly TRANSPARENT_COLOR: BasicColor = new BasicColor(0x00000000, 0x000000, StringUtil.getInstance()!.EMPTY_STRING);
        
        

    public readonly TRANSPARENT_GREY: BasicColor = new BasicColor(0x52000000, 0xECECEC, StringUtil.getInstance()!.EMPTY_STRING);
        
        

    public readonly TRANSPARENT_BLACK: BasicColor = new BasicColor(0x52000000, 0x000000, StringUtil.getInstance()!.EMPTY_STRING);
        
        

    public readonly TRANSPARENT_RED: BasicColor = new BasicColor(0x52000000, 0xFF0000, StringUtil.getInstance()!.EMPTY_STRING);
        
        

    public readonly CLEAR_COLOR: BasicColor = BLACK;
        
        

    public readonly BORDER_COLOR: BasicColor = WHITE;
        
        

}
                
            

