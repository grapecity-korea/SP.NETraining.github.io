---
title: Spread.NET for ASP.NET 기타 기능
tags: [mvc, context menu, 컨텍스트 메뉴, 페이징, paging, commandbar, 명령바, 브라우저, IE, Internet Explorer, mozila, firefox, apple safari, google chrome]
keywords: spread.net tooltip, 스프레드 닷넷 툴팁, spread.net 저장
last_updated: Aug 08, 2019
summary: "Spread.NET for ASP.NET 기타 기능"
sidebar: mydoc_sidebar
permalink: spasp_etc.html
folder: mydoc
---

## ASP.Net MVC 4에서 Spread asp.net 컨트롤 사용하기: Hello MVC

[Spread.Net ASP.Net MVC - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/MVC_Spread_Web.zip)
<br /><br />
본 장에서는“Hello World” 예시를 통해 Spread Asp.net 컨트롤을 ASP.net MVC 4에 적용하는 방법에 대해 차근차근 알아보도록 하겠습니다.

우선 확실히 해둘 필요가 있는 부분은 MVC 4 환경에서는 ASP webForm 에서처럼 끌어서 놓기(Drag&Drop) 컨트롤을 재사용할 수 없다는 점입니다. 따라서 아래와 같은 단계를 통해 추가를 진행하게 됩니다.

### Step1: FarPoint.Mvc.Spread.dll 참조 추가

