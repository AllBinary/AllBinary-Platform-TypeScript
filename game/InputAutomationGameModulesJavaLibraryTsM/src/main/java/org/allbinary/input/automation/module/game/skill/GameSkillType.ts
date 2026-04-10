
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
        




export class GameSkillType
            extends Object
         {
        

    public MANA: GameSkillType = new GameSkillType("Mana");
        
        

    public REPLENISH: GameSkillType = new GameSkillType("Replenish");
        
        

    public TIMED: GameSkillType = new GameSkillType("Timed");
        
        

    public ATTACK: GameSkillType = new GameSkillType("Attack");
        
        

    public TRANSPORT: GameSkillType = new GameSkillType("Transport");
        
        

    private readonly SPELL_GAME_SKILL_TYPE: string = "SpellGameSkillType: ";
        
        

    private name: string
private constructor (name: string){

            super();
            var name = name
this.setName(name)
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


    setName(name: string){
var name = name
this.name= name
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SPELL_GAME_SKILL_TYPE +this.getName();
    
}


}
                
            

