
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../../../java/lang/Object.js';
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { CustomGPoint } from '../../../../../org/allbinary/graphics/CustomGPoint.js';
//not GWT import const CustomGPoint = globalThis.org.allbinary.graphics.CustomGPoint;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AnalogLocationInput
            extends Object
         {
        

    public static readonly NULL_ANALOG_LOCATION_INPUT: AnalogLocationInput = new AnalogLocationInput( -1);

    private readonly playerId: number;

    private readonly customGPoint: CustomGPoint;

    private rz: number= 0;

    private rightTrigger: number= 0;

    private leftTrigger: number= 0;

 constructor (playerId: number){

            super();
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
this.rz= rz;
    
}


    public getRightTrigger(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rightTrigger;
    
}


    public setRightTrigger(rightTrigger: number){
this.rightTrigger= rightTrigger;
    
}


    public getLeftTrigger(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.leftTrigger;
    
}


    public setLeftTrigger(leftTrigger: number){
this.leftTrigger= leftTrigger;
    
}


}



