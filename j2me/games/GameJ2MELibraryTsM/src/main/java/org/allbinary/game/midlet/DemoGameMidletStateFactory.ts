
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
        




export class DemoGameMidletStateFactory
            extends Object
         {
        

    private STATE: DemoGameMidletStateFactory = new DemoGameMidletStateFactory();
        
        

    public static getInstance(): DemoGameMidletStateFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return STATE;
    
}


    public readonly NONE: DemoGameMidletState = new DemoGameMidletState();
        
        

    public readonly START_DEMO: DemoGameMidletState = new DemoGameMidletState();
        
        

    public readonly START_GAME: DemoGameMidletState = new DemoGameMidletState();
        
        

    public readonly START_INPUT_MAPPING: DemoGameMidletState = new DemoGameMidletState();
        
        
private constructor (){

            super();
            }


}
                
            

