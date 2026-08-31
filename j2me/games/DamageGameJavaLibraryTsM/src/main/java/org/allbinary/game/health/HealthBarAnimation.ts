
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
      //not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { BasicHudFactory } from '../../../../org/allbinary/game/graphics/hud/BasicHudFactory.js';
      //not GWT import const BasicHudFactory = globalThis.org.allbinary.game.graphics.hud.BasicHudFactory;

      
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      //not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class HealthBarAnimation extends Animation {
        

    private readonly basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;

    x2: number= 0;

    thickness: number= 0;

    private location: number;

    allbinaryLayer: AllBinaryLayer;

public constructor (layerInterface: AllBinaryLayer, location: number){

            super();
        this.allbinaryLayer= layerInterface;
    
this.location= location;
    

    var basicHudFactory: BasicHudFactory = BasicHudFactory.getInstance()!;;
    

                        if(this.location != basicHudFactory!.TOPLEFT && this.location != basicHudFactory!.BOTTOMLEFT)
                        
                                    {
                                    


                            throw new Exception("Location Not Valid");
                    

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
this.x2= newX2;
    

    var quarter: number = (this.allbinaryLayer!.getWidth()>>2);;
    

                        if(this.x2 > quarter *3)
                        
                                    {
                                    this.basicColor= this.basicColorFactory!.GREEN;
    
this.colorP= this.basicColor!.intValue();
    

                                    }
                                
                             else 
                        if(this.x2 > quarter *2)
                        
                                    {
                                    this.basicColor= this.basicColorFactory!.YELLOW;
    
this.colorP= this.basicColor!.intValue();
    

                                    }
                                
                             else 
                        if(this.x2 > quarter)
                        
                                    {
                                    this.basicColor= this.basicColorFactory!.ORANGE;
    
this.colorP= this.basicColor!.intValue();
    

                                    }
                                
                        else {
                            this.basicColor= this.basicColorFactory!.RED;
    
this.colorP= this.basicColor!.intValue();
    

                        }
                            
}


    getY(): number{

    var basicHudFactory: BasicHudFactory = BasicHudFactory.getInstance()!;;
    

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



