import { Context } from "../content/Context";
import { Canvas } from "../graphics/Canvas";
import { AttributeSet } from "../util/AttributeSet";

/*actual*/ export class WebView
{
  public constructor (context: Context);
  public constructor (context: Context, attrs: AttributeSet);
  public constructor (context: Context, attrs?: AttributeSet){
    //super(context, attrs);

  }

  setWebViewClient(arg0: unknown) {
    throw new Error('Method not implemented.');
  }
  
  goBack() {
    throw new Error('Method not implemented.');
  }
  canGoBack(): boolean {
    throw new Error('Method not implemented.');
  }

  loadUrl(url: string) {
    throw new Error('Method not implemented.');
  }

  getSettings() {
    throw new Error('Method not implemented.');
  }

  clearCache(arg0: boolean) {
    throw new Error('Method not implemented.');
  }

  loadData(aboutHtmlString: string, mimeType: string, arg2: null) {
    throw new Error('Method not implemented.');
  }

  onDraw(canvas: Canvas) {
    throw new Error('Method not implemented.');
  }

}

