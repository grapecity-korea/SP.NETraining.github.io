---
title: Spread.NET 출력
tags: [출력, print, 표, pdf, 머리글, 바닥글, 미리보기, 인쇄]
keywords: spread.net 출력, 스프레드 닷넷, spread.net print
last_updated: Aug 08, 2019
summary: "Spread.NET 출력"
sidebar: mydoc_sidebar
permalink: spwin_print.html
folder: mydoc
---

## Spread 표 컨트롤: 배경 이미지를 가진 PDF 파일 인쇄하기

Spread 표 컨트롤은 PDF 파일로 인쇄하기 기능을 지원합니다. Printinfo의 PrintToPdf 방법으로 PDF로 인쇄하기 기능을 구현할 수 있습니다.

최근 배경 이미지가 있는 PDF 파일을 프린트하는 방법에 대한 문의가 있었습니다. 비록 Spread에 해당 기능이 내장되어 있지 않지만, 사용자 지정으로 구현할 수 있습니다.  
구현 방법은 매우 간단합니다. Spread의 배경색을 투명으로 설정하면 Spread 배경 이미지를 인쇄할 수 있습니다.

<br /><br />
**자세한 내용은 코드 참고:**

```csharp
  private void fpSpread1_PrintBackground(object sender, FarPoint.Win.Spread.PrintBackgroundEventArgs e)
  {
    System.Drawing.Drawing2D.GraphicsState saveState = e.Graphics.Save();
    Rectangle rect = e.SheetRectangle;
    rect.Width = (int)AdjustWorkaroundForPDFPrint((float)rect.Width);
    rect.Height = (int)AdjustWorkaroundForPDFPrint((float)rect.Height);
    e.Graphics.SetClip(rect);
    e.Graphics.SetClip(rect);
    e.Graphics.DrawImage(fpSpread1.BackgroundImage, rect);
    e.Graphics.Restore(saveState);
  }

  private float AdjustWorkaroundForPDFPrint(float value)
  {
    float _ptperInch = 72;
    //Points Per inch
    float pixelPointFactor = (float)(_ptperInch / 96);
    //pixel point factor base on graphic dpi
    float displayPointFactor = (float)(_ptperInch / 100);
    //point factor base on display graphic unit
    return (float)(value * displayPointFactor / pixelPointFactor);
  }
```

---

## 표 필터 사용

[표 필터 사용 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/PrintToPDFWithBackGroundImage_CS.zip)
<br /><br />

표(Table)는 Excel의 데이터 필터와 비슷한 필터 도구를 제공합니다. 표의 필터 기능은 TablesView. FilterButtonVisible 속성에서 설정할 수 있습니다.

```csharp
  private void 데이터 필터 ToolStripMenuItem_Click(object sender, EventArgs e)
  {
    // 표에 필터 도구 표시 여부 설정
    table.FilterButtonVisible = !table.FilterButtonVisible;
  }
```

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms6-1-1.png)

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms6-1-2.png)

간단한 샘플을 참고해 주시기 바랍니다.

[표 필터 사용 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/PrintToPDFWithBackGroundImage_CS.zip)

---

## Spread 머리글 바닥글 인쇄 설정-이미지 삽입하기

[머리글 바닥글 인쇄 이미지 삽입 - 샘플 다운로드](http://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/PrintHeaderFooterDemo.zip)
<br /><br />
<[Spread 머리글 또는 바닥글 사용자 지정 인쇄](#spread-머리글-또는-바닥글-사용자-지정-인쇄)> 문서에 기반을 두고 머리글, 바닥글에 이미지를 추가해 보겠습니다.  
먼저 이미지 한 장을 이용해 Spread의 페이지 구성을 알아봅니다.

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms6-2-1.png)

<br /><br />
Spread의 인쇄와 인쇄 미리보기는 PrintInfo 유형으로 구현합니다.

머리글과 바닥글에 이미지를 삽입하기 위해 먼저 Spread 제품에 내장된 인터페이스 문서(Spread Windows Forms 7.0 Product Documentation ---Customizing the Printed Page Header or Footer)를 살펴보겠습니다.

[메뉴 경로: 시작-->모든 프로그램-->ComponentOne—>Spread Studio for .net 7.2—>Spread Winforms-->**Spread Help (CHM)**]

**이미지에 대응하는 속성을 찾을 수 있습니다: public Image[] Images {get; set;}**

```csharp
  // Define the printer settings
  FarPoint.Win.Spread.PrintInfo printset = new FarPoint.Win.Spread.PrintInfo();
  printset.Colors = new Color[] {Color.Red, Color.Blue};
  printset.Header = "Print Job For /nFPT Inc.";
  printset.Footer = "This is Page /p/nof /pc Pages";
  printset.Images = new Image[] {Image.FromFile("D:\Corporate.jpg"), Image.FromFile("D:\Building.jpg")};
  printset.RepeatColStart = 1;
  printset.RepeatColEnd = 25;
  printset.RepeatRowStart = 1;
  printset.RepeatRowEnd = 25;

  // Assign the printer settings to the sheet and print it
  fpSpread1.Sheets[0].PrintInfo = printset;
  fpSpread1.PrintSheet(0);
```

다음으로 <Customizing the Printed Page Header or Footer> 도움말 문서를 살펴보겠습니다.
이 문서에는 Footer, Header의 고급 사용법을 명확히 정의하고 있습니다. (PrintInfo의 Footer, Header 속성은 string 유형으로 사용과 확장이 매우 편리합니다.)

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms6-2-2.png)

