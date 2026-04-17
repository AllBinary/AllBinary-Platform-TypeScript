
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
        



import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../java/util/Vector.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InputImageType
            extends Object
         {
        

    private hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        

    private static readonly TYPE_VECTOR: Vector = new Vector();
        
        

    public CAPTURE: InputImageType = new InputImageType("Capture", 0);
        
        

    public COMPARISON: InputImageType = new InputImageType("Comparison", 1);
        
        

    public MOTION: InputImageType = new InputImageType("Motion", 2);
        
        

    public static getInstance(imageTypeString: string): InputImageType{
var imageTypeString = imageTypeString



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap!.get(imageTypeString as Object);

                         as InputImageType;
    
}


    public static getAllAsVector(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TYPE_VECTOR;
    
}


    private readonly name: string

    private readonly index: number
private constructor (name: string, index: number){

            super();
            var name = name
var index = index
this.name= name;
    
this.index= index;
    
TYPE_VECTOR.add(this);
    
this.hashMap!.put(this.getName(), this);
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "ImageType: " +getName();
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


    public getIndex(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return index;
    
}


}
                
            

