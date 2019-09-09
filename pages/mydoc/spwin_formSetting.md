---
title: Spread.NET 폼 설정
tags: [Form, 폼설정, 표, table, 확장, 그림]
keywords: spread.net 폼 설정, 스프레드 닷넷
last_updated: Aug 08, 2019
summary: "Spread.NET 폼 설정"
sidebar: mydoc_sidebar
permalink: spwin_formSetting.html
folder: mydoc
---

## Spread for Winforms 표 컨트롤: 교차표 보고서 구현하기

[교차표 보고서 구현하기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/crossreport.zip)
<br /><br />
Spread 표 컨트롤은 업계에서 Excel과의 높은 호환성으로 유명하며 보고서 작성에 널리 쓰이고 있습니다. 일상 업무에서 excel로 교차표 보고서를 작성할 일이 많습니다. Excel 교차표 보고서의 좌측 상단 셀의 사선은 Excel 셀 사선 테두리로 작성합니다. 그럼 Spread에서도 이런 효과를 구현할 수 있을까요? 본문에서는 Spread에서 사선을 추가해 교차표 보고서의 머리글 효과를 구현하는 법을 설명하겠습니다.

Spread 테두리에는 사선 테두리가 없지만 다양한 도형 기능은 UI 배치는 물론, 인쇄, Excel 내보내기도 지원합니다. 본문에서는 LineShape를 사용해 비슷한 효과를 내보겠습니다.

**1. Spread에 LineShape를 추가하는 방법은 아래와 같습니다.**

```csharp
    FarPoint.Win.Spread.DrawingSpace.LineShape lShape = new FarPoint.Win.Spread.DrawingSpace.LineShape();
    lShape.Name = "line";
    lShape.Top = 0;
    lShape.Left = 0;
    lShape.Thickness = 5;
    lShape.ShapeOutlineColor = Color.Red;
    this.fpSpread1.Sheets[0].AddShape(lShape);
```

**결과:**
![](https://www.grapecity.co.kr/images/training/spread/tc_winforms4-1-1.png)

**2. 셀의 길이와 너비를 계산해 LineShape의 시작 위치와 각도를 계산합니다.**

```csharp
    private Rectangle CaculateRectangle(int startRowIndex, int startColIndex
    , int endRowIndex, int endColIndex)
    {
        float height = 0;
        float width = 0;
        for (int i = startRowIndex; i <= endRowIndex; i++)
        {
            height += this.fpSpread1.Sheets[0].Rows[i].Height;
        }
        for (int i = startColIndex; i <= endColIndex; i++)
        {
            width += this.fpSpread1.Sheets[0].Columns[i].Width;
        }
        Rectangle cellRec = this.fpSpread1.GetCellRectangle(0, 0, startRowIndex, startColIndex);
        Point startPositoin = new Point(cellRec.Left - (int)this.fpSpread1.Sheets[0].SheetCorner
    .Columns[0].Width, cellRec.Top - (int)this.fpSpread1.Sheets[0].SheetCorner.Rows[0].Height);
        Rectangle rec = new Rectangle(startPositoin, new Size((int)width, (int)height));
        return rec;
    }
```

**3. SetBounds 설정 방법으로 LineShpae 위치 정보를 설정합니다.**

```csharp
    FarPoint.Win.Spread.DrawingSpace.LineShape line =  new FarPoint.Win.Spread.DrawingSpace.LineShape();
    line.Name = "mark";
    line.ShapeOutlineColor = Color.Gray;
    line.Width = 2;
    line.Location = new Point(0, 0);
    Rectangle rec = CaculateRectangle(0, 0, 2, 1);
    line.SetBounds(rec);
```

이상이 설정의 핵심 코드입니다. 위 방법을 사용하면 다음과 같은 결과를 얻을 수 있습니다.

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms4-1-2.png)

머리글 숨기기 및 테두리 설정 후 아래와 같은 결과를 얻을 수 있습니다.

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms4-1-3.png)

간단한 샘플을 참고해 주시기 바랍니다.

[교차표 보고서 구현하기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/crossreport.zip)

---

## Spread Studio : 표(Table) 기능

[표(Table) 기능 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/SpreadStudioV8_Table.zip)
<br /><br />

WinForms 플랫폼에는 뛰어난 표(Table) 기능이 있습니다. 필터, 행 바인딩, 기본 제공 스타일 등 기능을 포함하며 셀 구역을 1개 표로 표시할 수 있고 엑셀의 표와도 호환됩니다. 본문에서는 표(Table) 기능의 사용법을 전면적으로 소개하겠습니다. 내용:

1. 표 추가
2. 표 필터 사용
3. 표 크기 조정
4. 표 데이터 정렬
5. 표 스타일 설정
6. 표에 수식 추가
7. 표 관련 수식 인용 소개

### 1) 표 추가

