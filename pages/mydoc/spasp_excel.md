---
title: Spread.NET for ASP.NET Excel 호환
tags: [spread.net, 스프레드 닷넷, Excel 호환, 엑셀 호환]
keywords: spread.net ASP.NET Excel 호환, 스프레드 닷넷, spread.net ASP.NET 엑셀 호환
last_updated: Aug 08, 2019
summary: "Spread.NET for ASP.NET Excel 호환"
sidebar: mydoc_sidebar
permalink: spasp_excel.html
folder: mydoc
---

## Excel 에서 차트 가져오기

일상 업무 중에는 엑셀을 사용해서 차트를 추가하고 데이터를 직관적으로 표현하는 작업을 많이 하게 됩니다. Spread는 Excel의 대부분 기능과 호환되기 때문에 당연히 차트 또한 가져오기 할 수 있습니다. Spread 컨트롤은 차트, 파형(waveform), 조건부 서식 등 다양한 데이터 시각화 기능을 제공합니다.

본 장에서는 ASP.NET에서 차트 컨트롤을 가져오는 방법에 대해 알아봅니다.

세부 단계는 다음과 같습니다.

1.  Spread로 Excel 열기

    ```csharp
    1:  this.FpSpread1.OpenExcel(this.Server.MapPath("ExcelChartImport.xlsx"));
    ```

2.  만약 Excel 파일 내에 여러 개의 차트가 있다면 Excel의 각 차트를 모두 첫 번째 시트에 표시하도록 설정합니다.
    ```csharp
    1:
    2:   for (int c = 0; c < FpSpread1.ActiveSheetView.Charts.Count; c++)
    3:   {
    4:
    5:       FpSpread1.ActiveSheetView.Charts[c].PageIndex = 0;
    6:   }
    ```
3.  webconfig 파일에 차트 설치 노드를 추가합니다.
    ```csharp
    1: <httpHandlers>
    2: <add path="FpChart.axd" verb="*" type="FarPoint.Web.Chart.ChartImageHttpHandler" validate="true" />
    3: </httpHandlers>
    ```

[샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/ExcelChartImport.zip)

## 다국어 Excel 파일 내보내기

클라이언트에서 Excel 파일 형식으로 Spread를 저장할 때 파일명을 다국어로 설정하면 내보내기를 한 후 파일명이 깨지는 문제가 발생할 수 있습니다. 해결방법은UrlEncode 메소드를 통해 다국어로 명칭을 전환하기만 하면 됩니다.
<예제 코드>

```csharp
1: this.FpSpread1.SaveExcelToResponse(Server.UrlEncode("测试.xls"));
```

서버에서 Spread 파일 내보내기:

```csharp
1: this.FpSpread1.SaveExcel(Server.MapPath("测试.xls"));
```

[샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/Spread_SaveAsCNName.zip)

## Excel 테두리 가져오기 설정

Spread 컨트롤에서 Excel 가져오기 후 테두리가 굵게 변하는 문제가 발생하는 경우가 있습니다. Spread는 Html Table 형식으로 브라우저에 렌더링되기 때문에 테두리가 겹치는 현상이 나타날 수 있습니다. 본 장에서는 Excel과 동일하게 테두리를 설정하는 방법에 대해 알아봅니다.

<원본 엑셀>

```
![](https://www.grapecity.co.kr/images/training/spread/tc6-3-1.png)
```

<파일을 불러 왔을 때>

```
![](https://www.grapecity.co.kr/images/training/spread/tc6-3-2.png)
```

아래 방법을 통해 Excel의 테두리 효과를 복원할 수 있습니다. 예제 코드는 아래와 같습니다.

<예제 코드>

```csharp
1: //공백이 아닌 마지막 행/열의 인덱스 가져오기
2: int rowCount = this.FpSpread1.Sheets[0].NonEmptyRowCount;
3: int colCount = this.FpSpread1.Sheets[0].NonEmptyColumnCount;
4:
5: // Cell 테두리 크기 만큼 루프
6: for (int i = 0; i < rowCount; i++)
7: {
8:     for (int j = 0; j < colCount; j++)
9:     {
10:         if (this.FpSpread1.Sheets[0].Cells[i, j].Border.BorderStyleBottom == BorderStyle.Solid)
11:         {
12:             this.FpSpread1.Sheets[0].Cells[i, j].Border.BorderSizeBottom = 1;
13:         }
14:         if (this.FpSpread1.Sheets[0].Cells[i, j].Border.BorderStyleLeft == BorderStyle.Solid)
15:         {
16:             this.FpSpread1.Sheets[0].Cells[i, j].Border.BorderSizeLeft = 1;
17:         }
18:         if (this.FpSpread1.Sheets[0].Cells[i, j].Border.BorderStyleRight == BorderStyle.Solid)
19:         {
20:             this.FpSpread1.Sheets[0].Cells[i, j].Border.BorderSizeRight = 1;
21:         }
22:         if (this.FpSpread1.Sheets[0].Cells[i, j].Border.BorderStyleTop == BorderStyle.Solid)
23:         {
24:             this.FpSpread1.Sheets[0].Cells[i, j].Border.BorderSizeTop = 1;
25:         }
26:     }
27: }
```

<정상적으로 복구된 화면>

![](https://www.grapecity.co.kr/images/training/spread/tc6-3-3.png)

[샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/Spread_ASP_Border.zip)
