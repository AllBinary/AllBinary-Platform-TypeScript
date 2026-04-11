
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
        



            import Vector from "@ohos.util.Vector";
        

//import { Vector } from "../../../../../../../java/util/Vector.js";

    
import { StringUtil } from "../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { HtmlTag } from "../../../../../../../org/allbinary/logic/visual/dhtml/html/HtmlTag.js";

    

export class HtmlRow extends HtmlTag {
        

    private readonly END: string = ">";
        
        

    private readonly START: string = "<tr ";
        
        

    private readonly ENDTAG: string = "</tr>";
        
        

    private numberOfColumns: number = 0;
        
        

    private before: string

    private after: string

    private htmlCellsVector: Vector
public constructor (before: string, after: string){

            super();
            var before = before
var after = after
this.before= before.toCharArray()
                                        .slice(0, ).join('')
                                    ;
    
this.after= after.toCharArray()
                                        .slice(0, ).join('')
                                    ;
    
this.htmlCellsVector= new Vector();
    
}


    public addCell(htmlCell: HtmlCell){
var htmlCell = htmlCell
this.htmlCellsVector!.add(htmlCell);
    
this.numberOfColumns++;
    
}


    public getNumberOfColumns(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return numberOfColumns;
    
}


    public toString(): string{

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    

    var result: string = stringUtil!.EMPTY_STRING;
        
        
;
    

    var attributeKeys: any[] = otherAttributes!.keySet()!.toTypedArray()!;
        
        
;
    

    var attributeSize: number = attributeKeys!.length
                ;
        
        
;
    

    var cellSize: number = htmlCellsVector!.length!;
        
        
;
    
result= before;
    
result += START;
    
result += " ";
    




                        for (
    var i: number = 0;
        
        
i < attributeSize; i++)
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

result += END;
    




                        for (
    var i: number = 0;
        
        
i < cellSize; i++)
        {
result += htmlCellsVector!.get(i)!.toString();
    
result += " ";
    
}

result += ENDTAG;
    
result += after;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
}


}
                
            

