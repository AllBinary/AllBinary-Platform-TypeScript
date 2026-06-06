
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
import { InputFactory } from '../../../../../org/allbinary/game/input/InputFactory.js';
      
import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TouchButtonInput } from './TouchButtonInput.js';
import { BasicTouchInputFactory } from './BasicTouchInputFactory.js';

export class CancelTouchButtonInputFactory
            extends Object
         {
        

    private static instance: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): CancelTouchButtonInputFactory{

                        if(CancelTouchButtonInputFactory.instance == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    CancelTouchButtonInputFactory.instance= new CancelTouchButtonInputFactory();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CancelTouchButtonInputFactory.instance as CancelTouchButtonInputFactory;
    
}


    private readonly cancelInputArray: TouchButtonInput[] = new Array(InputFactory.getInstance()!.MAX);

private constructor (){

            super();
        
    var basicTouchInputFactory: BasicTouchInputFactory = BasicTouchInputFactory.getInstance()!;;
    




                        for (
    var index: number = this.cancelInputArray!.length -1;index >= 0; index--)
        {
this.cancelInputArray[index]= basicTouchInputFactory!.NONE;
    
}

this.cancelInputArray[basicTouchInputFactory!.UP.getId()]= basicTouchInputFactory!.DOWN;
    
this.cancelInputArray[basicTouchInputFactory!.DOWN.getId()]= basicTouchInputFactory!.UP;
    
this.cancelInputArray[basicTouchInputFactory!.LEFT.getId()]= basicTouchInputFactory!.RIGHT;
    
this.cancelInputArray[basicTouchInputFactory!.RIGHT.getId()]= basicTouchInputFactory!.LEFT;
    
}


    public getCancel(touchButtonInput: TouchButtonInput): TouchButtonInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cancelInputArray[touchButtonInput!.getId()]!;
    
}


}
                
            

