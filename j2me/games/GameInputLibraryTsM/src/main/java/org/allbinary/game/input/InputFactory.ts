
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
        



import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class InputFactory
            extends Object
         {
        

    private static readonly instance: InputFactory = new InputFactory();
        
        

    public static getInstance(): InputFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    public readonly KEY_CODE_LABEL: string = "KeyCode: ";
        
        

    public readonly DEVICE_ID_LABEL: string = "DeviceId: ";
        
        

    public readonly MAX: number = SmallIntegerSingletonFactory.getInstance()!.MIN;
        
        

    readonly inputIntegerArray: Input[] = new Array(this.MAX);
        
        

    public readonly NO_INPUT: Input = new Input(0, commonStrings!.UNKNOWN);
        
        
private constructor (){

            super();
            
    var size: number = inputIntegerArray!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
inputIntegerArray[index]= NO_INPUT
}

}


    public add(id: number, input: Input){
var id = id
var input = input
this.inputIntegerArray[id]= input
}


    public getInstance(id: number): Input{
var id = id

                        if(id < 0)
                        
                                    {
                                    id=  -id

                                    }
                                

                        if(id > inputIntegerArray!.length)
                        
                                    {
                                    logUtil!.put(StringMaker().
                            append("Warning id: ")!.appendint(id)!.toString(), this, commonStrings!.GET_INSTANCE)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NO_INPUT;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputIntegerArray[id]!;
    
}


}
                
            

