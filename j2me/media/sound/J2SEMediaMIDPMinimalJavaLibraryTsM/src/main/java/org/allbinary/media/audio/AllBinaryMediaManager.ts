
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
//not plain js import { BufferedInputStream } 
const BufferedInputStream = (globalThis.java?.io?.BufferedInputStream ?? class {}) as typeof globalThis.java.io.BufferedInputStream;
type BufferedInputStream<T = any, U = any> = typeof BufferedInputStream extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BufferedInputStream;

import { ByteArrayInputStream } from '../../../../java/io/ByteArrayInputStream.js';
//not GWT import const ByteArrayInputStream

import { IOException } from '../../../../java/io/IOException.js';
//not GWT import const IOException

import { InputStream } from '../../../../java/io/InputStream.js';
//not GWT import const InputStream

import { Manager } from '../../../../javax/microedition/media/Manager.js';
//not GWT import const Manager

import { MediaException } from '../../../../javax/microedition/media/MediaException.js';
//not GWT import const MediaException

import { Player, PlayerI } from '../../../../javax/microedition/media/Player.js';
//not GWT import const Player

import { TsUtil } from '../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil

import { AudioContentTypeDataFactory } from '../../../../org/allbinary/audio/AudioContentTypeDataFactory.js';
//not GWT import const AudioContentTypeDataFactory

//not plain js import { ResourceUtil } 
const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;
type ResourceUtil<T = any, U = any> = typeof ResourceUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ResourceUtil;

import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features

import { GameFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js';
//not GWT import const GameFeatureFactory

import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
//not GWT import const ProgressCanvasFactory

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Sounds } from './Sounds.js';
//sameFolderImports - not GWT import - same folder const Sounds
import { SoundsFactoryInterface } from './SoundsFactoryInterface.js';
//sameFolderImports - not GWT import - same folder const SoundsFactoryInterface
import { NoPlayer } from './NoPlayer.js';
//sameFolderImports - not GWT import - same folder const NoPlayer
import { PCClipWavPlayer } from './PCClipWavPlayer.js';
//sameFolderImports - not GWT import - same folder const PCClipWavPlayer
//J2SEMediaMIDPMinimalJavaLibrary
export class AllBinaryMediaManager
            extends Object
         {
        

    private static readonly THIS: string = "AllBinaryMediaManagerPC";

    public static isMuted(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public static setMuted(aMuted: boolean){
}


    public static update(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                //@Throws(Exception.constructor)
            
    public static init(soundsFactoryInterface: SoundsFactoryInterface){

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

    let commonString: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.putF(commonString!.START, AllBinaryMediaManager.THIS, commonString!.INIT);
    
ProgressCanvasFactory.getInstance()!.addNormalPortion(50, "Media Manager");
    
new Sounds(soundsFactoryInterface).init();
    
}


                //@Throws(Exception.constructor)
            
    public static shutdown(soundsFactoryInterface: SoundsFactoryInterface){
new Sounds(soundsFactoryInterface).stopAll();
    
new Sounds(soundsFactoryInterface).closeAll();
    
TsUtil.getInstance()!.gc();
    
}


    private static readonly CREATE_PLAYER: string = "createPlayer";

                //@Throws(Exception.constructor)
            
    public static createPlayer(resource: string): Player{

                        if(resource.startsWith(Manager.TONE_DEVICE_LOCATOR))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AllBinaryMediaManager.createPlayerFromInputStream(new ByteArrayInputStream(NullUtil.getInstance()!.NULL_BYTE_ARRAY), AudioContentTypeDataFactory.getInstance()!.MIME_AUDIO_TONE.getName());;
    

                                    }
                                
                             else 
                        if(Features.getInstance()!.isFeature(GameFeatureFactory.getInstance()!.SOUND))
                        
                                    {
                                    
 try { 
    let inputStream: InputStream = ResourceUtil.getInstance()!.getResourceAsStream(resource)!;;
    

    let bufferedInputStream: BufferedInputStream = new BufferedInputStream(inputStream);;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new PCClipWavPlayer(bufferedInputStream);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

    let commonString: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.put(commonString!.EXCEPTION, AllBinaryMediaManager.THIS, CREATE_PLAYER, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoPlayer.NO_PLAYER;
    

 }
   }
 

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoPlayer.NO_PLAYER;
    

                        }
                            
}


                //@Throws(IOException.constructor, MediaException.constructor)
            
    public static createPlayerFromInputStream(stream: InputStream, type: string): Player{



                            throw new MediaException("No Impl");
                    
}


                //@Throws(MediaException.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public static playTone(frequency: number, time: number, volume: number){



                            throw new MediaException("No Impl");
                    
}


    public static isInitialized(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


private constructor (){

            super();
        }


}

