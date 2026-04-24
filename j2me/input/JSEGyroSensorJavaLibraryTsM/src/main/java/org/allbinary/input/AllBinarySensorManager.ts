
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
        



import { BasicArrayList } from "../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListD } from "../../../org/allbinary/util/BasicArrayListD.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AllBinarySensorManager
            extends Object
         {
        

    private static readonly SINGLETON: AllBinarySensorManager = new AllBinarySensorManager();
        
        

    public static getInstance(): AllBinarySensorManager{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    public readonly ORIENTATION_SENSOR_INPUT: string = "Orientation Sensor Input";
        
        

    public readonly ORIENTATION_TYPE: string = "Orientation Type";
        
        
private constructor (){

            super();
        }


    public init(){
}


    private readonly list: BasicArrayList = new BasicArrayListD();
        
        

    public getSensorNamesList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


    public shutdown(){
}


}
                
            

