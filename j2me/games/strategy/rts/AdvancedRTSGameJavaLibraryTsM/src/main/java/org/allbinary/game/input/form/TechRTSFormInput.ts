
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
        
//not game specific package import { RTSGameStrings } from '../../../../../org/allbinary/game/layer/RTSGameStrings.js';
      const RTSGameStrings = globalThis.org.allbinary.game.layer.RTSGameStrings;

      
//not game specific package import { RTSInterface } from '../../../../../org/allbinary/game/layer/RTSInterface.js';
      const RTSInterface = globalThis.org.allbinary.game.layer.RTSInterface;

      
//not game specific package import { RTSPlayerLayerInterface } from '../../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js';
      const RTSPlayerLayerInterface = globalThis.org.allbinary.game.layer.RTSPlayerLayerInterface;

      
//not game specific package import { TechnologyRTSInterfaceImageItem } from '../../../../../org/allbinary/game/layer/TechnologyRTSInterfaceImageItem.js';
      const TechnologyRTSInterfaceImageItem = globalThis.org.allbinary.game.layer.TechnologyRTSInterfaceImageItem;

      
//not game specific package import { Capital } from '../../../../../org/allbinary/game/layer/capital/Capital.js';
      const Capital = globalThis.org.allbinary.game.layer.capital.Capital;

      
//not game specific package import { TechEventHandler } from '../../../../../org/allbinary/game/rts/technology/event/TechEventHandler.js';
      const TechEventHandler = globalThis.org.allbinary.game.rts.technology.event.TechEventHandler;

      
//not game specific package import { ABCustomItem } from '../../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
      const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;

      
//not game specific package import { BuildingSound } from '../../../../../org/allbinary/media/audio/BuildingSound.js';
      const BuildingSound = globalThis.org.allbinary.media.audio.BuildingSound;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { BooleanFactory } from '../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
      const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;

      
//not game specific package import { Group } from '../../../../../org/allbinary/game/identification/Group.js';
      const Group = globalThis.org.allbinary.game.identification.Group;

      
//not game specific package import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
//not game specific package import { GameNotificationEvent } from '../../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js';
      const GameNotificationEvent = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEvent;

      
//not game specific package import { GameNotificationEventHandler } from '../../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js';
      const GameNotificationEventHandler = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEventHandler;

      
//not game specific package import { CollidableDestroyableDamageableLayer } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
      const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;

      
//not game specific package import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { SmallIntegerSingletonFactory } from '../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { ErrorSound } from '../../../../../org/allbinary/media/audio/ErrorSound.js';
      const ErrorSound = globalThis.org.allbinary.media.audio.ErrorSound;

      
//not game specific package import { BasicGeographicMap } from '../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
//not game specific package import { GeographicMapCompositeInterface } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js';
      const GeographicMapCompositeInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCompositeInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RTSFormInput } from './RTSFormInput.js';

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
                
            

