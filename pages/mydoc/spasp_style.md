---
title: Spread.NET for ASP.NET 스타일
tags: [spread.net, 스프레드 닷넷, 스타일, 배경색, 테두리, 템플릿, 스킨, skin]
keywords: spread.net ASP.NET 스타일, 스프레드 닷넷
last_updated: Aug 08, 2019
summary: "Spread.NET for ASP.NET 스타일"
sidebar: mydoc_sidebar
permalink: spasp_style.html
folder: mydoc
---

## 고정 행/열의 굵은 테두리 표시 스타일 수정

[고정 행/열 스타일 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/5363_Frozen.zip)

Spread for ASP.NET가 제공하는 행/열 고정 기능은 사용자가 다음과 같은 두 행의 코드를 설정하는 것만으로 손쉽게 구현할 수 있습니다.

```csharp
    this.FpSpread1.Sheets[0].FrozenRowCount = 2;
    this.FpSpread1.Sheets[0].FrozenColumnCount = 2;
```

Spread에서 행/열 고정 기능은 SheetView를 여러 개의 <Table>로 분할하여 표시하고 맞닿은 경계선을 굵게 표시함으로써 다음과 같은 효과를 가지고자 할 때 기본적으로 사용됩니다.

![](https://www.grapecity.co.kr/images/training/spread/tc2-1-1.png)

<br />
단, 특정 상황에서는 경계선을 굵게 표시할 필요 없이 기타 표의 테두리 선과 같은 스타일로 설정해야 하는 경우가 있습니다.

이 때, SheetView에서 분할된 <Table>을 대상으로 특수한 스타일 설정을 진행합니다.
viewport와 viewport1의 좌측 테두리 그리고 viewport와 viewport2의 위 테두리를 숨김 설정(숨기기)합니다.
이러한 과정은 모두 렌더(Render)를 통해 구현 가능합니다. 해당 코드는 아래와 같습니다.

```csharp
    protected override void Render(HtmlTextWriter writer)
    {
        Table frozenTable1 = this.FpSpread1.FindControl("viewport1") as Table;
        if (frozenTable1 != null)
        {
            frozenTable1.Style.Value = "border-bottom: Black  1px solid; position: " +
                "relative; border-left: Black  0px solid; width: 1px; border-collapse:" +
                " collapse; table-layout: fixed; border-top: Black  1px solid; top: 0px;" +
                " cursor: default; border-right: Black  1px solid;";
        }
        Table frozenTable2 = this.FpSpread1.FindControl("viewport2") as Table;
        if (frozenTable2 != null)
        {
            frozenTable2.Style.Value = "border-bottom: Black  1px solid; position: " +
                "relative; border-left: Black  1px solid; width: 1px; border-collapse:" +
                " collapse; table-layout: fixed; border-top: Black  0px solid; top: 0px;" +
                " cursor: default; border-right: Black  1px solid;";
        }
        Table frozenTable = this.FpSpread1.FindControl("viewport") as Table;
        if (frozenTable != null)
        {
            frozenTable.Style.Value = "border-bottom: Black  1px solid; position: " +
                "relative; border-left: Black  0px solid; width: 1px; border-collapse:" +
                " collapse; table-layout: fixed; border-top: Black  0px solid; top: 0px;" +
                " cursor: default; border-right: Black  1px solid;";
        }
        base.Render(writer);
    }
```

![](https://www.grapecity.co.kr/images/training/spread/tc2-1-2.png)

[고정 행/열 스타일 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/5363_Frozen.zip)

---

## 행 템플릿 레이아웃

Spread for ASP.NET는 열 템플릿(RowTemplate)에 새로운 열 헤더 템플릿을 추가함으로써 열 헤더 셀은 데이터 행과 완전히 다른 레이아웃 스타일 형성합니다.
사용자는 전통적인 Spread 레이아웃 방식에서 벗어나 데이터를 여러 개의 행에서 표시할 수 있습니다.

멀티로우(Multi-Row) 레이아웃은 행 템플릿에 의해 결정되며 행 템플릿은 코드 혹은 Spread Designer를 통해 설정할 수 있습니다.

본 장에서는 코드를 사용하여 템플릿 레이아웃을 추가하는 방법에 대해 설명합니다.
(Spread 데이터 소스는 이미 바인딩 처리되었습니다.)

![](https://www.grapecity.co.kr/images/training/spread/tc2-2-1.png)

<br />
**1.  WorksheetTemplate을 통해 행 템플릿의 레이아웃을 구현할 수 있습니다.**
 
    우선 타겟 폼의 템플릿을 행 레이아웃 템플릿으로 설정합니다.

```csharp
    this.FpSpread1.Sheets[0].FrozenRowCount = 2;
    this.FpSpread1.Sheets[0].FrozenColumnCount = 2;
```

    이후 행 레이아웃 템플릿을 설정합니다.

```csharp
    // 행 레이아웃 템플릿을 설정합니다.
    sheet.WorksheetTemplate.ColumnCount = 4;
    sheet.WorksheetTemplate.RowTemplate.RowCount = 2;
    sheet.WorksheetTemplate.ColumnHeaderTemplate.RowCount = 1;
    sheet.WorksheetTemplate.LayoutColumns[0].Width = 100;
    sheet.WorksheetTemplate.LayoutColumns[1].Width = 100;
    sheet.WorksheetTemplate.LayoutColumns[2].Width = 70;
    sheet.WorksheetTemplate.LayoutColumns[3].Width = 300;
```

    마지막으로 데이터 소스 필드가 행 템플릿에서 표시되는 순서를 설정해야 합니다.

```csharp
    //행 레이아웃에서 데이터 필드를 표시하는 순서 설정
    sheet.WorksheetTemplate.LayoutCells[0, 0].DataIndex = 1;
    sheet.WorksheetTemplate.LayoutCells[0, 1].DataIndex = 2;
    sheet.WorksheetTemplate.LayoutCells[1, 0].DataIndex = 3;
    sheet.WorksheetTemplate.LayoutCells[0, 2].DataIndex = 6;
    sheet.WorksheetTemplate.LayoutCells[0, 3].DataIndex = 4;
    sheet.WorksheetTemplate.LayoutCells[1, 3].DataIndex = 5;
```

<br />
**2.  Spread 데이터 소스 설정**

```csharp
    //데이터 소스에서 데이터 가져오기
    DataTable employees = new DataTable("Employees");

    using (OleDbConnection connection = new OleDbConnection(@"Provider=Microsoft.Jet.OLEDB.4.0;Data Source=|DataDirectory|\Northwind.mdb;Persist Security Info=True"))
    {
        using (OleDbDataAdapter adapter = new OleDbDataAdapter("SELECT EmployeeID, FirstName, LastName, Title, Address, HomePhone FROM Employees", connection))
        {
            adapter.Fill(employees);
        }
    }

    employees.Columns.Add(new DataColumn("Photo"));

    //FpSpread 클래스의 DataSource 속성을 통해 데이터 소스 설정
    FpSpread1.DataSource = employees;
```

이상으로 Spread for ASP.NET 7의 새로운 틋징 - 행 템플릿 레이아웃에 대한 설명을 마칩니다.

<br />
필터 특성과 관련된 더 자세한 내용은 온라인 데모 버전을 참고하십시오.

[https://demos.componentone.com/Spread/ASPNET/ControlExplorer_V12E/samples/RowTemplateLayout/Overview.aspx](https://demos.componentone.com/Spread/ASPNET/ControlExplorer_V12E/samples/RowTemplateLayout/Overview.aspx)

---

## 스킨(skin)

Spread는 총 19가지의 스킨을 내장하고 있어 화면(인터페이스) 스타일에 대한 사용자의 다양한 수요를 만족시킬 수 있습니다.

특히 광범위한 활용도를 자랑하는 Office2007및 Office2013 스킨을 제공할 뿐만 아니라 사용자 정의를 통해 사용자가 직접 스킨을 설정할 수 있습니다.

<br />
내장 스킨의 전환 방법은 아래 그림을 참고하십시오.

![](https://www.grapecity.co.kr/images/training/spread/tc2-3-1.gif)

```csharp
    FarPoint.Web.Spread.SheetSkin myskin = new FarPoint.Web.Spread.SheetSkin("MySkin",
    Color.BlanchedAlmond, Color.Bisque, Color.Navy, 2, Color.Blue, GridLines.Both, Color.Beige,
    Color.BurlyWood, Color.AntiqueWhite, Color.Brown, Color.Bisque, Color.Bisque,
    true, true, true, true, false);
    myskin.Apply(FpSpread1.Sheets[0]);
```

[샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/Spread_ASP_Skin.zip)
