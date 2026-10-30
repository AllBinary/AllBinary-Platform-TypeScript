
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Document } from '../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { KeyListener } from './KeyListener.js';
//sameFolderImports - not GWT import - same folder const KeyListener

export interface WorkAreaJPanelInterface extends java.awt.event.KeyListener {
        

    getName(): string;

    deselect(): void;

    select(): void;

    changeZoom(factor: number): void;

    explodeAll(): void;

                //@Throws(Exception.constructor)
            
    autoRotate(increments: number, totalAngle: number): void;

                //@Throws(Exception.constructor)
            
    autoExplode(numberOfFrames: number, explodeType: number): void;

                //@Throws(Exception.constructor)
            
    autoMirror(): void;

    play(): void;

    stop(): void;

    isPlaying(): boolean;

                //@Throws(Exception.constructor)
            
    toDocument(): Document;

}

