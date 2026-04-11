
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2002 AllBinary 
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
        



import { NumberStringHud } from "../../../../../org/allbinary/game/layer/hud/basic/NumberStringHud.js";

    

export class HudCapital extends Capital {
        

    private capitalGraphic: NumberStringHud
public constructor (moneyGraphic: NumberStringHud){

            super();
            var moneyGraphic = moneyGraphic
this.capitalGraphic= moneyGraphic;
    
}


    public removeMoney(points: number){
var points = points
super.removeMoney(points);
    
this.capitalGraphic!.reduce(points);
    
}


    public getTotalMoney(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.capitalGraphic!.get();

                        ;
    
}


    public addMoney(points: number){
var points = points
super.addMoney(points);
    
this.capitalGraphic!.add(points);
    
}


}
                
            

