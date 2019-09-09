---
title: Spread.NET for ASP.NET 클라이언트
tags: [spread.net, 스프레드 닷넷, 클라이언트, client, 포그라운드 이벤트, JavaScript, 자바스크립트, 속성, 높이, 배경색, 잠금, 셀 병합]
keywords: spread.net ASP.NET 클라이언트, 스프레드 닷넷
last_updated: Aug 08, 2019
summary: "Spread.NET for ASP.NET 클라이언트"
sidebar: mydoc_sidebar
permalink: spasp_client.html
folder: mydoc
---

## 코드를 이용하여 Spread 포그라운드 이벤트 추가하기

[코드를 이용하여 이벤트 추가하기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/Spread ASP .NET (JavaScript Baisic).zip)
<br /><br />
Spread for ASP.NET 컨트롤은 일련의 포그라운드 메소드 및 이벤트를 지원함으로써 클라이언트에서의 Spread 컨트롤 사용에 대한 편의를 제공합니다. 특히 포그라운드의 속성 창에서 간편하게 이벤트를 추가할 수 있습니다. 그러나 백그라운드에서 Spread를 리셋해야 하는 경우에는 포그라운드에서 추가한 모든 이벤트들이 모두 리셋됩니다. 본 장에서는 포그라운드의 js 코드를 사용하여 Spread 클라이언트 이벤트를 추가하는 방법에 대해 알아봅니다.

추가 코드는 아래와 같습니다.

```javascript
    <script type="text/javascript">
        window.onload = function () {
            var ss = document.getElementById("FpSpread1");
            ss.addEventListener("ActiveCellChanged", onActiveCellChanged, false);
            ss.addEventListener("EditStart", onEditStart, false);
            ss.addEventListener("EditStopped", onEditStop, false);
        }
        function onActiveCellChanged(event) {
            // Row changed
            // event.row doesn't work in FireFox
            alert(event.row);
        }

        function onEditStart(event) {
            alert("EditStart");
        }

        function onEditStop(event) {
            alert("EditStoped");
        }
    </script>
```

<br />
**스크린샷:**

