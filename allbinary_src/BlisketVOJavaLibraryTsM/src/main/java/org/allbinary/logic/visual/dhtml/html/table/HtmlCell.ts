
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
        



import { StringUtil } from "../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { HtmlTag } from "../../../../../../../org/allbinary/logic/visual/dhtml/html/HtmlTag.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class HtmlCell extends HtmlTag {
        

    private readonly END: string = ">";
        
        

    private readonly START: string = "<td ";
        
        

    private readonly ENDTAG: string = "</td>";
        
        

    private readonly HEIGHT: string = "height";
        
        

    private readonly WIDTH: string = "width";
        
        

    private height: string

    private width: string

    private before: string

    private body: string

    private after: string
public constructor (before: string, width: string, height: string, after: string){

            super();
            var before = before
var width = width
var height = height
var after = after
this.before= before.toCharArray()
                                        .slice(0, ).join('')
                                    ;
    
this.after= after.toCharArray()
                                        .slice(0, ).join('')
                                    ;
    
this.height= height.toCharArray()
                                        .slice(0, ).join('')
                                    ;
    
this.width= width.toCharArray()
                                        .slice(0, ).join('')
                                    ;
    
addAttribute(HEIGHT, this.height);
    
addAttribute(WIDTH, this.width);
    
}


    public addText(body: string){
var body = body
this.body= body;
    
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
    
result += body;
    
result += ENDTAG;
    
result += after;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
}


}
                
            

