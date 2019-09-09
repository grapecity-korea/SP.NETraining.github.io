---
title: Spread.NET for ASP.NET 필터 / 검색 / 그룹핑
tags: [spread.net, 스프레드 닷넷, 필터, 검색, 그룹핑, 정렬]
keywords: spread.net ASP.NET 필터, spread.net ASP.NET 검색, spread.net ASP.NET 그룹핑, 스프레드 닷넷
last_updated: Aug 08, 2019
summary: "Spread.NET for ASP.NET 필터 / 검색 / 그룹핑"
sidebar: mydoc_sidebar
permalink: spasp_filter.html
folder: mydoc
---

## ColumnHeader클릭을 통한 정렬

[ColumnHeader클릭을 통한 정렬 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/Spread_ASP_SortJS.zip)
<br /><br />
열(Column) 헤더 클릭(one click)을 통한 정렬 기능 구현 방법과 정렬 이벤트에서 JS 메소드를 이용하여 알림창을 팝업시키는 방법에 대해 자주 문의 합니다. Spread는 다양한 포그라운드 메소드를 제공합니다. 그 중, SortColumn 메소드를 통해 열을 정렬할 수 있습니다. 이번 포스팅에서는 포그라운드 메소드를 사용하여 열 헤더 클릭을 통해 정렬 기능을 구현하는 방법과 알림창을 생성하는 방법을 시뮬레이션 해보도록 하겠습니다.

<br /><br />

**구현 단계는 아래와 같습니다.**

**1. 포그라운드를 통해 정렬 기능을 구현하기 위해서는 우선 AllowSort 속성을 설정해주어야 합니다.**

```csharp
     protected void Page_Load(object sender, EventArgs e)
     {
          if (IsPostBack)
          {
               return;
          }

          this.FpSpread1.Sheets[0].AllowSort = true;
     }
```

**2. Spread의 디폴트 정렬 메소드는 포그라운드에서 열 헤더 '더블클릭' 이벤트를 통해 정렬하도록 되어 있습니다. 따라서 우선 포그라운드의 클릭 이벤트를 필요에 맞게 재설정해야 합니다.**

```csharp
     protected override void Render(HtmlTextWriter writer)
     {
            Table cheader = this.FpSpread1.FindControl("cht") as Table;

            foreach (TableCell cell in cheader.Rows[0].Cells)
            {
                cell.Attributes.Add("onclick", "Sort()");
            }

            base.Render(writer);
     }
```

**3. 포그라운드에서 Spread DON 노드를 가져오고 정렬 메소드를 호출합니다.**

```javascript
     <script type="text/javascript">
          function Sort() {
               spread = document.getElementById("<%=FpSpread1.ClientID%>");
               spread.SortColumn(spread.ActiveCol);
               alert("정렬");
          }
     </script>
```

[ColumnHeader클릭을 통한 정렬 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/Spread_ASP_SortJS.zip)

---

## 그룹핑

Spread Studio ASP.NET 컨트롤은 Outlook과 유사한 그룹핑 기능을 제공합니다. Spread는 최대 4개 그룹 분할을 지원합니다.

<br />
Spread는 다음과 같은 두 가지 방식을 통화 그룹핑을 진행합니다.

**1. 코드를 이용한 그룹핑**
**2. 포그라운드 페이지에서 ColumnHeader를 끌어서 놓기(Drag&Drop)방식으로 그룹핑을 진행합니다.**

<br /><br />
본 장에서는 위의 두 가지 그룹핑 방식에 대해 알아봅니다.

**1. 그룹핑 코드: 아래와 같은 방식으로 주석을 생성합니다.**

```csharp
     protected void Page_Load(object sender, EventArgs e)
     {
          if (IsPostBack)
          {
               return;
          }

          GroupDataModel gdm;

          // 그룹바가 보이도록 설정
          FpSpread1.Sheets[0].GroupBarVisible = true;
          FpSpread1.Sheets[0].GroupBarText = " ColumnHeader의 드래그 앤 드롭을 통한 그룹핑";

          //group정보 설정
          FarPoint.Web.Spread.SheetView sv = this.FpSpread1.ActiveSheetView;
          sv.AllowGroup = true;

          ////데이터 모델을 그룹핑 모델에 전송
          gdm = new GroupDataModel(sv.DataModel);
          sv.DataModel = gdm;

          //그룹핑 열 및 정렬 방식 설정
          FarPoint.Web.Spread.SortInfo[] sort = new FarPoint.Web.Spread.SortInfo[1];

          // 파라미터1은 그룹핑 열, 파라미터2는 정렬방식, true는 오름차순 정렬
          sort[0] = new FarPoint.Web.Spread.SortInfo(1, true);
          gdm.Group(sort);
          FarPoint.Web.Spread.Model.Group group = new Group(gdm, (FarPoint.Web.Spread.Model.Group)gdm.Groups[0], 0, false);

          //groupfooter 정보 설정
          GroupFooter groupfooter = new GroupFooter(group);
          FpSpread1.Sheets[0].GroupFooterVisible = true;

          //ColumnFooter, GroupFooter 제1열 수식은 Sum으로 설정, 제5열의 모든 셀 총합 계산
          this.FpSpread1.ActiveSheetView.Columns[0].AggregationType = FarPoint.Web.Spread.Model.AggregationType.Sum;
     }
```

