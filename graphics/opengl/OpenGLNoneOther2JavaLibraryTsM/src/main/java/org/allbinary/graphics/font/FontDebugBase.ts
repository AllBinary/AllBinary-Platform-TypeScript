
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../java/lang/Object.js';


        
import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //OpenGLNoneOther2JavaLibrary
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
                
            

