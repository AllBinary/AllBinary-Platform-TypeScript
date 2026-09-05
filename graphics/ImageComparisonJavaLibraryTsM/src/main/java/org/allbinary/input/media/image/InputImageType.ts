
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
        
import { HashMap } from '../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InputImageType
            extends Object
         {
        

    private static hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;

    private static readonly TYPE_VECTOR: BasicArrayList = new BasicArrayListD();

    public static CAPTURE: InputImageType = new InputImageType("Capture", 0);

    public static COMPARISON: InputImageType = new InputImageType("Comparison", 1);

    public static MOTION: InputImageType = new InputImageType("Motion", 2);

    public static getInstance(imageTypeString: string): InputImageType{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InputImageType.hashMap!.get(imageTypeString) as InputImageType;
    
}


    public static getAllAsVector(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InputImageType.TYPE_VECTOR;
    
}


    private readonly name: string;

    private readonly index: number;

private constructor (name: string, index: number){

            super();
        this.name= name;
    
this.index= index;
    
InputImageType.TYPE_VECTOR.add(this);
    
InputImageType.hashMap!.put(this.getName(), this);
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "ImageType: " +this.getName();
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public getIndex(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.index;
    
}


}



