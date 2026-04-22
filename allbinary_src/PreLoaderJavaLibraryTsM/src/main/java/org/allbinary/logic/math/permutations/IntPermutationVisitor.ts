
        /* Generated Code Do Not Modify */
        



import { Visitor } from "../../../../../org/allbinary/logic/util/visitor/Visitor.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { StringBuilder } from "./StringBuilder.js";

export class IntPermutationVisitor extends Visitor {
        

    readonly data: number[]
public constructor (data: number[]){

            super();
        var data = data
this.data= data;
    
}


    private stringBuilder: StringBuilder = new StringBuilder();
        
        

    public visit(anyType: any = {}): any{
var anyType = anyType
stringBuilder!.delete(0, stringBuilder!.length());
    
this.print(this.data, stringBuilder);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public print(data: number[]){
var data = data

    var stringBuilder: StringBuilder = new StringBuilder();
        
        
;
    
this.print(data, stringBuilder);
    
}


    public print(data: number[], stringBuilder: StringBuilder){
var data = data
var stringBuilder = stringBuilder

    var size: number = data.length
                ;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {
stringBuilder!.append(data[i]!);
    
stringBuilder!.append(CommonSeps.getInstance()!.SPACE);
    
}

console.log(stringBuilder!.toString());
    
}


}
                
            

