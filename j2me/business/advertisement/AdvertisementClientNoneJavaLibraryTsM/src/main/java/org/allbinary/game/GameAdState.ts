
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
        



import { AdConfiguration } from "../../../org/allbinary/business/advertisement/AdConfiguration.js";

    
import { Advertisements } from "../../../org/allbinary/business/advertisement/Advertisements.js";

    
import { GameState } from "../../../org/allbinary/game/state/GameState.js";

    
import { VirtualKeyboardEvent } from "../../../org/allbinary/input/event/VirtualKeyboardEvent.js";

    
import { VirtualKeyboardEventHandler } from "../../../org/allbinary/input/event/VirtualKeyboardEventHandler.js";

    
import { VirtualKeyboardEventListenerInterface } from "../../../org/allbinary/input/event/VirtualKeyboardEventListenerInterface.js";

    
import { ForcedLogUtil } from "../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { AllBinaryEventObject } from "../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventStrings } from "../../../org/allbinary/logic/util/event/EventStrings.js";

    

export class GameAdState
            extends Object
        
                , VirtualKeyboardEventListenerInterface {
        

    private readonly adConfiguration: AdConfiguration

    private readonly advertisements: Advertisements = new Advertisements();
        
        
public constructor (adConfiguration: AdConfiguration){

            super();
            var adConfiguration = adConfiguration
this.adConfiguration= adConfiguration;
    
VirtualKeyboardEventHandler.getInstance()!.addListener(this);
    
}


    public initViewArray(viewArray: any[]){
var viewArray = viewArray
}


    public init(anyType: any = {}){
var anyType = anyType
this.init();
    
}


    public init(){
}


    public isShowingAt(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isShowingAt(location: number): boolean{
var location = location



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public show(){
}


    public hide(){
}


    public onEvent(eventObject: AllBinaryEventObject){
var eventObject = eventObject
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


                //@Throws(Error::class)
            
    public onVirtualKeyboardEvent(virtualKeyboardEvent: VirtualKeyboardEvent){
var virtualKeyboardEvent = virtualKeyboardEvent
}


    public processAdState(gameState: GameState, gameType: GameType){
var gameState = gameState
var gameType = gameType
}


    public processPageAdState(){
}


                //@Throws(Error::class)
            
    public playingAdState(){
}


                //@Throws(Error::class)
            
    public notPlayingAdState(){
}


    public setGameIsReady(gameIsReady: boolean){
var gameIsReady = gameIsReady
}


    public isGameIsReady(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getAdvertisements(): Advertisements{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return advertisements;
    
}


    public getAdConfiguration(): AdConfiguration{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return adConfiguration;
    
}


    private okayToShowAds: boolean= false

    public isOkayToShowPageAd(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public setOkayToShowAds(okayToShowAds: boolean){
var okayToShowAds = okayToShowAds
this.okayToShowAds= okayToShowAds;
    
}


    public isOkayToShowAds(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return okayToShowAds;
    
}


    public isEnabled(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

