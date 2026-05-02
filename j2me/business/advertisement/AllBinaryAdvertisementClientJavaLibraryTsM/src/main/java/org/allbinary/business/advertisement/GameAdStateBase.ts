
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
        



            import { Object } from "../../../../java/lang/Object.js";


        
            import { Exception } from "../../../../java/lang/Exception.js";
        
import { GameType } from "../../../../org/allbinary/game/GameType.js";

    
import { GameState } from "../../../../org/allbinary/game/state/GameState.js";

    
import { ForcedLogUtil } from "../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { AllBinaryEventObject } from "../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventStrings } from "../../../../org/allbinary/logic/util/event/EventStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AdConfiguration } from "./AdConfiguration.js";
import { Advertisements } from "./Advertisements.js";

export class GameAdStateBase
            extends Object
         {
        

    readonly adConfigurationP: AdConfiguration

    readonly advertisementsP: Advertisements = new Advertisements();

    okayToShowAdsP: boolean= false
public constructor (adConfiguration: AdConfiguration){

            super();
            //var adConfiguration = adConfiguration
this.adConfigurationP= adConfiguration;
    
}


    public initViewArray(viewArray: any[]){
var viewArray = viewArray
}


    public onStart(anyType: any = {}){
var anyType = anyType
this.init();
    
}


    public init(){
}


    public isShowingAtLocation(location: number): boolean{
var location = location



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
var eventObject = eventObject
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    public processAdState(gameState: GameState, gameType: GameType){
var gameState = gameState
var gameType = gameType
}


    public processPageAdState(){
}


                //@Throws(Exception::class)
            
    public playingAdState(){
}


                //@Throws(Exception::class)
            
    public playingAdState(width: number, height: number){
var width = width
var height = height
}


                //@Throws(Exception::class)
            
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
var okayToShowAds = okayToShowAds
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
                
            

