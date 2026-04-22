
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
        



            import { Integer } from "../../../../../../java/lang/Integer.js";
        
import { BufferedImage } from "../../../../../../java/awt/image/BufferedImage.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../../../org/allbinary/string/CommonSeps.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { MeteredGameObject } from "./MeteredGameObject.js";

import { HitPointGameObjectInterface } from "./HitPointGameObjectInterface.js";

export class HitPointGameObject extends MeteredGameObject implements HitPointGameObjectInterface {
        

    private damaged: boolean = false;
        
        

    private closeDeath: boolean = false;
        
        

    private readonly HP_LABEL: string = "HP: ";
        
        

    private readonly IS_DAMAGED_LABEL: string = "isDamaged: ";
        
        

    private readonly IS_CLOSE_DEATH_LABEL: string = "isCloseDeath: ";
        
        
public constructor (bufferedImage: BufferedImage[], minX: Object, maxX: Object, y: Object){
            super(bufferedImage, minX, maxX, y);
                    var bufferedImage = bufferedImage
var minX = minX
var maxX = maxX
var y = y


                            //For kotlin this is before the body of the constructor.
                    

                        if(this.getRatios()[bufferedImage!.length -1]!.doubleValue() < 1.0F)
                        
                                    {
                                    this.setDamaged(true);
    

                                    }
                                
                        else {
                            this.setDamaged(false);
    

                        }
                            

                        if(this.getRatios()[bufferedImage!.length -1]!.doubleValue() > 0.25F)
                        
                                    {
                                    this.closeDeath= false;
    

                                    }
                                
                        else {
                            this.closeDeath= true;
    

                        }
                            
}


    public isMoreThan(aFloat: number): boolean{
var aFloat = aFloat

                        if(this.getRatios()[this.getRatios()!.length -1]!.doubleValue() > aFloat)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public isCloseDeath(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return closeDeath;
    
}


    setCloseDeath(closeDeath: boolean){
var closeDeath = closeDeath
this.closeDeath= closeDeath;
    
}


    public isDamaged(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return damaged;
    
}


    public setDamaged(damaged: boolean){
var damaged = damaged
this.damaged= damaged;
    
}


    public toString(): string{

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.HP_LABEL);
    
stringBuffer!.append(super.toString());
    
stringBuffer!.append(commonSeps!.NEW_LINE);
    
stringBuffer!.append(this.IS_DAMAGED_LABEL);
    
stringBuffer!.appendboolean(this.isDamaged());
    
stringBuffer!.append(commonSeps!.NEW_LINE);
    
stringBuffer!.append(this.IS_CLOSE_DEATH_LABEL);
    
stringBuffer!.appendboolean(this.isCloseDeath());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

