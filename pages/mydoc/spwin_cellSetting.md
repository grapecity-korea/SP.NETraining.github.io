---
title: Spread.NET 셀 설정
tags: [spread.net, 스프레드 닷넷, 셀 설정, 배경색, 매개변수, 멀티 헤더 셀, 프롬프트]
keywords: spread.net 셀 설정, 스프레드 닷넷
last_updated: Aug 08, 2019
summary: "Spread.NET 셀 설정"
sidebar: mydoc_sidebar
permalink: spwin_cellSetting.html
folder: mydoc
---

## Spread Studio : 기존 데이터로 셀 채우기

[기존 데이터로 셀 채우기- 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/기존데이터로 셀 채우기.zip)
<br /><br />
Spread Studio 표 컨트롤을 사용하면 특정 범위의 셀을 복사해 다른 셀에 붙여넣을 수 있으며, 데이터와 셀 서식을 복사할 수 있습니다.
예를 들어 2\*2 셀이 존재한다면 셀을 어떤 방향으로도 폼에 여러 번 채울 수 있습니다.

FillRange 방법으로 해당 기능을 구현하겠습니다.

```csharp
    public void FillRange(
        int row,
        int column,
        int rowCount,
        int columnCount,
        int fillCount,
        FillDirection fillDirection
    )
```

### 매개 변수

> _row_ : 복사 셀 범위의 시작 행 인덱스

> _column_ : 복사 셀 범위의 시작 열 인덱스

> _rowCount_ : 복사 셀 범위의 행 개수

> _columnCount_ : 복사 셀 범위의 행 개수

> _fillCount_ : 채우기 횟수

> _fillDirection_ : 채우기 방향

<br />
**테스트 코드:**

```csharp
    private void Form1_Load(object sender, EventArgs e)
    {
        // Define the text to repeat.
        fpSpread1.ActiveSheet.Cells[0, 0].Text = "A1-text";
        fpSpread1.ActiveSheet.Cells[0, 1].Text = "A2-text";
        fpSpread1.ActiveSheet.Cells[1, 0].Text = "B1-text";
        fpSpread1.ActiveSheet.Cells[1, 1].Text = "B2-text";

        fpSpread1.ActiveSheet.Cells[0, 0].BackColor = Color.Cyan;
        fpSpread1.ActiveSheet.Cells[0, 0].ForeColor = Color.DarkBlue;
        fpSpread1.ActiveSheet.Cells[0, 1].BackColor = Color.Coral;
        fpSpread1.ActiveSheet.Cells[0, 1].ForeColor = Color.DarkRed;

    }
    private void 오른쪽으로채우기ToolStripMenuItem_Click(object sender, EventArgs e)
    {
        //오른쪽으로 채우기
        fpSpread1.ActiveSheet.FillRange(0, 1, 2, 1, 3, FillDirection.Right);
    }
    private void 아래쪽으로채우기ToolStripMenuItem_Click(object sender, EventArgs e)
    {
        //아래쪽으로 채우기
    }
```

<br />
**결과:**

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms3-1-1.png)

간단한 샘플을 참고해 주시기 바랍니다.

[기존 데이터로 셀 채우기- 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/기존데이터로 셀 채우기.zip)

---

## Spread의 여러 셀에 데이터 붙여넣기

