---
title: Spread.NET 2019 V12 새로운 기능
sidebar: home_sidebar
keywords: news, blog, updates, release notes, announcements
permalink: 2019v1_whatsnew.html
folder: news
---

# ComponentOne Enterprise

ComponentOne Enterprise 라이센스를 2019년 새로 구매하거나 갱신할 경우 Xamarin과 Wijmo Core사용 가능한 ComponentOne Studio가 제공됩니다. MVC을 위한 특정 웹 컨트롤은 (OLAP, FlexSheet, MultiRow 및 Financial Chart포함) ComponentOne Ultimate으로 이동됩니다. 해당 사항은 2019년 이후 라이센스에만 독점 제공됩니다.

# C1 Ultimate

C1 Ultimate의 가격대가 250만원 수준까지 올라가고 있으며 이번 버전부터MVC와 자바스크립트를 위한 고급 웹 컨트롤이 포함됩니다 (OLAP, FlexSheet, MultiRow 및 Financial Chart포함). Wijmo Enterprise와 우선 지원은 계속 제공됩니다.

# ComponentOne Control Panel

ComponentOne Control Panel을 사용하여 ComponentOne라이브러리를 설치, 버전관리, 업데이트, 라이센싱 및 유지할 수 있는 새로운 방법이 추가되었습니다. 당사 소프트웨어를 위한 샘플, 판매 및 지원 등에 빠르게 엑세스 할 수 있게 도움을 주기도 합니다.

