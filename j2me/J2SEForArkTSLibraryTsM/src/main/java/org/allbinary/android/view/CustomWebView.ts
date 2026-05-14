
        /* Generated Code Do Not Modify */
        

            import { Object } from '../../../../java/lang/Object.js';


        
import { Context } from '../../../../android/content/Context.js';

    
import { Canvas } from '../../../../android/graphics/Canvas.js';

    
import { AttributeSet } from '../../../../android/util/AttributeSet.js';

    
import { WebView } from '../../../../android/webkit/WebView.js';


export class CustomWebView extends WebView {

  public constructor (context: Context);
  public constructor (context: Context, attrs: AttributeSet)
  public constructor (context: Context, attrs?: AttributeSet){
            super(context, attrs);

  }

  loadData(aboutHtmlString: string, mimeType: string, arg2: null) {
    throw new Error('Method not implemented.');
  }

  public onDraw(canvas: Canvas){

    super.onDraw(canvas);
  }


}
                
            

