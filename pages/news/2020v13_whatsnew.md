---
title: Spread.NET V13 새로운 기능
sidebar: home_sidebar
keywords: news, blog, updates, release notes, announcements
permalink: 2020v13_whatsnew.html
folder: news
summary: "GrapeCity Spread.NET v13의 새로운 기능을 확인해보세요."
---

# Spread.NET - V13 새로운 기능

##### **2020 Service Pack**

> - [Spread.NET v13 Service Pack 1](#spreadnetv13servicepack1)
> - [Spread.NET v13 Service Pack 2](#spreadnetv13servicepack2)

<br/>

#### What's New in Spread.NET 13

- [향상된 도형 엔진](#shape)
- [풍부한 대화형 셰이프를 만들기 위한 셰이프 속성 바인딩](#shapeproperty)
- [Microsoft Excel®과 Spread.NET 간의 복사 및 붙여넣기의 개선 사항](#copypaste)
- [표 필터링을 위한 슬라이서](#slicer)
- [사용자 정의 데이터 시각화를 위한 VisualFunctions](#visualfunctions)
- [새로운 **search_mode 0 - All**이 지원되는 향상된 XLOOKUP 및 XMATCH로 배열 내의 모든 일치하는 항목 반환](#xlookupxmatch)
- [수식 값의 자동 서식 지정](#autoformatting)
- [행 헤더 너비의 자동 조정으로 시트를 스크롤할 때 텍스트의 크기 조정](#width)
- [IWorksheet의 BackgroundImage](#iworksheetbackgroundimage)
- [이제 수식 편집 시 표 셀에 구조화된 참조 삽입 지원](#references)
- [새로운 BeforeRightClick 이벤트](#beforerightclick)
- [WinForms Control Explorer에 추가된 새로운 샘플](#winformscontrolexplorer)

### 향상된 도형(Shape) 엔진

**Spread.NET 13 WinForms**는 Microsoft Excel®과 100% 호환되는 새로운 향상된 셰이프(Shape) 엔진을 제공합니다.

새로운 **향상된 도형(Shape) 엔진**을 사용하려면 우선 다음과 같이 **속성(Property) 표**를 사용하여 엔진을 활성화하십시오.

![Figure 1 - Enable FpSpread.Features.EnhancedShapesEngine using property grid](https://global-cdn.grapecity.com/blogs/spread/20191106-spreadnet-13-release/02-features-enhanced-shape-engine-enable.png)

_그림 1 - 속성 표를 사용하여 FpSpread.Features.EnhancedShapesEngine 활성화_

또는 코드로 **향상된 도형 엔진**을 활성화할 수 있습니다.

**[C#]** **코드로 향상된 도형 엔진 활성화**

`fpSpread1.Features.EnhancedShapeEngine = true;`

**[VB]** **코드로 향상된 도형 엔진 활성화**

`fpSpread1.Features.EnhancedShapeEngine = True`

모든 Excel 도형이 지원됩니다:

![Figure 2Enhanced Shapes](https://global-cdn.grapecity.com/blogs/spread/20191106-spreadnet-13-release/04-enhanced-shapes.png)

_그림 2 - 향상된 도형(Shapes)_

**향상된 도형(Shape) 엔진**은 여러 가지 선택 항목, 그룹화, 조정, 연결 지점을 지원하며 다이어그램, 셀 설명선, 순서도를 생성하는 데 사용할 수 있습니다.

![Figure 3Flowchart example created in Spread](https://global-cdn.grapecity.com/blogs/spread/20191106-spreadnet-13-release/good_code_spread.png)

_그림 3 - Spread에서 생성한 순서도의 예시_

위의 그림은 VSTO API를 미러링하는 **향상된 도형(Shape) 엔진 API**를 사용하여 생성된 순서도의 샘플입니다. 순서도는 인기있는 [웹 만화](https://xkcd.com/844/) 중 하나에서 가져온 것입니다.

**향상된 도형(Shape) 엔진**을 사용하여 아래의 자동차 보험 청구서 예시와 같이 풍부한 대화형 인터페이스를 생성할 수 있습니다.

![Figure 4Car Insurance Claim created using shapes](https://global-cdn.grapecity.com/blogs/spread/20191106-spreadnet-13-release/car_insurance_claim.png)

_그림 4 - 셰이프를 사용하여 생성한 자동차 보험 청구서_

이 예시는 동일한 [SpreadJS](https://www.grapecity.co.kr/spreadjs) [데모 샘플](https://demos.componentone.com/Spread/JS/CarInsuranceClaim/) ([SpreadJS 데모 다운로드](https://grapecitycontentcdn.azureedge.net/blogs/spread/20181101-build-custom-shapes-in-javascript/spreadjs12-car-insurance-claim-sample.zip))에서 코드를 포트한 다음, VBA를 사용하여 셰이프에 대한 클릭을 처리하기 위한 로직을 구현하도록 Microsoft Excel®을 사용하여 생성한 것입니다.

**Spread.NET 13 WinForms**는 **문서** **캐싱** 기능을 사용하여 이러한 매크로 사용 **XLSM** 통합 문서를 가져오고, 포함된 VBA를 나중에 내보내기 위한 용도로 메모리에 보관할 수 있습니다. 향상된 셰이프는 **IShape.Action** 이벤트를 지원하여 셰이프 클릭을 처리하고 C# 또는 VB.NET 코드의 VBA와 동일한 로직을 구현할 수 있도록 합니다.

Winfroms 및 WPF에 대한 새로운 데모 샘플은 [Spread.NET 데모 어플리케이션](https://www.grapecity.co.kr/spreadstudio/demo)을 통해 확인이 가능 합니다.

#### 개발 문서:

- [향상된 셰이프 엔진](https://www.grapecity.com/spreadnet/docs/v13/online-win/working-with-shapes.html)
- [문서 캐싱](https://www.grapecity.com/spreadnet/docs/v13/online-win/spwin-open-excelfile.html)

### 셰이프 속성(Shape Property) 바인딩

향상된 셰이프 속성 바인딩은 **AutoShapeType**, **TextEffect**, **Fill(채우기)**, **Line(선)**, **Top(위쪽)**, **Left(왼쪽)**, **Height(높이)**, **Width(너비)** 속성을 특정 셀에 바인딩하는 작업을 지원하여 몇 가지 매우 풍부한 사용자 인터페이스를 사용할 수 있도록 합니다. 셀 수식은 이러한 속성을 동적으로 업데이트할 수 있습니다.

자동차 보험 청구서가 표시된 위의 예시에서 도형(Shape) 속성은 **Sheet2**의 값에 바인딩되어 있습니다.

![Figure 5Shape property bindings for car insurance claim sample](https://global-cdn.grapecity.com/blogs/spread/20191106-spreadnet-13-release/shape_property_bindings.png)

_그림 5 - 자동차 보험 청구서 샘플의 셰이프 속성 바인딩_

코드로 도형(Shape) 속성을 바인딩하는 방법은 쉽습니다:

**[C#]** **도형(Shape) 속성 바인딩**

```csharp
IWorkbook workbook = fpSpread1.AsWorkbook();
IShapes shapes = workbook.Worksheets[0].Shapes;

// bind shape properties to cells
shapes["Front"].Bindings.Add("Left", "Sheet2!B2");
shapes["Front"].Bindings.Add("Top", "Sheet2!C2");
shapes["Front"].Bindings.Add("Width", "Sheet2!D2");
shapes["Front"].Bindings.Add("Height", "Sheet2!E2");
shapes["Front"].Bindings.Add("Line", "Sheet2!F2");
```

**[VB]** **도형(Shape) 속성 바인딩**

```
Dim workbook As IWorkbook = fpSpread1.AsWorkbook
Dim shapes As IShapes = workbook.Worksheets(0).Shapes


' bind shape properties to cells
shapes("Front").Bindings.Add("Left", "Sheet2!B2")
shapes("Front").Bindings.Add("Top", "Sheet2!C2")
shapes(Front").Bindings.Add("Width", "Sheet2!D2")
shapes("Front").Bindings.Add("Height", "Sheet2!E2")
shapes("Front").Bindings.Add("Line", "Sheet2!F2")

```

#### 개발 문서:

- [도형(Shape) 속성 바인딩](https://www.grapecity.com/spreadnet/docs/v13/online-win/working-with-shapes.html#i-heading-binding-shape-properties)

### 복사/붙여넣기(Copy/Paste)의 향상된 기능

**Spread.NET 13 WinForms** 는 Microsoft Excel®과 Spread.NET 간의 향상된 풍부한 복사/붙여넣기 기능을 제공합니다. 이 새로운 기능을 활성화하려면 **속성(Property) 표**에서 속성을 설정해야 합니다.

![Figure 6Enable FpSpread.Features.RichClipboard using property grid](https://global-cdn.grapecity.com/blogs/spread/20191106-spreadnet-13-release/02-feaures-enable-rich-clipboard.png)

_그림 6 - 속성 표를 사용하여 FpSpread.Features.RichClipboard 활성화 또는 코드로 이 속성을 설정할 수 있습니다_

또는 코드로 이 속성을 설정할 수 있습니다:

**[C#]** **코드로 FpSpread.Features.RichClipboard 활성화**

`fpSpread1.Features.RichClipboard = true;`

**[VB]** **코드로 FpSpread.Features.RichClipboard 활성화**

`fpSpread1.Features.RichClipboard = True`

**RichClipboard** 가 활성화된 경우 다음 작업을 수행할 수 있습니다:

1. **서식**, **수식**, **값**을 포함한 **선택된 셀 범위** 또는 **선택된 셀 범위의 집합**을 **Microsoft Excel®**에서 **Spread.NET**으로 **복사**합니다.
2. **서식**, **스타일**, **효과**, **텍스트**를 포함한 **선택된 셰이프**, **그림**, **슬라이서** 또는 **하나 이상의 셰이프**, **그림**, **슬라이서로 이뤄진 집합**을 **Microsoft Excel®**에서 **Spread.NET**으로 복사하거나 **Spread.NET**에서 **Microsoft Excel®**로 복사합니다.

#### 개발 문서:

- [향상된 풍부한 복사/붙여넣기](https://www.grapecity.com/spreadnet/docs/v13/online-win/cutorcopycellrangesandshapes.html)

### 표 필터링을 위한 슬라이서(Slicer)

**Spread.NET 13 WinForms**는 XLSX 파일의 슬라이서 및 Microsoft Excel®에서 지원되는 기본 제공 슬라이서 스타일의 가져오기 및 내보내기를 비롯하여, 표 필터링을 위한 새로운 슬라이서를 제공합니다.

**슬라이서**는 **Spread Designer** 도구를 사용하여 스프레드시트에 적용할 수 있습니다:

![Figure 7Insert Slicer in Spread Designer](https://global-cdn.grapecity.com/blogs/spread/20191106-spreadnet-13-release/03-insert-slicer-tool.png)

_그림 7 - Spread Designer에 슬라이서 삽입_

**Spread Designer**에 **슬라이서 삽입(Insert Slicer)**대화 상자가 표시됩니다.

![Figure 8Insert Slicer Dialog](https://global-cdn.grapecity.com/blogs/spread/20191106-spreadnet-13-release/04-insert-slicer-dialog.png)

_그림 8 - 슬라이서 삽입 대화 상자_

**슬라이서 삽입(Insert Slicer)** 대화 상자를 코드로 표시할 수도 있습니다:

**[C#]** **슬라이서 삽입 대화 상자를 코드로 표시하기**

```
SlicerInsertForm dlg = new SlicerInsertForm(table, new Point(25, 25));
dlg.ShowDialog(this);

```

**[VB]** **슬라이서 삽입 대화 상자를 코드로 표시하기**

```
Dim dlg As SlicerInsertForm = new SlicerInsertForm(table, new Point(25, 25))
dlg.ShowDialog(Me)

```

**슬라이서** 개체는 표 열(column)의 고유한 값을 표시하며, 표를 신속하게 필터링하며 표 열(column)에서 값이 있는 행만 표시할 수 있습니다.

![Figure 9Slicer created for Country table column](https://global-cdn.grapecity.com/blogs/spread/20191106-spreadnet-13-release/05-move-reisize-slicer-popup-designer.png)

_그림 9 - 태이블 열(column)을 위한 슬라이서 생성_

**슬라이서**를 **차트**와 조합하여 풍부한 인터페이스 및 대시보드를생성할 수 있습니다.
**슬라이서** 및 **차트**는 **슬라이서**의 **표**와 동일한 **워크시트**에 있지않아도되므로, **차트**를 생성하여 불필요한 계열을 숨길 수 있으며, 사용자가 **슬라이서**를 변경하면 **차트**가 업데이트됩니다.

#### 개발 문서:

- [슬라이서 작업하기](https://www.grapecity.com/spreadnet/docs/v13/online-win/working-with-slicers.html)

### 사용자 정의 데이터 시각화를 위한 VisualFunctions

**Spread.NET 13 WinForms**는 **VisualFunction**이라고 하는 새로운 유형의 사용자 정의 계산 함수를 지원합니다. 셀에 내용을 그리거나 서식을 적용하는 *사용자 정의 수식 함수*를 정의할 수 있습니다.

이 기능을 사용하여 셀의 사용자 정의 내용을 그리는 작업은 사용자 정의 **스파크라인**을 생성하는 것과 유사하지만, 이 기능은 새로운 **계산 엔진(Calculation Engine)**과 통합되고 **VisualFunction**은 새로운 **Function** 클래스를 상속하므로 훨씬 더 쉽습니다.

이 기능을 사용하여 셀에 스타일을 적용하는 것은 조건부 서식과 유사하지만, 조건에 대한 사용자 정의 로직을 구현하고 조건부 서식의 오버헤드를 피할 수 있으므로 이 기능은 더욱 쉽고, 빠르고, 강력합니다.

예를 들어 QR 코드를 그리는 **VisualFunction**을 정의할 수 있습니다:

![Figure 10VisualFunction showing QR code](https://global-cdn.grapecity.com/blogs/spread/20191106-spreadnet-13-release/01-qr-code-visual-func.png)

_그림 10 - QR 코드를 표시하는 VisualFunction_

수식에서 **VisualFunction**을 참조하려면 **VisualFunction**의 이름에 접두사 "**VF.**"를 사용해야 하며, 이 함수는 사용자 정의된 인수를 가질 수 있습니다.
이 함수 구현은 함수에 필요한 인수(arguments)를 결정하며, 셀 수식에 지정된 이러한 인수를 기반으로 셀의 내용을 그리기는 것을 처리합니다.
위의 예시에서 **VisualFunction QRCODE**는 두 가지 인수를 허용하며, 수식은 셀 **B1**과 **C1**을 지정하므로 그 결과로 GrapeCity Spread 웹사이트를 인코딩하는 표준 QR 코드가 생성됩니다.

#### 개발 문서:

- [Visual Function 생성 및 사용하기](https://www.grapecity.com/spreadnet/docs/v13/online-win/creating-using-visual-function.html)
- [스파크라인 사용하기](https://www.grapecity.com/spreadnet/docs/v13/online-win/spwin-sparklines.html)
- [계산 엔진](https://www.grapecity.com/spreadnet/docs/v13/online-win/GrapeCity.Spreadsheet~GrapeCity.Spreadsheet.CalculationEngine_members.html)

### 향상된 **XLOOKUP** 및 **XMATCH** 함수

**Spread.NET 13 WinForms**는 새로운 **XLOOKUP** 및 **XMATCH** 함수에 대한 향상된 지원을 제공합니다. 현재 이러한 함수는 Microsoft Excel®의 Office Insider 빌드에서만 제공됩니다.

이러한 새로운 함수는 다음과 같은 여러 이유로 기존의 **LOOKUP**, **VLOOKUP**, **HLOOKUP**, **MATCH** 함수보다 훨씬 더 뛰어납니다.

1.  **XLOOKUP** 및 **XMATCH**는 lookup_array의 방향에 따라 세로 또는 가로 조회(또는 중첩된 경우 두 가지 모두)를 수행할 수 있습니다.
2.  **XLOOKUP** 및 **XMATCH**는 **HLOOKUP**/**VLOOKUP/MATCH**와 달리 데이터가 정렬되지 않은 경우에도 정확한 결과로 조회(Lookup)를 수행할 수 있습니다.
3.  **XLOOKUP** 및 **XMATCH**는 **LOOKUP/HLOOKUP/VLOOKUP/MATCH**와 달리 기본적으로 정확한 일치 조회를 수행합니다.
4.  **XLOOKUP**은 _**lookup_array**_ 및 **_return_array_**가 포함된 전체 범위를 참조할 필요가 없으며, 두 가지 특정 범위만 참조하면 됩니다. 따라서 **XLOOKUP**은 필요한 재계산 측면에서 **HLOOKUP/VLOOKUP**보다 더욱 효율성이 높을 수 있습니다.
5.  **XLOOKUP** 인수는 열 또는 행이 삽입되거나 제거될 경우 자동으로 조정하여 _**lookup_array**_ 또는 **_return_array_**를 이동합니다. 이는 색인 대신 범위 참조가 사용되기 때문입니다.
6.  Spread.NET에서 **XLOOKUP** 및 **XMATCH**가 향상되어 새로운 **_search_mode 0 - All_**을 지원합니다. 이는 배열 내의 모든 일치하는 항목을 반환하고, 동적 배열이 활성화된 경우 인접한 셀로 나눌 수 있습니다.

이러한 새로운 함수에는 **동적** **배열** 기능을 활성화할 필요가 없지만, 모든 일치하는 항목을 반환하는 향상된 **_search_mode 0 - All_**을 사용하여 이러한 값을 인접한 셀에 나누려고 할 경우에는 동적 배열 기능을 활성화해야 합니다:

![Figure 11Enabling Dynamic Array in ribbon bar Formulas tab](https://global-cdn.grapecity.com/blogs/spread/20191106-spreadnet-13-release/enable_dynamic_arrays.png)

_그림 11 - 리본 표시줄의 수식 탭에 있는 동적 배열 활성화하기_

**동적 배열** 기능을 코드로 활성화할 수도 있습니다.

**[C#]** **동적 배열을 코드로 활성화하기**

```
fpSpread1.AsWorkbook().WorkbookSet.CalculationEngine.CalcFeatures = GrapeCity.Spreadsheet.CalcFeatures.DynamicArray;

```

**[VB]** **동적 배열을 코드로 활성화하기**

```
fpSpread1.AsWorkbook().WorkbookSet.CalculationEngine.CalcFeatures = GrapeCity.Spreadsheet.CalcFeatures.DynamicArray

```

#### 개발 문서:

- [XLOOKUP](https://www.grapecity.com/spreadnet/docs/v13/online-formula/XLOOKUP.html)
- [XMATCH](https://www.grapecity.com/spreadnet/docs/v13/online-formula/XMATCH.html)
- [동적 배열 수식 작업하기](https://www.grapecity.com/spreadnet/docs/v13/online-win/WorkingWithDynamicArrayFormulas.html)

### 수식 값의 자동 서식(AutoFormatting) 지정

1. 특정 함수를 사용하는 셀 수식은 Microsoft Excel과 마찬가지로 셀 서식을 자동으로 적용합니다.
2. 다른 셀에 대한 셀 참조는 Microsoft Excel과 마찬가지로, 참조된 셀의 서식을 자동으로 사용합니다.
3. 이러한 기능이 작동하려면 이전 버전과의 호환성을 위해 명시적으로 활성화되어야 합니다.

**Spread.NET 13 WinForms**는 Microsoft Excel®과 마찬가지로 수식 값의 자동 서식 지정을 제공합니다. **DATE** 함수를 사용하는 수식을 입력할 수 있으며 해당 값은 자동으로 날짜로 서식이 지정됩니다. 또는 통화, 회계 또는 기타 셀 서식으로 서식 지정된 셀을 참조하는 수식을 입력할 수 있으며, 해당 서식 또한 수식 셀의 값에 자동으로 적용됩니다. 셀에 다른 서식을 표시하려는 경우 여전히 새로운 셀 서식을 적용하여 자동 서식을 대체할 수 있습니다.

자동 서식은 값이 포함된 수식에 있는 최종 참조 셀의 셀 서식을 기준으로 합니다.
예를 들어, **1500.65**라는 값을 셀 **A1**에 입력한 다음 **통화** 서식을 적용하면 해당 셀에는 **\$1500.65**가 표시됩니다. 그런 다음 셀 **A2**에 수식 **=A1**을 입력하면 셀 **A2**의 값도 **통화** 서식으로 표시됩니다.

셀 **A2**에 대한 **셀 서식** 대화 상자를 열고 해당 셀의 셀 서식을 **회계**로 변경하면 셀 **A2**의 값이 **통화** 서식 대신 **회계** 서식으로 표시되도록 업데이트됩니다.

셀 **B1**에 수식 **=A1**을 입력한 다음 해당 수식을 셀 **B2**로 끌어서 채우면 이러한 셀 두 가지 모두에 서식이 **통화**로 지정된 값 **\$1500.65**가 표시됩니다. 이는 참조 체인의 마지막에 있는 셀인 **A1**에 적용된 서식이 **통화** 서식이기 때문입니다:

![Figure 12Automatic formatting of formula values based on original cell format](https://global-cdn.grapecity.com/blogs/spread/20191106-spreadnet-13-release/automatic_formatting_formulas.png)

_그림 12 - 원본 셀 서식을 기준으로 수식 값의 자동 서식 지정하기_

이전 버전과의 호환성을 위해 이 기능은 기본적으로 활성화되어 있지 않으며 **IWorkbook.Features**를 사용하여 응용 프로그램에서 코드로 명시적으로 활성화해야 합니다:

**[C#]** **코드로 IWorkbook.Features.AutoFormatting 활성화**

`workbook.Features.AutoFormatting = True`

**[VB]** **코드로 IWorkbook.Features.AutoFormatting 활성화**

`workbook.Features.AutoFormatting = True`

#### 개발 문서:

- [자동 서식 수식](https://www.grapecity.com/spreadnet/docs/v13/online-win/auto-format-formulas.html)
- [FormatCells 클래스 멤버](https://www.grapecity.com/spreadnet/docs/v13/online-win/FarPoint.Win.Spread~FarPoint.Win.Spread.FormatCells_members.html)
- [IWorkbook.Features](https://www.grapecity.com/spreadnet/docs/v13/online-win/GrapeCity.Spreadsheet~GrapeCity.Spreadsheet.IWorkbook~Features.html)

### 행 헤더 **너비(Width)**의 자동 조정

**Spread.NET 13 WinForms** 는 많은 고객이 요청한 간단한 개선 사항을 제공합니다. 이는 바로 시트를 아래로 스크롤할 때 행 번호를 표시하도록 자동으로 조정되는, 동적으로 크기가 조정된 행 헤더입니다:

![13](https://global-cdn.grapecity.com/blogs/spread/20191106-spreadnet-13-release/automatic_header_resize1.png)

![14](https://global-cdn.grapecity.com/blogs/spread/20191106-spreadnet-13-release/automatic_header_resize2.png)

![15](https://global-cdn.grapecity.com/blogs/spread/20191106-spreadnet-13-release/automatic_header_resize3.png)

_그림 13-15 아래로 스크롤하는 동안 행 헤더 자동 조정하기_

사용자는 이 기능을 사용하여 용량이 매우 큰 스프레드시트를 아래로 스크롤하고 행 색인 번호를 볼 수 있습니다.

#### 개발 문서:

- [행 헤더 자동 확장](https://www.grapecity.com/spreadnet/docs/v13/online-win/auto-expand-row-headers.html)

### **IWorksheet**의 BackgroundImage

**Spread.NET 13 WinForms**는 이제 새롭게 오버로드된 메서드인 **SetBackgroundPicture**를 사용하여 **IWorkbook** 인터페이스의 통합 문서에 대한 배경 이미지를 설정할 수 있도록 지원합니다.

**[C#]** **IWorksheet.SetBackgroundImage** **메서드** **오버로드**

```
void IWorksheet.SetBackgroundPicture(string filename, [string contentType = null])
void IWorksheet.SetBackgroundPicture(System.IO.Stream imageStream, string contentType)

```

**[VB]** **IWorksheet.SetBackgroundImage** **메서드** **오버로드**

```
Sub SetBackgroundPicture(filename As String, Optional contentType As String = Nothing)
Sub SetBackgroundPicture(imageStream As System.IO.Stream, contentType As String)

```

그림은 파일 또는 스트림에서 로드해야 하며, 지정된 내용 유형은 다음과 같아야 합니다:

- image/jpeg
- image/png
- image/tiff
- image/gif
- image/Bmp

#### 개발 문서:

- [SetBackgroundPicture 메서드](https://www.grapecity.com/spreadnet/docs/v13/online-win/GrapeCity.Spreadsheet~GrapeCity.Spreadsheet.IWorksheet~SetBackgroundPicture.html)

### 수식 편집 시 표 셀에 구조화된 참조(References) 삽입 지원

![Figure 16Editing formula inserts structured references to table cells](https://global-cdn.grapecity.com/blogs/spread/20191106-spreadnet-13-release/formula_editing_struct_ref.png)

_그림 16 - 수식 편집 시 표 셀에 구조화된 참조 삽입 지원_

**FormulaTextBox** 컨트롤을 사용하여 수식을 편집할 경우,표 셀, 표 열 또는 전체 표를 선택할 수 있으며, 적용이 가능한 경우 구조화된 참조가 자동으로 삽입됩니다.
전체 표 열 참조 및 전체 표 참조의 경우 이 기능이 항상 작동하지만, 표 셀 참조의 경우 '**[@ColumnName]**' 구문을 사용하려면 수식 셀의 행이 표 셀과 같아야 합니다. 표 셀이 다른 행에 있는 경우, 일반 셀 참조를 사용해야 합니다.

#### 개발 문서:

- [수식 텍스트 상자 작업하기](https://www.grapecity.com/spreadnet/docs/v13/online-win/spwin-formulabar.html)
- [구조화된 참조](https://www.grapecity.com/spreadnet/docs/v13/online-win/spwin-formulabar.html#i-heading-selecting-table-formula-using-structured-references)

### 새로운 **BeforeRightClick** 이벤트

**Spread.NET 13 WinForms**는 새로운 이벤트인 **BeforeRightClick**을 제공합니다. 이 이벤트는 최종 사용자가 스프레드시트 내에서 마우스 오른쪽 클릭할 경우 실행되며, 메뉴를 보여주는 처리하는 프로세스를 컨트롤이 실행되기 전에 발생됩니다. 이벤트 처리기에서 코드를 구현하여 **FpSpread.HitTest** 메서드를 사용함으로써 클릭한 위치 및 커서 밑에 있는 개체를 확인하고, 사용자 정의 컨텍스트 메뉴를 표시하기 위한 기본 동작을 재정의할 수 있습니다. 또는 기본 컨텍스트 메뉴를 수정하거나, 이벤트 핸드러를 기본 컨텍스트 메뉴에 추가할 수도 있습니다. 이 새로운 이벤트는 스프레드시트에서의 마우스 오른쪽 클릭 작업을 처리하기 위한 유연성을 훨씬 더 높입니다.

#### 개발 문서:

- [BeforeRightClick 이벤트](https://www.grapecity.com/spreadnet/docs/v13/online-win/FarPoint.Win.Spread~FarPoint.Win.Spread.FpSpread~BeforeRightClick_EV.html)
- [HitTest를 사용하여 포인터 위치 찾기](https://www.grapecity.com/spreadnet/docs/v13/online-win/spwin-cntrl-hittest.html)

### WinForms Control Explorer에 추가된 새로운 샘플

새로운 **Spread.NET 13 WinForms Control Explorer**에는 기능 및 일반적인 사용 사례를 보여 주기 위한 흥미로운 몇 가지 새로운 샘플이 추가되었습니다. 모든 샘플은 **C#** 및 **VB** 모두에서 사용 가능하며 **설치 프로그램에 포함**되어 있습니다.

1. **쇼케이스**: **자동차 보험 청구서**에는 VBA 코드 및 사용자 정의 셰이프가 포함된 매크로 사용 Microsoft Excel® 통합 문서(**\*.XLSM**)를 가져온 다음, 새로운 매크로 사용 Microsoft Excel® 통합 문서를 내보낼 수 있는 .NET WinForms 응용 프로그램으로 해당 통합 문서를 전환하는 방법이 나와 있습니다. 이 결과로 생성되는 **XLSM**에는 모든 사용자 변경 사항 및 VBA 매크로 내용이 유지됩니다.
2. **기능**: **계산** **–** **동적** **배열**에는 **동적** **배열** 기능을 사용하는 방법이 나와 있으며, 새로운 각각의 수식 함수인 **FILTER**, **RANDARRAY**, **SEQUENCE**, **SINGLE**, **SORT**, **SORTBY** 및 **UNIQUE**에 대한 통합 문서를 포함하여 동적 배열을 사용한 다양하고 유용한 예시가 포함되어 있습니다. 이제 **계단식** **종속** **드롭다운** **목록** 및 **검색** **가능한** **드롭다운** **목록**을 생성하고, 세 가지 손쉬운 수식으로 크로스탭 보고서를 생성하며, **다른** **수많은** **작업에** **동적** **배열을** **적용하는** **방법**을 학습하십시오.
3. **기능**: **계산** **–** **수식** **추적**에는 참조 셀 간의 화살표가 표시되는 수식에 대한 참조되는 셀 및 종속 셀을 추적하는 방법과 수식에 대한 참조되는 셀 및 종속 셀을 추적하기 위한 새로운 API를 사용하여 셀 수식 감사의 자세한 보고서를 생성하는 방법이 나와 있습니다.
4. **기능**: **계산** **–** **사용자** **정의** **함수**에는 배열 또는 결과를 반환하는 사용자 정의 계산 함수를 구현하는 방법이 나와 있습니다. 이를 배열 수식과 함께 사용하거나, 새로운 **동적** **배열** 기능을 사용할 수 있습니다(**IWorkbookSet.CalculationEngine.CalcFeatures**와 함께 활성화된 경우). **사용자** **정의** **함수**는 코드로 또는 최종 사용자가 **셀 수식에서 직접 사용할 수 있는 새로운 계산 함수**를 구현하는 사용자 정의 클래스입니다. 이 함수는 필요한 로직을 수행할 수 있으며, 셀이나 범위 참조 또는 배열이나 값 반환을 비롯하여 일반적인 유형의 수식 함수 결과를 반환할 수 있습니다.
5. **기능**: **계산** **– XLOOKUP** **및** **XMATCH** **함수**는 새로운 **XLOOKUP** 및 **XMATCH** 계산 함수 및 향상된 **search_mode 0 - All**을 사용하여 배열 내에서 모든 일치하는 항목을 반환하는 방법이 나와 있습니다.
6. **기능**: **계산** **–** **사용자** **정의** **데이터** **시각화**에는 셀 내에서 QR 코드를 그리는 새로운 **VisualFunction**을 생성하는 방법이 나와 있습니다.
7. **기능**: **슬라이서(Slicer)** **–** **소개**에는 슬라이서 스타일 및 설정을 설정하는 방법을 포함하여 워크시트에서 표를 필터링하기 위해 슬라이서를 사용하는 방법이 나와 있습니다.
8. **기능**: **새로운** **도형(Shape)** **엔진** **–** **순서도**에는 새로운 **향상된** **도형(Shape)** **엔진**을 사용하여 순서도를 생성하는 방법이 나와 있습니다.

<br/>

---

<br/>

# Spread.NET V13 Service Pack 1 새로운 기능

### Spread.NET for Winforms 13.45.20201.0

**이전 릴리스의 개선 사항**

- 시트 이름 탭을 두 번 클릭 후 새 이름을 입력하여 시트 이름을 바꿀 수 있습니다.
- 스크롤바를 사용자 정의하기 위해 EnhancedScrollBarRenderer가 제공됩니다.

**해결된 문제**

- 정렬할 열 사이에 빈 열이 있어도 정렬 작업이 제대로 작동합니다.
- 활성 시트의 탭 색상을 변경할 수 있습니다.
- MFC 응용 프로그램에서 스크롤 막대 단추를 누르면 시트 전체에서 스크롤됩니다.
- 제공된 zoomFactor는 시트의 실제 확대 / 축소 비율입니다.
- UnionedChangeCellRange가 False 인 경우 셀이 변경될 때마다 CellChanged 이벤트가 시작됩니다.
- SP6 응용 프로그램을 문제없이 SP13으로 마이그레이션 할 수 있습니다.
- 도형 및 차트 복사가 올바르게 작동합니다. 복사된 차트는 활성 시트를 변경하지 않아도 볼 수 있습니다.
- Designer의 이름 관리자에서 모든 셀 값이 올바르게 표시됩니다.
- UnionedChangeCellRange가 False 인 경우에도 열을 추가할 수 있습니다.
- 문화권 별 형식 문자열을 사용하면 TEXT 함수가 올바르게 평가됩니다. [276855]
- FrozenRowCount가 설정되어 있더라도 Excel 파일을 열 때 오류가 발생하지 않습니다. [277746]
- Spread Win Designer에서 양식 컨트롤 및 차트가 포함된 Excel 파일을 올바르게 가져올 수 있습니다. [262992]

### Spread.NET for ASP.NET 13.45.20202.0

**해결된 문제**

- Spread.Win을 통해 내보내면 XML 파일을 Spread.Web에 로드 할 수 있습니다.

### Spread.NET for WPF 13.45.20201.0

**해결된 문제**

- VLOOKUP의 참조는 자동으로 업데이트됩니다.

<br>

---

# Spread.NET V13 Service Pack 2 새로운 기능

### Spread.NET for Winforms 13.45.20203.0

**이전 릴리스의 개선 사항**

-   사용자가 셀 유효성 검사 상태를 확인할 수있는 새로운 API가 도입되었습니다.

**해결된 문제**

-   PDF 형식으로 인쇄하는 동안 NullReferenceException이 발생하지 않습니다.
-   셀에 입력된 함수가 스프레드 디자이너에서 그대로 유지됩니다.
-   이제 xml을 사용하는 동안 행 태그를 복원할 수 있습니다.
-   응용 프로그램에서 아래 첨자가 올바르게 나타납니다.
-   스프레드를 엑셀로 내보낼 때 이미지가 다른 이름으로 내보내집니다.
-   코드가 숨겨진 *.ss6 파일이 FormulaTextBox가 있는 상태로 로드되어도 성능에 영향을 주지 않습니다.
-   데이터가 변경되었던 셀에 대해 DefaultSheetDataModel 이벤트가 발생합니다.
-   스프레드 디자이너에서 XML 파일에 대한 변경 사항이 올바르게 저장됩니다.
-   다른 시트를 가리키는 수식을 가진 셀의 값이 올바르게 업데이트됩니다.
-   서식이 있는 텍스트가 포함된 셀의 폰트가 올바르게 표시됩니다.
-   LegacyBehaviors에 Style 열거 형이 포함된 경우 차트의 위치와 크기가 스프레드 디자이너에 올바르게 저장됩니다.

Spread.NET for ASP.NET 13.45.20204.0

**해결된 문제**

-   NonFixed 셀 참조가 있는 조건부 서식이 있는 XML에서 생성된 MemoryStream을 이제 역 직렬화 할 수 있습니다.
