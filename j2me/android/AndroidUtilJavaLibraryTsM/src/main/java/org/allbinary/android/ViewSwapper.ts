
        /* Generated Code Do Not Modify */
        



            import hilog from '@ohos.hilog';
        
            import { Object } from '../../../java/lang/Object.js';
        
//not game specific package import { Activity } from '../../../android/app/Activity.js';
      const Activity = globalThis.android.app.Activity;

      
//not game specific package import { View } from '../../../android/view/View.js';
      const View = globalThis.android.view.View;

      
//not game specific package import { ViewGroup } from '../../../android/view/ViewGroup.js';
      const ViewGroup = globalThis.android.view.ViewGroup;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ViewSwapper
            extends Object
         {
        

    public static readonly NULL_VIEW_ARRAY: View[] = [];

    private readonly rootViewId: number;

    private readonly activity: Activity;

    private currentMainViewId: number =  -1;

    private mainViewArray: View[] = ViewSwapper.NULL_VIEW_ARRAY;

    private topViewArray: View[] = ViewSwapper.NULL_VIEW_ARRAY;

public constructor (activity: Activity, rootViewId: number){

            super();
        this.activity= activity;
    
this.rootViewId= rootViewId;
    
}


    public setMainViews(viewArray: View[]){
this.mainViewArray= viewArray;
    
}


    public setTopViewArray(topViewArray: View[]){
this.topViewArray= topViewArray;
    
}


    public setMainView(id: number){

    var viewGroup: ViewGroup = this.activity.findViewById(this.rootViewId) as unknown as ViewGroup;;
    

                        if(id != this.currentMainViewId)
                        
                                    {
                                    



                        for (
    var index: number = 0;index < this.topViewArray!.length; index++)
        {
viewGroup!.removeView(this.topViewArray[index]!);
    
}





                        for (
    var index: number = 0;index < this.mainViewArray!.length; index++)
        {

                        if(id != this.mainViewArray[index]!.getId())
                        
                                    {
                                    viewGroup!.removeView(this.mainViewArray[index]!);
    

                                    }
                                
}





                        for (
    var index: number = 0;index < this.mainViewArray!.length; index++)
        {

                        if(id == this.mainViewArray[index]!.getId())
                        
                                    {
                                    viewGroup!.addView(this.mainViewArray[index]!);
    
this.currentMainViewId= id;
    

                                    }
                                
}





                        for (
    var index: number = 0;index < this.topViewArray!.length; index++)
        {
viewGroup!.addView(this.topViewArray[index]!);
    
}


                                    }
                                
}


}
                
            

