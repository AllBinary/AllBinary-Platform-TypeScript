
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
        



import { TextFieldItem } from "../../../../../../org/allbinary/graphics/form/item/TextFieldItem.js";

    
import { ValidatorBase } from "../../../../../../org/allbinary/logic/control/validate/ValidatorBase.js";

    
import { BooleanFactory } from "../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

export class TextFieldItemValidator extends ValidatorBase {
        

    private readonly textFieldItem: TextFieldItem

    private min: number

    private max: number

    private allowOnEmpty: boolean
public constructor (textFieldItem: TextFieldItem, min: number, max: number, allowOnEmpty: boolean){

            super();
            var textFieldItem = textFieldItem
var min = min
var max = max
var allowOnEmpty = allowOnEmpty
this.textFieldItem= textFieldItem
this.min= min
this.max= max
this.allowOnEmpty= allowOnEmpty
}


    public isValid(): Boolean{

    var booleanFactory: BooleanFactory = BooleanFactory.getInstance()!;
        
        


    var result: Boolean = booleanFactory!.TRUE;
        
        


    var string: string = this.textFieldItem!.getString()!;
        
        


    var textLength: number = string.length!;
        
        


    
                        if((textLength == 0 && this.allowOnEmpty) || textLength > this.min && textLength < this.max)
                        
                                    {
                                    
                                    }
                                
                        else {
                            
    
                        if(textLength < this.min)
                        
                                    {
                                    result= booleanFactory!.FALSE

                                    }
                                
                             else 
    
                        if(textLength > this.max)
                        
                                    {
                                    result= booleanFactory!.FALSE

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
}


    public toList(): BasicArrayList{

    var list: BasicArrayList = new BasicArrayList();
        
        


    var string: string = this.textFieldItem!.getString()!;
        
        


    var textLength: number = string.length!;
        
        


    
                        if(textLength > this.min && textLength < this.max)
                        
                                    {
                                    
                                    }
                                
                        else {
                            
    var label: string = this.textFieldItem!.getLabel()!;
        
        


    var name: string = label.substring(0, label.length -2)!;
        
        


    
                        if(textLength < this.min)
                        
                                    {
                                    add(StringMaker().
                            append(name)!.append(" is to short")!.toString())

                                    }
                                
                             else 
    
                        if(textLength > this.max)
                        
                                    {
                                    add(StringMaker().
                            append(name)!.append(" is to long")!.toString())

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


}
                
            