![](https://www.grapecity.co.kr/images/training/spread/tc10-1-1.png)

VS 2012 개발 환경을 오픈하고 ASP.net MVC 4 web 프로젝트를 생성합니다:
**MVC_Spread_Web**

![](https://www.grapecity.co.kr/images/training/spread/tc10-1-2.png)

Internet Application 템플릿을 선택하고 보기 엔진(view engine)은 Razor를 선택한 후 확인을 클릭합니다.

위의 과정을 마치면 MVC 4 디폴트 템플릿이 구축됩니다. 단축키 F5를 사용하여 화면 미리보기가 가능합니다.

![](https://www.grapecity.co.kr/images/training/spread/tc10-1-3.png)

이상이 없을 경우 직접 2개의 dll 참조를 추가합니다:

- FarPoint.Mvc.Spread.dll
- FarPoint.Web.Spread.dll

![](https://www.grapecity.co.kr/images/training/spread/tc10-1-4.png)

64비트 기준 Spread dll의 전체 경로는 아래와 같습니다.

- C:\Program Files (x86)\GrapeCity\Spread Studio 10\ASP.NET\v1X.XX.XXXXX.0\bin\FarPoint.Mvc.Spread.dll
- C:\Program Files (x86)\GrapeCity\Spread Studio 10\ASP.NET\v1X.XX.XXXXX.0\bin\FarPoint.Web.Spread.dll

### Step2：Licenses.licx 추가

![](https://www.grapecity.co.kr/images/training/spread/tc10-1-5.png)

Properties 폴더에 txt 형식의 파일(Licenses.licx)을 추가하여 프로젝트에 포함시킵니다.

이와 동시에 아래와 같이 2개 행의 내용을 입력합니다.

```csharp
  FarPoint.Web.Spread.FpSpread, FarPoint.Web.Spread
  FarPoint.Mvc.Spread.FpSpread, FarPoint.Mvc.Spread
```

이로써 MVC 4의 Spread ASP.net 설치환경이 정상적으로 완료되었습니다.

### Step3: Global.asax.cs 파일 수정

Global.asax 파일을 더블 클릭하여 코드를 오픈하고 Application_Start 함수 내용을 아래와 같이 변경합니다.

```csharp
  WebApiConfig.Register(GlobalConfiguration.Configuration);
  BundleConfig.RegisterBundles(BundleTable.Bundles);
  AuthConfig.RegisterAuth();

  FarPoint.Mvc.Spread.MvcSpreadVirtualPathProvider.AppInitialize();
  AreaRegistration.RegisterAllAreas();

  FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
  RouteConfig.RegisterRoutes(RouteTable.Routes);
```

![](https://www.grapecity.co.kr/images/training/spread/tc10-1-6.png)

### Step4：Views\Home\Index.cshtml수정 - 컨트롤 추가

최상단에 using 코드 행을 추가하여 namespace를 불러옵니다.

```csharp
1: @using FarPoint.Mvc.Spread;
```

같은 파일 하단에 이 코드를 추가합니다: 컨트롤 추가

```csharp
1: @Html.FpSpread("FpSpread1")
```

**백그라운드 코드에서 컨트롤 사용:**

Controllers\HomeController.cs 파일에서 디폴트 값으로 설정되어 있는 Index 함수를 아래와 같이 변경합니다.

```csharp
  public ActionResult Index([MvcSpread(true)]FarPoint.Mvc.Spread.FpSpread FpSpread1)
  {
    FpSpread1.ActiveSheetView.Rows.Count = 30;

    ViewBag.Message = "ComponentOne Spread MVC 4";
    if (FpSpread1 != null)
    {
      var value = FpSpread1.ActiveSheetView.Cells[0, 0].Value;
    }
      return View();
  }
```

위의 과정이 마무리되면 F5 키를 통해 화면에서 Spread를 확인할 수 있습니다.

그러나 현실적으로는 이러한 경우 에러가 발생할 수도 있습니다.

Server Error in '/' Application.

#### Compilation Error

Description: An error occurred during the compilation of a resource required to service this request. Please review the following specific error details and modify your source code appropriately.

Compiler Error Message: CS0012: The type 'FarPoint.Web.Spread.FpSpread' is defined in an assembly that is not referenced. You must add a reference to assembly 'FarPoint.Web.Spread, Version=1X.XX.XXXXX.X, Culture=neutral, PublicKeyToken=327c3516b1b18457'.

![](https://www.grapecity.co.kr/images/training/spread/tc10-1-7.png)
<br /><br />
이러한 Error는 Step1 단계 과정의 문제로 발생합니다.
2 개의 dll를 불러오기하여 속성을 변경해야 합니다: Copy Local—True
<br />
![](https://www.grapecity.co.kr/images/training/spread/tc10-1-8.png)

![](https://www.grapecity.co.kr/images/training/spread/tc10-1-9.png)

다시 단축키 F5를 사용하여 프로그램을 실행합니다.

![](https://www.grapecity.co.kr/images/training/spread/tc10-1-10.png)

여기까지 이상이 없이 마무리가 되었다면 Spread Web 7.2 컨트롤은 성공적으로 MVC 프로그램 메인화면에 추가됩니다.

### Step5：Controller에 MvcSpreadEvent 추가

우선 MvcSpreadEvent의 개념을 명확히 해야 할 필요가 있습니다. MvcSpread는 3개의 주요 이벤트를 첨가할 수 있습니다: Init, Load, PreRender
<br /><br />
이에 Controllers\HomeController.cs파일에 이들을 각각 추가합니다.

```csharp
  public void FpSpread1_Load(object sender, EventArgs e)
  {
      FpSpread sp = sender as FpSpread;

      if (!sp.Page.IsPostBack)
      {
        sp.Cells[1, 1].Text = "hello, MVC!";
      }
  }

  public void FpSpread1_PreRender(object sender, EventArgs e)
  {
  }

  [MvcSpreadEvent("Init", "FpSpread1")]
  private void _init(object sender, EventArgs e)
  {
  }
```

단축키 F5를 사용하여 프로그램을 실행시키면 MVC-Spread ASP.net의 “Hello World” 프로그램이 완성됩니다.
<br /><br />
**비고:**

- MVC의 풀네임은 'Model View Controller'이며 MVC는 모델(model)－view－컨트롤러(controller)의 약자입니다. MVC는 독특한 개발과정을 거쳐 주로 전통적인 입력/처리/출력 기능을 하나의 로직을 가진 GUI 구조에 맵핑하는데 사용됩니다. ASP.NETMVC프레임은 ASP.NET WebForm을 대체할 수 있는 MVC 디자인 모델 기반의 애플리케이션을 제공합니다.

- ASP .NET MVC 프레임 내에 자체 컨트롤이 사라진다면 페이지 디자인 및 구조는 과거 html코드를 작성하던 시대로 완전히 회귀하게 될 것입니다. 다행히 asp .net mvc 프레임에는 자체적으로 HtmlHelper 와 UrlHelper 2가지의 헬퍼클래스를 갖추고 있습니다. 또한 MvcContrib 확장 프로젝트에는 확장된 헬퍼클래스가 존재하기 때문에 완벽한 html을 사용해서 필요한 페이지를 구성할 수 있을 뿐만 아니라 이들 헬퍼클래스를 활용하여 완성할 수 있습니다. 단, 마지막 런타임에는 html 코드를 생성해야 합니다.

[Spread.Net ASP.Net MVC - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/MVC_Spread_Web.zip)

---

## Context(컨텍스트) 메뉴

컨텍스트(Context)메뉴 기능은 사용자가 Spread 컨트롤을 마우스 우클릭할 때 보여지는 context 메뉴를 뜻합니다. Spread 컨트롤의 행 헤더, 열 헤더 및 기본 셀은 모두 context 메뉴를 지원합니다.

사용자는 context 메뉴의 옵션을 임의로 설정하여 높이(height) 및 기타 속성을 설정할 수 있습니다. 또한 ContextMenuType 열거(enumeration)를 통해 메뉴 유형을 설정할 수 있습니다. 뿐만 아니라 포그라운드 속성 설정 혹은 코드를 통해 context 메뉴를 생성할 수 있습니다.

CommandArgument 속성과 CommandCode 속성은 클릭 메뉴 속성을 설정하는 데 사용되며MenuItemClicked 이벤트에서도 가능합니다.
<br /><br />
**속성창을 이용하여 생성하기**

- 속성창에서 Spread 선택
- ContextMenus 속성 선택
- 팝업창에서 메뉴항목 편집
- 편집 완료 후 '확인' 클릭 후 로그아웃

![](https://www.grapecity.co.kr/images/training/spread/tc10-2-1.png)

<br /><br />
코드를 이용하여 생성하기

**HTML 마크업 :**

```html
<ContextMenus>
  <FarPoint:ContextMenu Type="Viewport">
    <Items>
      <FarPoint:MenuItem Text="메뉴1"></FarPoint:MenuItem>
      <FarPoint:MenuItem Text="메뉴2"></FarPoint:MenuItem>
      <FarPoint:MenuItem Text="메뉴3"></FarPoint:MenuItem>
    </Items>
  </FarPoint:ContextMenu>
</ContextMenus>
```

**C# 코드：**

```csharp
  if (this.IsPostBack) return;

  FpSpread1.EnableContextMenu = true;

  // 기본 셀 메뉴 생성
  FarPoint.Web.Spread.ContextMenu viewportMenu
  = FpSpread1.ContextMenus[FarPoint.Web.Spread.ContextMenuType.Viewport];

  FarPoint.Web.Spread.MenuItem customViewportItem = new FarPoint.Web.Spread.MenuItem("2차 메뉴");
  customViewportItem.ChildItems.Add(new FarPoint.Web.Spread.MenuItem("2차 메뉴 항목1"));
  customViewportItem.ChildItems.Add(new FarPoint.Web.Spread.MenuItem("2차 메뉴 항목2”));
  viewportMenu.Items.Add(customViewportItem);

  // 행 헤더 셀 메뉴 생성
  FarPoint.Web.Spread.ContextMenu rowHeaderContextMenu = new FarPoint.Web.Spread.ContextMenu();
  rowHeaderContextMenu.Type = FarPoint.Web.Spread.ContextMenuType.RowHeader;
  FarPoint.Web.Spread.MenuItem rowHeaderItem = new FarPoint.Web.Spread.MenuItem("행 헤더 메뉴");
  rowHeaderItem.ChildItems.Add(new FarPoint.Web.Spread.MenuItem("메뉴1"));
  rowHeaderItem.ChildItems.Add(new FarPoint.Web.Spread.MenuItem("메뉴2"));
  rowHeaderContextMenu.Items.Add(rowHeaderItem);
  FpSpread1.ContextMenus.Add(rowHeaderContextMenu);
```

---

## Spread 페이징을 통한 BS프로그램 성능 개선

바인딩 데이터량이 크게 늘어날 경우(1000개 이상) 데이터 로딩에 약 30-60초 정도의 시간이 소요되면서 이와 함께 효율성이 떨어지는 문제가 보고되고 있습니다. 아래와 같은 사항을 고려해 보시기 바랍니다.
<br /><br />
**Spread BS 프로그램의 데이터 로딩 효율 분석:**

1.  BS 프로그램의 데이터 로딩 속도는 해당 네트워크의 대역폭 및 클라이언트 성능에 따라 달라집니다. 데이터량이 기준치를 초과할 때 로딩 속도가 느려지는 현상은 BS 프로그램의 취약점으로 분석되고 있습니다.
2.  Spread는 데이터를 표시할 때 데이터뿐만 아니라 스타일도 함께 로딩되기 때문에 프로그램 성능에 다소 영향을 미치게 됩니다.

<br /><br />
**Spread의 효율을 높이는 방법에 대해서는 많은 의견들이 제시되고 있지만 본 장에서는 데모 프로그램을 사용하여 아래와 같은 두 가지 방법을 통해 Spread 데이터 표시 효율을 높이는 방법을 소개합니다.**

1.  서버(server) 효율 제고: BaseSheetDataModel을 Spread의 데이터 소스로 상속 받은 후 페이지 번호 및 페이지 크기(PageSize)를 클릭하여 데이터를 분할 인출(data fetch)함으로써 페이지 나누기(paging)를 실시합니다.
2.  클라이언트 효율 제고: IsTrackingViewState 속성을 'ViewState 저장 금지'로 설정함으로써 효율을 높입니다.

<br /><br />
위의 두 가지 방법을 사용할 경우 1000개의 데이터 로딩에 소요되는 시간은 약 5-10초 입니다.

---

## CommandBar에 사용자 지정 버튼 추가하기

많은 사용자들이 CommandBar에서 사용자 정의 버튼을 추가하여 특수한 기능을 구현해낼 수 있는지에 대해 문의합니다.

본 장에서는 CommandBar에서 사용자 정의 버튼을 추가하고 사용자 정의 버튼의 포그라운드 호출 및 백그라운드 이벤트를 사용하는 방법에 대해 알아봅니다.

<br /><br />
**주요 단계:**

**1. Spread ButtonCommand 이벤트를 추가하고 사용자 정의 button 호출을 제공합니다.**
**2. Render 오버라이딩을 통해 사용자 정의 버튼을 추가합니다.**

```csharp
  protected override void Render(HtmlTextWriter writer)
  {
    Table table = FpSpread1.FindControl("cmdTable") as Table;

    // 사용자 정의 버튼 포그라운드 호출 이벤트
    DropDownList changepage = new DropDownList();
    changepage.ID = "pageindex";
    changepage.Items.Add("1");
    changepage.Items.Add("2");
    changepage.Items.Add("3");
    changepage.Items.Add("4");
    changepage.Items.Add("5");
    changepage.Attributes.Add("onchange", "change()");
    TableCell cell2 = new TableCell();
    cell2.Controls.Add(changepage);
    table.Rows[0].Cells.Add(cell2);

    // 사용자 정의 버튼 백그라운드 호출 이벤트
    TableCell cell1 = new TableCell();
    Button btn1 = new Button();
    bn1.Text = " 사용자 정의 버튼";
    btn1.Text = "Button1";
    btn1.Attributes.Add("onclick", ClientScript.GetPostBackEventReference(FpSpread1, "BtnCommand,-1,-1") + ";   return false;");
    cell1.Controls.Add(btn1);
    table.Rows[0].Cells.Add(cell1);
    base.Render(writer);
  }
```

**3. DropDownList 포그라운드 함수 코드:**

```javascript
  <script type="text/javascript">
          function change() {
              var pageindex = document.getElementById("FpSpread1_pageindex").value-1;
              FpSpread1.CallBack("Page,"+pageindex);
              return false;
          }
  </script>
```

---

## 브라우저 지원

Spread ASP.NET는 현재 가장 많은 사용자를 보유한 브라우저(IE, Firefox, Chrome, Safari, Opera등)환경을 지원합니다. Spread ASP.NET 컨트롤이 서버에 배치되는 경우 사용자는 서버에 요청을 보내고 서버는 클라이언트 브라우저에 Spread를 포함한 페이지 정보를 전송합니다.

Spread ASP.NET 컨트롤은 클라이언트에서 HTML Table로 렌더링됩니다. 이는 곧 서로 다른 브라우저에서 렌더링된 Spread 컨트롤과 연동성은 서로 다를 수 있음을 뜻합니다. Spread ASP.NET 컨트롤이 어떻게 클라이언트에게 표시되는지는 브라우저가 이들 HTML 스크립트를 어떻게 해석하느냐에 의해 결정됩니다. Spread 컨트롤을 로딩하는 동시에 일부 HTC 스크립트를 클라이언트에 로딩하게 됩니다. 본 장에서는 각각의 주요 브라우저 상에서 Spread for ASP.NET 컨트롤이 어떻게 달라지는지에 대해 알아봅니다.

### IE 브라우저 지원

Spread의 모든 기능은 Spread와 배포(release)시기가 같은 최신 버전의 IE 브라우저를 지원합니다.

### Mozilla Firefox 브라우저 지원

Spread 컨트롤 대부분의 기능은 Mozilla Firefox를 지원합니다. Mozilla Firefox와 호환되지 않는 기능은 아래 표와 같습니다.
<br /><br />

**1. AllowHeaderResize는 사용자가 행 헤더, 열 헤더 셀 크기를 조정할 수 있습니다.**

AllowHeaderResize를 'true'로 설정하면 IE 사용자는 행 헤더의 폭과 열 헤더의 높이를 조정할 수 있지만 이 속성은 Firefox에서는 사용할 수 없습니다. 사용자는 마우스 끌어서 놓기(Drag&Drop) 방식을 사용하여 행 헤더의 높이와 열 헤더의 폭을 조정할 수 있습니다.

<br />
**테스트 코드：**

```csharp
  this.FpSpread1.AllowHeaderResize = true;
```

<br />
**Internet Explorer**

![](https://www.grapecity.co.kr/images/training/spread/tc10-5-1.png)

**2. UseClipboard - 클립보드 복사/붙여넣기 사용불가**

UseClipboard이 'true'로 설정되어 있는 경우 Spread는 다른 프로그램으로부터 내용을 복사/붙여넣기할 수 있지만 'false'일 경우에는 Spread 셀 간의 복사/붙여넣기만 가능합니다. 다른 응용프로그램 혹은 Spread와 복사/붙여넣기 기능을 사용할 수 없습니다.

**3. 스크롤바 관련 속성:**

ScrollBarBaseColor, ScrollBarArrowColor 등의 속성은 Firefox에서 사용할 수 없습니다.

**4. ShowEllipsis 속성**
**5. UIVirtualization 속성**

UIVirtualization이 'false'로 설정되어 있는 경우 스크롤바를 끌어서 놓기(Drag&Drop)할 때 Spread 상단의 셀은 스크롤바와 함께 움직이지 않습니다. 드래그 앤 드롭을 해제하고 난 후(마우스를 누르지 않은 상태)에야 열 헤더를 현재 위치로 이동할 수 있습니다. 이 속성은 Firefox에서는 사용할 수 없습니다.

<br />
**테스트 코드：**

```csharp
  This.FpSpread1.UIVirtualization = false;
```

<br />
**Internet Explorer**

![](https://www.grapecity.co.kr/images/training/spread/tc10-5-2.png)

### Apple Safari 브라우저 지원

Spread 컨트롤 대부분의 기능은 Apple Safari를 지원합니다. Apple Safari와 호환되지 않는 기능은 아래 표와 같습니다.
<br /><br />
**1. FrozenRowCount 속성과 FrozenColumnCount 속성 - 행/열 고정 기능을 지원하지 않습니다.**
**2. ImeMode 속성 - 셀 유형의 입력기 상태를 편집할 수 있습니다.**

<br />
**테스트 코드：**

```csharp
  FpSpread1.Sheets[0].Cells[0, 0].ImeMode = FarPoint.Web.Spread.ImeMode.Auto;
  FpSpread1.Sheets[0].Columns[1].ImeMode = FarPoint.Web.Spread.ImeMode.Disabled;
  FpSpread1.Sheets[0].Rows[2].ImeMode = FarPoint.Web.Spread.ImeMode.Inactive
```

![](https://www.grapecity.co.kr/images/training/spread/tc10-5-3.png)

<br /><br />
**3. UIVirtualization 속성**

UIVirtualization이 'false'로 설정되어 있는 경우 스크롤바를 끌어서 놓기(Drag&Drop)할 때 Spread 상단의 셀은 스크롤바와 함께 움직이지 않습니다. 드래그 앤 드롭을 해제하고 난 후(마우스를 누르지 않은 상태)에야 열 헤더를 현재 위치로 이동할 수 있습니다. 이 속성은 Firefox에서는 사용할 수 없습니다.

![](https://www.grapecity.co.kr/images/training/spread/tc10-5-4.png)

### Google Chrome 브라우저 지원

Spread 컨트롤 대부분의 기능은 Google Chrome을 지원합니다. Google Chrome과 호환되지 않는 기능은 아래 표와 같습니다.
<br /><br />

**1. FrozenRowCount 속성과 FrozenColumnCount 속성 - 행/열 고정 기능을 지원하지 않습니다.**

**2. ImeMode 속성 - 셀 유형의 입력기 상태를 편집할 수 있습니다.**

<br />
**테스트 코드：**

```csharp
  FpSpread1.Sheets[0].Cells[0, 0].ImeMode = FarPoint.Web.Spread.ImeMode.Auto;
  FpSpread1.Sheets[0].Columns[1].ImeMode = FarPoint.Web.Spread.ImeMode.Disabled;
  FpSpread1.Sheets[0].Rows[2].ImeMode = FarPoint.Web.Spread.ImeMode.Inactive;
```

![](https://www.grapecity.co.kr/images/training/spread/tc10-5-5.png)

<br />
**3. UIVirtualization 속성**

UIVirtualization이 'false'로 설정되어 있는 경우 스크롤바를 끌어서 놓기(Drag&Drop)할 때 Spread 상단의 셀은 스크롤바와 함께 움직이지 않습니다. 드래그 앤 드롭을 해제하고 난 후(마우스를 누르지 않은 상태)에야 열 헤더를 현재 위치로 이동할 수 있습니다. 이 속성은 Firefox에서는 사용할 수 없습니다.

![](https://www.grapecity.co.kr/images/training/spread/tc10-5-6.png)
