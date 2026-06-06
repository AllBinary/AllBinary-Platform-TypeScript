
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Input } from './Input.js';

export class InputFactory
            extends Object
         {
        

    private static instance: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): InputFactory{

                        if(InputFactory.instance == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    InputFactory.instance= new InputFactory();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InputFactory.instance as InputFactory;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    public readonly KEY_CODE_LABEL: string = "KeyCode: ";

    public readonly DEVICE_ID_LABEL: string = "DeviceId: ";

    public readonly MAX: number = SmallIntegerSingletonFactory.getInstance()!.getMin()!;

    readonly inputIntegerArray: Input[] = new Array(this.MAX);

    public readonly NO_INPUT: Input = new Input(0, this.commonStrings!.UNKNOWN);

private constructor (){

            super();
        
    var size: number = this.inputIntegerArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
this.inputIntegerArray[index]= this.NO_INPUT;
    
}

}


    public add(id: number, input: Input){
this.inputIntegerArray[id]= input;
    
}


    public getInstanceById(id: number): Input{

                        if(id < 0)
                        
                                    {
                                    id=  -id;
    

                                    }
                                

                        if(id > this.inputIntegerArray!.length)
                        
                                    {
                                    this.logUtil!.putF(new StringMaker().append("Warning id: ")!.appendint(id)!.toString(), this, this.commonStrings!.GET_INSTANCE);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.NO_INPUT;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.inputIntegerArray[id]!;
    
}


}
                
            

