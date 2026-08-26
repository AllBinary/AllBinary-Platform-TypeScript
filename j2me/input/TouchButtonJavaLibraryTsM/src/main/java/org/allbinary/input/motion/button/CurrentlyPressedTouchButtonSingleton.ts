
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
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TouchButtonInput } from './TouchButtonInput.js';

export class CurrentlyPressedTouchButtonSingleton
            extends Object
         {
        

    private static readonly instance: CurrentlyPressedTouchButtonSingleton = new CurrentlyPressedTouchButtonSingleton();

    public static getInstance(): CurrentlyPressedTouchButtonSingleton{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CurrentlyPressedTouchButtonSingleton.instance;
    
}


    readonly list: BasicArrayList = new BasicArrayListD();

protected constructor (){

            super();
        }


    public size(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list.size();;
    
}


    public removeAt(index: number): TouchButtonInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list.removeAt(index) as TouchButtonInput;
    
}


    public remove(touchButtonInput: TouchButtonInput): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list.remove(touchButtonInput);;
    
}


    public get(index: number): TouchButtonInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list.objectArray[index]! as TouchButtonInput;
    
}


    public contains(touchButtonInput: TouchButtonInput): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list.contains(touchButtonInput);;
    
}


    public add(touchButtonInput: TouchButtonInput){
this.list.add(touchButtonInput);
    
}


}
                
            

