
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
        



            import { Object } from "../../../../../java/lang/Object.js";


        
import { Document } from "../../../../../org/w3c/dom/Document.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { KeyListener } from "./KeyListener.js";

export interface WorkAreaJPanelInterface extends java.awt.event.KeyListener {
        

    getName(): string

    deselect()

    select()

    changeZoom(factor: number)

    explodeAll()

                //@Throws(Error::class)
            
    autoRotate(increments: number, totalAngle: number)

                //@Throws(Error::class)
            
    autoExplode(numberOfFrames: number, explodeType: number)

                //@Throws(Error::class)
            
    autoMirror()

    play()

    stop()

    isPlaying(): boolean

                //@Throws(Error::class)
            
    toDocument(): Document

}
                
            

