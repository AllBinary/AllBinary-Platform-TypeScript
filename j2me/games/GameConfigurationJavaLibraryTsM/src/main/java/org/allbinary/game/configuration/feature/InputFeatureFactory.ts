
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
        




export class InputFeatureFactory
            extends Object
         {
        

    private static readonly instance: InputFeatureFactory = new InputFeatureFactory();
        
        

    public static getInstance(): InputFeatureFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    public readonly REMOVE_DUPLICATE_KEY_PRESSES: InputFeature = new InputFeature("Remove Duplicate Key Presses");
        
        

    public readonly INPUT_MAPPING: InputFeature = new InputFeature("Input Mapping");
        
        

    public readonly MULTI_KEY_PRESS: InputFeature = new InputFeature("Multi Key Press");
        
        

    public readonly SINGLE_KEY_REPEAT_PRESS: InputFeature = new InputFeature("Single Key Repeat Press");
        
        

    public readonly SINGLE_KEY_PRESS: InputFeature = new InputFeature("Single Key Press");
        
        

    public isSingleKeyProcessing(): boolean{

    var features: Features = Features.getInstance()!;
        
        


    
                        if(features.isFeature(this.SINGLE_KEY_REPEAT_PRESS) || features.isFeature(this.SINGLE_KEY_PRESS))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


}
                
            

