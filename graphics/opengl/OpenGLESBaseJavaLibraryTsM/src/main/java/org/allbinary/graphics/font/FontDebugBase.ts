
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../java/lang/Object.js';
        
//not game specific package import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not game specific package import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //OpenGLESBaseJavaLibrary
export class FontDebugBase
            extends Object
         {
        

    private static readonly instanceBase: FontDebugBase = new FontDebugBase();

    public static getInstance(): FontDebugBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FontDebugBase.instanceBase;
    
}


    public readonly SET_FONT: string = "setFont";

    public debugMetrics(currentFont: Font, convertedTextSize: number, displayMetrics: any = {}, stringBuffer: StringMaker){
}


    public debugDpi(densityDpi: number, stringBuffer: StringMaker){
}


    public debugDimension(currentFont: Font, convertedTextSize: number, longestDimensionTotalPixels: number, stringBuffer: StringMaker){
}


}



