
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
        



import { Animation } from "../../../../org/allbinary/animation/Animation.js";

    
import { BasicHudFactory } from "../../../../org/allbinary/game/graphics/hud/BasicHudFactory.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    

export class HealthBarAnimation extends Animation {
        

    private readonly basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;
        
        

    x2: number= 0

    thickness: number= 0

    private location: number

    allbinaryLayer: AllBinaryLayer
public constructor (layerInterface: AllBinaryLayer, location: number){

            super();
                //var layerInterface = layerInterface
    //var location = location
this.allbinaryLayer= layerInterface;
    
this.location= location;
    

    var basicHudFactory: BasicHudFactory = BasicHudFactory.getInstance()!;
        
        
;
    

                        if(this.location != basicHudFactory!.TOPLEFT && this.location != basicHudFactory!.BOTTOMLEFT)
                        
                                    {
                                    


                            throw new Error("Location Not Valid")

                                    }
                                

                        if(layerInterface!.getWidth() > 40)
                        
                                    {
                                    this.thickness= 3;
    

                                    }
                                
                             else 
                        if(layerInterface!.getWidth() > 20)
                        
                                    {
                                    this.thickness= 2;
    

                                    }
                                
                        else {
                            this.thickness= 1;
    

                        }
                            
}


    public onHealthChange(newX2: number){
    //var newX2 = newX2
x2= newX2;
    

    var quarter: number = (this.allbinaryLayer!.getWidth() shr 2);
        
        
;
    

                        if(x2 > quarter *3)
                        
                                    {
                                    this.basicColor= this.basicColorFactory!.GREEN;
    
this.colorP= this.basicColor!.toInt();
    

                                    }
                                
                             else 
                        if(x2 > quarter *2)
                        
                                    {
                                    this.basicColor= this.basicColorFactory!.YELLOW;
    
this.colorP= this.basicColor!.toInt();
    

                                    }
                                
                             else 
                        if(x2 > quarter)
                        
                                    {
                                    this.basicColor= this.basicColorFactory!.ORANGE;
    
this.colorP= this.basicColor!.toInt();
    

                                    }
                                
                        else {
                            this.basicColor= this.basicColorFactory!.RED;
    
this.colorP= this.basicColor!.toInt();
    

                        }
                            
}


    getY(): number{

    var basicHudFactory: BasicHudFactory = BasicHudFactory.getInstance()!;
        
        
;
    

                        if(this.location == basicHudFactory!.TOPLEFT)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.allbinaryLayer!.getViewPosition()!.getY() -4;
    

                                    }
                                
                             else 
                        if(this.location == basicHudFactory!.BOTTOMLEFT)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.allbinaryLayer!.getViewPosition()!.getY2() +4;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


}
                
            