가장 중요한 방법은 AddTable로 리로드 방법이 다양하며 원하는 대로 선택할 수 있습니다. 상세한 설명은 도움말 문서의 FarPoint.Win.Spread Assembly > FarPoint.Win.Spread Namespace > SheetView Class : AddTable Method 챕터를 참조하시길 바랍니다.

```csharp
    {
        fpSpread1.Sheets[0].RemoveTable("table");
        // AddTable 방법으로 표 추가
        fpSpread1.Sheets[0].Cells[1, 1].Text = “제품명";
        fpSpread1.Sheets[0].Cells[1, 2].Text = "판매량";
        fpSpread1.Sheets[0].Cells[2, 1].Text = "iPhone 6";
        fpSpread1.Sheets[0].Cells[2, 2].Value = 5000;
        fpSpread1.Sheets[0].Cells[3, 1].Text = "iPhone 6 Plus";
        fpSpread1.Sheets[0].Cells[3, 2].Value = 6800;
        fpSpread1.Sheets[0].Cells[4, 1].Text = "샤오미 4";
        fpSpread1.Sheets[0].Cells[4, 2].Value = 12000;
        fpSpread1.Sheets[0].Cells[5, 1].Text = “삼성 Note4";
        fpSpread1.Sheets[0].Cells[5, 2].Value = 5800;
        table = fpSpread1.Sheets[0].AddTable("table", 1, 1, 6, 2);
    }
```

### 2) 표 필터 사용

표(Table)는 Excel의 데이터 필터와 비슷한 필터 도구를 제공합니다. 표의 필터 기능은 TablesView. FilterButtonVisible 속성에서 설정할 수 있습니다.

```csharp
    private void 데이터 필터 ToolStripMenuItem_Click(object sender, EventArgs e)
    {
        // 표에 필터 도구 표시 여부 설정
        table.FilterButtonVisible = !table.FilterButtonVisible;
    }
```

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms4-2-1.png)

### 3) 표 크기 조정

처음 표 추가 시 행/열 수를 지정하고, 나중에 TableView.Resize() 방법으로 추가 조정할 수 있습니다.

```csharp
    private void 크기 조정 ToolStripMenuItem_Click(object sender, EventArgs e)
    {
        // 표 크기 조정(행과 열의 수)
	    table.Resize(6, 3);
    }
```

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms4-2-2.png)

### 4) 표 데이터 정렬

Spread는 SheetView에서 열 기준 정렬 기능을 기본 제공합니다. 새로 추가한 표(Table)에도 같은 정렬 기능을 제공하므로 TableView.Sort() 방법으로 정렬 방식을 지정할 수 있습니다.

```csharp
    private void 데이터 정렬 ToolStripMenuItem_Click(object sender, EventArgs e)
    {
        // Sort 방법으로 표 데이터 정렬
	    FarPoint.Win.Spread.ComplexSortInfo[] sort = new FarPoint.Win.Spread.ComplexSortInfo[1];
        sort[0] = new FarPoint.Win.Spread.ComplexSortInfo(1, true);
        table.Sort(sort);

    }
```

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms4-2-3.png)

### 5) 표 스타일 설정

표마다 머리글 행, 합계 행, 첫 열, 마지막 열, 줄무늬 행, 줄무늬 열 등 스타일을 다르게 지정할 수 있습니다. 또한, 디자이너에서는 기본 저장된 표 스타일을 선택할 수도 있습니다.

```csharp
    private void 스타일 설정 ToolStripMenuItem_Click(object sender, EventArgs e)
    {
        // 표 스타일 설정

	    fpSpread1.Sheets[0].Cells[1, 1].Text = “제품명";
        fpSpread1.Sheets[0].Cells[1, 2].Text = "판매량";
        fpSpread1.Sheets[0].Cells[2, 1].Text = "iPhone 6";
        fpSpread1.Sheets[0].Cells[2, 2].Value = 5000;
        fpSpread1.Sheets[0].Cells[3, 1].Text = "iPhone 6 Plus";
        fpSpread1.Sheets[0].Cells[3, 2].Value = 6800;
        fpSpread1.Sheets[0].Cells[4, 1].Text = "샤오미 4";
        fpSpread1.Sheets[0].Cells[4, 2].Value = 12000;
        fpSpread1.Sheets[0].Cells[5, 1].Text = “삼성 Note4";
        fpSpread1.Sheets[0].Cells[5, 2].Value = 5800;
        fpSpread1.TableStyleCollection.Add(tstyle);
        FarPoint.Win.Spread.TableView table = fpSpread1.Sheets[0].AddTable("table", 1, 1, 6, 2, "Style1");
        table.FirstColumn = true;
    }
```

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms4-2-4.png)

### 6) 표에 수식 추가

표(Table)에 수식을 추가할 수도 있습니다. 합계 행에서 드롭다운 목록을 이용해 필요한 수식을 지정할 수 있습니다.

