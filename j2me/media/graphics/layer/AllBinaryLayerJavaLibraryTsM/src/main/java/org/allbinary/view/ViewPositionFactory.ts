
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

        


            import { Object } from '../../../java/lang/Object.js';
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ViewPositionFactoryInterface } from './ViewPositionFactoryInterface.js';
//not GWT import - same folder const ViewPositionFactoryInterface = globalThis.org.allbinary.view.ViewPositionFactoryInterface;

                import { ViewPosition } from './ViewPosition.js';
//not GWT import - same folder const ViewPosition = globalThis.org.allbinary.view.ViewPosition;

                import { ViewPositionBase } from './ViewPositionBase.js';
//not GWT import - same folder const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;

                
export class ViewPositionFactory
            extends Object
         implements ViewPositionFactoryInterface {
        

    public getInstance(): ViewPositionBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ViewPosition.getInstanceD();;
    
}


}



