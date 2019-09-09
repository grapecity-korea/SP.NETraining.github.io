---
title: Spread.NET 셀 유형
tags: [셀 유형, cell type, combobox, 콤보박스, 배경색, 이미지, image, 대각선, diagonal]
keywords: spread.net 셀 유형, 스프레드 닷넷, spread.net cell type
last_updated: Aug 08, 2019
summary: "Spread.NET 셀 유형"
sidebar: mydoc_sidebar
permalink: spwin_cellType.html
folder: mydoc
---

## HyperLinkCellType

[HyperLinkCellType - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Spread_Win_CellType_Hyper.zip)

Spread Studio Winform는 다양한 사용자 지정 셀 유형을 지원합니다.

Spread가 제공한 셀 유형 혹은 직접 사용자 지정한 유형으로 1개 셀에 어떤 데이터를 넣을지 강제할 수 있습니다. 이를 통해 개발자는 프로그램 적으로 추가적인 데이터 검증을 할 필요가 없습니다. 또한, 사용자에게 쉬운 데이터 입력법을 제공할 수 있습니다.

본문에서는 HyperLinkCellType으로 하나의 셀 유형에 여러 개의 하이퍼링크를 추가하는 방법을 소개하겠습니다.

<br /><br />
**실행 스크린샷:**

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms8-1-1.png)

<br /><br />
**참고 코드:**

```csharp
    FarPoint.Win.Spread.CellType.HyperLinkCellType mhp = new FarPoint.Win.Spread.CellType.HyperLinkCellType();

    mhp.Text = "그레이프시티 한국 네이버 카페와 한국 홈페이지를 방문해 더 많은 정보를 확인해 보세요";


    string[] s = new string[] {"http://cafe.naver.com/grapecity/","http://www.componentone.co.kr/"};
    mhp.Links = s;

    string[] hypertip = new string[] {"한국 네이버 카페","한국 홈페이지"};
    mhp.LinkToolTips = hypertip;

    LinkArea[] la = new LinkArea[] { new LinkArea(7, 9), new LinkArea(17, 8) };
    mhp.LinkAreas = la;

    fpSpread1.ActiveSheet.Columns[0].Width = 800;
    fpSpread1.ActiveSheet.Rows[0].Height= 100;

    fpSpread1.ActiveSheet.Cells[0, 0].CellType = mhp;

    fpSpread1.ActiveSheet.Cells[0, 0].Font = new Font("맑은 고딕", 20f);
```

[HyperLinkCellType - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Spread_Win_CellType_Hyper.zip)

## ComboxCellType 옵션별로 다른 배경색 설정하기

[ComboxCellType 배경색 설정하기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/spread_win_comboselect.zip)

본문에서는 ComboxCellType 셀의 객체를 받아서 선택한 값에 따라 현재 셀의 배경색을 수정하는 방법을 소개하겠습니다.

<br />
**ComboCellType 셀 유형 추가**

```csharp
    /// ComboBoxCellType 셀 유형 추가
    private void AddCellType()
    {
        FarPoint.Win.Spread.CellType.ComboBoxCellType comboBoxCellType1 = new FarPoint.Win.Spread.CellType.ComboBoxCellType();
        comboBoxCellType1.Items = (new String[] { "빨간색", "녹색", });
        fpSpread1.Sheets[0].Cells[0, 0].CellType = comboBoxCellType1;
        comboBoxCellType1.EditorValueChanged += new EventHandler(comboBoxCellType1_EditorValueChanged);
    }
```

**선택에 따라서 배경색 변경**

```csharp
void comboBoxCellType1_EditorValueChanged(object sender, EventArgs e)
{
    FarPoint.Win.Spread.CellType.ComboBoxCellType test = sender as .Win.Spread.CellType.ComboBoxCellType;
    if (this.fpSpread1.Sheets[0].ActiveCell.Text == "빨간색")
    {
        this.fpSpread1.Sheets[0].ActiveCell.BackColor = Color.Red;
    }
    if (this.fpSpread1.Sheets[0].ActiveCell.Text == "녹색")
    {
        this.fpSpread1.Sheets[0].ActiveCell.BackColor = Color.Green;

    }
}
```

**결과 스크린샷:**

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms8-2-1.png)

