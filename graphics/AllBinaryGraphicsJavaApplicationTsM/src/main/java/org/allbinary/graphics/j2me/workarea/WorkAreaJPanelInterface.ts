
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
        



import { Document } from "../../../../../org/w3c/dom/Document.js";

    

export interface WorkAreaJPanelInterface extends java.awt.event.KeyListener {
        

    public getName(): string

    public deselect()

    public select()

    public changeZoom(factor: number)

    public explodeAll()

                //@Throws(Error::class)
            
    public autoRotate(increments: number, totalAngle: number)

                //@Throws(Error::class)
            
    public autoExplode(numberOfFrames: number, explodeType: number)

                //@Throws(Error::class)
            
    autoMirror()

    public play()

    public stop()

    public isPlaying(): boolean

                //@Throws(Error::class)
            
    public toDocument(): Document

}
                
            