<br />
**효과:**

![](https://www.grapecity.co.kr/images/training/spread/tc4-2-1.png)

<br />
**2.  포그라운드 페이지에서 열 헤더를 끌어서 놓기(Drag&Drop)방식으로 그룹핑을 진행합니다. 아래 스크린샷을 참조하십시오.**

![](https://www.grapecity.co.kr/images/training/spread/tc4-2-2.png)

---

## 그룹 행 헤더의 그룹핑 정보 표시 설정

[그룹 행 헤더의 그룹핑 정보 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/GroupRowCount.zip)
<br /><br />
Spread for ASP.NET 컨트롤은 그룹핑 기능이 포함되어 있습니다.
사용자가 열 헤더를 그룹핑 영역에 드래그 앤 드롭하여 그룹핑을 진행할 수 있습니다.
그룹핑 행 헤더는 기본적으로(디폴트값) 그룹핑된 열의 인덱스와 그룹핑된 유일한 값을 표시하도록 설정되어 있습니다.
본 장에서는 그룹핑 행 헤더의 텍스트 설정을 통해 그룹핑에 포함된 행 수를 표시하는 방법에 대해 알아봅니다.

**구현 방법:**

본 예제는 매우 간단한 구현 방법을 소개하고 있습니다.
**폼 안의 모든 행(공백이 아닌)을 루프시키고 IsGroup 메소드를 통해 그룹핑 행 여부를 판단해야 합니다. 그룹핑 행이 맞다면 관련 정보를 가져오게 됩니다.**

```csharp
     private void CalculateGroups(object sender)
     {
          FarPoint.Web.Spread.FpSpread ss = (FarPoint.Web.Spread.FpSpread)sender;
          FarPoint.Web.Spread.Model.GroupDataModel gm;

          int total;
          int column = 0;
          int y = 0;

          gm = (FarPoint.Web.Spread.Model.GroupDataModel)ss.ActiveSheetView.DataModel;

          for (int i = 0; i < ss.ActiveSheetView.NonEmptyRowCount; i++)
          {
               if (gm.IsGroup(i))
               {
                    FarPoint.Web.Spread.Model.Group g;
                    g = gm.GetGroup(i);
                    g.Expanded = false;

                    total = 0;
                    total = g.Rows.Count;
                    column = g.Column;

                    string s = gm.TargetModel.GetValue(getRow(g), column).ToString();
                    s = column.ToString() + ":" + s;

                    g.Text = s + " (" + total.ToString() + ")";
               }
          }
     }

     int getRow(FarPoint.Web.Spread.Model.Group group)
     {
          if (group.Rows[0] is FarPoint.Web.Spread.Model.Group)
          return getRow(group.Rows[0] as arPoint.Web.Spread.Model.Group);

          return (int)group.Rows[0];
     }
```

![](https://www.grapecity.co.kr/images/training/spread/tc4-3-1.gif)

[그룹 행 헤더의 그룹핑 정보 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/GroupRowCount.zip)

---

## 검색

[검색 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/Spread_ASP_Search.zip)
<br /><br />
Spread for ASP.NET는 워크시트와 검색 대기 문자열 설정을 통해 워크북의 모든 셀에 대한 데이터 검색을 진행할 수 있습니다.
검색의 목표 대상은 기본 셀의 텍스트, 헤더, 셀 주석 혹은 탭이 될 수 있습니다.
또한 시작 행/열의 검색 범위를 지정할 수도 있습니다.

<br />
**우선 헤더 내용의 검색 방법에 대해 알아봅니다.**

```csharp
     protected void Page_Load(object sender, EventArgs e)
     {
          FpSpread1.Sheets[0].RowHeader.Cells[0, 0].Text = "Row Header";
          FpSpread1.Sheets[0].RowHeader.Cells[0, 0].Tag= "Row Header Tag";
          FpSpread1.Sheets[0].RowHeader.Cells[0, 0].Note = "Row Header Note";
     }

     protected void Button1_Click(object sender, EventArgs e)
     {
          int x = 0;
          int x = 0;
          FarPoint.Web.Spread.SearchFoundFlags sff;

          //텍스트 검색 및 검색 범위 설정
          sff = FpSpread1.SearchHeaders(0, "Row Header", true, false, false, false, false, true, false, false, 0, 0, 2, 2, ref x, ref y);
     }
```

<br /><br />
**이제 기본 셀의 데이터 검색 방법에 대해 알아보겠습니다. 코드는 아래와 같습니다.**

```csharp
     protected void Button2_Click(object sender, EventArgs e)
     {
          int rowindx=0;
          int rowindx=0;

          //타겟 내용이 검색되면 검색결과로 리턴됩니다. 그렇지 않을 경우 null이 리턴됩니다.
          string searchStr = FpSpread1.Search(0, "Total", true, true, false, false, 0, 0, 2, 3, ref rowindx, ref colindx);
     }
```

![](https://www.grapecity.co.kr/images/training/spread/tc4-4-1.gif)

[검색 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/Spread_ASP_Search.zip)

---

## 필터링

[필터링 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/Filtering.zip)
<br /><br />

Spread 컨트롤은 기본 필터, 필터바(bar) 및 Microsoft Excel과 유사한 필터 등을 포함한 다양한 필터링 방식을 제공합니다. 기본 필터링 방식은 Spread for ASP.NET 7 이전 버전에서 제공됩니다.

**최신 버전에서는 필터바 및 Excel과 유사한 필터링 방식을 지원합니다. 이로써 Spread와 Excel의 호환성을 크게 높여 사용자들이 더욱 쉽게 체험할 수 있도록 했습니다.**

최신 Spread for ASP .NET은 데이터 필터링이 가능하며 기본적으로는 필터 생성, 지정 열로 필터 분배(분할 필터링)의 순서에 따라 진행됩니다.
또한 필터링이 적용되는 행과 적용되지 않는 행의 배경색을 임의로 지정할 수 있습니다.

<br />
**각종 필터링 효과에 대해 알아보도록 하겠습니다.**

<br />
**기본 필터:**

![](https://www.grapecity.co.kr/images/training/spread/tc4-5-1.png)

<br />
**필터바 필터링:**

![](https://www.grapecity.co.kr/images/training/spread/tc4-5-2.png)

<br />
**Excel 스타일 필터링:**

![](https://www.grapecity.co.kr/images/training/spread/tc4-5-3.png)

<br />
필터의 다양한 특성을 임의로 설정할 수 있습니다. 예를 들면, 필터링 조건 행에 부합하는 스타일을 사용할 수 있습니다. 이제 필터링의 구체적인 구현 방법에 대해 알아보겠습니다.

<br />
### 기본 필터링 설정

사용자의 필요에 따른 필터링 설정이 가능하므로 더욱 손쉽게 사용할 수 있습니다. 폼(form) 행 필터링을 사용할 수 있습니다. 특정 열을 대상으로 필터링을 진행할 수 있기 때문에 조건에 부합하는 행만을 표시할 수 있으며 동시에 이들 행의 모양(외관)을 임의로 설정할 수 있습니다. 기본 필터링 기능을 사용하는 동시에 사용자 정의 필터링 또한 간편하게 구현해낼 수 있습니다.

```csharp
     //6번째 열 필터링 가능으로 설정
     FarPoint.Web.Spread.HideRowFilter hideRowFilter = new FarPoint.Web.Spread.HideRowFilterFpSpread1.ActiveSheetView);

     hideRowFilter.ShowFilterIndicator = true; //Spread 필터링 버튼 표시
     hideRowFilter.AddColumn(6);

     FpSpread1.ActiveSheetView.RowFilter = hideRowFilter; //필터링 적용
```

<br />
### 필터바 필터링 설정

본 필터링 방식은 Spread for ASP.NET 7에서 제공하는 새로운 기능으로 필터바 필터링 기능을 수행하기 위해서는 FilterBarCellType를 결합하여 필터바 데이터 유형을 설정해야 합니다. 필터링 모델이 FilterBar로 설정되어 있는 경우 각 열의 헤더 하단에는 모두 필터가 생성됩니다.

현재 열의 속성을 필터링 조건으로 설정할 수 있습니다. 필터 버튼을 클릭 하면 Spread는 자동으로 해당 조건에 맞는 행을 필터링합니다.

```csharp

     //Spread 필터링 모델 설정
     sheet.AutoFilterMode = FarPoint.Web.Spread.AutoFilterMode.FilterBar;

     //네 번째 열의 필터 유형을 수치형으로 설정
     FarPoint.Web.Spread.FilterBarCellType ct = new FarPoint.Web.Spread.FilterBarCellType();
     ct.MenuType = FarPoint.Web.Spread.FilterMenuType.Number;
     sheet.FilterBar.Cells[3].CellType = ct;

      //5, 6번째 열의 필터유형을 날짜형으로 설정
      FarPoint.Web.Spread.FilterBarCellType ct1 = new FarPoint.Web.Spread.FilterBarCellType();
      ct1.MenuType = FarPoint.Web.Spread.FilterMenuType.Date;
      FpSpread1.ActiveSheetView.FilterBar.Cells[5].CellType = ct1;
      FpSpread1.ActiveSheetView.FilterBar.Cells[6].CellType = ct1;
```

<br />
### Excel 스타일 필터링

본 필터링 방식은 Spread for ASP.NET 7에서 새롭게 제공하는 기능으로 FilterColumnDefinition를 결합하여 구현 가능하며 필터링 조건에 부합하는 행만을 표시하고 기타 행들은 자동 숨김이 적용됩니다.

필터링 실행 후 차트를 복사, 검색, 편집, 포맷, 생성할 수 있으며 행을 재배열하거나 이동할 필요 없이 필터링 데이터의 부분집합을 인쇄할 수 있습니다.

또한 여러 열(Multi-column)에 대한 정렬도 가능합니다. 필터링 기능은 중첩 사용이 가능하며 이는 곧 각각의 필터링 조건이 모두 현재의 필터링 결과를 기반으로 하고 있음을 뜻합니다.

```csharp
     FpSpread1.ActiveSheetView.DefaultStyle.VerticalAlign = VerticalAlign.Middle;
     //엑셀 타입의 필터 선언
     FpSpread1.ActiveSheetView.AutoFilterMode = FarPoint.Web.Spread.AutoFilterMode.Enhanced;
     FarPoint.Web.Spread.IRowFilter rowFilter = new FarPoint.Web.Spread.HideRowFilterFpSpread1.ActiveSheetView);

     FarPoint.Web.Spread.FilterColumnDefinition fd0 = new FarPoint.Web.Spread.FilterColumnDefinition(0, arPoint.Web.Spread.FilterListBehavior.Default);
     FarPoint.Web.Spread.FilterColumnDefinition fd1 = new FarPoint.Web.Spread.FilterColumnDefinition(1, arPoint.Web.Spread.FilterListBehavior.Default);
     FarPoint.Web.Spread.FilterColumnDefinition fd2 = new FarPoint.Web.Spread.FilterColumnDefinition(2, arPoint.Web.Spread.FilterListBehavior.Default);
     FarPoint.Web.Spread.FilterColumnDefinition fd3 = new FarPoint.Web.Spread.FilterColumnDefinition(3, arPoint.Web.Spread.FilterListBehavior.Default);
      FarPoint.Web.Spread.FilterColumnDefinition fd4 = new FarPoint.Web.Spread.FilterColumnDefinition(4, arPoint.Web.Spread.FilterListBehavior.Default);
      FarPoint.Web.Spread.FilterColumnDefinition fd5 = new FarPoint.Web.Spread.FilterColumnDefinition(5, arPoint.Web.Spread.FilterListBehavior.Default);
      FarPoint.Web.Spread.FilterColumnDefinition fd6 = new FarPoint.Web.Spread.FilterColumnDefinition(6, arPoint.Web.Spread.FilterListBehavior.Default);
      FarPoint.Web.Spread.FilterColumnDefinition fd7 = new FarPoint.Web.Spread.FilterColumnDefinition(7, arPoint.Web.Spread.FilterListBehavior.Default);
      FarPoint.Web.Spread.FilterColumnDefinition fd8 = new FarPoint.Web.Spread.FilterColumnDefinition(8, arPoint.Web.Spread.FilterListBehavior.Default);
      FarPoint.Web.Spread.FilterColumnDefinition fd9 = new FarPoint.Web.Spread.FilterColumnDefinition(9, arPoint.Web.Spread.FilterListBehavior.Default);

      rowFilter.ColumnDefinitions.Add(fd0);
      rowFilter.ColumnDefinitions.Add(fd1);
     rowFilter.ColumnDefinitions.Add(fd2);
      rowFilter.ColumnDefinitions.Add(fd3);
      rowFilter.ColumnDefinitions.Add(fd4);
      rowFilter.ColumnDefinitions.Add(fd5);
      rowFilter.ColumnDefinitions.Add(fd6);
      rowFilter.ColumnDefinitions.Add(fd7);
      rowFilter.ColumnDefinitions.Add(fd8);
      rowFilter.ColumnDefinitions.Add(fd9);

      FpSpread1.ActiveSheetView.RowFilter = rowFilter;
```

[샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/Filtering.zip)
