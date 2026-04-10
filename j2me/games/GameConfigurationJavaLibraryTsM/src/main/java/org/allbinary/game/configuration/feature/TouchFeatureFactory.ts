
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
        




export class TouchFeatureFactory
            extends Object
         {
        

    private static readonly instance: TouchFeatureFactory = new TouchFeatureFactory();
        
        

    public static getInstance(): TouchFeatureFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    public readonly TOUCH_ENABLED: TouchFeature = new TouchFeature("Touch Enabled");
        
        

    public readonly SHOW_SCREEN_BUTTONS: TouchFeature = new TouchFeature("Show");
        
        

    public readonly AUTO_HIDE_SHOW_SCREEN_BUTTONS: TouchFeature = new TouchFeature("Auto Hide (One Level)");
        
        

    public readonly HIDE_SCREEN_BUTTONS: TouchFeature = new TouchFeature("Hide");
        
        

}
                
            

