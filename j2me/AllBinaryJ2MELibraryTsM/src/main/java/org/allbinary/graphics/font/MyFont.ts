
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
        



import { Font } from "../../../../javax/microedition/lcdui/Font.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MyFont
            extends Object
         {
        

    private static readonly instance: MyFont = new MyFont();
        
        

    public static getInstance(): MyFont{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly defaultFont: Font = Font.getDefaultFont()!;
        
        

    public DEFAULT_CHAR_HEIGHT: number = defaultFont!.getHeight()!;
        
        

    private DEFAULT_CHAR_WIDTH: number = defaultFont!.charWidth('C')!;
        
        
private constructor (){

            super();
            }


    public update(){
this.DEFAULT_CHAR_HEIGHT= defaultFont!.getHeight();
    
this.DEFAULT_CHAR_WIDTH= defaultFont!.charWidth('C');
    
}


    public charWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DEFAULT_CHAR_WIDTH;
    
}


    public stringWidth(size: number): number{
    //var size = size



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DEFAULT_CHAR_WIDTH *size;
    
}


    public stringWidth(string: string): number{
    //var string = string



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DEFAULT_CHAR_WIDTH *string.length;
    
}


    public stringWidth2(string: string): number{
    //var string = string



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return defaultFont!.stringWidth(string);

                        ;
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return defaultFont!.getSize();

                        ;
    
}


    public charWidth(aChar: string): number{
    //var aChar = aChar



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return defaultFont!.charWidth(aChar);

                        ;
    
}


    public charsWidth(charArray: string[], offset: number, length: number): number{
    //var charArray = charArray
    //var offset = offset
    //var length = length



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return defaultFont!.charsWidth(charArray, offset, length);

                        ;
    
}


    public toString(): string{

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().
                            append(this.constructor.name.toString())!.appendint(this.DEFAULT_CHAR_WIDTH)!.append(commonSeps!.FORWARD_SLASH)!.appendint(this.DEFAULT_CHAR_HEIGHT)!.toString();

                        ;
    
}


}
                
            

