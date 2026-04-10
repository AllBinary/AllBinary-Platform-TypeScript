
        /* Generated Code Do Not Modify */
        



import { Visitor } from "../../../../../org/allbinary/logic/util/visitor/Visitor.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    

export class ObjectPermutationVisitor extends Visitor {
        

    readonly data: any = {}[]
public constructor (data: any = {}[]){

            super();
            var data = data
this.data= data
}


    private stringBuilder: StringBuilder = new StringBuilder();
        
        

    public visit(anyType: any = {}): any = {}{
var anyType = anyType
delete(0, stringBuilder!.length())
this.print(data, stringBuilder)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public print(data: any = {}[]){
var data = data

    var stringBuilder: StringBuilder = new StringBuilder();
        
        

this.print(data, stringBuilder)
}


    public print(data: any = {}[], stringBuilder: StringBuilder){
var data = data
var stringBuilder = stringBuilder

    var size: number = data.length
                ;
        
        





                        for (
    var i: number = 0;
        
        
i < size; i++)
        {
append(data[i]!.hashCode())
append(CommonSeps.getInstance()!.SPACE)
}

println(stringBuilder!.toString())
}


}
                
            

