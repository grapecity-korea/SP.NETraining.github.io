---
title: Spread.NET 2019 V12 Service Pack 1 새로운 기능
sidebar: home_sidebar
keywords: news, blog, updates, release notes, announcements
permalink: 2019v12sp1_whatsnew.html
folder: news
summary: "Excel과 유사하게 전문적이고 유연한 .NET 테이블 컨트롤 Spread.NET의 V12 Service Pack 1이 출시되었습니다!"
---

## 동적 배열 지원

이번 버전에서 가장 주목할 만한 것은 동적 배열 지원입니다. 이 기능을 통해 사용자가 새로운 수식을 작성하면 반환되는 결과의 배열이 인접한 빈 셀로 자동으로 ‘분할’됩니다. 이외에도 몇 가지 강력한 새 기능이 포함되어 있는데, 필요한 수식이 크게 간소화되어 이전에는 매우 복잡했던 것들이 훨씬 더 간단해졌습니다.
독립적인 드롭다운 목록과 검색 가능 드롭다운 목록을 구현하면 수식이 훨씬 간결해지므로 더욱 명확하게 작성할 수 있고 이해하기도 쉬워집니다.

### 동적 배열 사용

먼저 스프레드시트에서 동적 배열을 활성화해야 합니다. 동적 배열은 자동으로 활성화되지 않으므로 다음 중 한 가지 방식으로 활성화해야 합니다.