[ComboxCellType 배경색 설정하기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/spread_win_comboselect.zip)

## 동적 셀 유형

[동적 셀 유형- 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/AnimateCellType_CS.zip)
<br /><br />

Spread는 다양한 셀 유형을 제공합니다. **AnimatedCellType**은 ImageCellType 셀 유형을 이어받습니다. 본문에서는 동적 이미지 셀 유형의 구현법을 소개합니다. 동적 이미지를 로드하려면 사용자 지정 셀 유형을 생성해야 합니다.

<br />
1. 우선 PaintCell()을 사용해 셀을 그립니다.

2. **OnFrameChanged()**를 사용해 동적 이미지를 새로 고칩니다.

<br />
여기서는 .Net Framework의 ImageAnimator를 사용하며 이미지를 초당 한 번 변화시킵니다.  
**OnFrameChanged()**를 사용해 동적 이미지를 새로 고칩니다.

```csharp
    public override void PaintCell(Graphics g, Rectangle r,
    FarPoint.Win.Spread.Appearance appearance, object value,
    bool isSelected, bool isLocked, float zoomFactor)
    {
    if (currentImage == null)
    {
        base.PaintCell(g, r, appearance, value, isSelected, isLocked, zoomFactor);
        StartAnimate(value);
    }
    else lock (currentImage)
        base.PaintCell(g, r, appearance, currentImage,
    isSelected, isLocked, zoomFactor);
    }
```

**OnFrameChanged()함수**

```csharp
    void OnFrameChanged(object sender, EventArgs e)
    {
    lock (currentImage)
        ImageAnimator.UpdateFrames(currentImage);
    int rv = sheet.FpSpread.GetRowViewportCount();
    int cv = sheet.FpSpread.GetColumnViewportCount();
    Rectangle spreadRect = sheet.FpSpread.Bounds;
    for (int r = -1; r < rv; r++)
        for (int c = -1; c < cv; c++)
        {
        Rectangle rect = sheet.FpSpread.GetCellRectangle(r, c, rowIndex, columnIndex);
        rect.Intersect(spreadRect);
        if (!rect.IsEmpty)
            sheet.FpSpread.Invalidate();
        }
    }
```

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms8-3-1.png)

[동적 셀 유형- 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/AnimateCellType_CS.zip)

## 셀에 이미지 추가하기

[셀에 이미지 추가하기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Spread_Win_CopyImageToCell.zip)
<br /><br />

Spread 그리드 컨트롤의 셀 유형은 매우 다양합니다.
그 중에서 ImageCellType은 셀에 이미지를 삽입할 때 사용합니다. 본문에서는 ImageCellType 셀 유형을 통해 Excel로부터 이미지를 셀로 바로 복사하는 방법을 소개하겠습니다.

먼저 Spread PreviewKeyDown이벤트를 추가합니다.

```csharp
    public Form1()
    {
        InitializeComponent();
        this.fpSpread1.PreviewKeyDown +=
        new PreviewKeyDownEventHandler(fpSpread1_PreviewKeyDown);
    }
```

다음으로 이벤트에서 클립보드 내 데이터를 가져와서 이미지로 전환합니다.

```csharp
    Bitmap bitmap = Clipboard.GetData(DataFormats.Bitmap) as Bitmap;
```

마지막으로 이미지를 Shape의 배경 이미지로 전환합니다.

```csharp
    FarPoint.Win.Spread.CellType.ImageCellType imgType =
    new FarPoint.Win.Spread.CellType.ImageCellType();
    this.fpSpread1.ActiveSheet.ActiveCell.CellType = imgType;
    this.fpSpread1.ActiveSheet.ActiveCell.Value = bitmap;
    this.fpSpread1.ActiveSheet.ActiveColumn.Width = 200;
    this.fpSpread1.ActiveSheet.ActiveRow.Height = 200;
```

**결과:**

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms8-4-1.png)

[셀에 이미지 추가하기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Spread_Win_CopyImageToCell.zip)

## 대각선 그리기 DiagonalCellType

[대각선 그리기 DiagonalCellType - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Spread_DiagonalCellType_demo.zip)
<br /><br />