마지막으로 그대로 따라 코딩합니다. 아래의 demo 코드 소스는 머리글, 바닥글에 이미지 삽입을 구현합니다.

<br />
**스크린샷:**

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms6-2-3.png)

간단한 샘플을 참고해 주시기 바랍니다.

[머리글 바닥글 인쇄 이미지 삽입 - 샘플 다운로드](http://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/PrintHeaderFooterDemo.zip)

---

## Spread 머리글 또는 바닥글 사용자 지정 인쇄

[머리글 또는 바닥글 사용자 지정 인쇄 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/pagenumber_frozenrow.zip)
<br /><br />

사람들은 표 컨트롤이 Excel 인쇄처럼 머리글과 바닥글을 인쇄할 수 있기를 바랍니다. 놀랍게도 Spread는 이를 완벽히 지원합니다. 또한, 사용자가 원하는 대로 머리글, 바닥글에 표시 내용과 방식을 지정할 수 있습니다. 실제 예시로 연습해 보겠습니다!

<br />
**스크린샷**

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms6-3-1.png)

<br />
**참고코드**

```csharp
  FarPoint.Win.Spread.PrintInfo printset = new FarPoint.Win.Spread.PrintInfo();
  printset.Header = "This is Page /p of /pc Pages";
  printset.Footer = "This is page /p of /pc pages";
  fpSpread1.Sheets[0].PrintInfo = printset;
  printset.PageEnd = fpSpread1.GetPrintPageCount(0);
  printset.ShowPrintDialog = true;
  printset.Preview = true;

  // Assign the printer settings to the sheet and print it
  fpSpread1.Sheets[0].PrintInfo = printset;
  fpSpread1.PrintSheet(0);
```

간단한 샘플을 참고해 주시기 바랍니다.

[머리글 또는 바닥글 사용자 지정 인쇄 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/pagenumber_frozenrow.zip)

---

## Spread는 Excel 인쇄 미리보기를 위해 A4 용지의 점선을 적용할 수 있습니다.

[인쇄 미리보기, A4 용지 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Spread_WF_PrintPreview.zip)
<br /><br />
엑셀에는 인쇄보기 중 종이크기 적용 기능이 있습니다. 이 기능을 사용하면 사용자가 Excel 파일에서 많은 양의 데이터를 쉽게 편집 할 수 있습니다.

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms6-4-1.gif)

스프레드는 위의 기능을 수행 할 수도 있습니다.

**먼저 픽셀 단위 변환을 합니다.**

**A4 용지 크기 : 21cm × 29.7cm, 72PPI를 선택한 다음 595 픽셀 × 842 픽셀 단위로 변환합니다.**

**다음으로 점선을 그릴 위치를 찾습니다.**

```csharp
  int rowCount = this.fpSpread1.ActiveSheet.RowCount;
  int colCount = this.fpSpread1.ActiveSheet.ColumnCount;

  //Row Scan
  float tempPixels = 0;
  List rowBorderList = new List();
  for (int i = 0; i < rowCount; i++)
  {
      float pixels = this.fpSpread1.ActiveSheet.GetPreferredRowHeight(i);
      tempPixels += pixels;
      if (tempPixels >= height_pixels)
      {
          rowBorderList.Add(i);
          tempPixels = 0;
      }
  }
```

스프레드 시트 페이지에는 n 개의 A4 용지가 있을 수 있으며, 목록을 사용하여 교차 번호로 저장할 수 있습니다.

<br/>
**마지막으로, 점선 테두리를 그립니다**

행 부분의 점선 테두리를 그립니다.

```csharp
  //Border
  FarPoint.Win.ComplexBorderSide bottomborder = new FarPoint.Win.ComplexBorderSide(Color.Black, 1, DashStyle.Dash);
  foreach (int item in rowBorderList)
  {
    fpSpread1.Sheets[0].Cells[item, 0, item, colCount - 1].Border =
    new FarPoint.Win.ComplexBorder(null, null, null, bottomborder);
  }
```

**열 부분의 점선 테두리를 그립니다.**

```csharp
  foreach (int row in rowBorderList)
  {
    foreach (int col in colBorderList)
    {
      fpSpread1.Sheets[0].Cells[row, col].Border = new FarPoint.Win.ComplexBorder(null, null, bottomborder, bottomborder);
    }
  }
```

간단한 샘플을 참고해 주시기 바랍니다.

[인쇄 미리보기, A4 용지 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Spread_WF_PrintPreview.zip)