1. Windows Forms용 Spread Designer에는 다음과 같이 수식 탭이 새로 도입되었습니다.

    ![New Formulas tab in WinForms Spread Designer Ribbon Bar](https://gccontent.blob.core.windows.net/gccontent/blogs/spread/20190513-spread-net-sp-1/1.png "New Formulas tab in WinForms Spread Designer Ribbon Bar")

    WinForms Spread Designer 리본 메뉴에 새로 추가된 수식 탭

    **_Calculation Engine_**에 있는 **_동적_** **_배열_**의 확인란을 선택하여 동적 배열을 활성화할 수 있습니다.

2. 코드를 사용하는 경우 다음과 같이 CalculationFeatures에서 새 플래그를 사용하여 동적 배열을 활성화할 수 있습니다.

    [C#]
    ```
        fpSpread1.AsWorkbook().WorkbookSet.CalculationEngine.CalcFeatures = GrapeCity.Spreadsheet.CalcFeatures.DynamicArray;
    ```

    [VB]
    ```
        FpSpread1.AsWorkbook().WorkbookSet.CalculationEngine.CalcFeatures = GrapeCity.Spreadsheet.CalcFeatures.DynamicArray
    ```

다음과 같이 수평으로 분할되는 배열을 하드 코딩하여 “={1,1,2,2,3}”과 같은 수식을 입력할 수 있습니다.

![Horizontal Array](https://gccontent.blob.core.windows.net/gccontent/blogs/spread/20190513-spread-net-sp-1/2.png "Horizontal array using ',' separator spilled horizontally")

(구분 기호 ','를 사용하는 배열이 수평으로 분할된 모습)

또는 다음과 같이 수직으로 분할되는 배열을 하드 코딩하여 “={1;1;2;2;3}”과 같은 수식을 입력할 수 있습니다.

![Vertical Array](https://gccontent.blob.core.windows.net/gccontent/blogs/spread/20190513-spread-net-sp-1/3.png "Vertical array using ';' separator spills vertically")

(구분 기호 ';'를 사용하는 배열이 수직으로 분할된 모습)

또는 다음과 같이 수평 및 수직으로 분할되는 2차원 값 배열을 하드 코딩하는 “={1,1,2,1,3;1,1,2,1,3;1,2,3,2,5;1,2,3,2,5;1,2,2,2,5}”와 같은 수식을 입력할 수 있습니다.

![Dynamic Arrays](https://gccontent.blob.core.windows.net/gccontent/blogs/spread/20190513-spread-net-sp-1/4.png "2-dimensional array spills both vertically and horizontally")

(수직 및 수평으로 분할된 2차원 배열)

분할된 범위에 있는 셀을 선택하면 분할된 범위 전체에 파란색 경계선이 그어져 범위가 나타나고, FormulaTextBox는 셀 수식을 비활성 및 편집 불가 상태로 표시합니다.

## 동적 배열을 위한 새 함수

동적 배열을 위해 6가지 새로운 함수가 지원되며 이러한 새 도구를 통해 신속하게 데이터를 분석할 수 있습니다. SEQUENCE 및 RANDARRAY 함수를 이용하여 순차적 또는 무작위 데이터 배열을 생성할 수 있고, FILTER, SORT, SORTBY 및 UNIQUE 함수를 통해 이전보다 쉽게 데이터를 분석할 수 있습니다. 새로운 함수를 이용하여 전보다 훨씬 더 적고 단순한 수식을 만들 수 있습니다.

다음과 같이 SORTBY를 RANDARRAY와 함께 사용하여 목록을 무작위로 생성할 수 있습니다.

![Data Arrays](https://gccontent.blob.core.windows.net/gccontent/blogs/spread/20190513-spread-net-sp-1/5.png "Randomize ordering for a list of values with SORTBY and RANDARRAY")

(SORTBY와 RANDARRAY를 사용하여 값 목록을 무작위로 나열한 모습)

다음과 같이 SEQUENCE와 NOW를 사용하여 10분 간격의 일정을 작성할 수 있습니다.

![Data Arrays](https://gccontent.blob.core.windows.net/gccontent/blogs/spread/20190513-spread-net-sp-1/6.png "Schedule every tem minutes using SEQUENCE")

(SEQUENCE를 사용하여 작성한 10분 간격의 일정)

다음과 같이 3가지 수식과 TRANSPOSE, SORT, UNIQUE, SUMIFS만을 사용하여 셀에 직접 피벗 테이블 크로스탭 보고서를 작성할 수 있습니다.

![Pivot table crosstab report created with just three formulas!](https://gccontent.blob.core.windows.net/gccontent/blogs/spread/20190513-spread-net-sp-1/7.png "Pivot table crosstab report created with just three formulas")

(3가지 수식만 사용하여 작성된 피벗 테이블 크로스탭 보고서)

이외에도 이 기능으로 많은 작업을 할 수 있습니다. 향후 블로그에서 이 기능을 자세히 다룰 예정이며 이 함수들을 이용하여 만들 수 있는 강력한 사용 사례에 대해서도 살펴볼 것입니다.

## WinForms Spread Designer의 수식 추적

Spread.NET 12 WinForms 계산에 관해 최근 연속해서 올린 블로그 게시글에서 저는 [Spread.NET 12 WinForms를 사용하여 계산을 검수하고 수식 참조를 추적하는 방법](https://www.grapecity.com/blogs/spread-dot-net-calculation-part-four)을 설명했습니다.

이번 Spread.NET 12 WinForms 버전에서는 이러한 수식 추적 도구를 다음과 같이 수식 검수 그룹의 참조된 셀 연결선, 참조된 셀 추적, 연결선 제거에서 사용할 수 있습니다.

![Formula Tracing in WinForms Spread Designer](https://gccontent.blob.core.windows.net/gccontent/blogs/spread/20190513-spread-net-sp-1/8.png)]

## 새로운 대체 스타일 지원

Spread.NET 12 WinForms에서는 기본 스프레드시트에서 대체 행 및 열 스타일을 지원합니다. 새로운 플랫 스타일 핵심을 사용할 때도 시트 스킨을 통해 대체 행 스타일을 적용할 수 있습니다!

이 대체 스타일에는 표 스타일과 동일한 최적화 구현을 사용하여 스프레드시트 코어(GrapeCity.Spreadsheet.dll)에서 직접 구현되는 행 및 열 스타일이 모두 포함되어 있어 놀라운 성능을 자랑합니다!

이전 버전의 AlternatingRows 클래스는 플랫 스타일 스프레드시트 코어를 사용할 때 새 인터페이스를 래핑하고 기존 코드를 활성화하여 대체 행 스타일을 설정합니다. 혹은 GrapeCity.Spreadsheet.dll의 새 공개 인터페이스로 직접 호출하여 대체 행 및 열 스타일을 만들 수 있습니다.

## 선택 취소

현재 Microsoft Excel®에서는 선택한 셀 중 일부를 선택 취소하고 나머지 셀은 선택된 상태로 유지하는 기능을 지원합니다. Spread.NET WinForms 12에서는 SelectionPolicy가 MultiRange인 경우 이러한 동작을 지원합니다. 따라서 일정 범위의 셀을 선택하여 변경 사항을 적용하고, 이러한 셀 중 일부를 선택 취소하여 해당 셀에 대한 변경 사항 적용을 생략하며, 나머지 셀은 선택된 상태로 유지하는 작업이 가능합니다. 많은 사용 사례에 매우 유용하도록 향상된 기능입니다!

변경 작업을 위해 한 번에 다수의 비연속적 범위를 선택하는 것보다 큰 범위를 선택한 후 일부를 선택 취소하는 것이 더 편한 경우가 많습니다.

## VSTO처럼 1부터 시작하는 인덱싱

Microsoft Excel®은 Visual Studio Tools for Office(VSTO)용 Visual Basic for Applications(VBA) 개체 모델에서 1부터 시작하는 인덱싱을 지원합니다. 또한 일반적인 Spread.NET 사용 사례는 VBA 및 VSTO를 사용하는 매크로가 사용된 Microsoft Excel® 워크북에서 스프레드시트 응용 프로그램을 만드는 것입니다. 1부터 시작하는 인덱싱을 사용하여, Spread.NET으로 코드를 이식할 때 1부터 시작하는 인덱싱 로직을 모두 유지할 수 있어 VBA 코드를 Spread.NET에 이식하는 작업이 훨씬 더 쉬워졌습니다!

1부터 시작하는 인덱싱을 사용하기 위해 다음과 같은 호출이 필요합니다.

[C#]
```
    IWorkbook iwb = WorkbookSet.CreateBase1Object(fpSpread1.AsWorkbook());
```

[VB]
```
    Dim iwb As IWorkbook = WorkbookSet.CreateBase1Object(FpSpread1.AsWorkbook())
```

## 새로운 F4 작업

Microsoft Excel®에서는 수식 참조를 입력하는 중에 F4 키를 사용하여 열 및 행에 대한 상대 및 절대 참조를 변경할 수 있도록 지원합니다. 이러한 향상된 기능을 통해 상대 및 절대 참조 요구 사항이 있는 수식을 전보다 훨씬 더 쉽게 입력할 수 있습니다.

## AsynFunction 및 FunctionAttributes

Spread.NET 12 WinForms는 [사용자 정의 계산 함수 작성](https://www.grapecity.com/blogs/spread-dot-net-calculation-part-three)을 위한 다양한 지원을 제공합니다. AsyncFunction 클래스를 사용하는 RTD 함수와 같은 비동기 함수 작성도 지원합니다.

이번 Spread.NET 버전부터 AsyncFunction을 상속하는 사용자 정의 계산 함수를 작성하고, 비동기식 계산에 대한 지원을 구현하며, 다양한 FunctionAttributes를 사용하여 배열 값 반환과 같은 특수한 함수 동작을 표시할 수 있습니다.

## Spread.NET 12 서비스 팩 1 - Windows Forms VB.NET 샘플

많은 고객들의 요청에 따라Spread.NET 12 SP1 버전에는 새로운 VB.NET 데모 샘플이 포함되었습니다! WinForms용 Spread.NET 12의 모든 유용한 데모 샘플을 C# 및 VB.NET으로 사용할 수 있습니다.

![Spread.NET 12 SP1 Windows Forms VB.NET Samples](https://gccontent.blob.core.windows.net/gccontent/blogs/spread/20190513-spread-net-sp-1/Spread.NET-12-SP1-Windows-Forms-VB.NET-Samples.jpg)

새로운 샘플을 사용하시려면 지금 바로 WinForms용 Spread.NET 12를 다운로드하여 설치하십시오!

## 기타 향상된 기능

이번 출시 버전에서도 기타 기능이 향상되었습니다. 출시된 업데이트에 대한 자세한 사항은 [릴리스 정보를 참고하세요](http://help.grapecity.com/spread/SpreadNET12ReadMe/webframe.html#rnotes.html).

[Spread.NET 이전 버전의 특징](https://www.grapecity.co.kr/spread-winform/history) 자세히 알아보기