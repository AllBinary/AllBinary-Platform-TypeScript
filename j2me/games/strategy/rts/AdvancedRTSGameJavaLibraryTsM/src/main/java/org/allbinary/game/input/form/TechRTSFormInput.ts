
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2006 AllBinary 
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
        



import { RTSGameStrings } from "../../../../../org/allbinary/game/layer/RTSGameStrings.js";

    
import { RTSInterface } from "../../../../../org/allbinary/game/layer/RTSInterface.js";

    
import { RTSLayer } from "../../../../../org/allbinary/game/layer/RTSLayer.js";

    
import { RTSPlayerLayerInterface } from "../../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js";

    
import { TechnologyRTSInterfaceImageItem } from "../../../../../org/allbinary/game/layer/TechnologyRTSInterfaceImageItem.js";

    
import { Capital } from "../../../../../org/allbinary/game/layer/capital/Capital.js";

    
import { TechEventHandler } from "../../../../../org/allbinary/game/rts/technology/event/TechEventHandler.js";

    
import { CustomItem } from "../../../../../org/allbinary/graphics/form/item/CustomItem.js";

    
import { BuildingSound } from "../../../../../org/allbinary/media/audio/BuildingSound.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { BooleanFactory } from "../../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { Group } from "../../../../../org/allbinary/game/identification/Group.js";

    
import { AllBinaryGameLayerManager } from "../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { GameNotificationEvent } from "../../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js";

    
import { GameNotificationEventHandler } from "../../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js";

    
import { CollidableDestroyableDamageableLayer } from "../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js";

    
import { BasicColorFactory } from "../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { AllBinaryEventObject } from "../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { SmallIntegerSingletonFactory } from "../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { ErrorSound } from "../../../../../org/allbinary/media/audio/ErrorSound.js";

    
import { BasicGeographicMap } from "../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCompositeInterface } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { RTSFormInput } from "./RTSFormInput.js";

export class TechRTSFormInput extends RTSFormInput {
        

    private readonly EVENT: AllBinaryEventObject = new AllBinaryEventObject(this);
        
        

    readonly noMoneyGameNotificationEvent: GameNotificationEvent
public constructor (groupInterface: Group[])                        

                            : super(groupInterface){

            super();
                //var groupInterface = groupInterface


                            //For kotlin this is before the body of the constructor.
                    

    var basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;
        
        
;
    
this.noMoneyGameNotificationEvent= new GameNotificationEvent(this, RTSGameStrings.getInstance()!.NO_MONEY, SmallIntegerSingletonFactory.getInstance()!.getInstance(2), basicColorFactory!.WHITE, BooleanFactory.getInstance()!.FALSE);
    
}


                //@Throws(Error::class)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
    //var allBinaryGameLayerManager = allBinaryGameLayerManager
super.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
    

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = allBinaryGameLayerManager as GeographicMapCompositeInterface;
        
        
;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        
;
    
this.noMoneyGameNotificationEvent!.setBasicColorP(geographicMapInterface!.getForegroundBasicColor());
    
}


                //@Throws(Error::class)
            
    public process(associatedRtsLayer: CollidableDestroyableDamageableLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, item: CustomItem, itemIndex: number){
    //var associatedRtsLayer = associatedRtsLayer
    //var rtsPlayerLayerInterface = rtsPlayerLayerInterface
    //var layerManager = layerManager
    //var item = item
    //var itemIndex = itemIndex
super.process(layerManager);
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

    var stringMaker: StringMaker = new StringMaker();
        
        
;
    

    var technologyRTSInterfaceImageItem: TechnologyRTSInterfaceImageItem = item as TechnologyRTSInterfaceImageItem;
        
        
;
    

    var rtsInterface: RTSInterface = technologyRTSInterfaceImageItem!.getRtsInterface()!;
        
        
;
    
this.logUtil!.putF(stringMaker!.append("isUpgradeable: ")!.appendboolean(rtsInterface!.isUpgradeable())!.toString(), this, commonStrings!.PROCESS);
    

                        if(rtsInterface!.isUpgradeable())
                        
                                    {
                                    
    var cost: number = rtsInterface!.getUpgradeCost()!;
        
        
;
    

    var capital: Capital = rtsPlayerLayerInterface!.getCapital()!;
        
        
;
    
stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.appendint(cost)!.append("<=")!.appendint(capital.getTotalMoney())!.toString(), this, commonStrings!.PROCESS);
    

                        if(cost <= capital.getTotalMoney())
                        
                                    {
                                    rtsPlayerLayerInterface!.add(BuildingSound.getInstance());
    
capital.removeMoney(cost);
    
rtsInterface!.upgrade();
    
technologyRTSInterfaceImageItem!.update();
    
TechEventHandler.getInstance()!.fireEvent(EVENT);
    

                                    }
                                
                        else {
                            rtsPlayerLayerInterface!.add(ErrorSound.getInstance());
    

                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface();

                        )
                        
                                    {
                                    GameNotificationEventHandler.getInstance()!.fireEvent(noMoneyGameNotificationEvent);
    

                                    }
                                

                        }
                            

                                    }
                                
}


}
                
            

