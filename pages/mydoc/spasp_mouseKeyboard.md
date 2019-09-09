---
title: Spread.NET for ASP.NET 마우스 키보드 제어
tags: [mouse, keyboard, 마우스, 키보드, 제어, ASP.NET, 마우스 클릭 이벤트, 커서]
keywords: spread.net 마우스 키보드 제어, 스프레드 닷넷
last_updated: Aug 08, 2019
summary: "Spread.NET for ASP.NET 마우스 키보드 제어"
sidebar: mydoc_sidebar
permalink: spasp_mouseKeyboard.html
folder: mydoc
---

## Spread외부 컨트롤로 포커스 전환

[포커스 전환 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/SpreadChangeFocus.zip)

Spread for ASP.NET 컨트롤에서 Tab키를 클릭하면 셀 간 포커스가 전환됩니다.

Cell[0,0],Cell[0,1],Cell[0,2].....Cell[0,5]，Cell[1,0],Cell[1,1],Cell[1,2].....Cell[1,5]의 순서대로 진행하다가 마지막 행/열에 도달하면 다시 Cell[0,0]으로 돌아가서 순환되는 구조를 가지게 됩니다.

본 장에서는 단축키 Tab 클릭 이벤트를 필요에 맞게 설정한 후 포커스를 기타 컨트롤로 전환하는 방법에 대해 알아봅니다.

<br />
**C# 코드：**

```csharp
    protected override void Render(HtmlTextWriter writer)
    {
        Table tb = this.FpSpread1.FindControl("viewPort") as Table;
        FpSpread1.Attributes.Add("onkeydown", "changefocus()");
        base.Render(writer);
	}
```

**JS 코드 :**

```javascript
<script type="text/javascript">
    function changefocus() {
        var button = this.document.getElementById("Button1");
        event.cancelBubble = true;
        return false;
        button.focus();
    }
</script>
```

[포커스 전환 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/SpreadChangeFocus.zip)

---

## Spread 클라이언트 마우스 클릭 이벤트

[마우스 클릭 이벤트 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/CustomSpreadClientEvent.zip)

고객들이 Spread 폼(시트)이 클라이언트의 마우스 원 클릭, 더블 클릭 이벤트를 활용하여 각각 서로 다른 동작을 진행하게 하는 방법에 대해서 문의 하고는 합니다 아래와 같은 방법으로 구현이 가능 합니다.

<br />
**1.  해당 폼의 id를 받아 새로운 프로젝트를 생성하고 Spread를 WebForm 페이지에 추가하여 실행시킨 후 IE 개발자 도구를 사용하여 가져올 수(get) 있습니다.**

<br />
**2.  Page Render 메소드 오버라이딩을 통해 백그라운드에서 해당 Table을 받습니다. 코드는 다음과 같습니다.**

```csharp
    protected override void Render(HtmlTextWriter writer)
    {
        Table viewPort = this.FpSpread1.FindControl("viewport") as Table;
        viewPort.Attributes.Add("onclick", "clickOnSpread()");
        base.Render(writer);
    }
```

3.  포그라운드에서 필요한 메소드를 추가합니다. 단, 여기에서는 단지 기능만을 표시합니다. 물론 복잡한 동작을 추가할 수도 있습니다. 코드는 다음과 같습니다.

```javascript
    <script type="text/javascript">
    	function clickOnSpread() {
    		Alert("마우스 클릭 폼");
    	}
    </script>
```

[마우스 클릭 이벤트 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/CustomSpreadClientEvent.zip)

---

## Spread 영역 내 마우스 커서 모양 변경 방법

[커서 모양 변경 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/5041_Cursor.zip)

Spread가 제공하는 GrayAreaCursorType 속성은 공백 영역에서의 마우스 커서 모양을 설정하는데 사용됩니다.

그러나 간혹 Spread 전체 영역에서의 커서 모양을 설정해야 하는 경우가 있습니다. 본 장에서는 클라이언트에서 JS를 통해 해당 기능을 구현하는 방법을 알아봅니다.

<br />
주요 JS 코드는 아래와 같습니다.

```javascript
    <script type="text/javascript">
        function SetSpreadCursor() {
            var cell = event.srcElement;
            while ((cell != null) && (cell.id.indexOf("<%=FpSpread1.ClientID %>")== -1))
            {
                cell = cell.parentElement;
            }
            if ((cell != null) && (cell.id.indexOf("<%=FpSpread1.ClientID %>") != -1)) {
                event.srcElement.style.cursor = "help";
            }
        }
    </script>
```

![](https://www.grapecity.co.kr/images/training/spread/tc9-3-1.gif)

[커서 모양 변경 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/5041_Cursor.zip)

---

## 테이블 코너(Corner) 클릭으로 Spread 전체를 선택하는 기능 해제하기

Spread는 초기 설정상(default) 좌측 상단 모서리 부분(Corner)을 클릭하면 Spread 전체 셀이 선택됩니다.

이러한 기능이 필요없는 경우에는 아래와 같은 코드를 사용하여 해당 기능을 차단할 수 있습니다.

<br />
**Step1:**

페이지의 Render 메소드를 오버라이딩하고 Corner에 onmousedown의 클라이언트 이벤트를 추가합니다.

**- C# 코드**

```csharp
    protected override void Render(HtmlTextWriter writer)
    {
        WebControl corner = this.FpSpread1.FindControl("corner") as WebControl;
        corner.Attributes.Add("onmousedown", "return CornerClick()");
        base.Render(writer);
    }
```

<br />
**Step2:**

    클라이언트에 JS 코드를 추가합니다.

**- JS 코드**

```javascript
    <script type="text/javascript">
            function CornerClick() {
                event.cancelBubble = true;
                event.returnValue = false;
                return false;
            }
    </script>
```

---

## 키보드 동작 맵핑

Spread for ASP.NET 는 사용자 정의 포그라운드 단축기 기능을 지원하며 사용자의 사용 습관을 저장합니다.
본 장에서는 단축키 정보의 추가 및 제거에 대해 알아봅니다.

<br />
**Spread의 포그라운드 AddKeyMap 메소드는 단축키 정보를 추가하는데 사용되며 해당 코드는 아래와 같습니다.**

```javascript
    <script language=javascript>
        function setMap() {
        var ss = document.getElementById("FpSpread1");
        if (ss != null){
            //IE9 or earlier
            //ss.AddKeyMap(13,true,true,false,"this.MoveToLastColumn()");
            ss.AddKeyMap(13,true,true,false,"element.MoveToLastColumn()");
        }
    </script>
```

<br />
**Spread 포그라운드 RemoveKeyMap 메소드는 단축키 정보 제거에 사용되며 해당 코드는 아래와 같습니다.**

```javascript
    <script language=javascript>
        function setMap() {
            var ss = document.getElementById("FpSpread1");
            if (ss != null){
            ss.RemoveKeyMap(13,true,true,false);
        }
    </script>
```
