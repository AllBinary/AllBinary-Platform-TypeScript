
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


        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameSkillType
            extends Object
         {
        

    public static MANA: GameSkillType = new GameSkillType("Mana");

    public static REPLENISH: GameSkillType = new GameSkillType("Replenish");

    public static TIMED: GameSkillType = new GameSkillType("Timed");

    public static ATTACK: GameSkillType = new GameSkillType("Attack");

    public static TRANSPORT: GameSkillType = new GameSkillType("Transport");

    private readonly SPELL_GAME_SKILL_TYPE: string = "SpellGameSkillType: ";

    private name: string;

private constructor (name: string){

            super();
        this.setName(name);
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    setName(name: string){
this.name= name;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.SPELL_GAME_SKILL_TYPE +this.getName();
    
}


}
                
            