![](https://www.grapecity.co.kr/images/training/spread/tc5-1-1.png)

이제 Spread가 리셋되어 포그라운드의 Spread 이벤트를 저장할 수 있습니다.

[코드를 이용하여 이벤트 추가하기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/Spread ASP .NET (JavaScript Baisic).zip)

---

## JavaScript를 이용한 Spread 속성 가져오기/설정하기

[JavaScript로 Spread 속성 제어 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/SpreadforASPDemo.zip)
<br /><br />
Web 항목에서 Spread를 사용하는 경우 JaveScript와 Spread 간의 상호작용(interaction)을 통하여 관련 속성을 가져오는 방법이 가장 자주 사용되고 있습니다. 물론 많은 사용자들이 이와 관련된 문제들을 제기하기도 합니다. 본 장에서는 비교적 자주 접하는 케이스를 예로 들어 JaveScript와 Spread의 intercation 방법을 소개합니다.

### Case 1: JavaScript에서 현재 활성화된 셀의 위치 및 셀 관련 속성 가져오기

<br />
구현 경로: Spread ActiveRow와 ActiveColumn 속성을 통해 현재 활성화된 셀의 행/열 인덱스를 가져오고 다시 Spread 포그라운드 메소드 GetCellByRowCol를 통해 현재 활성화된 셀 오브젝트를 가져옵니다.

```csharp
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            FarPoint.Web.Spread.TextCellType tcell = new FarPoint.Web.Spread.TextCellType();
            tcell.Password = true;
            tcell.MaxLength = 5;
            FpSpread1.ActiveSheetView.Cells[1, 1].CellType = tcell;

            FarPoint.Web.Spread.SheetView sv = FpSpread1.ActiveSheetView;
            sv.ActiveColumn = 0;
            sv.ActiveRow = 0;
            sv.SetValue(sv.ActiveColumn, sv.ActiveRow, "Active");

            FpSpread1.Sheets[0].Cells[sv.ActiveColumn, sv.ActiveRow].BackColor = rawing.Color.Red;
            FpSpread1.Sheets[0].Cells[sv.ActiveColumn + 1, sv.ActiveRow + 1].BackColor = rawing.Color.Yellow;
            FpSpread1.Sheets[0].Cells[sv.ActiveColumn + 2, sv.ActiveRow + 2].BackColor = rawing.Color.BlueViolet;
        }
    }

    protected override void Render(HtmlTextWriter writer)
    {
        Table spreadTable = this.FpSpread1.FindControl("viewport") as Table;
        spreadTable.Attributes.Add("onclick", ript.GetPostBackEventReference(FpSpread1, "Button,-1,-1") + "; return false;");
        base.Render(writer);
    }

    protected void FpSpread1_ButtonCommand(object sender, .Web.Spread.SpreadCommandEventArgs e)
    {

        TextBox1.Text = FpSpread1.Sheets[0].ActiveRow.ToString();
        TextBox2.Text = FpSpread1.Sheets[0].ActiveColumn.ToString();
        TextBox4.Text = FpSpread1.Sheets[0].Cells[FpSpread1.Sheets[0].ActiveRow, 1.Sheets[0].ActiveColumn].BackColor.ToString();
        TextBox3.Text = FpSpread1.Sheets[0].GetCellType(FpSpread1.Sheets[0].ActiveRow, 1.Sheets[0].ActiveColumn).ToString();
        UpdatePanel1.Update();
    }
```

![](https://www.grapecity.co.kr/images/training/spread/tc5-2-1.png)

### Case 2: 마우스 커서의 셀 진입 후 서버와의 통신

<br />
UpdatePanel 내 CellType 변경 또는 backColor 설정을 셀 클릭시 보여 줍니다. GetPostBackEventReference메소드를 통해 ButtonCommand 이벤트를 트리거시켰습니다.

코드는 아래와 같습니다.

```javascript
    <script lang="javascript" type="text/javascript">
        window.onload = function () {
            var spread1 = document.getElementById("<%=FpSpread1.ClientID %>");
            if (document.all) {
                // IE
                if (spread1.addEventListener) {
                    // IE9
                    spread1.addEventListener("ActiveCellChanged", cellChanged, false);
                    spread1.addEventListener("EditStopped", FpSpread1_EditStopped, false);
                } else {
                    // Other versions of IE and IE9 quirks mode (no doctype set)
                    spread1.onActiveCellChanged = cellChanged;
                    spread1.onEditStopped = FpSpread1_EditStopped;
                }
            }
            else {
                spread1.addEventListener("ActiveCellChanged", cellChanged, false);
                spread1.addEventListener("EditStopped", FpSpread1_EditStopped, false);
            }
        }

        function cellChanged(event) {
            alert("r" + event.row + ",c" + event.col);
        }

        function FpSpread1_EditStopped(event) {

            //Add code to handle your event here.
            var spread = document.getElementById("<%=FpSpread1.ClientID %>");
            spread.UpdatePostbackData();
            spread.CallBack("Button");

        }

    </script>
```

![](https://www.grapecity.co.kr/images/training/spread/tc5-2-2.png)

### Case 3: Spread 스크롤바 위치 get/set

<br />
본 케이스는 Spread 포그라운드 속성을 scrollTop 및 scrollLeft로 설정하여 스크롤바 위치를 변경합니다.

코드는 아래와 같습니다.

```javascript
    <script lang="javascript" type="text/javascript">

        function Button1_onClick(event) {
            //Add code to handle your event here.
            var spread = document.getElementById("<%=FpSpread1.ClientID %>");
            var RowPosition = 15, ColPosition = 2;

            spread.ScrollTo(RowPosition, ColPosition);

            spread.EndEdit();
            spread.SetActiveCell(RowPosition, ColPosition);
            spread.StartEdit();

            var txBox = document.getElementById("<%= TextBox1.ClientID %>");
            txBox.value = "Activcell Row Positon : " + RowPosition.toString() + "  /  Column  : " + ColPosition.toString();
        }

    </script>
```

```csharp
    protected void Page_Load(object sender, EventArgs e)
    {

        if (!IsPostBack)
        {
            this.FpSpread1.Sheets[0].ColumnCount = 30;
            this.FpSpread1.Sheets[0].RowCount = 500;
            this.FpSpread1.Sheets[0].AllowPage = false;
            this.FpSpread1.Sheets[0].Cells[0, 0].BackColor = System.Drawing.Color.Red;

            Button1.Attributes.Add("onclick", "Button1_onClick(event)");
        }
    }
```

![](https://www.grapecity.co.kr/images/training/spread/tc5-2-3.png)

[JavaScript로 Spread 속성 제어 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/SpreadforASPDemo.zip)

---

## JavaScript를 이용한 Spread 높이 설정

[JavaScript로 Spread 높이 설정 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/9339.zip)
<br /><br />
JS를 통해 Spread Studio for ASP.NET 컨트롤의 Spread 높이를 설정하는 방법에 대한 문의가 게시판을 통해 자주 등장하고 있습니다. 본 장에서는 높이 설정 방법에 대해 알아봅니다.
<br /><br />
**구현 배경:**

사용자가 Spread를 포함한 페이지에 대한 요청을 제기할 경우 Spread는 브라우저 내에서 HTML Table로 렌더링됩니다.

![](https://www.grapecity.co.kr/images/training/spread/tc5-3-1.png)

따라서 포그라운드에서 Spread에 대한 동작을 실행할 경우 Spread에 내장된 일부 이벤트 및 메소드를 사용하는 것 외에 Table에 대한 모든 DOM 속성 및 js 동작을 Spread에 시험적용합니다.
<br /><br />
여기에서는 Spread 생성 테이블에 대한 구현 방법을 알아보겠습니다.

```html
<div id="spreadcontainer" style="width: 400px; height: 200px;">
  <FarPoint:FpSpread
    ID="FpSpread1"
    runat="server"
    BorderColor="Black"
    BorderStyle="Solid"
    BorderWidth="1px"
    Height="100%"
    Width="100%"
  >
    <CommandBar
      BackColor="Control"
      ButtonFaceColor="Control"
      ButtonHighlightColor="ControlLightLight"
      ButtonShadowColor="ControlDark"
    >
    </CommandBar>
    <Sheets>
      <FarPoint:SheetView SheetName="Sheet1"> </FarPoint:SheetView>
    </Sheets>
  </FarPoint:FpSpread>
  <br />
  <input
    id="Button1"
    type="button"
    value="button"
    onclick="return Button1_onclick()"
  />
</div>
```

우선, Spread 외부에 Div 컨테이너(Container)를 네스팅합니다. HTML 코드는 아래와 같습니다.  
Html Button 클릭 이벤트를 통해 Spread 크기 변경을 트리거해줍니다.

```javascript
    <script language="javascript" type="text/javascript">

    // <![CDATA[
            function Button1_onclick() {
                var container = document.getElementById("spreadcontainer");
                var c1 = document.getElementById("FpSpread1_rowHeader");
                var c2 = document.getElementById("FpSpread1_view");
                container.style.height = "700px";
                c1.style.height = "649px";
                c2.style.height = "649px";
            }
    // ]]>

    </script>
```

![](https://www.grapecity.co.kr/images/training/spread/tc5-3-2.gif)

[JavaScript로 Spread 높이 설정 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/9339.zip)

## JavaScript를 이용한 Spread 행(row) 배경색 및 잠금 설정

[ JavaScript로 행(row) 배경색 및 잠금 -샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/3615.zip)
<br /><br />
본 장에서는 JS를 이용한 행(row) 배경색 설정 및 행 잠금 방법에 대해 알아봅니다.\

<br /><br />
**JS 코드:**

```javascript
    <script type="text/javascript">

        function Button1_onclick() {

            var spread = document.all("FpSpread1");
            var table = FpSpread1.all("FpSpread1_Viewport");
            var tr = table.rows(spread.ActiveRow);
            tr.bgColor = "Red";

            var iActiveRow, iActiveCol;

            for (var i = 0; i < 4; i++) {
                iActiveRow = FpSpread1.ActiveRow;
                var cell = FpSpread1.GetCellByRowCol(iActiveRow, i);
                cell.setAttribute("FpCellType", "readonly");
            }
        }

    </script>
```

![](https://www.grapecity.co.kr/images/training/spread/tc5-4-1.png)

[ JavaScript로 행(row) 배경색 및 잠금 -샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/3615.zip)

## Spread for ASP.NET 컨트롤: JavaScript를 이용한 셀 병합

[JavaScript를 이용한 셀 병합 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/MergeCells.zip)
<br /><br />
최근 '동일 내용의 연속된 셀 병합'에 대한 필요성이 제기되고 있습니다. 예를 들면, 하나의 열에 속한 연속된 셀들이 동일한 값을 가지고 있을 때 하나의 셀로 병합하여 나타내는 방식을 말합니다.
본 장에서는 Cell 클라이언트 속성인 rowSpan와 colSpan를 사용하여 위의 기능을 구현하는 방법에 대해 알아봅니다.

<br /><br />
아래의 예제는 특정 열의 모든 행에 대한 루프를 통해 인접한 셀의 값에 따라 그룹화를 진행하는 방법을 나타내고 있습니다.

```javascript
    <script type="text/javascript">

        function Button2_onclick()
        {
            var spread = document.getElementById("FpSpread1");
            var rc = spread.GetTotalRowCount();
            var r = 0;

            while (r != rc - 1)
            {
                r1 = r;
            var inc = 0;
            while (r1 != -1)

                {
                    var val1 = spread.GetValue(r1, 1);
                    var val2 = spread.GetValue(r1 + 1, 1);
                    if (val1 == val2)
                    {
                        inc++;
                        r1++;
                    }
                    else
                    {
                        var cell = spread.GetCellByRowCol(r, 1);
                        cell.rowSpan = inc + 1;
                        r = r1 + 1;
                        r1 = -1;
                    }
                }
            }

            alert('Cells with same values merged');
        }

    </script>
```

![](https://www.grapecity.co.kr/images/training/spread/tc5-5-1.gif)

[JavaScript를 이용한 셀 병합 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/MergeCells.zip)
