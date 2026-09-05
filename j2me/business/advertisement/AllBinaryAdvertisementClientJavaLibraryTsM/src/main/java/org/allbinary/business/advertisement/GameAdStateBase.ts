
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { GameType } from '../../../../org/allbinary/game/GameType.js';
//not GWT import const GameType = globalThis.org.allbinary.game.GameType;

      
import { GameState } from '../../../../org/allbinary/game/state/GameState.js';
//not GWT import const GameState = globalThis.org.allbinary.game.state.GameState;

      
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { EventStrings } from '../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AdConfiguration } from './AdConfiguration.js';
//not GWT import - same folder const AdConfiguration = globalThis.org.allbinary.business.advertisement.AdConfiguration;

                import { Advertisements } from './Advertisements.js';
//not GWT import - same folder const Advertisements = globalThis.org.allbinary.business.advertisement.Advertisements;

                
export class GameAdStateBase
            extends Object
         {
        

    readonly adConfigurationP: AdConfiguration;

    readonly advertisementsP: Advertisements = new Advertisements();

    okayToShowAdsP: boolean= false;

public constructor (adConfiguration: AdConfiguration){

            super();
        this.adConfigurationP= adConfiguration;
    
}


    public initViewArray(viewArray: any[]){
}


    public onStart(anyType: any = {}){
this.init();
    
}


    public init(){
}


    public isShowingAtLocation(location: number): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isShowingAt(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public show(){
}


    public hide(){
}


    public onEvent(eventObject: AllBinaryEventObject){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    public processAdState(gameState: GameState, gameType: GameType){
}


    public processPageAdState(){
}


                //@Throws(Exception.constructor)
            
    public playingAdState(){
}


                //@Throws(Exception.constructor)
            
    public playingAdStateWH(width: number, height: number){
}


                //@Throws(Exception.constructor)
            
    public notPlayingAdState(){
}


    public setGameIsReady(gameIsReady: boolean){
}


    public isGameIsReady(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getAdvertisements(): Advertisements{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.advertisementsP;
    
}


    public getAdConfiguration(): AdConfiguration{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.adConfigurationP;
    
}


    public isOkayToShowPageAd(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public setOkayToShowAds(okayToShowAds: boolean){
this.okayToShowAdsP= okayToShowAds;
    
}


    public isOkayToShowAds(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.okayToShowAdsP;
    
}


    public isEnabled(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}



