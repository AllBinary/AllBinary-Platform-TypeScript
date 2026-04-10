
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
        



import { Vector } from "../../../../../../java/util/Vector.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { HtmlInput } from "../../../../../../org/allbinary/logic/visual/dhtml/html/input/HtmlInput.js";

    
import { HtmlTable } from "../../../../../../org/allbinary/logic/visual/dhtml/html/table/HtmlTable.js";

    

export class HtmlForm
            extends Object
         {
        

    private readonly FORMBEGIN: string = "<form ";
        
        

    private readonly END: string = ">";
        
        

    private readonly FORMEND: string = "</form>";
        
        

    private readonly ACTION: string = "ACTION=\"";
        
        

    private readonly GET: string = "GET\"";
        
        

    private readonly POST: string = "POST\"";
        
        

    private readonly METHODS: string[] = 
                                                        [
                                                            GET,POST
                                                        ];
        
        

    private readonly METHOD: string = "METHOD=\"";
        
        

    private method: string

    private action: string

    inputs: Vector
public constructor (action: string){

            super();
            var action = action
this.action= action
inputs= Vector()
}


    public setPost(){
method= POST
}


    public setGet(){
method= GET
}


    public addInput(htmlInput: HtmlInput){
var htmlInput = htmlInput
inputs.add(htmlInput)
}


    public addTable(htmlTable: HtmlTable){
var htmlTable = htmlTable
inputs.add(htmlTable)
}


    public toString(): string{

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        


    var result: string = stringUtil!.EMPTY_STRING;
        
        


    var inputArray: any = {}[] = inputs.toArray()!;
        
        


    var inputSize: number = inputArray!.length
                ;
        
        

result= FORMBEGIN
result += METHOD
result += method
result += "\" "
result += ACTION
result += action
result += "\" "
result += END




                        for (
    var i: number = 0;
        
        
i < inputSize; i++)
        {
result += inputArray[i]!.toString()
result += " "
}

result += FORMEND



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
}


}
                
            