최신 SpreadWinform은 24종에 달하는 CellType 유형을 제공하지만 대각선은 포함되어 있지 않습니다.

그러나 코딩으로 LineShape을 통하여 아래와 같은 대각선이 포함된 Spread를 보여 줄 수 있습니다.

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms8-5-1.png)

다음은 그 과정을 자세히 설명하겠습니다.  
Spread 머리글에 대각선+머리글 텍스트를 입력해야 합니다.  
**우선 1개의 대각선 라인을 그리는 소스 입니다.**

```csharp
    //Diagonal_2Region
    DiagonalCellType ct = new DiagonalCellTypeDiagonalSubCellType.e2Region);
    this.fpSpread1.ActiveSheet.Cells[1, 0].CellType = ct;
    ct.SetText("제품", StringAlignment.Far);
    ct.SetText("날짜", StringAlignment.Near, tringFormatFlags.DirectionVertical);
    this.fpSpread1.ActiveSheet.Cells[1, 0].BackColor = Color.Green;
    this.fpSpread1.ActiveSheet.Cells[1, 0].Font = new Font("宋体", 12);
    this.fpSpread1.ActiveSheet.Cells[1, 0].ForeColor = Color.Blue; //line
    this.fpSpread1.ActiveSheet.Cells[1, 0].CellPadding = new CellPadding(5)


  public class DiagonalCellType : FarPoint.Win.Spread.CellType.TextCellType
    {
        #region CTOR
        SubDiagonalCellTypeBase m_cellType = null;
        public DiagonalCellType(DiagonalSubCellType subType)
        {
            m_cellType = SubDiagonalCellTypeBase.CreateSubType(subType);
        }
        #endregion

        public void SetText(string text, StringAlignment sstringAlignment = StringAlignment.Near, gFormatFlags ssStringFormatFlags = StringFormatFlags.NoClip)
        {
            m_cellType.SetText(text, sstringAlignment, ssStringFormatFlags);
        }

        public override void PaintCell(Graphics g, Rectangle r, Appearance appearance, object value, bool ected, bool isLocked, float zoomFactor)
        {
            m_cellType.PaintCell(g, r, appearance, value, isSelected, isLocked, zoomFactor);
        }

        public override System.Windows.Forms.Control GetEditorControl(System.Windows.Forms.Control parent, rance appearance, float zoomFactor)
        {
            return null;
        }
    }
```

**2개의 대각선을 그리는 소스입니다.**

```csharp
public class SubDiagonalCellType_2Region : SubDiagonalCellTypeBase
    {
        public override void InnerPaintCell(Graphics g, Rectangle r, Appearance appearance, object value, isSelected, bool isLocked, float zoomFactor)
        {
            //line 1
            g.DrawLine(LinePen, r.X, r.Y, r.X + r.Width, r.Y + r.Height);

            //text 1
            SizeF sf = m_TextList[0].GetSizeF(g, appearance);
            float x = r.X + r.Width/2 - sf.Width - appearance.CellPadding.Left;
            float y = r.Y + appearance.CellPadding.Top;
            RectangleF rr = new RectangleF(x, y, r.Right - x - appearance.CellPadding.Left, sf.Height);
           // g.FillRectangle(new SolidBrush(Color.White), rr); //Test Rectangle Size
            m_TextList[0].DrawString(g, rr, appearance);

            //text 2
            sf = m_TextList[1].GetSizeF(g, appearance);
            y = r.Y + r.Height - sf.Height - appearance.CellPadding.Bottom;
            x = r.X + appearance.CellPadding.Left;
            rr = new RectangleF(x, y, r.Width / 2 , sf.Height);
           // g.FillRectangle(new SolidBrush(Color.White), rr); //Test Rectangle Size
            m_TextList[1].DrawString(g, rr, appearance);
        }
```

다음의 코드를 통해 라인에 들어갈 인자를 검증할 수 있습니다.

```csharp
protected override void ValidateData()
        {
            if (m_TextList.Count != 2)
            {
                throw new Exception("must SetText twice");
            }
        }

        public override DiagonalSubCellType DiagonalSubCellType
        {
            get { return DiagonalSubCellType.e2Region; }
        }
    }
```

[대각선 그리기 DiagonalCellType - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Spread_DiagonalCellType_demo.zip)
