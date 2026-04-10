
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
        




export class InputProcessorFactory
            extends Object
         {
        

    private static readonly instance: InputProcessorFactory = new InputProcessorFactory();
        
        

    public static getInstance(): InputProcessorFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly inputProcessor: InputProcessor = new InputProcessor();
        
        

    public getInputProcessor(): InputProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputProcessor;
    
}


}
                
            

