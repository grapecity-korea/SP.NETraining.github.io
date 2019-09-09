---
title: Spread.NET for ASP.NET 함수
tags: [spread.net, 스프레드 닷넷, 함수, 자동 계산, 교차 시트 함수]
keywords: spread.net ASP.NET 함수, 스프레드 닷넷
last_updated: Aug 08, 2019
summary: "Spread.NET for ASP.NET 함수"
sidebar: mydoc_sidebar
permalink: spasp_formula.html
folder: mydoc
---

## 함수 자동계산 관련 문제

Spread for Asp.Net에서는 ClientAutoCalculation 설정을 통해 함수 자동계산 여부를 설정할 수 있습니다.

그러나 ClientAutoCalculation = true 설정 후 Sum(A1:C1)이 자동 계산되지 않고 A1+B1+C1으로 자동계산되는 문제가 종종 나타납니다. 이러한 문제가 발생하는 원인은 Sum 함수는 셀 유형 CellType이 수치값 유형으로 설정되어 있는 셀만을 대상으로 '합계' 연산을 진행하기 때문입니다.

반면, A1+B1+C1와 같은 함수는 암묵적 유형 전환이 이루어지기 때문에 셀 값을 수치 형식으로 전환하여 합계 연산을 진행합니다.

따라서 Spread 데이터 소스를 설정할 때에는 데이터 소스의 각 열에 해당하는 데이터 유형이 반드시 산술(수학)적 연산이 가능한 유형이어야 함을 명심해야 합니다. 아래 코드 중 Sum(A1:C1)은 단지 A1와 C1의 값만을 계산합니다. B열의 데이터 유형이String이기 때문입니다.

```csharp
protected void Page_Load(object sender, EventArgs e)
{
            DataTable dt = new DataTable();
            dt.Columns.Add("col1", typeof(int));
            dt.Columns.Add("col2", typeof(string));
            dt.Columns.Add("col3", typeof(int));
            dt.Columns.Add("col4", typeof(int));

            dt.Rows.Add(1, 2, 3, 4);
            dt.Rows.Add(1, 2, 3, 4);
            dt.Rows.Add(1, 2, 3, 4);
            dt.Rows.Add(1, 2, 3, 4);
            FpSpread1.ActiveSheetView.DataSource = dt;
            FpSpread1.ClientAutoCalculation = true;

            FpSpread1.ActiveSheetView.SetFormula(1, 3, "SUM(A1:C1)");
            FpSpread1.ActiveSheetView.SetFormula(2, 3, "A2+B2+C3");

}
```

---

## 교차 시트 함수 설정

[교차 시트 함수 설정 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/Spread_ASP_Formula.zip)

Spread 컨트롤은 교차 시트 함수 설정 기능을 지원합니다. 본 장에서는 교차시트 함수 설정 방법에 대해 알아봅니다.

<br />
**1.  Spread ClientAutoCalculation 속성을 설정하여 클라이언트에서의 Spread 자동 계산 기능을 사용합니다.**

```csharp
    this.FpSpread1.ClientAutoCalculation = false;
```

<br />
**2. 셀 함수 설정：**

```csharp
    this.FpSpread1.Sheets[1].Cells[0, 0].Formula = "sheet1!A2+sheet1!A1";
```

![](https://www.grapecity.co.kr/images/training/spread/tc3-2-1.gif)

이러한 방법으로 간단하게 설정하면 해당 기능을 사용할 수 있습니다.

---

## 함수

Spread 컨트롤의 강력한 함수엔진은 300여 종류의 내장 함수를 제공하며 내장 함수 및 연산자를 통한 사용자 정의 함수를 함께 지원합니다. 제공되는 함수로는 날짜 및 시간, 공학, 재무, 논리, 수학/삼각, 통계, 텍스트 등이 포함됩니다.

또한 Spread for ASP.NET는 클라이언트 자동 계산, 클라이언트 함수 편집 및 교차 시트 함수를 함께 지원합니다.

우선 함수의 기본 사용법을 살펴보도록 하겠습니다.
<br />
**테스트 코드는 아래와 같습니다.**

```csharp
    this.FpSpread1.Sheets[0].Cells[0,2].Formula = "SUM(A1:B1)";
```

<br />
**클라이언트 자동 계산 기능 설정:**

```csharp
    this.FpSpread1.ClientAutoCalculation = true;
```

<br />
**교차 시트 함수의 설정 방법은 다음과 같습니다.**
시트(폼) 인덱스를 통해 교차 시트 함수를 설정합니다.

```csharp
    // 교차 시트 함수
    This.FpSpread1.Sheets[1].Cells[0, 0].Formula = "sheet1!A1+sheet1!B1";
```

![](https://www.grapecity.co.kr/images/training/spread/tc3-3-1.png)

[교차 시트 함수 설정 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/Spread_ASP_Formula.zip)
