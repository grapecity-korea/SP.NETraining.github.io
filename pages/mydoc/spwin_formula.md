---
title: Spread.NET 함수
tags: [함수, formula]
keywords: spread.net 함수, 스프레드 닷넷, spread.net formula
last_updated: Aug 08, 2019
summary: "Spread.NET 함수"
sidebar: mydoc_sidebar
permalink: spwin_formula.html
folder: mydoc
---

## 함수 자유롭게 사용하기

[함수 자유롭게 사용하기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/FormulaProviderCase.zip)

Spread컨트롤의 뛰어난 함수 계산 엔진은 300여 종의 함수를 기본으로 제공하며, 함수와 연산을 이용한 사용자 지정 함수도 지원합니다. 지원하는 함수는 날짜, 시간 함수, 공학 계산 함수, 재무 계산 함수, 논리 함수, 수학과 삼각 함수, 통계 함수, 텍스트 함수 등이 있습니다. 또한, Spread컨트롤은 사용자가 실행 중에 함수를 편집할 수 있도록 FormualTextBox 함수 엔진을 제공합니다. **본문에서는 FormulaTextBox 함수 엔진 사용법을 소개하겠습니다.**

**1. 도구 상자에서 FormulaTextBox 컨트롤과 Spread 표 컨트롤을 form으로 드래그합니다.**

**2. 백그라운드 코드에 아래 코드를 추가해 FormulaTextBox 컨트롤과 Spread 표 컨트롤을 연결합니다.**

```csharp
this.formulaTextBox1.Attach(this.fpSpread1);
```

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms9-1-1.png)

이렇게 쉽게 Formula TextBox 함수 엔진을 추가할 수 있습니다.

**3. Spread에는 300여 종의 함수가 내장되어 있습니다. 그 중에는 이름이 너무 복잡해 외우기 어려운 것도 있습니다. 이때 FormualEditorUI 대화 상자를 사용해 Spread 표 컨트롤에서 제공하는 함수를 검색할 수 있습니다. Button을 클릭하면 대화 상자를 활용할 수 있습니다.**

```csharp
private void button1_Click(object sender, EventArgs e)
{
       FarPoint.Win.Spread.FormulaEditorUI formulaEditor =
       new FarPoint.Win.Spread.FormulaEditorUI(this.fpSpread1.Sheets[0]);
       formulaEditor.ShowDialog();
}
```

<br />
**실행 결과:**

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms9-1-2.png)

[함수 자유롭게 사용하기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/FormulaProviderCase.zip)

## FormulaProvider 사용하기

[FormulaProvider 사용하기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/FormulaProvider.zip)
<br /><br />

Spread Studio는 formula provider 컨트롤을 제공합니다.

컨트롤에서 함수를 설정하고 계산 결과를 다른 컨트롤에 나타낼 때 사용합니다. 설정 함수에는 AddCustomFunctionInfo 방법을 사용할 수 있습니다. formula provider는 도구 상자에 추가할 수 있습니다.

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms9-2-1.png)

<br />
**Formula Provider 컨트롤 설정**

도구 상자에서 Formula Provider 컨트롤을 선택해 더블클릭하면 Formula Provider를 프로젝트로 추가할 수 있습니다.

이때 form의 모든 컨트롤에 2개의 속성 추가: Formula on formulaProvider1은 컨트롤 상의 함수를 설정할 때 사용합니다. Formmula TriggerEvent on formulaProvider1은 함수가 이벤트 업데이트를 할 수 있도록 설정할 때 사용합니다.

<br />
**Formula Provider 사용하기**

예를 들어 Formula Provider의 사용법을 설명하겠습니다. 본 예시에서는 TextBox 3개로 Formula Provider의 사용법을 설명합니다. 3번째 TextBox로 1번째 TextBox의 텍스트와 2번째 TextBox의 텍스트의 합을 표시했습니다. 함수 업데이트 이벤트는 TextChanged 이벤트로 설정합니다.

<br />
**설정 방법:**

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms9-2-2.png)

**결과:**

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms9-2-3.png)

[FormulaProvider 사용하기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/FormulaProvider.zip)

## 열 끝에 통계 수식 추가하기

[열 끝에 통계 수식 추가하기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/CustomFormulaColFooterAggregation_CS.zip)

Spread 컨트롤 열 끝에 통계 수식을 넣고 싶은 경우가 있습니다. 이는 Spread의 기본 기능으로 ASP.NET와 Winforms 플랫폼 모두 제공됩니다. 본문에서는 열 끝에 통계 수식을 추가하는 법을 소개하겠습니다.

Spread 표 컨트롤은[SetAggregationType()](http://helpcentral.componentone.com/NetHelp/SpreadNet7/WF/FarPoint.Win.Spread~FarPoint.Win.Spread.ColumnFooter~SetAggregationType.html)방법을 통해 열 끝의 특정 셀에 수식을 설정할 수 있습니다.[AggregationType](http://helpcentral.componentone.com/NetHelp/SpreadNet7/WF/FarPoint.Win.Spread~FarPoint.Win.Spread.Model.AggregationType.html)열거형을 사용해 통계 내용을 지정할 수 있습니다.  
예를 들어 아래 코드는 사용자 지정 수식으로 10 이상인 값의 합을 통계하는 기능을 구현했습니다.

```csharp
  fpSpread1_Sheet1.Rows.Count = 10;
  fpSpread1_Sheet1.Columns.Count = 5;
  fpSpread1.ActiveSheet.ColumnFooter.Visible = true;
  fpSpread1.ActiveSheet.ColumnFooter.SetAggregationType(0, 0, AggregationType.Custom);
  fpSpread1.ActiveSheet.ColumnFooter.Cells[0, 0].Formula = "SUMIF(Sheet1!A:A,\">10\")";
```

**결과:**

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms9-3-1.png)

구현법은 매우 간단하므로 데모를 참고해 주시기 바랍니다.

[열 끝에 통계 수식 추가하기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/CustomFormulaColFooterAggregation_CS.zip)

## Formula Editor 호출하는 방법

[Formula Editor 호출하는 방법 - 샘플 다운로드](http://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/spread_win_callformulaeditor.zip)
<br /><br />

수식 편집기는 현재 셀의 수식을 설정할 수 있습니다. FormulaEditorUI 클래스는 수식 편집 대화 상자입니다. 아래와 같은 방법으로 호출 할 수 있습니다.

```csharp
FarPoint.Win.Spread.FormulaEditorUI formulaEditor = new
FarPoint.Win.Spread.FormulaEditorUI(this.fpSpread1.Sheets[0]);
formulaEditor.ShowDialog();
```

간단한 샘플을 참고하여 주시기 바랍니다.

[Formula Editor 호출하는 방법 - 샘플 다운로드](http://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/spread_win_callformulaeditor.zip)

## 수식이 폼에서 셀값을 참조하는 방법

[수식이 폼에서 셀값을 참조하는 방법 - 샘플 다운로드](http://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/spread_win_callformulaeditor.zip)
<br/><br/>

다음과 같은 코드로 시트 이름을 사용하여 다른 양식의 셀을 찾고 참조 할 수 있습니다.

```csharp
this.fpSpread1_Sheet1.Cells[1, 0].Formula = "SUM(Sheet2!A1:A3)";
```

간단한 샘플을 참고하여 주시기 바랍니다.

[수식이 폼에서 셀값을 참조하는 방법 - 샘플 다운로드](http://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/spread_win_callformulaeditor.zip)
