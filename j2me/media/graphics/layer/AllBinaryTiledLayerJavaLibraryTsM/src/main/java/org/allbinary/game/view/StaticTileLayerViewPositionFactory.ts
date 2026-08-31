
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { ViewPositionBase } from '../../../../org/allbinary/view/ViewPositionBase.js';
      //not GWT import const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;

      
import { ViewPositionFactoryInterface } from '../../../../org/allbinary/view/ViewPositionFactoryInterface.js';
      //not GWT import const ViewPositionFactoryInterface = globalThis.org.allbinary.view.ViewPositionFactoryInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StaticTileLayerIntoPositionViewPosition } from './StaticTileLayerIntoPositionViewPosition.js';
//not GWT import const  = globalThis.org.allbinary.game.view.StaticTileLayerIntoPositionViewPosition;

                
export class StaticTileLayerViewPositionFactory
            extends Object
         implements ViewPositionFactoryInterface {
        

                //@Throws(Exception.constructor)
            
    public getInstance(): ViewPositionBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StaticTileLayerIntoPositionViewPosition();
    
}


}



