
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { RTSGameStrings } from '../../../../../org/allbinary/game/layer/RTSGameStrings.js';
      //not GWT import const RTSGameStrings = globalThis.org.allbinary.game.layer.RTSGameStrings;

      
import { RTSInterface } from '../../../../../org/allbinary/game/layer/RTSInterface.js';
      //not GWT import const RTSInterface = globalThis.org.allbinary.game.layer.RTSInterface;

      
import { RTSPlayerLayerInterface } from '../../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js';
      //not GWT import const RTSPlayerLayerInterface = globalThis.org.allbinary.game.layer.RTSPlayerLayerInterface;

      
import { TechnologyRTSInterfaceImageItem } from '../../../../../org/allbinary/game/layer/TechnologyRTSInterfaceImageItem.js';
      //not GWT import const TechnologyRTSInterfaceImageItem = globalThis.org.allbinary.game.layer.TechnologyRTSInterfaceImageItem;

      
import { Capital } from '../../../../../org/allbinary/game/layer/capital/Capital.js';
      //not GWT import const Capital = globalThis.org.allbinary.game.layer.capital.Capital;

      
import { TechEventHandler } from '../../../../../org/allbinary/game/rts/technology/event/TechEventHandler.js';
      //not GWT import const TechEventHandler = globalThis.org.allbinary.game.rts.technology.event.TechEventHandler;

      
import { ABCustomItem } from '../../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
      //not GWT import const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;

      
import { BuildingSound } from '../../../../../org/allbinary/media/audio/BuildingSound.js';
      //not GWT import const BuildingSound = globalThis.org.allbinary.media.audio.BuildingSound;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { BooleanFactory } from '../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
      //not GWT import const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;

      
import { Group } from '../../../../../org/allbinary/game/identification/Group.js';
      //not GWT import const Group = globalThis.org.allbinary.game.identification.Group;

      
import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      //not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
import { GameNotificationEvent } from '../../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js';
      //not GWT import const GameNotificationEvent = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEvent;

      
import { GameNotificationEventHandler } from '../../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js';
      //not GWT import const GameNotificationEventHandler = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEventHandler;

      
import { CollidableDestroyableDamageableLayer } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
      //not GWT import const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;

      
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      //not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      //not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      //not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not plain js import { SmallIntegerSingletonFactory } from '../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { ErrorSound } from '../../../../../org/allbinary/media/audio/ErrorSound.js';
      //not GWT import const ErrorSound = globalThis.org.allbinary.media.audio.ErrorSound;

      
import { BasicGeographicMap } from '../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      //not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
import { GeographicMapCompositeInterface } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js';
      //not GWT import const GeographicMapCompositeInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCompositeInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RTSFormInput } from './RTSFormInput.js';
//not GWT import const  = globalThis.org.allbinary.game.input.form.RTSFormInput;

                
export class TechRTSFormInput extends RTSFormInput {
        

    private readonly EVENT: AllBinaryEventObject = new AllBinaryEventObject(this);

    readonly noMoneyGameNotificationEvent: GameNotificationEvent;

public constructor (groupInterface: Group[]){
            super(groupInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    

    var basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;;
    
this.noMoneyGameNotificationEvent= new GameNotificationEvent(this, RTSGameStrings.getInstance()!.NO_MONEY, SmallIntegerSingletonFactory.getInstance()!.getAt(2), basicColorFactory!.WHITE, BooleanFactory.getInstance()!.FALSE);
    
}


                //@Throws(Exception.constructor)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
super.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
    

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = allBinaryGameLayerManager as GeographicMapCompositeInterface;;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    
this.noMoneyGameNotificationEvent!.setBasicColorP(geographicMapInterface!.getForegroundBasicColor());
    
}


                //@Throws(Exception.constructor)
            
    public processGameSpecific(associatedRtsLayer: CollidableDestroyableDamageableLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, item: ABCustomItem, itemIndex: number){
super.process(layerManager);
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    var stringMaker: StringMaker = new StringMaker();;
    

    var technologyRTSInterfaceImageItem: TechnologyRTSInterfaceImageItem = item as TechnologyRTSInterfaceImageItem;;
    

    var rtsInterface: RTSInterface = technologyRTSInterfaceImageItem!.getRtsInterface()!;;
    
this.logUtil!.putF(stringMaker!.append("isUpgradeable: ")!.appendboolean(rtsInterface!.isUpgradeable())!.toString(), this, commonStrings!.PROCESS);
    

                        if(rtsInterface!.isUpgradeable())
                        
                                    {
                                    
    var cost: number = rtsInterface!.getUpgradeCost()!;;
    

    var capital: Capital = rtsPlayerLayerInterface!.getCapital()!;;
    
stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.appendint(cost)!.append("<=")!.appendint(capital.getTotalMoney())!.toString(), this, commonStrings!.PROCESS);
    

                        if(cost <= capital.getTotalMoney())
                        
                                    {
                                    rtsPlayerLayerInterface!.add(BuildingSound.getInstance());
    
capital.removeMoney(cost);
    
rtsInterface!.upgrade();
    
technologyRTSInterfaceImageItem!.update();
    
TechEventHandler.getInstance()!.fireEvent(this.EVENT);
    

                                    }
                                
                        else {
                            rtsPlayerLayerInterface!.add(ErrorSound.getInstance());
    

                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    GameNotificationEventHandler.getInstance()!.fireEvent(this.noMoneyGameNotificationEvent);
    

                                    }
                                

                        }
                            

                                    }
                                
}


}



