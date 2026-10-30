
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { ChoiceGroup } from '../../../../../javax/microedition/lcdui/ChoiceGroup.js';
//not GWT import const ChoiceGroup

import { Item } from '../../../../../javax/microedition/lcdui/Item.js';
//not GWT import const Item

import { ItemStateListener } from '../../../../../javax/microedition/lcdui/ItemStateListener.js';
//not GWT import const ItemStateListener

import { GameConfigurationGauge } from '../../../../../org/allbinary/game/configuration/GameConfigurationGauge.js';
//not GWT import const GameConfigurationGauge

import { GameConfigurationUtil } from '../../../../../org/allbinary/game/configuration/GameConfigurationUtil.js';
//not GWT import const GameConfigurationUtil

import { GameOptionsForm } from '../../../../../org/allbinary/game/configuration/GameOptionsForm.js';
//not GWT import const GameOptionsForm

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameFeatureFactory } from './GameFeatureFactory.js';
//not GWT import - same folder const GameFeatureFactory
import { GameFeature } from './GameFeature.js';
//not GWT import - same folder const GameFeature
import { GameFeatureUtil } from './GameFeatureUtil.js';
//not GWT import - same folder const GameFeatureUtil

export class GameFeatureItemStateListener
            extends Object
         implements ItemStateListener {
        

    private static toggleList: BasicArrayList = new BasicArrayListD();

    public static add(gameFeature: GameFeature){

                        if(!GameFeatureItemStateListener.toggleList!.contains(gameFeature))
                        
                                    {
                                    GameFeatureItemStateListener.toggleList!.add(gameFeature);
    

                                    }
                                
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private gameOptionsForm: GameOptionsForm;

public constructor (gameOptionsForm: GameOptionsForm){

            super();
        this.gameOptionsForm= gameOptionsForm;
    

    let gameFeatureFactory: GameFeatureFactory = GameFeatureFactory.getInstance()!;;
    
GameFeatureItemStateListener.add(gameFeatureFactory!.ARTIFICIAL_INTELLEGENCE_PROCESSOR);
    
GameFeatureItemStateListener.add(gameFeatureFactory!.COLLIDABLE_INTERFACE_LAYER_PROCESSOR);
    
GameFeatureItemStateListener.add(gameFeatureFactory!.DAMAGE_FLOATERS);
    
GameFeatureItemStateListener.add(gameFeatureFactory!.DROPPED_ITEMS);
    
GameFeatureItemStateListener.add(gameFeatureFactory!.GAME_INPUT_LAYER_PROCESSOR);
    
GameFeatureItemStateListener.add(gameFeatureFactory!.HEALTH_BARS);
    
GameFeatureItemStateListener.add(gameFeatureFactory!.SOUND);
    
GameFeatureItemStateListener.add(gameFeatureFactory!.TICKABLE_LAYER_PROCESSOR);
    
}


    public itemStateChanged(item: Item){

 try { 
    let itemLabel: string = item.getLabel()!;;
    
this.logUtil!.putF(new StringMaker().append(CommonLabels.getInstance()!.ITEM_LABEL)!.append(itemLabel)!.toString(), this, "itemStateChanged");
    

                        if(item instanceof GameConfigurationGauge)
                        
                                    {
                                    GameConfigurationUtil.getInstance()!.change(this.gameOptionsForm, item as GameConfigurationGauge);
    

                                    }
                                
                             else 
                        if(item instanceof ChoiceGroup)
                        
                                    {
                                    
    let gameFeatureUtil: GameFeatureUtil = GameFeatureUtil.getInstance()!;;
    

                        if(gameFeatureUtil!.isExclusive(itemLabel))
                        
                                    {
                                    gameFeatureUtil!.updateExclusiveForChoiceGroup(item as ChoiceGroup);
    

                                    }
                                
                        else {
                            gameFeatureUtil!.updateMultiple(item as ChoiceGroup);
    

                        }
                            

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "itemStateChanged", e);
    

 }
   }
 
}


}

