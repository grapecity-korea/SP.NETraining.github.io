---
title: Spread.NET 데이터 시각화
tags: [데이터 시각화, data visualization, 스파크라인, sparkline, 차트, chart, 막대, 꺾은선, 원, 영역, 분산, 버블, 주식, 표면, 도넛, 방사, 극좌표]
keywords: spread.net 데이터 시각화, 스프레드 닷넷, spread.net data visualization
last_updated: Aug 08, 2019
summary: "Spread.NET 데이터 시각화"
sidebar: mydoc_sidebar
permalink: spwin_dataVisualization.html
folder: mydoc
---

## 스파크라인 생성하기

[스파크라인 생성하기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/SparklinesDemo.zip)
<br /><br />
Spread 컨트롤은 사용자의 편의를 위해 계속 노력해왔습니다.

그 중 하나가 조건부 서식의 강화입니다. 스파크라인은 셀 안에 그려 넣는 미니 차트로 데이터를 시각화해서 나타나는 데 사용합니다. Spread는 열, 선형 및 승패형 스파크라인을 지원하며 Excel 2010 파일과 호환 및 전환을 할 수 있습니다. 아래 이미지에서 스파크라인의 3종 유형을 보실 수 있습니다.

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms10-1-1.png)

열형 스파크라인은 막대형 차트 방식으로 데이터를 나타내고, 꺾은선형 스파크라인은 꺽은선형 그림으로 데이터를 나타냅니다. 그리고 승패 스파크라인은 데이터를 같은 크기로 나타내되 데이터가 양수일 경우 차트가 X축의 상단에, 음수일 경우 하단에 나타냅니다.

또한, 스파크라인의 높음, 낮음, 승(+), 패(-), 첫 번째 및 마지막의 표시 색을 설정할 수 있습니다.

<br />
**코드로 스파크 라인 추가:**

C#:

```csharp
    FarPoint.Win.Spread.SheetView sv = new FarPoint.Win.Spread.SheetView();
    FarPoint.Win.Spread.Chart.SheetCellRange data = new int.Win.Spread.Chart.SheetCellRange(sv, 0, 0, 1, 5);
    FarPoint.Win.Spread.Chart.SheetCellRange data2 = new int.Win.Spread.Chart.SheetCellRange(sv, 5, 0, 1, 1);
    FarPoint.Win.Spread.ExcelSparklineSetting ex = new int.Win.Spread.ExcelSparklineSetting();
    ex.ShowMarkers = true;
    ex.ShowNegative = true;
    ex.NegativeColor = Color.Red;
    ex.SeriesColor = Color.Olive;
    fpSpread1.Sheets[0] = sv;
    sv.Cells[0, 0].Value = 2;
    sv.Cells[0, 1].Value = 5;
    sv.Cells[0, 2].Value = 4;
    sv.Cells[0, 3].Value = -1;
    sv.Cells[0, 4].Value = 3;
    fpSpread1.Sheets[0].AddSparkline(data, data2, FarPoint.Win.Spread.SparklineType.Column, ex);
```

<br />
**디자이너로 스파크라인 추가:**

물론 Spread 디자이너로 스파크라인을 추가하는 방법도 있습니다.

1. 디자이너에 하나의 셀 또는 한 개의 행/열의 셀 유형 데이터를 넣습니다.
2. 스파크라인을 생성할 셀 하나를 선택합니다.
3. 메뉴에서 ‘삽입’을 선택합니다.
4. 스파크라인 종류를 선택합니다.
5. 스파크라인 만들기에서 데이터 범위를 설정합니다.(예 =Sheet1!$E$1: $E$3)
6. ‘OK’를 클릭합니다.
7. 수정 내용을 저장하고 파일 메뉴에서 적용 후 닫기를 선택한 후 디자이너를 종료합니다.

[스파크라인 생성하기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/SparklinesDemo.zip)

## 다양한 차트 유형

ActiveChart를 이용하여 다양한 스타일의 2D & 3D 차트를 생성할 수 있습니다.

ActiveChart는 최종 사용자에게 디자이너 기능을 제공합니다. 외부 데이터 소스를 바인딩할 때 최종 사용자는 런타임에 차트 유형과 스타일을 수정할 수 있습니다. 또한 최종사용자는 Spread 안에 차트를 생성 및 수정할 수 있습니다. MS-Excel과 유사한 방식으로 사용 가능합니다.

이처럼 다양하고 풍부한 기능이 제공됨으로써 최종 사용자의 사용 편의성 또한 크게 증대되었습니다.

<br />
**12가지 차트와 85가지 차트 유형:**

**· 세로막대형**
**· 가로막대형**
**· 거품형**  
**· 도넛형**

**· 꺾은선형**  
**· 영역형**  
**· 주식형**  
**· 방사형**

**· 원형**  
**· XY(분산형)**  
**· 표면형**  
**· 극좌표형**

### 세로막대형

세로막대형 차트유형: 묶은 세로막대형，누적 세로막대형，100% 기준 누적 세로막대형，고저 세로막대형，3차원 묶은 세로막대형，3차원 누적 세로막대형，3차원 100% 기준 누적 세로막대형，3차원 세로막대형，3차원 고저 세로막대형，묶은 원통형, 누적 원통형, 3차원 100% 누적 기준 원통형, 3차원 원통형, 고저 원통형, 묶은 원뿔형, 누적 원뿔형, 100% 누적 기준 원뿔형, 3차원 원뿔형, 고저 원뿔형, 묶은 피라미드형, 누적 피라미드형, 100% 기준 누적 피라미드형, 3차원 피라미드형, 고저 피라미드형

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms10-2-1.png)