[ Spread의 여러 셀에 데이터 붙여넣기 - 샘플 다운로드](http://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/MultipleCellsPaste.zip)
<br /><br />
Excel을 사용하면서 어떤 한 셀의 데이터를 복사해 여러 셀에 붙여 넣는 기능을 사용할 때가 있습니다.
이 기능은 매우 편리한 기능입니다. 이 기능은 Excel의 드래그 기능과 유사합니다.
(데이터가 있는 셀을 다른 셀 영역으로 드래그)

다음은 Spread에서 이상 2가지 기능을 구현하는 법을 소개하겠습니다.

<br />
**1.  Spread의 드래그 기능 코드 1줄만 추가하면 됩니다.**

```csharp
    FpSPread1.AllowDragFill=true;
```

**2. Spread에서 한 셀의 데이터를 복사해 여러 셀로 붙여 넣는 기능 구현:**
Ctrl + C로 셀에 대입한 후 FpSpread1_ClipBoardPasting 이벤트에 아래 코드를 추가합니다.

```csharp
    private void fpSpread1_ClipboardPasting(object sender, FarPoint.Win.Spread.ClipboardPastingEventArgs e)
    {
        FarPoint.Win.Spread.Model.CellRange cr = default(FarPoint.Win.Spread.Model.CellRange);
        string textdata = null;
        string[] a = null;
        string[] b = null;
        int rowcount = 0;
        int colcount = 0;
        cr = fpSpread1.Sheets[0].GetSelection(0);
        if (cr.RowCount > 1 | cr.ColumnCount > 1)
        {
            e.Handled = true;
            if (System.Windows.Forms.Clipboard.GetDataObject().GetDataPresent(System.Windows.Forms.DataFormats.Text))
            {
                textdata = (string)System.Windows.Forms.Clipboard.GetDataObject().GetData(System.Windows.Forms.DataFormats.Text);
                a = textdata.Split(new char[] { (char)13 });
                rowcount = a.Length - 1;
                b = a[0].Split(new char[] { (char)9 });
                colcount = b.Length;
                for (int i = cr.Row; i <= cr.Row + cr.RowCount - 1; i += rowcount)
                {
                    for (int x = 0; x <= rowcount - 1; x++)
                    {
                        b = a[x].Split(new char[] { (char)9 });
                        for (int j = cr.Column; j <= cr.Column + cr.ColumnCount - 1; j += colcount)
                        {
                            for (int y = 0; y <= colcount - 1; y++)
                            {
                                string myStr;
                                myStr = b[0];
                                fpSpread1.Sheets[0].SetValue(i + x, j + y, myStr.Trim((char)10, (char)30));
                            }
                        }
                    }
                }
            }
        }
    }
```

간단한 샘플을 참고해 주시기 바랍니다.

[ Spread의 여러 셀에 데이터 붙여넣기 - 샘플 다운로드](http://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/MultipleCellsPaste.zip)

---

## Spread 여러 행 또는 열이 있는 멀티헤더 셀을 만듭니다.

[Spread 멀티헤더 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Demo.zip)
<br /><br />
종종 우리는 Excel과 같은 비즈니스 요구 사항을 기반으로 사용자 지정을 만드는 데 사용되는 헤더 셀을 사용합니다.
물론 스프레드의 헤더 셀은 다른 수의 행 또는 열을 가질 수 있습니다.

다음은 다중 행 또는 다중 열 헤더 셀에서 스프레드를 만드는 방법을 소개하는 예제입니다.

<br />
**스크린샷 :**

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms3-3-1.png)

<br />
**1.  여러 줄의 열 헤더셀을 만들기**

```csharp
    fpSpread1.Sheets[0].ColumnHeaderRowCount = 3;
    fpSpread1.Sheets[0].AddColumnHeaderSpanCell(1, 0, 1, 2);
    fpSpread1.Sheets[0].AddColumnHeaderSpanCell(1, 2, 1, 2);
    fpSpread1.Sheets[0].AddColumnHeaderSpanCell(1, 4, 1, 2);
    fpSpread1.Sheets[0].AddColumnHeaderSpanCell(1, 6, 1, 2);
    fpSpread1.Sheets[0].AddColumnHeaderSpanCell(0, 0, 1, 8);
    fpSpread1.Sheets[0].ColumnHeader.Columns[0].Label = " 비용 금액 ";
    fpSpread1.Sheets[0].ColumnHeader.Columns[1].Label = " 판매 금액 ";
    fpSpread1.Sheets[0].ColumnHeader.Columns[2].Label = " 비용 금액 ";
    fpSpread1.Sheets[0].ColumnHeader.Columns[3].Label = " 판매 금액 ";
    fpSpread1.Sheets[0].ColumnHeader.Columns[4].Label = " 비용 금액 ";
    fpSpread1.Sheets[0].ColumnHeader.Columns[5].Label = " 판매 금액 ";
    fpSpread1.Sheets[0].ColumnHeader.Columns[6].Label = " 비용 금액 ";
    fpSpread1.Sheets[0].ColumnHeader.Columns[7].Label = " 판매 금액 ";
    fpSpread1.Sheets[0].ColumnHeader.Cells[0, 0].Text = "2012년";
    fpSpread1.Sheets[0].ColumnHeader.Cells[1, 0].Text = " 1 분기 ";
    fpSpread1.Sheets[0].ColumnHeader.Cells[1, 2].Text = "2 분기";
    fpSpread1.Sheets[0].ColumnHeader.Cells[1, 4].Text = "3 분기";
    fpSpread1.Sheets[0].ColumnHeader.Cells[1, 6].Text = "4 분기";
```

**2. 행 헤더셀에 여러 열을 만듭니다.**

Ctrl + C로 셀에 대입한 후 FpSpread1_ClipBoardPasting 이벤트에 아래 코드를 추가합니다.

```csharp
    fpSpread1.Sheets[0].RowHeaderColumnCount = 2;
    fpSpread1.Sheets[0].AddRowHeaderSpanCell(0, 0, 10, 1);
    fpSpread1.Sheets[0].RowHeader.Columns[0].Width = 45;
    fpSpread1.Sheets[0].RowHeader.Cells[0, 0].Text = "Co. #";
```

<br/>
**물론 제목 행이나 열 셀에 다음 코드를 사용하여 그에 따라 병합 할 수도 있습니다**

<br/>
**1.  헤더열의 셀 병합**

```csharp
    fpSpread1.Sheets[0].AddColumnHeaderSpanCell(1, 0, 1, 2);

    fpSpread1.Sheets[0].AddColumnHeaderSpanCell(1, 2, 1, 2);

    fpSpread1.Sheets[0].AddColumnHeaderSpanCell(1, 4, 1, 2);

    fpSpread1.Sheets[0].AddColumnHeaderSpanCell(1, 6, 1, 2);

    fpSpread1.Sheets[0].AddColumnHeaderSpanCell(0, 0, 1, 8);
```

**2. 헤더행의 셀 병합**

```csharp
    fpSpread1.Sheets[0].AddRowHeaderSpanCell(0, 0, 10, 1);
```

[Spread 멀티헤더 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Demo.zip)

---

## 셀에 프롬프트 추가

[셀에 프롬프트 추가 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Spread_Win_ShortTool.zip)
<br /><br />
마우스의 움직임을 따라서 화면에 프롬프트메세지가 발생할 수 있습니다. TextTipFetch 이벤트를 아래와 같이 이용하면 구현이 가능합니다.

<br />
**툴팁 스타일을 설정 :**

```csharp
    FarPoint.Win.Spread.TipAppearance app = new FarPoint.Win.Spread.TipAppearance();
    app.BackColor = Color.Yellow;
    app.Font = newFont("Comic Sans MS", 12);
    app.ForeColor = Color.Red;

    fpSpread1.TextTipPolicy = FarPoint.Win.Spread.TextTipPolicy.Floating;
    fpSpread1.TextTipAppearance = app;
    fpSpread1.TextTipDelay = 1000;
```

**TextTipFetch 이벤트를 통해 툴팁을 표시 :**

```csharp
    ///<summary>
    ///</summary>
    ///<param name="sender"></param>
    ///<param name="e"></param>
    private void fpSpread1_TextTipFetch(object sender, FarPoint.Win.Spread.TextTipFetchEventArgs e)
    {
        e.ShowTip = true;
    }
```

간단한 샘플을 참고해 주시기 바랍니다.

[셀에 프롬프트 추가 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Spread_Win_ShortTool.zip)
