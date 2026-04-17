
        /* Generated Code Do Not Modify */
        



            import hilog from '@ohos.hilog';
        
import { Activity } from "../../../android/app/Activity.js";

    
import { View } from "../../../android/view/View.js";

    
import { ViewGroup } from "../../../android/view/ViewGroup.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ViewSwapper
            extends Object
         {
        

            static readonly PUBLIC: string = '%{public}s';
            

    public static readonly NULL_VIEW_ARRAY: View[] = [];
        
        

    private readonly rootViewId: number

    private readonly activity: Activity

    private currentMainViewId: number =  -1;
        
        

    private mainViewArray: View[] = NULL_VIEW_ARRAY;
        
        

    private topViewArray: View[] = NULL_VIEW_ARRAY;
        
        
public constructor (activity: Activity, rootViewId: number){

            super();
            var activity = activity
var rootViewId = rootViewId
this.activity= activity;
    
this.rootViewId= rootViewId;
    
}


    public setMainViews(viewArray: View[]){
var viewArray = viewArray
this.mainViewArray= viewArray;
    
}


    public setTopViewArray(topViewArray: View[]){
var topViewArray = topViewArray
this.topViewArray= topViewArray;
    
}


    public setMainView(id: number){
var id = id

    var viewGroup: ViewGroup = this.activity.findViewById(rootViewId);

                         as ViewGroup;
        
        
;
    

                        if(id != this.currentMainViewId)
                        
                                    {
                                    



                        for (
    var index: number = 0;
        
        
index < this.topViewArray!.length; index++)
        {
viewGroup!.removeView(this.topViewArray[index]!);
    
}





                        for (
    var index: number = 0;
        
        
index < this.mainViewArray!.length; index++)
        {

                        if(id != this.mainViewArray[index]!.getId())
                        
                                    {
                                    viewGroup!.removeView(this.mainViewArray[index]!);
    

                                    }
                                
}





                        for (
    var index: number = 0;
        
        
index < this.mainViewArray!.length; index++)
        {

                        if(id == this.mainViewArray[index]!.getId())
                        
                                    {
                                    viewGroup!.addView(this.mainViewArray[index]!);
    
this.currentMainViewId= id;
    

                                    }
                                
}





                        for (
    var index: number = 0;
        
        
index < this.topViewArray!.length; index++)
        {
viewGroup!.addView(this.topViewArray[index]!);
    
}


                                    }
                                
}


}
                
            

