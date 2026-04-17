
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
        













        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OrientationData
            extends Object
         {
        

    private static readonly SINGLETON: OrientationData = new OrientationData();
        
        

    public static getInstance(): OrientationData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}

private constructor (){

            super();
            }


    public readonly ORIENTATION_SENSOR_INPUT: string = "Orientation Sensor Input";
        
        

    public readonly ORIENTATION_TYPE: string = "Orientation Type";
        
        

}
                
            

