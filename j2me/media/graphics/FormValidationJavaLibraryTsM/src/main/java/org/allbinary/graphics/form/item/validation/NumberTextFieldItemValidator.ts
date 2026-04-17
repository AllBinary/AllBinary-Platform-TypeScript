
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
        



            import { Integer } from "../../../../../../java/lang/Integer.js";
        
import { Vector } from "../../../../../../java/util/Vector.js";

    
import { TextFieldItem } from "../../../../../../org/allbinary/graphics/form/item/TextFieldItem.js";

    
import { ValidatorBase } from "../../../../../../org/allbinary/logic/control/validate/ValidatorBase.js";

    
import { BooleanFactory } from "../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { SmallIntegerSingletonFactory } from "../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class NumberTextFieldItemValidator extends ValidatorBase {
        

    private readonly textFieldItem: TextFieldItem

    private readonly min: number

    private readonly max: number

    private readonly maxChars: number
public constructor (textFieldItem: TextFieldItem, maxChars: number, min: number, max: number){

            super();
            var textFieldItem = textFieldItem
var maxChars = maxChars
var min = min
var max = max
this.textFieldItem= textFieldItem;
    
this.min= min;
    
this.max= max;
    
this.maxChars= maxChars;
    
}


    isNumberValid(value: Integer): Boolean{
var value = value



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BooleanFactory.getInstance()!.TRUE;
    
}


    toNumberVector(value: Integer): Vector<any>{
var value = value



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Vector<any>();
    
}


    public isValid(): Boolean{

    var result: Boolean = BooleanFactory.getInstance()!.TRUE;
        
        
;
    

    var string: string = this.textFieldItem!.getString()!;
        
        
;
    

    var textLength: number = string.length!;
        
        
;
    

                        if(textLength > 0 && textLength < maxChars)
                        
                                    {
                                    
        try {
            Integer.parseInt(this.textFieldItem!.getString());
    

                //: 
} catch(e) 
            {
result= BooleanFactory.getInstance()!.FALSE;
    
}


                                    }
                                
                        else {
                            
                        if(textLength < 1)
                        
                                    {
                                    result= BooleanFactory.getInstance()!.FALSE;
    

                                    }
                                
                             else 
                        if(textLength > maxChars)
                        
                                    {
                                    result= BooleanFactory.getInstance()!.FALSE;
    

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
}


    public toList(): BasicArrayList{

    var list: BasicArrayList = new BasicArrayList();
        
        
;
    

    var string: string = this.textFieldItem!.getString()!;
        
        
;
    

    var textLength: number = string.length!;
        
        
;
    

    var label: string = this.textFieldItem!.getLabel()!;
        
        
;
    

    var name: string = label.substring(0, label.length -2)!;
        
        
;
    

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;
        
        
;
    

    var stringMaker: StringMaker = new StringMaker();
        
        
;
    

                        if(textLength > 0 && textLength < maxChars)
                        
                                    {
                                    
        try {
            
    var number: Integer = smallIntegerSingletonFactory!.createInstance(Integer.parseInt(this.textFieldItem!.getString()))!;
        
        
;
    

                        if(number.toInt() > min)
                        
                                    {
                                    stringMaker!.delete(0, stringMaker!.length());
    
list.add(stringMaker!.append(name)!.append(" is to small")!.toString());
    

                                    }
                                
                             else 
                        if(number.toInt() > max)
                        
                                    {
                                    stringMaker!.delete(0, stringMaker!.length());
    
list.add(stringMaker!.append(name)!.append(" is to large")!.toString());
    

                                    }
                                

                //: 
} catch(e) 
            {
stringMaker!.delete(0, stringMaker!.length());
    
list.add(stringMaker!.append(name)!.append(" is not a number")!.toString());
    
}


                                    }
                                
                        else {
                            
                        if(textLength < 1)
                        
                                    {
                                    stringMaker!.delete(0, stringMaker!.length());
    
list.add(stringMaker!.append(name)!.append(" is to short")!.toString());
    

                                    }
                                
                             else 
                        if(textLength > maxChars)
                        
                                    {
                                    stringMaker!.delete(0, stringMaker!.length());
    
list.add(stringMaker!.append(name)!.append(" is to long")!.toString());
    

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


}
                
            

