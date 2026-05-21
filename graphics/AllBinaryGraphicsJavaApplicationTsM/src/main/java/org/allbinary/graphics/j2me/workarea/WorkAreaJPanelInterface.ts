
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Document } from '../../../../../org/w3c/dom/Document.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { KeyListener } from './KeyListener.js';

export interface WorkAreaJPanelInterface extends java.awt.event.KeyListener {
        

    getName(): string

    deselect()

    select()

    changeZoom(factor: number)

    explodeAll()

                //@Throws(Exception.constructor)
            
    autoRotate(increments: number, totalAngle: number)

                //@Throws(Exception.constructor)
            
    autoExplode(numberOfFrames: number, explodeType: number)

                //@Throws(Exception.constructor)
            
    autoMirror()

    play()

    stop()

    isPlaying(): boolean

                //@Throws(Exception.constructor)
            
    toDocument(): Document

}
                
            

