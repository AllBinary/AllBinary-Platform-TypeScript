
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

        


            import { Object } from '../../../../../../../java/lang/Object.js';
        
import { HashMap } from '../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameSkillType } from './GameSkillType.js';
//not GWT import - same folder const GameSkillType = globalThis.org.allbinary.input.automation.module.game.skill.GameSkillType;

                import { GameSkillPropertyInterface } from './GameSkillPropertyInterface.js';
//not GWT import - same folder const GameSkillPropertyInterface = globalThis.org.allbinary.input.automation.module.game.skill.GameSkillPropertyInterface;

                
export class GameSkill
            extends Object
         {
        

    private static hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;

    public static getInstance(gameSkillType: GameSkillType, extra: string): GameSkill{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameSkill.hashMap!.get(new StringMaker().append(gameSkillType!.getName())!.append(CommonSeps.getInstance()!.SPACE)!.append(extra)!.toString()) as GameSkill;
    
}


    private gameSkillType: GameSkillType;

    private extra: string;

    private time: number= 0;

    private vector: BasicArrayList;

    private readonly GAME_SKILL_LABEL: string = "GameSkill: ";

    private readonly EXTRA_LABEL: string = "Extra: ";

    private readonly TIME_LABEL: string = "Time: ";

public constructor (gameSkillType: GameSkillType, extra: string, time: number){

            super();
        this.setGameSkillType(gameSkillType);
    
this.setExtra(extra);
    
this.setTime(time);
    
this.vector= new BasicArrayListD();
    
GameSkill.hashMap!.put(new StringMaker().append(this.getGameSkillType()!.getName())!.append(CommonSeps.getInstance()!.SPACE)!.append(extra)!.toString(), this);
    
}


    public getGameSkillType(): GameSkillType{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameSkillType;
    
}


    public setGameSkillType(gameSkillType: GameSkillType){
this.gameSkillType= gameSkillType;
    
}


    public getExtra(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.extra;
    
}


    public setExtra(extra: string){
this.extra= extra;
    
}


    public getTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.time;
    
}


    public setTime(time: number){
this.time= time;
    
}


    public addProperty(gameSkillPropertyInterface: GameSkillPropertyInterface){
this.vector.add(gameSkillPropertyInterface);
    
}


    public getProperties(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.vector;
    
}


    public toString(): string{

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.GAME_SKILL_LABEL);
    
stringBuffer!.append(this.getGameSkillType()!.toString());
    
stringBuffer!.append(commonSeps!.SPACE);
    
stringBuffer!.append(this.EXTRA_LABEL);
    
stringBuffer!.append(this.getExtra());
    
stringBuffer!.append(commonSeps!.SPACE);
    
stringBuffer!.append(this.TIME_LABEL);
    
stringBuffer!.appendlong(this.getTime());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}



