
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
        



import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CommonSeps
            extends Object
         {
        

    private static readonly instance: CommonSeps = new CommonSeps();
        
        

    public static getInstance(): CommonSeps{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CommonSeps.instance;
    
}


    public readonly NEW_LINE: string = "\n";
        
        

    public readonly SEMICOLON: string = ";";
        
        

    public readonly EQUALS: string = "=";
        
        

    public readonly SPACE: string = " ";
        
        

    public readonly COMMA: string = ",";
        
        

    public readonly COLON: string = ":";
        
        

    public readonly PERIOD: string = ".";
        
        

    public readonly UNDERSCORE: string = "_";
        
        

    public readonly COLON_SEP: string = new StringMaker().
                            append(this.COLON)!.append(this.SPACE)!.toString()!;
        
        

    public readonly COMMA_SEP: string = new StringMaker().
                            append(this.COMMA)!.append(this.SPACE)!.toString()!;
        
        

    public readonly PARENTHESIS_OPEN: string = "(";
        
        

    public readonly PARENTHESIS_CLOSE: string = ")";
        
        

    public readonly BRACE_OPEN: string = "{";
        
        

    public readonly BRACE_CLOSE: string = "}";
        
        

    public readonly BRACKET_OPEN: string = "[";
        
        

    public readonly BRACKET_CLOSE: string = "]";
        
        

    public readonly DASH: string = "-";
        
        

    public readonly PERCENT: string = "%";
        
        

    public readonly AMPERSAND: string = "&";
        
        

    public readonly FORWARD_SLASH: string = "/";
        
        

    public readonly BACK_SLASH: string = "\\";
        
        

    public readonly QUESTION: string = "?";
        
        

    public readonly QUOTE: string = "\"";
        
        

    public readonly QUOTE_END: string = "\",";
        
        

    public readonly COMMENT: string = "//";
        
        

}
                
            

