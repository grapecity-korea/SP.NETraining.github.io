---
title: Spread.NET 스타일
tags: [spread.net, 스프레드 닷넷, 스타일, 배경색, 스킨, skin]
keywords: spread.net 스타일, 스프레드 닷넷
last_updated: Aug 08, 2019
summary: "Spread.NET 스타일"
sidebar: mydoc_sidebar
permalink: spwin_style.html
folder: mydoc
---

## 좌측 상단 모서리 셀의 배경색 설정하기

하단의 코드로 좌측 상단 모서리 셀의 배경색을 설정할 수 있습니다. 해당 셀을 클릭하면 전체 폼이 선택됩니다.

**[Visual Basic .NET Code]**

```vb
    FpSpread1.ActiveSheet.SheetCornerStyle.BackColor = Color.Blue
```

**[C# Code]**

```csharp
    fpSpread1.ActiveSheet.SheetCornerStyle.BackColor = Color.Blue;
```

**결과:**

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms2-1-1.png)

---

## Spread Selection 살펴보기

[Spread Selection 살펴보기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/2-2.SpreadSelection.zip)
<br /><br />

Spread 표 컨트롤 시스템은 기본값으로 선택기 2종을 제공하며 각각 속성 설정을 통해 즉시 구현할 수 있습니다.
또한, 선택기를 사용자의 용도에 따라 설정할 수도 있습니다.

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms2-2-1.gif)

<br />
**- 시스템 선택기:**

```csharp
    this.fpSpread1.SelectionRenderer = new FarPoint.Win.Spread.DefaultSelectionRenderer();
```

**- 시스템 그러데이션 선택기**

```csharp
  FarPoint.Win.Spread.GradientSelectionRenderer gsr = new FarPoint.Win.Spread.GradientSelectionRenderer();
  gsr.Color1 = Color.Green;
  gsr.Color2 = Color.LightGreen;
  gsr.LinearGradientMode = System.Drawing.Drawing2D.LinearGradientMode.Vertical;
  gsr.Opacity = 100;
  this.fpSpread1.SelectionRenderer = gsr;
```

**- 시스템 선택기, 색 수정**

```csharp
  fpSpread1.ActiveSheet.SelectionStyle = FarPoint.Win.Spread.SelectionStyles.SelectionColors;
  fpSpread1.ActiveSheet.SelectionPolicy = FarPoint.Win.Spread.Model.SelectionPolicy.Range;
  fpSpread1.ActiveSheet.SelectionUnit = FarPoint.Win.Spread.Model.SelectionUnit.Cell;
  fpSpread1.ActiveSheet.SelectionBackColor = Color.Yellow;
  fpSpread1.ActiveSheet.SelectionForeColor = Color.Green;
```

**- 사용자 지정 선택기--그러데이션 색**

```csharp
  fpSpread1.ActiveSheet.SelectionStyle = FarPoint.Win.Spread.SelectionStyles.SelectionRenderer;
  SelectionRenderer_GradientSelection grd = new SelectionRenderer_GradientSelection(Color.Red, Color.PowderBlue, System.Drawing.Drawing2D.LinearGradientMode.Horizontal, 80);
  this.fpSpread1.SelectionRenderer = grd;

  public class SelectionRenderer_GradientSelection : FarPoint.Win.Spread.GradientSelectionRenderer
     {

         private Color clr1;

         private Color clr2;

         private System.Drawing.Drawing2D.LinearGradientMode gradMode;

         private int op;

         public SelectionRenderer_GradientSelection(Color color1, Color color2, System.Drawing.Drawing2D.LinearGradientMode mode, int opacity) :

             base(Color.Beige, Color.Blue, System.Drawing.Drawing2D.LinearGradientMode.ForwardDiagonal, 220)
         {
             clr1 = color1;
             clr2 = color2;
             gradMode = mode;
             op = opacity;
         }

         public new void PaintSelection(Graphics g, int x, int y, int width, int height)
         {
             if (((width > 0)
                         && (height < 0)))
             {
                 Color c1 = Color.FromArgb(op, clr1.R, clr1.G, clr1.B);
                 Color c2 = Color.FromArgb(op, clr2.R, clr2.G, clr2.B);
                 LinearGradientBrush selectionBrush = new System.Drawing.Drawing2D.LinearGradientBrush(new Rectangle(x, y, width, height), c1,
     c2, gradMode);
                 g.FillRectangle(selectionBrush, x, y, width, height);
                 selectionBrush.Dispose();
             }
         }
    }

```

[Spread Selection 살펴보기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/2-2.SpreadSelection.zip)

---

## Spread Skin 사용자 정의

[Spread Skin 사용자 정의 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/custom_skin.zip)
<br /><br />

Spread Skin은 Spread Skin클래스를 통해 사용자 정의 될 수 있습니다.  
예를 들면 아래와 같습니다.

```csharp
    FarPoint.Win.Spread.SpreadSkin skin = new FarPoint.Win.Spread.SpreadSkin();
    // Skin은 커스텀 스프레드 스타일을 위한 풍부한 인터페이스를 제공합니다. 여기서는 생략되어 있습니다. 자세한 사항은 데모 참조/
    /Spread Skin 적용
    skin.Apply(fpSpread1);
    //현재 적용한 사용자 정의 스킨 저장
    FarPoint.Win.Spread.SpreadSkin.Save(skin,"c:\\forums3\\farpoint.skn");
```

다음의 샘플을 참고해 주시기 바랍니다.

[Spread Skin 사용자 정의 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/custom_skin.zip)

---

## 선택한 셀 렌더러의 배경색을 수정하는 방법

[선택 셀 배경생 수정 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Cell Renderer.zip)
<br /><br />

셀이 선택되었때 배경의 색을 임시적으로 바꾸는 방법에 대하여 설명 드립니다. ISelectionRenderer interface 사용하여 아래와 같은 코드를 통해 구현할 수 있습니다.

```csharp
    public class SelectionRenderer : FarPoint.Win.Spread.ISelectionRenderer
        {
                public void PaintSelection(Graphics g, int x, int y, int width, int height)
            {
            SolidBrush selectionBrush = new SolidBrush(Color.FromArgb(100, Color.Green));
            g.FillRectangle(selectionBrush, x, y, width, height);
            selectionBrush.Dispose();
        }
    }
```

간단한 샘플을 참고해 주시기 바랍니다.

[선택 셀 배경생 수정 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Cell Renderer.zip)
