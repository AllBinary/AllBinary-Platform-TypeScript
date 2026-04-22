
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
        



import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class HtmlTableData
            extends Object
         {
        

    private static readonly instance: HtmlTableData = new HtmlTableData();
        
        

    public static getInstance(): HtmlTableData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly LEFT: string = CommonStrings.getInstance()!.LEFT;
        
        

    public readonly RIGHT: string = CommonStrings.getInstance()!.RIGHT;
        
        

    public readonly NONE: string = "none";
        
        

    public readonly TOP: string = "top";
        
        

    public readonly BOTTOM: string = "bottom";
        
        

    public readonly TOPBOT: string = "topbot";
        
        

    public readonly SIDES: string = "sides";
        
        

    public readonly ALL: string = "all";
        
        

    public readonly BORDERED: string = "border";
        
        

    public readonly BASIC: string = "basic";
        
        

    public readonly ROWS: string = "rows";
        
        

    public readonly FRAMES: string[] = 
                                                        [
                                                            this.NONE,TOP,BOTTOM,TOPBOT,SIDES,ALL,this.BORDERED
                                                        ];
        
        

}
                
            

