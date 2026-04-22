
        /*
                *  
                *  Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license  Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template  
        */
        
        /* Generated Code Do Not Modify */
        



import { Font } from "../../../../javax/microedition/lcdui/Font.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class FontDebugBase
            extends Object
         {
        

    private static readonly instance: FontDebugBase = new FontDebugBase();
        
        

    public static getInstance(): FontDebugBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly SET_FONT: string = "setFont";
        
        

    public debugMetrics(currentFont: Font, convertedTextSize: number, displayMetrics: any = {}, stringBuffer: StringMaker){
    //var currentFont = currentFont
    //var convertedTextSize = convertedTextSize
    //var displayMetrics = displayMetrics
    //var stringBuffer = stringBuffer
}


    public debugDpi(densityDpi: number, stringBuffer: StringMaker){
    //var densityDpi = densityDpi
    //var stringBuffer = stringBuffer
}


    public debugDimension(currentFont: Font, convertedTextSize: number, longestDimensionTotalPixels: number, stringBuffer: StringMaker){
    //var currentFont = currentFont
    //var convertedTextSize = convertedTextSize
    //var longestDimensionTotalPixels = longestDimensionTotalPixels
    //var stringBuffer = stringBuffer
}


}
                
            

