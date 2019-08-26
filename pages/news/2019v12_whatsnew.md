---
title: Spread.NET 2019 V12 새로운 기능
sidebar: home_sidebar
keywords: news, blog, updates, release notes, announcements
permalink: 2019v12_whatsnew.html
folder: news
summary: "Excel과 유사하게 전문적이고 유연한 .NET 테이블 컨트롤 Spread.NET의 V12 버전이 출시되었습니다! 이번 새 버전에서는 다양한 성능이 크게 향상되었을 뿐만 아니라 VSTO 기반의 API 및 기능이 향상되었습니다."
---

## 성능 최적화： 데이터 바인딩, 디자인 타임, Excel 파일 암호화

이전 버전에서 성능 향상, 특히 대규모 Excel 파일에 초점을 맞추기 시작했습니다. V11 XLSX 가져오기 및 내보내기 성능은 이전 버전의 Spread.NET보다 훨씬 빨라졌으며 V12의 성능은 계속 조정하고 있습니다. 이번 버전에서는 성능 향상을 위해 3가지 핵심 사용 사례에 집중했습니다.

- **데이터 바인딩**： 데이터 바인딩 지원, 내부 논리 개선사항으로 바인딩된 데이터를 사용하는 계산과 관련된 일반적인 사용 사례 성능 향상입니다.
- **디자인 타임**： 양식 리소스에 통합 문서를 저장할 때 컨트롤의 기본 직렬화 논리를 전환했습니다. 이로 인해 특히 Spread Designer 도구로 대규모 또는 복잡한 패널을 사용할 때 디자인 타임의 성능을 향상할 수 있습니다.
- **XLSX 암호화**： 커널 논리 개선으로 암호화/암호 해제 지원을 핵심 스프레드시트 모델로 이동시켜 암호화로 보호된 Excel 문서를 가져오거나 내보낼 때 성능을 향상할 수 있습니다.

## 교환 가능한 파일 형식으로 성능 향상

Spread.NET V12에서는 교환 가능한 새로운 XLSX 파일 형식으로 기능을 강화했습니다. Spread Designer 또는 런타임 코드로 XLSX 파일을 저장하거나 로드할 때 사용 가능한 ExcelSaveFlag와 ExcelOpenFlag로 이전에 Excel 형식으로 내보내 손실된 모든 사용자 정의 Spread 개체(예： 셀 유형 및 열 바닥글)가 포함됩니다. 새로운 Exchangeable XLSX 파일 형식으로 모든 사용자 정의 Spread 설정이 사용자 정의 스트림으로 XLSX에 저장되며, 다시 로드할 때 다른 내용과 함께 로드됩니다. 앞으로 이러한 새로운 파일 형식이 컨트롤에서 지원하는 XML 직렬화를 대체할 것이며, 파일 크기를 줄이는 것이 더 효율적일 것입니다.

## Excel과 더 유사해진 Spread.NET

Spread.NET V12에서는 새로운 인스턴스 컨트롤의 기본 동작이 변경되었습니다. Spread.NET Windows Forms 12에서 지원하는 새로운 기본 동작은 다음과 같습니다.

- 셀 범위 끌어서 놓기
- 셀 범위 끌어서 채우기
- 연속 탭에서 시트 탭 이동
- 여러 범위 선택
- 셀에 수식 입력
- Excel과 같이 크기 자동 조정
- Excel과 같이 수식 계산(날짜 관련 함수에서는 이중 값이 반환됨)
- 셀 테두리를 축소하여 Excel과 같이 테두리 선 렌더링
- 확장된 셀 스타일을 위한 새로운 핵심 스타일 통합 및 DefaultCellType 렌더링
- Excel과 같이 워크 시트에 대한 보호 설정이 False로 초기화되고 모든 셀에 대한 잠김 설정이 True로 초기화됨
- 크기가 0인 표시기가 있는 숨겨진 행과 열을 Excel과 같이 표시
- 항상 Excel과 같이 작동하는 연속 탭
- Excel과 같이 시트 및 표에 대한 확장 필터 사용자 인터페이스
- (Alt) + (=) 으로 AutoSum을 실행하는 것처럼 더 많은 기본 동작에 키보드 동작 매핑

이러한 기본 동작을 위해 V12로 생성된 새 인스턴스의 여러 속성에서 기본값을 변경했습니다. 또한, 최종 사용자가 익숙하게 사용할 수 있도록 다음과 같은 새로운 기능과 대화창을 출시했습니다.

- Excel과 유사한 기본 셀 스타일 추가
- Excel과 유사한 서식 대화 상자
- 숫자 서식
- 그라데이션 및 패턴 채우기
- 셀 범위에 대한 확장 정렬 및 필터링
- Office 문서 속성 가져오기, 내보내기, 수정

## 업그레이드 환경 개선： V12와 이전 버전과의 호환성

런타임에 새로운 특수 호환 모드 집합을 사용할 수 있게 해주는 새로운 디자인 타임 속성 LegacyBehaviors를 사용하여 Spread.NET 이전 버전과의 호환성이 유지됩니다. 이러한 레거시 모드는 업그레이드 사용자를 위해 설계되었으며, 기본적으로 이전 버전의 Spread.NET에서 업그레이드된 컨트롤 인스턴스는 자동으로 LegacyBehaviors를 사용하기 때문에 업그레이드된 이전 버전의 인스턴스와 호환됩니다. 이제 스프레드시트 컨트롤의 기본 생성자가 모든 레거시 모드 작업을 사용할 수 있게 해주는 LegacyBehaviors.All로 새 인스턴스를 만들기 때문에 이전 버전의 모든 업그레이드 코드가 호환됩니다.