![ComponentOne Control Panel](https://www.grapecity.co.kr/images/metalsmith/developer/componentone-enterprise/whatsnew/2019V1/c1controlpanel.png "ComponentOne Control Panel")

# Visual Studio 2019지원

모든 컨트롤은 Visual Studio 2019를 전면 지원하도록 테스트를 완료하였습니다.

- [WinForms： DataFilter, CollectionView, BulletGraph, Data Slicer](#winforms)
- [ASP.NET MVC： OLAP Slicer, Multi-Column Combo Sample, Control Wizard](#aspnet-mvc)
- [WPF & UWP： SimplifiedRibbon, FlexGrid](#wpf)
- [Xamarin： FlexGrid, Gauges, Input, C1Icon](#xamarin)

## WinForms

### DataFilter

필터링 기준이나 컨디션을 기반으로 유저는 컨트롤을 통해 데이터를 필터링 할 수 있습니다. DataFilter 베타버전이 2018년 버전 3으로 출시된 바 있으며, 2019년 버전 1에서 컨트롤은 베타버전을 유지하며 아래의 기능이 추가되었습니다

- 필터를 생성할 때 메인데이터소스에서 자동으로 체크리스트 생성
- ToolTips 지원 추가
- 커스텀 필터 지원을 위한 클래스 추가
- 캘린더 필터 옵션 추가

![DataFilter](https://www.grapecity.co.kr/images/metalsmith/developer/componentone-enterprise/whatsnew/2019V1/1.png "DataFilter")

### CollectionView

CollectionView는 컬렉션을 그룹핑, 분류, 필터링 및 네비게이션하기 위한 뷰를 제공합니다. 2019년 버전 1부터, 해당 라이브러리는 WinForms에디션에서 이용 가능합니다.

### BulletGraph

BulletGraph는 선형 측정기의 한 형태로, 대시보드와 정보화면에서 사용되도록 특별히 고안되었습니다. 측정값이 좋은지 나쁜지 혹은 어떤 다른 상태인지를 즉각적으로 전달하기 위한 단일 키 측정을 보여줍니다.

![FlexGrid 통합](https://www.grapecity.co.kr/images/metalsmith/developer/componentone-enterprise/whatsnew/2019V1/3.png "FlexGrid 통합")

### Data Slicer

C1FlexPivotSlicer 컨트롤은 PivotField 객체에 적용할 수 있는 필터를 편집할 수 있는 빠른 방법을 제공합니다. 데이터 슬라이서는 사용자가 값을 기반으로 한 데이터를 필터링할 수 있게 해주며, 현재 필터링 상태 역시 보여줍니다.

![FlexGrid 통합](https://www.grapecity.co.kr/images/metalsmith/developer/componentone-enterprise/whatsnew/2019V1/4.png "FlexGrid 통합")

### 추가 개선사항

**FlexPie** 자동 데이터 라벨의 위치를 지원함으로써 오버래핑 방지 (FlexChart와 매우 유사)

**FlexChart** 를 위한 Drawing Tools샘플 프로젝트가 추가되었다. 차트 툴바를 통해서 추가/편집 차트 요소 (주석, 시리즈, 추세선 등)와 같은 동작을 잘 보여줍니다.

**Input** 새로운 CharHelper 클래스가 일본어 글자 세트에 보다 효율적으로 동작할 수 있는 방법을 제공 (카타카나를 히라가나로 변환 가능)

**Command** C1DockingManager.FloatingWindowOptions을 통해 사용자는 플로팅 윈도우 경계 스타일과 ‘닫기’ 버튼 동작을 바꿀 수 있습니다.

## ASP.NET MVC

### OLAP Slicer

Slicer컨트롤은 PivotField 객체에 적용할 수 있는 필터를 편집할 수 있는 빠른 방법을 제공합니다. Slicer는 버튼을 제공하는데, 사용자는 값을 기반으로 한 데이터를 필터링하기 위해 해당 버튼을 클릭할 수 있으며, 현재 필터링 상태 역시 보여줍니다. 이를 통해 필터링을 마친 PivotGrid와 PivotChart 컨트롤에서 보여주는 내용을 보다 쉽게 이해할 수 있습니다.

![OLAP Slicer](https://www.grapecity.co.kr/images/metalsmith/developer/componentone-enterprise/whatsnew/2019V1/olapslicer-asp-mvccopy.png "OLAP Slicer")

### Multi-Column Combo Sample

이 확장 컨트롤은, 멀티컬럼을 갖추고 있으면서 페이징 가능한 (pageable) FlexGrid 를 포함시키기 위해 셀의 드롭다운 옵션을 확장시킵니다. MultiColumn Combo컨트롤은 사용자가 멀티컬럼을 보고 의사결정을 할 때 유용합니다. 드롭다운 또한 페이징이 가능한데, 수요에 따른 데이터 로딩을 가능하게 해줍니다.

![Multi-Column Combo Sample](https://www.grapecity.co.kr/images/metalsmith/developer/componentone-enterprise/whatsnew/2019V1/multicolumncombo_mvc.png "Multi-Column Combo Sample")

### Control Wizard

**Control Wizard**는 최신 버전으로 업데이트 되어 있으므로, OLAP, Tab, DashboardLayout컨트롤 사용이 가능합니다. 프로젝트 리소스와 Web.config.를 라이센싱 및 업데이트 하는 지원 기능이 향상되어 제공되고 있습니다.

![Control Wizard](https://www.grapecity.co.kr/images/metalsmith/developer/componentone-enterprise/whatsnew/2019V1/controlwizard_mvc.png "Control Wizard")

### 추가 개선사항

**FlexGrid** 에 Column Header양식이 있는 Column Groups지원 기능이 추가 되었습니다. 컬럼 헤더 양식은 일부 컬럼이 컬럼 그룹을 포함하고 있는 계층적 컬럼 구조를 정의하는 데 도움을 줍니다.

**Menu** 컨트롤을 위해 Menu.subItemsPath 속성이 추가 되었는데, 계층적 (멀티레벨) 메뉴 생성이 가능합니다.

**Calendar**와 **InputDate** 를 위해 ShowYearPicker 속성이 추가 되었는데, 사용자가 연간 캘린더 헤더를 클릭하면 캘린더가 연도 리스트를 보여줍니다.

**Web API** Data저장 기능이 이제 클라우드 저장과 CRUD 동작을 지원합니다.

## WPF

### SimplifiedRibbon

![SimplifiedRibbon](https://www.grapecity.co.kr/images/metalsmith/developer/componentone-enterprise/whatsnew/2019V1/5.png "SimplifiedRibbon")

Simplified Ribbon이 업데이트 되어 C1Icon (이미지, 폰트 지원 포함, 버튼을 위한 벡터 그래픽 사용) 사용이 가능하며, 테마 지원도 개선되었습니다.

### FlexGrid

전문(全文) 필터는 검색창과 유사하게 작용하는데, FlexGrid 내에 포함되어 있는 매칭을 하이라이트 표시해줍니다. 사례 매칭, 전체 단어 매칭, 숫자 매칭 및 공간을 앤드(and) 연산자로 취급하는 옵션이 가능합니다.

![FlexGrid](https://www.grapecity.co.kr/images/metalsmith/developer/componentone-enterprise/whatsnew/2019V1/6.png "FlexGrid")

이제 FlexGrid를 통해 C1Icon을 사용하여GroupExpanded, GroupCollapsed, NewRow, DetailCollapsed, DetailExpanded 아이콘 설정이 가능합니다.

### 추가 개선사항

**FlexSheet** 는 VLOOKUP, HLOOKUP과 NOW기능 및 코멘트를 업데이트 혹은 삭제할 수 있게 해줍니다. FlexSheet.CalcEngine 속성은 이제 일반에 공개되었으며, 또한 맞춤 표현을 가능하게 해줍니다.

**C1Zip** 에 새로운 ZipEncoding 클래스가 추가되었는데, ZipEncoding.Encoding 속성은 압축 엔트리 네임과 코멘트에 사용되는 인코딩을 규정하며, 이때 기본 인코딩은 UTF8입니다.

## UWP

### FlexGrid

Entity Framework로 ComponentOne MVC 컨트롤의 코드를 만들고 싶지 않다면 그레이프시티의 강화된 스캐폴딩 기능을 사용해 보세요. 마법사 설정 컨트롤을 자유롭게 제어할 수 있습니다! 또한, 리본 스타일과 포함해야 하는 단추를 사용자 정의할 수 있습니다.

새로운 컨트롤을 삽입했을 뿐만 아니라 설정 마법사로 기존의 컨트롤을 바로 업데이트할 수도 있습니다. 예를 들어 위에서 설명한 Razor 보기에서FlexGrid를 선언하면 커서를 정의에 놓고 컨텍스트 메뉴에서 “Update C1 Control”을 선택해 컨트롤의 속성을 설정하고 필요한 코드를 생성할 수 있습니다. ASP.NET MVC와 ASP.NET Core MVC 모두 이 기능을 지원합니다. 컨텍스트 메뉴 또는 Razor 보기의 “바로 가기”로 이 마법사를 호출할 수 있습니다.

이제 FlexGrid를 통해C1Icon을 사용하여GroupExpanded, GroupCollapsed, NewRow, DetailCollapsed, DetailExpanded 아이콘 설정이 가능합니다.

## Xamarin

### FlexGrid

### Animations

![Animations](https://www.grapecity.co.kr/images/metalsmith/developer/componentone-enterprise/whatsnew/2019V1/xamfgdrag.gif "Animations")

새로운 애니메이션이 그리드에 추가되었는데, 이 중 rip 애니메이션은 사용자가 컬럼을 길게 누르기 하면 사용이 가능합니다. 또한 추가된 그리드 중 플로잉 재배치 애니메이션은 사용자가 열(컬럼) 혹은 행을 드래그하여 위치를 변경할 때 작동합니다.

새로운 Export 기능을 통해 데이터를 텍스트, CSV, 포맷한 HTML로 쉽게 내보낼 수 있습니다.

### Gauges

### Radial Gauge

Radial Gauge의 방향을 바꿀 수 있게 해주는 속성이 추가되었습니다. 0도에서 360도로 시계방향으로 측정하는 대신에, 이제 반시계방향으로360도에서0도로 측정이 가능합니다.

새로운 Export 기능을 통해 데이터를 텍스트, CSV, 포맷한 HTML로 쉽게 내보낼 수 있습니다.

### Input

이제 모든 인풋 컨트롤이 오른쪽에서 왼쪽 방향을 지원 (RTL Support)하는데, 아랍어와 같은 특정 언어의 현지화를 할 때 중요한 요소입니다. 레이아웃 방향은 어떤 인풋 컨트롤이든 플로우 방향 세팅을 통해 변경이 가능합니다.

### C1Icon

C1PathIcon을 통한 크로스 플랫폼 벡터 그래픽 지원이 개선 및 추가되었습니다. 이 경로를 사용하여, 앱 상에서 쉽게 데이터 사이즈를 재조정하거나 컬러로 표시할 수 있습니다.

![C1Icon](https://www.grapecity.co.kr/images/metalsmith/developer/componentone-enterprise/whatsnew/2019V1/cipathicon.gif "C1Icon")
