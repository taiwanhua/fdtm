Component(所有元件)
>
> Common(通用元件)
>
> > Context(上下文元件、連同導出的CreatContext)
> > > Topcontainer.js
> > > 
> >
> > Container(容器元件)
> > > Topcontext.js
> >
> > Functional(功能性元件)
> > > Buttons.js
> > > Drag.js
> > > Navigatior.js
> > > Selects.js
>
> Special (特色組件)


   
##Buttons.js

##Drag.js

##Navigatior.js

##Selects.js

##Topcontainer.js、Topcontext.js
- Topcontainer作為全域Context導出，解決組件間通訊共享數據問題，設計上內有多個子元件項Context，各個元件在依需求調用。
- Topcontext為元件Context設計初始值、更新數據方法所在，供Topcontainer調用
    - Globalcontext、Globalcontextdispatch，用作全域變數如:<br>
    { userinfo:{登入資訊} , componentinfo:{組件資訊 } }
   - 
    
   
   

     
