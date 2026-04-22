
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
        



import { Vector } from "../../../../../../../java/util/Vector.js";

    
import { StringUtil } from "../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { HtmlTag } from "../../../../../../../org/allbinary/logic/visual/dhtml/html/HtmlTag.js";

    
import { CommonPhoneStrings } from "../../../../../../../org/allbinary/string/CommonPhoneStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { HtmlRow } from "./HtmlRow.js";

export class HtmlTable extends HtmlTag {
        

    private readonly END: string = ">";
        
        

    private readonly START: string = "<table ";
        
        

    private readonly ENDTAG: string = "</table>";
        
        

    private readonly CLASS: string = "class";
        
        

    private readonly DIRECTION: string = "dir";
        
        

    private readonly ID: string = "id";
        
        

    private readonly LANG: string = "lang";
        
        

    private readonly UNITS: string = "units";
        
        

    private readonly BORDER: string = "border";
        
        

    private readonly CELLPADDING: string = "cellpadding";
        
        

    private readonly CELLSPACING: string = "cellspacing";
        
        

    private readonly COLS: string = "cols";
        
        

    private readonly FLOAT: string = "float";
        
        

    private readonly FRAME: string = "frame";
        
        

    private readonly RULES: string = "rules";
        
        

    private readonly WIDTH: string = "width";
        
        

    private readonly STYLE: string = "style";
        
        

    public readonly BORDERCOLLAPSE: string = "border-collapse: collapse";
        
        

    private numberOfColumns: number = 0;
        
        

    private before: string

    private border: string

    private cellpadding: string

    private cellspacing: string

    private style: string

    private name: string

    private after: string

    private htmlRowsVector: Vector
public constructor (before: string, cellpadding: string, cellspacing: string, after: string){

            super();
        var before = before
var cellpadding = cellpadding
var cellspacing = cellspacing
var after = after
this.before= before;
    
this.cellpadding= cellpadding;
    
this.cellspacing= cellspacing;
    
this.after= after;
    
this.htmlRowsVector= new Vector();
    
addAttribute(this.BORDER, CommonPhoneStrings.getInstance()!.ZERO);
    
addAttribute(this.CELLPADDING, this.cellpadding);
    
addAttribute(this.CELLSPACING, this.cellspacing);
    
addAttribute(this.STYLE, this.BORDERCOLLAPSE);
    
}


    public addRow(htmlRow: HtmlRow){
var htmlRow = htmlRow

                        if(this.numberOfColumns < htmlRow!.getNumberOfColumns())
                        this.numberOfColumns= htmlRow!.getNumberOfColumns()
this.htmlRowsVector!.add(htmlRow);
    
}


    public toString(): string{

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    

    var result: string = stringUtil!.EMPTY_STRING;
        
        
;
    

    var attributeKeys: any[] = otherAttributes!.keySet()!.toTypedArray()!;
        
        
;
    
result= this.before;
    
result += this.START;
    
result += " ";
    




                        for (
    var i: number = 0;
        
        
i < attributeKeys!.length; i++)
        {

    var key: string = attributeKeys[i]! as String;
        
        
;
    

    var value: string = otherAttributes!.get(key);

                         as String;
        
        
;
    

                        if(value != 
                                    null
                                 && value.compareTo(stringUtil!.EMPTY_STRING) != 0)
                        
                                    {
                                    result += key;
    
result += "=\"";
    
result += value;
    
result += "\" ";
    

                                    }
                                
}

result += this.END;
    

    var size: number = this.htmlRowsVector!.length!;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {
result += this.htmlRowsVector!.get(i)!.toString();
    
result += " ";
    
}

result += this.ENDTAG;
    
result += this.after;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
}


}
                
            

