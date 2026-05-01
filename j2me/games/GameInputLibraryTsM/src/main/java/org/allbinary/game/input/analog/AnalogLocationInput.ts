
        /* Generated Code Do Not Modify */
        



            import { Object } from "../../../../../java/lang/Object.js";


        
import { CustomGPoint } from "../../../../../org/allbinary/graphics/CustomGPoint.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AnalogLocationInput
            extends Object
         {
        

    public static readonly NULL_ANALOG_LOCATION_INPUT: AnalogLocationInput = new AnalogLocationInput( -1);

    private readonly playerId: number

    private readonly customGPoint: CustomGPoint

    private rz: number= 0

    private rightTrigger: number= 0

    private leftTrigger: number= 0
 constructor (playerId: number){

            super();
        var playerId = playerId
this.playerId= playerId;
    
this.customGPoint= new CustomGPoint(0, 0, 0);
    
}


    public getPlayerId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.playerId;
    
}


    public getCustomGPoint(): CustomGPoint{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.customGPoint;
    
}


    public getRz(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rz;
    
}


    public setRz(rz: number){
var rz = rz
this.rz= rz;
    
}


    public getRightTrigger(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rightTrigger;
    
}


    public setRightTrigger(rightTrigger: number){
var rightTrigger = rightTrigger
this.rightTrigger= rightTrigger;
    
}


    public getLeftTrigger(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.leftTrigger;
    
}


    public setLeftTrigger(leftTrigger: number){
var leftTrigger = leftTrigger
this.leftTrigger= leftTrigger;
    
}


}
                
            

