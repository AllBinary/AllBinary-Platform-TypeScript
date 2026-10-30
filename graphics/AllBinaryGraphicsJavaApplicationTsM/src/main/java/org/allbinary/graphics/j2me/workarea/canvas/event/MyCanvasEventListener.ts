
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

        


            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MyCanvasEvent } from './MyCanvasEvent.js';
//sameFolderImports - not GWT import - same folder const MyCanvasEvent

export interface MyCanvasEventListener {
        

    delete(evt: MyCanvasEvent): void;

                //@Throws(Exception.constructor)
            
    duplicate(evt: MyCanvasEvent): void;

    select(evt: MyCanvasEvent): void;

    rotate(evt: MyCanvasEvent): void;

    explode(evt: MyCanvasEvent): void;

                //@Throws(Exception.constructor)
            
    autoExplode(evt: MyCanvasEvent): void;

                //@Throws(Exception.constructor)
            
    center(evt: MyCanvasEvent): void;

}

