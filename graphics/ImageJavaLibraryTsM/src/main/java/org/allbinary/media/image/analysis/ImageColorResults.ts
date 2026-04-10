
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
        




export class ImageColorResults
            extends Object
         {
        

    private colorRange: ColorRange

    private colorAverage: ColorAverage
public constructor (){

            super();
            this.setColorRange(ColorRange())
this.getColorRange()!.setMaxRed( -1)
this.getColorRange()!.setMaxGreen( -1)
this.getColorRange()!.setMaxBlue( -1)
this.getColorRange()!.setMinRed(256)
this.getColorRange()!.setMinGreen(256)
this.getColorRange()!.setMinBlue(256)
this.setColorAverage(ColorAverage())
}


    public getColorRange(): ColorRange{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return colorRange;
    
}


    public setColorRange(colorRange: ColorRange){
var colorRange = colorRange
this.colorRange= colorRange
}


    public getColorAverage(): ColorAverage{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return colorAverage;
    
}


    public setColorAverage(colorAverage: ColorAverage){
var colorAverage = colorAverage
this.colorAverage= colorAverage
}


}
                
            

