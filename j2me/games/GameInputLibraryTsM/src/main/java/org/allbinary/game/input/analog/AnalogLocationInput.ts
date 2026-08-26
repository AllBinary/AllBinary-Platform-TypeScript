
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../../java/lang/Object.js';
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { CustomGPoint } from '../../../../../org/allbinary/graphics/CustomGPoint.js';
      const CustomGPoint = globalThis.org.allbinary.graphics.CustomGPoint;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
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
                
            

