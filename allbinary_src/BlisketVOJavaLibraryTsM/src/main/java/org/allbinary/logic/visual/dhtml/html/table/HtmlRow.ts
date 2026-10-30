
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

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HtmlCell } from './HtmlCell.js';
//not GWT import - same folder const HtmlCell

export class HtmlRow extends HtmlTag {
        

    private readonly END: string = ">";

    private readonly START: string = "<tr ";

    private readonly ENDTAG: string = "</tr>";

    private numberOfColumns: number = 0;

    private before: string;

    private after: string;

    private htmlCellsVector: BasicArrayList;

public constructor (before: string, after: string){

            super();
        this.before= before.toCharArray().slice(0, ).join('');
    
this.after= after.toCharArray().slice(0, ).join('');
    
this.htmlCellsVector= new BasicArrayListD();
    
}


    public addCell(htmlCell: HtmlCell){
this.htmlCellsVector!.add(htmlCell);
    
this.numberOfColumns++;
    
}


    public getNumberOfColumns(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.numberOfColumns;
    
}


    public toString(): string{

    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    

    let result: string = stringUtil!.EMPTY_STRING;;
    

    let attributeKeys: any[] = this.otherAttributes!.keySet()!.()!;;
    

    let attributeSize: number = attributeKeys!.length
                ;;
    

    let cellSize: number = this.htmlCellsVector!.size()!;;
    
result= this.before;
    
result += this.START;
    
result += " ";
    




                        for (
    let i: number = 0;i < attributeSize; i++)
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
    




                        for (
    let i: number = 0;i < cellSize; i++)
        {
result += this.htmlCellsVector!.get(i)!.toString();
    
result += " ";
    
}

result += this.ENDTAG;
    
result += this.after;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
}


}

