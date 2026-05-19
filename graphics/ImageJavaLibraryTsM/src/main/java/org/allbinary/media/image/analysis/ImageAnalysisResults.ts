
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageColorRangeResults } from './ImageColorRangeResults.js';
import { ImageColorResults } from './ImageColorResults.js';

export class ImageAnalysisResults
            extends Object
         {
        

    private imageColorRangeResults: ImageColorRangeResults

    private imageColorResults: ImageColorResults

    private averageAmbientLevel: number= 0.0
public constructor (){

            super();
        this.imageColorRangeResults= new ImageColorRangeResults();
    
this.imageColorResults= new ImageColorResults();
    
}


    public getImageColorRangeResults(): ImageColorRangeResults{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.imageColorRangeResults;
    
}


    public setImageColorRangeResults(imageColorRangeResults: ImageColorRangeResults){
this.imageColorRangeResults= imageColorRangeResults;
    
}


    public getAverageAmbientLevel(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.averageAmbientLevel;
    
}


    public setAverageAmbientLevel(averageAmbientLevel: number){
this.averageAmbientLevel= averageAmbientLevel;
    
}


    public getImageColorResults(): ImageColorResults{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.imageColorResults;
    
}


    public setImageColorResults(imageColorResults: ImageColorResults){
this.imageColorResults= imageColorResults;
    
}


}
                
            