### 꺾은선형

꺾은선형 차트유형: 꺾은선형，누적 꺾은선형，100% 기준 누적 꺾은선형，표식이 있는 꺾은선형，표식이 있는 누적 꺾은선형，표식이 있는 100% 기준 누적 꺾은선형，3차원 꺾은선형

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms10-2-2.png)

### 원형

원형 차트유형: 2차원 원형，3차원 원형，쪼개진 원형，3차원 쪼개진 원형

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms10-2-3.png)

### 가로막대형

가로막대형 차트유형: 묶은 가로막대형，누적 가로막대형，100% 기준 누적 가로막대형，고저 가로막대형，3차원 묶은 가로막대형，3차원 누적 가로막대형，3차원 100% 기준 누적 가로막대형，3차원 고저 가로막대형，묶은 원통형(가로), 누적 원통형(가로), 100% 누적 기준 원통형(가로), 고저 원통형(가로), 묶은 원뿔형(가로), 누적 원뿔형(가로), 100% 누적 기준 원뿔형(가로), 고저 원뿔형(가로), 묶은 피라미드형(가로), 누적 피라미드형(가로), 100% 기준 누적 피라미드형(가로), 고저 피라미드형(가로)

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms10-2-4.png)

### 영역형

영역형 차트유형: 영역형，누적 영역형，100% 기준 누적 영역형，고저 영역형，3차원 영역형，3차원 누적 영역형，3차원 100% 기준 누적 영역형，3차원 고저 영역형

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms10-2-5.png)

### XY(분산형)

XY 분산형 차트유형: 표식이 있는 분산형, 직선이 있는 분산형, 직선과 표식이 있는 분산형

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms10-2-6.png)

### 거품형

거품형 차트 유형: 2차원 거품형, 3차원 거품형

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms10-2-7.png)

### 주식형

주식형 차트 유형: 고가-저가-종가, 시가-고가-저가-종가, 시가-고가-저가-촛불형 종가

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms10-2-8.png)

### 표면형

표면형 차트 유형: 직선이 있는 표면형，직선과 표식이 있는 표면형，표식만 있는 표면형, 3차원 표면형

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms10-2-9.png)

### 도넛형

도넛형 차트 유형: 도넛형, 쪼개진 도넛형

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms10-2-10.png)

### 방사형

방사형 차트 유형: 방사형，직선과 표식이 있는 방사형，표식만 있는 방사형, 채워진 방사형

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms10-2-11.png)

### 극좌표형

극좌표형 차트 유형: 극좌표형，직선과 표식이 있는 극좌표형，표식이 있는 극좌표형，채워진 극좌표형

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms10-2-12.png)

## 사용자 지정 스파크라인

[사용자 지정 스파크라인 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/SpreadSparkline.zip)

Spread for Winforms컨트롤은 스파크라인 기능을 제공하여 모든 분석 데이터마다 스파크라인을 추가할 수 있습니다. 스파크라인은 간단한 미니 차트로 데이터를 시각화해 셀 내에 표시할 때 사용합니다. 설정 가능한 스파크라인에는 열형, 꺾은선형 및 승패형이 있습니다.

스파크라인의 데이터는 스파크라인과 같은 폼에 있어야 합니다. 본문에서는 다른 폼의 데이터를 불러와 스파크라인을 생성하는 법을 소개합니다.

**1. ExcelSparkLine 유형을 상속한 사용자 지정 스파크라인 생성:**

```csharp
    class CustomExcelSparkline : ExcelSparkline
    {
        CellRangeSegmentData innerData;
        public CustomExcelSparkline(int row, int column, SheetView source)
            : base(row, column, string.Empty)
        {
            innerData = new CellRangeSegmentData(source, 0, 0, source.RowCount, e.ColumnCount, null);
        }
        public override object GetSparkLineData()
        {
            return innerData;
        }
    }
```

**2. 사용자 지정으로 승패형 스파크라인 생성:**

```csharp
     private void Form1_Load(object sender, EventArgs e)
    {
        fpSpread1.SuspendLayout();
        List dlist = new List();
        dlist.Add(4.5);
        dlist.Add(4.8);
        dlist.Add(5.5);
        dlist.Add(6.0);
        dlist.Add(7.5);

        SheetView sv = new SheetView();
        sv.Visible = false;
        sv.SheetName = Guid.NewGuid().ToString();
        sv.DataSource = dlist;
        fpSpread1.Sheets.Add(sv);
        fpSpread1.Sheets[0].RowCount = 10;
        fpSpread1.Sheets[0].ColumnCount = 10;
        for (int r = 0; r < fpSpread1.Sheets[0].RowCount; r++)
        {
            FarPoint.Win.Spread.SparklineType type = SparklineType.Column;
            if (r % 3 == 1)
                type = SparklineType.Line;
            else if (r % 3 == 2)
                type = SparklineType.Winloss;
            FarPoint.Win.Spread.ExcelSparklineGroup esg = new int.Win.Spread.ExcelSparklineGroup(new FarPoint.Win.Spread.ExcelSparklineSetting());

            for (int c = 0; c < fpSpread1.Sheets[0].ColumnCount; c++)
            {
                CustomExcelSparkline es = new CustomExcelSparkline(r, c, sv);
                esg.Add(es);
            }
            fpSpread1.Sheets[0].SparklineContainer.Add(esg);
        }
        fpSpread1.ResumeLayout();
    }
```

**결과:**

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms10-3-1.png)

[사용자 지정 스파크라인 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/SpreadSparkline.zip)