### 새로운 Legacy 모드

Spread.NET Windows Forms 12에서는 각각 독립적으로 사용하거나 사용하지 않도록 설정할 수 있는 AutoRowHeight, CalculationEngine, PropertyDefaults, Style의 네 가지 LegacyBehavior 모드가 제공됩니다.

- AutoRowHeight 플래그는 새로운 자동 행 높이 동작을 사용하지 않도록 설정합니다.
- Calcultation 플래그는 모든 날짜 관련 함수에서 Excel과 유사한 이중 데이터 형식이 아니라 .NET DateTime 데이터 형식을 반환하게 하는 레거시 계산 모드를 사용하도록 설정합니다.
- PropertyDefaults 플래그는 위에서 설명한 Excel과 유사한 새로운 동작을 사용할 수 있도록 속성의 새로운 기본값을 모두 사용하지 않도록 설정합니다. 이 플래그를 사용하면 이전 버전의 Spread.NET에서 구현된 모든 레거시 속성의 워크시트 Protect defaulting이 True로 설정되고 셀의 Locked의 기본값이 False로 설정되는 것을 비롯한 이전 기본값이 유지됩니다.
- Style 플래그는 셀의 새로운 핵심 스타일 모델 통합과 새로운 DefaultCellType 렌더링을 사용하지 않도록 설정하고, 대신 이전 버전의 레거시 스타일 모델과 GeneralCellType 렌더링을 사용합니다.

### 편리하게 Spread.NET V12로 업그레이드

먼저, 프로젝트 참조를 V12의 DLL을 사용하도록 변경합니다. 그리고 프로젝트의 licenses.licx를 새 버전을 참조하도록 업데이트합니다. 프로젝트의 모든 인스턴스가 자동으로 LegacyBehaviors.All을 사용하며, 스프레드시트가 이전처럼 작동합니다. 즉시 프로젝트 확장을 시작하여 새로운 API와 기능을 활용할 수 있습니다! 새로운 기능을 사례별로 사용하도록 설정하려면 LegacyBehaviors를 끕니다.

### 새로운 디자인 타임 동작

이제 디자인 타임에 새 인스턴스가 모든 레거시 모드 작업을 사용하지 않도록 설정하고 컨트롤의 새로운 기능을 사용하도록 설정하는 LegacyBehaviors.None을 통해 생성됩니다.

## 새로운 VSTO 기반 API 및 기능 개선 사항

Visual Studio Tools for Office API 기반의 새로운 API가 V12의 GrapeCity.Spreadsheet.dll에 공개됩니다. 이 새로운 API 계층은 V12의 새로운 기능 개선 사항을 지원하며 통합 문서의 모든 측면에 대한 제어를 월등하게 강화합니다. 이 방대한 새 API 계층에 노출되는 수백 개의 새로운 유형 중 하나에 불과한 IRange 인터페이스에서만 31개 메서드 오버로드와 56개 속성을 제공합니다.

이 놀라운 새 API는 컨트롤과 별개로 작동할 수 있으므로 응용 프로그램이 새로운 Factory 클래스를 통해 메모리에 효율적으로 통합 문서를 만들고 조작할 수 있습니다. 이 API를 사용하여 웹 서버나 Azure에서 UI 없는 서버 측 사용 사례를 지원할 수 있습니다. Factory 클래스를 통해 만든 인스턴스를 컨트롤 인스턴스에 연결할 수도 있습니다.

```
GrapeCity.Spreadsheet.IWorkbookSet workbookSet = GrapeCity.Spreadsheet.Win.Factory.CreateWorkbookSet(); fpSpread1.Attach(workbookSet.Workbooks.Add())
```

통합 문서 또는 통합 문서 집합의 콘텐츠 열기, 저장 또는 조작에 사용할 양식에 컨트롤 인스턴스가 없어도 됩니다. 컨트롤 API를 사용하여 암호로 보호된 PDF 또는 XLSX 파일을 보호할 수도 있습니다. 이 기능은 개인의 의료, 재무 또는 기타 중요한 데이터의 보안 요구 사항을 충족하는 데 사용할 수 있습니다.

### 외부 통합 문서의 셀 및 범위 참조

이제 외부 통합 문서의 셀과 범위를 참조하고 이러한 외부 참조를 XLSX로 가져오거나 내보낼 수 있습니다. WorkbookSet에는 서로 참조하고 실시간으로 다시 계산되는 여러 개의 관련 통합 문서가 포함될 수 있으며, 동일한 양식이나 다른 양식에 있는 컨트롤의 라이브 인스턴스에 해당 통합 문서를 연결할 수 있습니다. 언로드된 통합 문서에 대한 외부 참조는 Excel과 같이 작동합니다.

![Spread.NET V12 외부 통합 문서 참조](https://www.grapecity.co.kr/images/metalsmith/developer/spreadstudio/whatsnew/12/whatsnew_1.png "Spread.NET V12 외부 통합 문서 참조")

(Spread.NET V12 외부 통합 문서 참조)

## 기타 향상된 기능

이번 출시 버전에서도 기타 기능이 향상되었습니다. 출시된 업데이트에 대한 자세한 사항은 [릴리스 정보를 참고하세요](http://help.grapecity.com/spread/SpreadNET12ReadMe/webframe.html#rnotes.html).
