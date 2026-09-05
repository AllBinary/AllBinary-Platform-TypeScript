
        /* Generated Code Do Not Modify */

        


//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { BasicColor } from '../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { IndexedAnimation } from './IndexedAnimation.js';
//not GWT import - same folder const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;

                import { AnimationBehavior } from './AnimationBehavior.js';
//not GWT import - same folder const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

                
export class FillAnimation extends IndexedAnimation {
        

    private readonly pixelBuffer: number[];

    private readonly width: number;

    private readonly height: number;

public constructor (pixelBuffer: number[], width: number, height: number, animationBehavior: AnimationBehavior){
            super(animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.width= 100;
    
this.height= 100;
    
this.pixelBuffer= pixelBuffer;
    
}


    public setBasicColorP(basicColor: BasicColor){

    var changed: boolean = false;;
    

                        if(this.getBasicColorP() == 
                                    null
                                 || this.getBasicColorP()!.intValue() != basicColor!.intValue())
                        
                                    {
                                    changed= true;
    

                                    }
                                
super.setBasicColorP(basicColor);
    

                        if(changed)
                        
                                    {
                                    this.updateModifiers();
    

                                    }
                                
}


    public changeBasicColor(basicColor: BasicColor){

    var changed: boolean = false;;
    

                        if(this.getChangeBasicColor() == 
                                    null
                                 || this.getChangeBasicColor()!.intValue() != basicColor!.intValue())
                        
                                    {
                                    changed= true;
    

                                    }
                                
super.changeBasicColor(basicColor);
    

                        if(changed)
                        
                                    {
                                    this.updateModifiers();
    

                                    }
                                
}


    public setAlpha(alpha: number){

    var changed: boolean = false;;
    

                        if(this.alphaP != alpha)
                        
                                    {
                                    changed= true;
    

                                    }
                                
super.setAlpha(alpha);
    

                        if(changed)
                        
                                    {
                                    this.updateModifiers();
    

                                    }
                                
}


    public setScale(scaleX: number, scaleY: number){
}


    public setMaxScale(maxScaleX: number, maxScaleY: number){
}


    updateModifiers(){
}


    paint(g: Graphics){
g.drawRGB(pixelBuffer, 0, width, 0, 0, width, height, true);
    
}


}



