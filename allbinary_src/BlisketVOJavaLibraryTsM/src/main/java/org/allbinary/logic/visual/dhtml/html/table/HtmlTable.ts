
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

        


//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { HtmlTag } from '../../../../../../../org/allbinary/logic/visual/dhtml/html/HtmlTag.js';
//not GWT import const HtmlTag

//not plain js import { CommonPhoneStrings } 
const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;
type CommonPhoneStrings<T = any, U = any> = typeof CommonPhoneStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonPhoneStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HtmlRow } from './HtmlRow.js';
//not GWT import - same folder const HtmlRow

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

    private readonly STYLE: string = "style";

    public readonly BORDERCOLLAPSE: string = "border-collapse: collapse";

    private numberOfColumns: number = 0;

    private before: string;

    private border: string;

    private cellpadding: string;

    private cellspacing: string;

    private style: string;

    private name: string;

    private after: string;

    private htmlRowsVector: BasicArrayList;

public constructor (before: string, cellpadding: string, cellspacing: string, after: string){

            super();
        this.before= before;
    
this.cellpadding= cellpadding;
    
this.cellspacing= cellspacing;
    
this.after= after;
    
this.htmlRowsVector= new BasicArrayListD();
    
addAttribute(this.BORDER, CommonPhoneStrings.getInstance()!.ZERO);
    
addAttribute(this.CELLPADDING, this.cellpadding);
    
addAttribute(this.CELLSPACING, this.cellspacing);
    
addAttribute(this.STYLE, this.BORDERCOLLAPSE);
    
}


    public addRow(htmlRow: HtmlRow){

                        if(this.numberOfColumns < htmlRow!.getNumberOfColumns())
                        this.numberOfColumns= htmlRow!.getNumberOfColumns()
this.htmlRowsVector!.add(htmlRow);
    
}


    public toString(): string{

    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    

    let result: string = stringUtil!.EMPTY_STRING;;
    

    let attributeKeys: any[] = this.otherAttributes!.keySet()!.()!;;
    
result= this.before;
    
result += this.START;
    
result += " ";
    




                        for (
    let i: number = 0;i < attributeKeys!.length; i++)
        {

    let key: string = attributeKeys[i]! as string;;
    

    let value: string = otherAttributes!.get(key) as string;;
    

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
    

    let size: number = this.htmlRowsVector!.size()!;;
    




                        for (
    let i: number = 0;i < size; i++)
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

