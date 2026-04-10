
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2006 AllBinary 
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
        



import { Visitor } from "../../../../org/allbinary/logic/util/visitor/Visitor.js";

    

export class SelectAdvancedRTSLayerVisitorFactory
            extends Object
        
                , SelectRTSLayerVisitorFactoryInterface {
        

    private static readonly instance: SelectAdvancedRTSLayerVisitorFactory = new SelectAdvancedRTSLayerVisitorFactory();
        
        

    public static getInstance(): SelectAdvancedRTSLayerVisitorFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    public getInstance(selectedRTSLayersPlayerGameInput: SelectedRTSLayersPlayerGameInput): Visitor{
    //var selectedRTSLayersPlayerGameInput = selectedRTSLayersPlayerGameInput



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SelectAdvancedRTSLayerVisitor(selectedRTSLayersPlayerGameInput);
    
}


}
                
            

