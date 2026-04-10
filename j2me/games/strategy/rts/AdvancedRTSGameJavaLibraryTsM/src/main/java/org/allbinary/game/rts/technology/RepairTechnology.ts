
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
        



import { RTSInterface } from "../../../../../org/allbinary/game/layer/RTSInterface.js";

    

export class RepairTechnology
            extends Object
        
                , RTSInterface {
        

    private level: number= 0

    private maxLevel: number
public constructor (maxLevel: number){

            super();
            var maxLevel = maxLevel
this.maxLevel= maxLevel
}


    public isCompleted(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getPercentComplete(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public getLevel(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return level;
    
}


    public getMaxLevel(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.maxLevel;
    
}


    public getCost(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public downgrade(){
}


    public getDowngradeCost(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public isDowngradeable(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getUpgradeCost(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (this.getLevel() *this.getLevel()) *1000;
    
}


    public isUpgradeable(): boolean{

    
                        if(this.getLevel() < this.getMaxLevel())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public upgrade(){
this.level++

    var unitTechnologySingletonFactory: UnitTechnologySingletonFactory = UnitTechnologySingletonFactory.getInstance()!;
        
        

setRepair(unitTechnologySingletonFactory!.getRepair() +(this.getLevel() *10))
}


    public isSelfUpgradeable(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

