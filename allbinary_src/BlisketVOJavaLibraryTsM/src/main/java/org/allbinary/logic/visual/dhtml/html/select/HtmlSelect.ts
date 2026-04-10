
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

    
import { LineReader } from "../../../../../../../org/allbinary/logic/io/LineReader.js";

    
import { StringUtil } from "../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { HtmlTag } from "../../../../../../../org/allbinary/logic/visual/dhtml/html/HtmlTag.js";

    

export class HtmlSelect extends HtmlTag {
        

    private readonly END: string = ">";
        
        

    private readonly STARTSELECT: string = "<SELECT ";
        
        

    private readonly ENDSELECT: string = "</SELECT>";
        
        

    private readonly SIZE: string = "SIZE=\"";
        
        

    private readonly NAME: string = "NAME=\"";
        
        

    private readonly STARTOPTION: string = "<OPTION";
        
        

    private readonly SELETED: string = "SELECTED";
        
        

    private readonly ENDOPTION: string = "</OPTION>";
        
        

    private before: string

    private name: string

    private after: string

    private size: string

    private selected: string

    private options: Vector

    private multiple: string = "multiple";
        
        

    private isMultipleSelect: boolean = false;
        
        
public constructor (before: string, size: string, name: string, after: string){

            super();
            var before = before
var size = size
var name = name
var after = after
this.before= before
this.size= size
this.name= name
this.after= after
this.options= Vector()
}


    public addOption(key: string){
var key = key
this.options.add(key)
}


    public addOptions(fileName: string){
var fileName = fileName

        try {
            
    var lineReader: LineReader = new LineReader(fileName);
        
        


        while(lineReader!.hasNext())
        {

    var option: string = lineReader!.next()!;
        
        

this.addOption(option)
}

} catch(e: Exception)
            {
this.addOption("Error")
}

}


    public setSelected(selected: string){
var selected = selected
this.selected= selected
}


    public isMultiple(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isMultipleSelect;
    
}


    public setMultiple(value: boolean){
var value = value
this.isMultipleSelect= value
}


    getOptions(): string{

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        


    var result: string = stringUtil!.EMPTY_STRING;
        
        


    var optionsArray: any = {}[] = options.toArray()!;
        
        


    var optionsSize: number = optionsArray!.length
                ;
        
        





                        for (
    var i: number = 0;
        
        
i < optionsSize; i++)
        {

    var value: string = optionsArray[i]! as String;
        
        


                        if(value != 
                                    null
                                 && value.compareTo(stringUtil!.EMPTY_STRING) != 0)
                        
                                    {
                                    result += STARTOPTION
result += END
result += value
result += ENDOPTION

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
}


    public toString(): string{

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        


    var result: string = stringUtil!.EMPTY_STRING;
        
        


    var attributeKeys: any = {}[] = otherAttributes!.keySet()!.toTypedArray()!;
        
        


    var attributeSize: number = attributeKeys!.length
                ;
        
        

result= before
result += STARTSELECT
result += NAME
result += name
result += "\" "
result += SIZE
result += size
result += "\" "




                        for (
    var i: number = 0;
        
        
i < attributeSize; i++)
        {

    var key: string = attributeKeys[i]! as String;
        
        


    var value: string = otherAttributes!.get(key) as String;
        
        


                        if(value != 
                                    null
                                 && value.compareTo(stringUtil!.EMPTY_STRING) != 0)
                        
                                    {
                                    result += key
result += "=\""
result += value
result += "\" "

                                    }
                                
}


                        if(this.isMultiple())
                        result += " " +multiple +" "
result += END
result += getOptions()
result += ENDSELECT
result += after



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
}


}
                
            

