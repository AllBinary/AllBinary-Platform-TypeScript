
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
        




export class ImageColorRangeResults
            extends Object
         {
        

    private colorRangeInterface: ColorRangeInterface

    private matchingPixelsChecked: number= 0

    private totalPixelsChecked: number= 0
public constructor (){

            super();
            this.setColorRangeInterface(ColorRange() as ColorRangeInterface);
    
}


    public getColorRangeInterface(): ColorRangeInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return colorRangeInterface;
    
}


    public setColorRangeInterface(colorRangeInterface: ColorRangeInterface){
var colorRangeInterface = colorRangeInterface
this.colorRangeInterface= colorRangeInterface;
    
}


    public getMatchingPixelsChecked(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return matchingPixelsChecked;
    
}


    public setMatchingPixelsChecked(matchingPixelsChecked: number){
var matchingPixelsChecked = matchingPixelsChecked
this.matchingPixelsChecked= matchingPixelsChecked;
    
}


    public addMatchingPixelsChecked(){
this.matchingPixelsChecked++;
    
}


    public getTotalPixelsChecked(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return totalPixelsChecked;
    
}


    public addTotalPixelsChecked(){
totalPixelsChecked++;
    
}


    public setTotalPixelsChecked(totalPixelsChecked: number){
var totalPixelsChecked = totalPixelsChecked
this.totalPixelsChecked= totalPixelsChecked;
    
}


    public getPercent(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (this.getMatchingPixelsChecked();

                        .toFloat() /this.getTotalPixelsChecked());
    
}


}
                
            

