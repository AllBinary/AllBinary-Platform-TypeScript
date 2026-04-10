
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
        



import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { Input } from "../../../../../org/allbinary/game/input/Input.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonLabels } from "../../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class InputMapping
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly hashtable: Hashtable<Any, Any> = new Hashtable<Any, Any>();
        
        

    private readonly mappedList: BasicArrayList = new BasicArrayList();
        
        
protected constructor (){

            super();
            }


    public getTotalMapped(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashtable.length;
    
}


    isDefaultNew(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    getDefault(): InputToGameKeyMapping{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InputToGameKeyMapping.NULL_INPUT_TO_GAME_KEY_MAPPING;
    
}


    removeAll(){
clear()
clear()
}


    public remove(input: Input, mappedToInput: Input){
    //var input = input
    //var mappedToInput = mappedToInput

    var stringBuffer: StringMaker = new StringMaker();
        
        


    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

append(CommonLabels.getInstance()!.START_LABEL)
append(stringUtil!.toString(input))
append(" == ")
append(stringUtil!.toString(mappedToInput))
put(stringBuffer!.toString(), this, "InputMapping::remove")

    var list: BasicArrayList = this.getMappedInput(input)!;
        
        


    
                        if(list.contains(mappedToInput))
                        
                                    {
                                    remove(mappedToInput)
remove(mappedToInput)
delete(0, stringBuffer!.length())
append("Removed: ")
append(stringUtil!.toString(input))
append(" == ")
append(stringUtil!.toString(mappedToInput))
put(stringBuffer!.toString(), this, "InputMapping::remove")

                                    }
                                
                        else {
                            delete(0, stringBuffer!.length())
append("Not Deleted: ")
append(stringUtil!.toString(input))
append(" == ")
append(stringUtil!.toString(mappedToInput))
put(stringBuffer!.toString(), this, "InputMapping::remove")

                        }
                            
}


                @Throws(Exception::class)
            
    public add(inputToGameKeyMapping: InputToGameKeyMapping){
    //var inputToGameKeyMapping = inputToGameKeyMapping



                            throw Exception(commonStrings!.NOT_IMPLEMENTED)
}


    public add(input: Input, mappedToInput: Input){
    //var input = input
    //var mappedToInput = mappedToInput

    var list: BasicArrayList = this.getMappedInput(input)!;
        
        


    
                        if(!list.contains(mappedToInput))
                        
                                    {
                                    add(mappedToInput)
add(mappedToInput)

                                    }
                                
}


    public isMapped(input: Input): boolean{
    //var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.mappedList!.contains(input);
    
}


    public getMappedInput(id: Input): BasicArrayList{
    //var id = id

    var mappingInputCanBeNullList: any = {}? = this.hashtable.get(id as Object);
        
        


    
                        if(mappingInputCanBeNullList == 
                                    null
                                )
                        
                                    {
                                    
    var list: BasicArrayList = new BasicArrayList();
        
        

put(id, list)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return mappingInputCanBeNullList as BasicArrayList;
    
}


    public getHashtable(): Hashtable<Any, Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable;
    
}


}
                
            

