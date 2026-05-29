
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      
import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      
import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MyFont
            extends Object
         {
        

    private static instance: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): MyFont{

                        if(MyFont.instance == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    MyFont.instance= new MyFont();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return MyFont.instance as MyFont;
    
}


    private readonly defaultFont: Font = Font.getDefaultFont()!;

    public DEFAULT_CHAR_HEIGHT: number = this.defaultFont!.getHeight()!;

    private DEFAULT_CHAR_WIDTH: number = this.defaultFont!.charWidth('C')!;

private constructor (){

            super();
        }


    public update(){
this.DEFAULT_CHAR_HEIGHT= this.defaultFont!.getHeight();
    
this.DEFAULT_CHAR_WIDTH= this.defaultFont!.charWidth('C');
    
}


    public defaultCharWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.DEFAULT_CHAR_WIDTH;
    
}


    public defaultStringWidth(size: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.DEFAULT_CHAR_WIDTH *size;
    
}


    public stringWidth(string: string): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.DEFAULT_CHAR_WIDTH *string.length;
    
}


    public stringWidth2(string: string): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.defaultFont!.stringWidth(string);;
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.defaultFont!.getSize();;
    
}


    public charWidth(aChar: string): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.defaultFont!.charWidth(aChar);;
    
}


    public charsWidth(charArray: string[], offset: number, length: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.defaultFont!.charsWidth(charArray, offset, length);;
    
}


    public toString(): string{

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().append(this.constructor.name.toString())!.appendint(this.DEFAULT_CHAR_WIDTH)!.append(commonSeps!.FORWARD_SLASH)!.appendint(this.DEFAULT_CHAR_HEIGHT)!.toString();;
    
}


}
                
            

