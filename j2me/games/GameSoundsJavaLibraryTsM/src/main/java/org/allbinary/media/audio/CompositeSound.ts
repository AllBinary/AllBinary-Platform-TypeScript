
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Sound } from './Sound.js';
//not GWT import const Sound = globalThis.org.allbinary.media.audio.Sound;

                import { PlayerComposite } from './PlayerComposite.js';
//not GWT import const PlayerComposite = globalThis.org.allbinary.media.audio.PlayerComposite;

                import { AllBinaryMediaManager } from './AllBinaryMediaManager.js';
//not GWT import const AllBinaryMediaManager = globalThis.org.allbinary.media.audio.AllBinaryMediaManager;

                
export class CompositeSound extends Sound {
        

protected constructor (resource: string){
            super(resource);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public init(){
this.setPlayerP(new PlayerComposite(AllBinaryMediaManager.createPlayer(this.getResource()), 570));
    
}


}