```csharp
    private void 표 수식 ToolStripMenuItem_Click(object sender, EventArgs e)
    {
        fpSpread1.Sheets[0].RemoveTable("table");
        // 표의 합계행 표시 여부 설정
        fpSpread1.Sheets[0].Cells[1, 1].Text = “제품명";
        fpSpread1.Sheets[0].Cells[1, 2].Text = "판매량";
        fpSpread1.Sheets[0].Cells[2, 1].Text = "iPhone 6";
        fpSpread1.Sheets[0].Cells[2, 2].Value = 5000;
        fpSpread1.Sheets[0].Cells[3, 1].Text = "iPhone 6 Plus";
        fpSpread1.Sheets[0].Cells[3, 2].Value = 6800;
        fpSpread1.Sheets[0].Cells[4, 1].Text = "샤오미 4";
        fpSpread1.Sheets[0].Cells[4, 2].Value = 12000;
        fpSpread1.Sheets[0].Cells[5, 1].Text = “삼성 Note4";
        fpSpread1.Sheets[0].Cells[5, 2].Value = 5800;
        FarPoint.Win.Spread.TableView table = fpSpread1.Sheets[0].AddTable("table", 1, 1, 6, 2);
        table.TotalRowVisible = true;
    }
```

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms4-2-5.png)

### 7) 표 관련 수식 인용 소개

Spread는 표의 구조적 수식 인용을 지원합니다. 구조적 인용에는 표명, 열 표시기와 표 표시기가 포함됩니다.

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms4-2-6.png)

```csharp
    private void 수식 인용 ToolStripMenuItem_Click(object sender, EventArgs e)
    {
        fpSpread1.Sheets[0].RemoveTable("table");
        // 수식에서 표 인용
        fpSpread1.Sheets[0].Cells[1, 1].Text = “제품명";
        fpSpread1.Sheets[0].Cells[1, 2].Text = "판매량";
        fpSpread1.Sheets[0].Cells[2, 1].Text = "iPhone 6";
        fpSpread1.Sheets[0].Cells[2, 2].Value = 5000;
        fpSpread1.Sheets[0].Cells[3, 1].Text = "iPhone 6 Plus";
        fpSpread1.Sheets[0].Cells[3, 2].Value = 6800;
        fpSpread1.Sheets[0].Cells[4, 1].Text = "샤오미 4";
        fpSpread1.Sheets[0].Cells[4, 2].Value = 12000;
        fpSpread1.Sheets[0].Cells[5, 1].Text = “삼성 Note4";
        fpSpread1.Sheets[0].Cells[5, 2].Value = 5800;
        FarPoint.Win.Spread.TableView table = fpSpread1.Sheets[0].AddTable("table", 1, 1, 6, 2);
        fpSpread1.Sheets[0].Cells[8, 1].Text = “판매량 합계:";
        fpSpread1.Sheets[0].Cells[8, 2].Formula = "SUM(table[판매량])";
    }
```

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms4-2-7.png)

[표(Table) 기능 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/SpreadStudioV8_Table.zip)

---

## 코드로 자식 폼을 확장하는 방법

[코드로 자식 폼을 확장하는 방법 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/hierachy.zip)
자식폼을 코드적으로 확장하는 방법에 대하여 설명 드립니다. ExpandRow함수를 통하여 아래와 같이 구현이 가능 합니다.

```csharp
    FarPoint.Win.Spread.SheetView childSheet = newSheetView();
    childSheet = this.FpSpread1.ActiveSheet.GetChildView(0, 0);
    bool flag = true;

    for (int i = 0; i < childSheet.RowCount; i++)
    {
        childSheet.ExpandRow(i, flag);
        flag = !flag;
    }
```

간단한 샘플을 참고하여 주시기 바랍니다.

[코드로 자식 폼을 확장하는 방법 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/hierachy.zip)

---

## [WinForms] 그림 추가

그림을 셀 위에 추가하고 위치를 이동하고 사이즈를 조정할 수 있습니다. Shape은 배경 이미지를 가져 오거나 설정하기위한 BackgroundImage를 제공합니다.

[그림 추가 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Spread_Win_Selection.zip)

```csharp
    FarPoint.Win.Picture p = newPicture((Image)Properties.Resources.ResourceManager.GetObject("Tulips"));
    p.Style = RenderStyle.Stretch;
    FarPoint.Win.Spread.DrawingSpace.RectangleShape rShape = new FarPoint.Win.Spread.DrawingSpace.RectangleShape();
    rShape.Name = "myRect1";
    rShape.BackgroundImage = p;
    rShape.Location = newPoint(20, 60);
    rShape.Width = 100;
    rShape.Height = 100;
    fpSpread1.ActiveSheet.AddShape(rShape);
```

간단한 샘플을 참고하여 주시기 바랍니다.

[그림 추가 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Spread_Win_Selection.zip)
