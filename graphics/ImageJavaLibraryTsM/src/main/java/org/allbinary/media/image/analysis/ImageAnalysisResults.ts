
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
        




export class ImageAnalysisResults
            extends Object
         {
        

    private imageColorRangeResults: ImageColorRangeResults

    private imageColorResults: ImageColorResults

    private averageAmbientLevel: number= 0.0f
public constructor (){

            super();
            this.imageColorRangeResults= ImageColorRangeResults()
this.imageColorResults= ImageColorResults()
}


    public getImageColorRangeResults(): ImageColorRangeResults{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageColorRangeResults;
    
}


    public setImageColorRangeResults(imageColorRangeResults: ImageColorRangeResults){
var imageColorRangeResults = imageColorRangeResults
this.imageColorRangeResults= imageColorRangeResults
}


    public getAverageAmbientLevel(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return averageAmbientLevel;
    
}


    public setAverageAmbientLevel(averageAmbientLevel: number){
var averageAmbientLevel = averageAmbientLevel
this.averageAmbientLevel= averageAmbientLevel
}


    public getImageColorResults(): ImageColorResults{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageColorResults;
    
}


    public setImageColorResults(imageColorResults: ImageColorResults){
var imageColorResults = imageColorResults
this.imageColorResults= imageColorResults
}


}
                
            

