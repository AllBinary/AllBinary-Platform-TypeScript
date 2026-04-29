
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
        
import { MeteredGameObjectInterface } from "./MeteredGameObjectInterface.js";

import { GraphicsAnalysisUtil } from "./GraphicsAnalysisUtil.js";

export class MeteredGameObject
            extends Object
         implements MeteredGameObjectInterface {
        

    private ratios: number[]

    private good: boolean = false;

    private dropping: boolean = false;

    private minX: number

    private maxX: number

    private y: number

    private size: number

    private readonly RATIOS_LABEL: string = "Ratios: ";

    private readonly IS_GOOD_LABEL: string = "isGood: ";

    private readonly IS_DROPPPING_LABEL: string = "isDropping: ";
public constructor (bufferedImage: BufferedImage[], minX: number, maxX: number, y: number){

            super();
        var bufferedImage = bufferedImage
var minX = minX
var maxX = maxX
var y = y
this.setRatios(new Array(bufferedImage!.length));
    
this.setMinX(minX);
    
this.setMaxX(maxX);
    
this.setY(y);
    
this.setSize(maxX -minX);
    




                        for (
    var index: number = 0;
index < bufferedImage!.length; index++)
        {

    var nominator: number = GraphicsAnalysisUtil.getNominator(bufferedImage[index]!, this.getMinX(), this.getMaxX(), this.getY())!;
;
    
this.getRatios()[index]= new number(nominator /this.getSize());
    
}


                        if(this.getRatios()[bufferedImage!.length -1]!.doubleValue() > 0.93F)
                        
                                    {
                                    this.setGood(true);
    

                                    }
                                
                        else {
                            this.setGood(false);
    

                        }
                            

                        if(this.getRatios()[bufferedImage!.length -1]!.doubleValue() < this.getRatios()[0]!.doubleValue())
                        
                                    {
                                    this.setDropping(true);
    

                                    }
                                
                        else {
                            this.setDropping(false);
    

                        }
                            
}


    public isGood(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return good;
    
}


    setGood(good: boolean){
var good = good
this.good= good;
    
}


    public isDropping(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return dropping;
    
}


    setDropping(dropping: boolean){
var dropping = dropping
this.dropping= dropping;
    
}


    public getRatios(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ratios;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
;
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
;
    
stringBuffer!.append(commonSeps!.NEW_LINE);
    
stringBuffer!.append(this.RATIOS_LABEL);
    




                        for (
    var index: number = 0;
index < this.getRatios()!.length; index++)
        {
stringBuffer!.append(this.getRatios()[index]!.toString());
    

                        if(index < this.getRatios()!.length -1)
                        
                                    {
                                    stringBuffer!.append(commonSeps!.COMMA_SEP);
    

                                    }
                                
}

stringBuffer!.append(commonSeps!.NEW_LINE);
    
stringBuffer!.append(this.IS_GOOD_LABEL);
    
stringBuffer!.appendboolean(this.isGood());
    
stringBuffer!.append(commonSeps!.NEW_LINE);
    
stringBuffer!.append(this.IS_DROPPPING_LABEL);
    
stringBuffer!.appendboolean(this.isDropping());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public setRatios(ratios: number[]){
var ratios = ratios
this.ratios= ratios;
    
}


    public getMinX(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return minX;
    
}


    public setMinX(minX: number){
var minX = minX
this.minX= minX;
    
}


    public getMaxX(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return maxX;
    
}


    public setMaxX(maxX: number){
var maxX = maxX
this.maxX= maxX;
    
}


    public getY(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return y;
    
}


    public setY(y: number){
var y = y
this.y= y;
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return size;
    
}


    public setSize(size: number){
var size = size
this.size= size;
    
}


}
                
            

