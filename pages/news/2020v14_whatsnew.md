---
title: Spread.NET V14 새로운 기능
sidebar: home_sidebar
keywords: news, blog, updates, release notes, announcements
permalink: 2020v14_whatsnew.html
folder: news
summary: "GrapeCity Spread. NET v14 릴리스를 발표하게 되어 기쁩니다. 이 릴리스에는 .NET 5 및 .NET Core 3.1 Windows Forms에 대한 새로운 플랫폼 지원뿐 아니라 다수의 새 기능과 향상된 기능이 포함되어 있습니다. 또한 이 릴리스에서는 Silverlight 및 Windows 8.1 Runtime 컴포넌트에 대한 지원을 중단했습니다. GrapeCity는 버전 13에서 이러한 컴포넌트를 계속 지원하고 내년에 필요에 따라 새로운 빌드를 릴리스할 것입니다."
---
# Spread.NET v14의 새로운 기능

**GrapeCity Spread. NET v14** 릴리스를 발표하게 되어 기쁩니다. 이 릴리스에는 **.NET 5** 및 **.NET Core 3.1 Windows Forms**에 대한 새로운 플랫폼 지원뿐 아니라 다수의 새 기능과 향상된 기능이 포함되어 있습니다. 또한 이 릴리스에서는 **Silverlight** 및 **Windows 8.1 Runtime** 컴포넌트에 대한 지원을 중단했습니다. **GrapeCity**는 버전 13에서 이러한 컴포넌트를 계속 지원하고 내년에 필요에 따라 새로운 빌드를 릴리스할 것입니다.

<br/>

이 블로그에는 다음과 같은 섹션이 마련되어 있습니다.

1. .NET 5.0 및 .NET Core 3.1 Windows Forms 컨트롤
2. .NET 개체용 셀 데이터 형식
3. 하이퍼링크 개선 사항
4. LET 함수 및 수식 성능 최적화
5. 수식 표시
6. 점을 편집하여 사용자 정의 셰이프 만들기
7. 확장된 키보드 바로 가기
8. 여러 시트 선택




### .NET 5.0 및 .NET Core 3.1 Windows Forms 컨트롤

![Spread.NET v14의 새로운 기능](https://global-cdn.grapecity.com/blogs/spread/20201112-whats-new-in-spread-dot-net-v14/image1_edited.jpg)

그림 1 새로운 **GrapeCity.Spread.WinForms NuGet** 패키지


<br/>

**Spread. NET v14**에는 새로운 **NuGet 패키지**인 **.NET 5** 및 **.NET Core 3.1 WinForms**용 [**GrapeCity.Spread.WinForms**](https://www.grapecity.com/spreadnet/docs/v14/online-win/adding-nuget-package-spread-windows-forms.html)가 포함되어 있습니다. [**nuget.org**](https://www.nuget.org/)에 배포될 이 새 패키지를 사용해 사용자는 **.NET 5** 및 **.NET Core 3.1**에서 Spread 컨트롤로 **WinForms** 응용 프로그램을 만들고 **GrapeCity Spread. NET** 컨트롤로 기존 **WinForms** 프로젝트를 이식할 수 있습니다.

<br/>

새 플랫폼에서는 디자인 타임 지원이 제한되어 있으므로 일반 **.NET WinForms** 프로젝트에서는 전체 프레임워크(**.NET 4.5.2** 이후 버전) 컨트롤을 계속 사용하는 것이 좋습니다. 편집 및 디자인 타임에 이 프로젝트를 사용하고, 소스 및 리소스 파일을 연결하는 서로 분리된 프로젝트를 만들어 **.NET 5** 및 **.NET Core 3.1** 버전을 빌드합니다.

<br/>

새로운 **GrapeCity.Spread.WinForms** NuGet 패키지는 멀티 타기팅을 지원합니다. **net5.0-windows;netcoreapp3.1**을 사용해 멀티 타기팅 빌드를 만듭니다. **Visual Studio 2019**에서 **NuGet 패키지 관리자**를 사용해 이전 **.NET 4.5.2+** 프로젝트에서 **GrapeCity.Spread.WinForms** 패키지를 설치하여 컨트롤을 업그레이드합니다.

<br/>

**디자인 타임 지원에 관한 중요 참고 사항:** **.NET 5** 및 **.NET Core 3.1**에서는 사용자 정의 컨트롤에 대한 디자인 타임 지원이 제한적이라는 점에 유의하십시오. 

<br/>

**Spread Designer** 도구와 속성 눈금용 형식 변환기 및 형식 편집기와 같은 기타 디자인 타임 지원은 이 릴리스의 새 플랫폼에서는 제공되지 않습니다. **Spread Designer** 도구와 기타 디자인 타임 편집기를 사용하는 디자인 타임 지원을 받으려면 .**NET 4.5.2** 이상을 대상으로 한 프로젝트에서 전체 프레임워크 컨트롤을 사용해야 합니다. 병렬 프로젝트를 만들어 **.NET 5** 및 .**NET Core 3.1**용 코드를 빌드하고 소스 링크를 사용해 이러한 프로젝트 사이에 동일한 소스를 공유할 수 있습니다. 

<br/>

**또한 Spread. NET WinForms 이전 릴리스(v13 이전)를 사용해 적용된 디자인 타임 변경 사항을 저장하고, v14를 사용해 일부 클래스를 업데이트하여 컨트롤을 직렬화해야 합니다. 전에는 .NET Framework 이전 버전에서 직렬화할 수 있었던 몇 가지 클래스를 이제 .NET 5에서는 직렬화할 수 없습니다.** 이러한 프로젝트를 만드는 방법에 관한 전체 정보는 다른 블로그 게시물인 [.NET 5 및 .NET Core에 대한 새로운 지원](https://dev.grapecity.co.kr/bbs/board.php?bo_table=spread_net_bntips&wr_id=23)을 참조하시기 바랍니다.



### .NET 개체용 셀 데이터 형식


![Spread.NET v14의 새로운 기능](https://global-cdn.grapecity.com/blogs/spread/20201112-whats-new-in-spread-dot-net-v14/image2_edited.jpg)

*그림 2 셀 데이터 형식 예시*


<br/>

[**셀 데이터 형식**](https://www.grapecity.com/spreadnet/docs/v14/online-win/adding-data-types.html)은 **Spread. NET v14 WinForms**에서 새로 제공하는 중요한 기능입니다. 



이 기능을 통해 클래스를 정의하고 데이터 형식의 속성을 구현하여 사용자 정의 데이터 형식을 만든 후, 이 클래스를 사용해 개체를 만들어 셀에 설정할 수 있습니다. 이 개체는 **사용자 정의 이미지**를 사용해 셀에 표시되며 개체의 **기본 속성** 값을 표시합니다. 

<br/>

셀이 활성 상태인 경우 **데이터 삽입** 도구가 셀 옆에 표시됩니다(위의 **B12** 셀 참조). 

**데이터 삽입** 도구를 클릭하면 **팝업 목록**이 표시되어 인접 셀 또는 열에 삽입할 데이터 형식에 사용할 수 있는 필드를 나열합니다.

![Spread.NET v14의 새로운 기능](https://global-cdn.grapecity.com/blogs/spread/20201112-whats-new-in-spread-dot-net-v14/image3_edited.jpg)

그림 3 필드 목록이 표시된 **셀 데이터 형식 데이터 삽입** 도구


<br/>

위 예시에서는 세 가지 **Customer** 개체가 **B7:B9** 셀에 있습니다. 

사용 가능한 필드 목록에는 **Name**, **Email**, **Vehicle** 필드가 표시됩니다. 

이 예시에서 이러한 필드는 이미 인접 셀에 표시되어 있지만 팝업 목록에서 필드를 선택하여 빈 인접 셀 또는 열에 새 필드를 추가할 수 있습니다.

이 필드는 **"=B7.Email"**과 같은 수식을 사용해 계산할 때 사용 가능하며, 팝업 목록에서 필드를 클릭하면 적절한 수식이 자동으로 삽입됩니다. 

셀에서 글리프를 클릭하거나 활성 상태 셀과 함께 **Ctrl+Shift+F5**를 누르면 해당 개체의 **데이터 카드**가 표시됩니다.



![Spread.NET v14의 새로운 기능](https://global-cdn.grapecity.com/blogs/spread/20201112-whats-new-in-spread-dot-net-v14/image4_edited.jpg)

그림 4 **셀 데이터 형식** 셀 개체의 팝업 **데이터 카드**

<br/>

이러한 데이터 형식을 만드는 방법은 다음과 같습니다.

1. 셀 데이터 형식에 대한 클래스를 정의하고 해당 개체에 대해 표시하려는 속성을 지정합니다.
2. 적절한 속성으로 초기화된 클래스의 인스턴스를 만들고, [**RichValue < T >**](https://www.grapecity.com/spreadnet/docs/v14/online-win/GrapeCity.Spreadsheet~GrapeCity.CalcEngine.RichValue`1_members.html)를 사용해 클래스 인스턴스를 사용하는 [**IRichValue**](https://www.grapecity.com/spreadnet/docs/v14/online-win/GrapeCity.CalcEngine~GrapeCity.CalcEngine.IRichValue.html) 개체를 만듭니다.
3. 반사가 필요 없는 추가 컨트롤과 더 빠른 구현을 위해서는 셀 데이터 형식 클래스에서 직접 [**IRichValue**](https://www.grapecity.com/spreadnet/docs/v14/online-win/GrapeCity.CalcEngine~GrapeCity.CalcEngine.IRichValue.html)를 구현하고 인터페이스를 통해 필드를 지정하십시오.


<br/>

위 예시의 **Vehicle** 클래스는 이러한 방식으로 구현됩니다.



사용자 정의 셀 데이터 형식을 더 빠르게 만들 수 있도록 셀 데이터 형식 내부의 **DataTable** 또는 **DataView** 줄 바꿈에 대한 기본 지원을 구현했습니다. 이 예시에서는 [**BuiltInRichValue.FromDataTable**](https://www.grapecity.com/spreadnet/docs/v14/online-win/GrapeCity.Spreadsheet~GrapeCity.CalcEngine.BuiltInRichValue~FromDataTable.html)과 함께 [**외부 변수**](https://www.grapecity.com/spreadnet/docs/v14/online-win/spwin-external-variable.html)를 사용해 사용자 정의 셀 데이터 형식을 반환하는 방법을 보여줍니다.

![Spread.NET v14의 새로운 기능](https://global-cdn.grapecity.com/blogs/spread/20201112-whats-new-in-spread-dot-net-v14/image5_edited.png)

그림 5 **외부 변수**를 사용해 **DataTable**에 대한 **IRichValue**를 반환

<br/>

**셀 데이터 형식**은 동적 배열이 활성화될 때 인접 셀을 채우는 배열 값을 반환할 수 있습니다. 

셀 데이터 형식에는 예시와 같이 위 **Customer** 및 **Vehicle**과 함께 다른 셀 데이터 형식을 포함할 수 있습니다. 

셀 데이터 형식의 필드 값을 참조하는 계산을 수행할 수도 있습니다. 

위와 같이 필드 이름에 공백 문자가 포함되어 있는 경우 **"=$B6.\[Week 2]"**(시트 이름과 동일한 방식)와 같이 필드 이름을 대괄호로 묶어줍니다.


<br/>


### 하이퍼링크 개선 사항

![Spread.NET v14의 새로운 기능](https://global-cdn.grapecity.com/blogs/spread/20201112-whats-new-in-spread-dot-net-v14/image6.png)

그림 6 **하이퍼링크 기본 용도** 데모

<br/>

**Spread. NET v14**에는 [**하이퍼링크**](https://www.grapecity.com/spreadnet/docs/v14/online-win/adding-hyperlink-in-cell.html) 지원을 위해 다음과 같은 여러 가지 향상된 기능이 포함되어 있습니다.

- 셀 참조에 대한 링크
- 이름이 지정된 범위에 대한 링크
- 표에 대한 링크
- 이메일에 대한 링크
- 웹 사이트 및 파일에 대한 링크
- 셀, 셰이프, 이미지로부터의 링크
- 링크에 대한 사용자 정의 도구 설명 텍스트
- 셀 편집 시 링크 자동 생성

<br/>

셀 또는 셰이프에 구성되어 있는 기본 섹션에 대한 링크로 통합 문서에 대한 목차 또는 인덱스를 쉽게 생성하고 사용자에게 표시할 화면 팁 텍스트를 지정할 수 있습니다.
<br/>


 [**AutoCreateHyperlink**](https://www.grapecity.com/spreadnet/docs/v14/online-win/adding-hyperlink-in-cell.html#i-heading-create-hyperlinks-automatically) 기능을 활성화하고 셀 편집 중에 하이퍼링크를 만들 수 있습니다.

**"spread://Sheet1!A1"**과 같은 특수 구문을 사용해 내부 통합 문서 링크를 만들어 위치를 지정할 수 있습니다. 

이 구문에서는 **"spread://SalesSummary"**와 같이 이름이 지정된 범위와 **"spread://Table1"**과 같은 표 이름도 지원합니다. 링크 대상을 셀에 입력하여 셀 위치에 대한 하이퍼링크를 자동으로 만들 수 있습니다.

<br/>

다음과 같이 **Ctrl+K**를 사용해 새로운 기본 제공 **하이퍼링크 편집** 대화 상자를 호출하여 링크 대상, 표시할 텍스트, 화면 팁 텍스트를 수정할 수 있습니다.

![Spread.NET v14의 새로운 기능](https://global-cdn.grapecity.com/blogs/spread/20201112-whats-new-in-spread-dot-net-v14/image7.png)

그림 7 **하이퍼링크 편집** 대화 상자

<br/>

[**HYPERLINK**](https://www.grapecity.com/spreadnet/docs/v14/online-formula/functionHYPERLINK.html) 함수를 사용해 셀에 하이퍼링크를 만들고 표시할 텍스트를 지정할 수 있습니다. 이제 이 링크는 이메일 주소, 웹 사이트, 파일 링크뿐 아니라 셀 위치, 이름이 지정된 범위, 표 이름을 대상으로 지정할 수 있습니다.


<br/>


### LET 함수 및 수식 성능 최적화



새로운 **LET** 함수는 다음과 같이 강력합니다.

- **LET**을 사용하면 수식을 **더 쉽게 읽고 이해**할 수 있습니다.
- **LET**을 통해 수식을 **더 빠르고 효율적으로 계산**할 수 있습니다.

<br/>

[**LET 함수**](https://www.grapecity.com/spreadnet/docs/v14/online-formula/functionLet.html)를 통해 수식 내에서 로컬 이름을 정의한 다음, 이 이름을 사용해 일부 식을 계산할 수 있습니다.

<br/>

로컬 이름이 식에서 사용될 때마다 연결된 값이 식의 결과를 계산합니다. 이 작업을 통해 식에서 동일한 이름이 여러 번 참조될 때 필요한 계산의 총 횟수를 크게 줄일 수 있습니다. **LET 함수**가 사용되기 전에는 이러한 식에서 이 같은 결과를 여러 번 계산해야 했습니다. 수식을 변경하여 워크시트 또는 통합 문서 이름을 사용해 계산을 최적화하고 [**이름 관리자**](https://www.grapecity.com/spreadnet/docs/v14/online-win/SDNameManager.html)에서 이러한 이름을 사용해 셀 수식과 별도로 계산 결과를 저장할 수 있습니다.

<br/>

**이름 관리자**를 사용해 수식에서 사용되는 계산용 워크시트 및 통합 문서에 정의된 이름 목록을 만들면 금새 복잡해져서 다루기 힘들어지고 수식에서 범위를 지정하는 문제와 관련해 혼동을 일으킬 수 있습니다. (이 수식에서는 어떤 이름을 사용해 값, 워크시트 이름 또는 통합 문서 이름을 계산하고 있나요?) 범위 지정 문제는 새로운 **LET 함수**를 사용하는 새로운 범위 지정 규칙으로 해결됩니다. 이 규칙은 로컬 수식이 동일 수식 내에서 명시적으로 사용되는 이름을 정의할 수 있게 허용합니다. 이러한 이름은 식을 계산할 때 워크시트 및 통합 문서 이름을 재정의합니다.

<br/>

![Spread.NET v14의 새로운 기능](https://global-cdn.grapecity.com/blogs/spread/20201112-whats-new-in-spread-dot-net-v14/image8.png)

그림 8. 3배 더 빠른 속도로 계산하는 **LET** 함수

<br/>

또한 새로운 **LET 함수**는 한 번만 계산되고 계산 중에 재사용될 수 있는 중간 값의 중복 재계산을 제거하여 계산을 최적화합니다. 

<br/>

통합 문서는 계산 속도가 훨씬 더 빠릅니다. 위 예시에서 왼쪽의 스프레드시트는 **LET 함수**를 사용해 계산을 최적화합니다. 또한 **LET 함수**를 사용하지 않고 동일한 계산을 수행하는 오른쪽의 스프레드시트보다 **3배 더 빠른 속도로 결과를 계산**합니다. 새로운 LET 함수와 수식을 명료화하고 최적화하는 데 LET 함수가 어떤 도움이 되는지에 관한 상세 정보는 [새로운 Excel LET 함수로 계산 성능 향상](https://dev.grapecity.co.kr/bbs/board.php?bo_table=spread_net_bntips&wr_id=24) 블로그 게시물을 참조하십시오.





### 수식 표시 명령

새로운 [**수식 표시**](https://www.grapecity.com/spreadnet/docs/v14/online-win/displaying-formula-in-cells.html) 명령은 **Microsoft Excel**과 유사하게 작동합니다. 즉 **Spread. NET 14 WinForms**에서 **Ctrl+\`**를 눌러 **수식 표시** 모드를 토글하는 방식입니다.

<br/>

이 기본 제공 명령을 활성화하려면 디자인 타임 또는 코드에서 [**FpSpread.Features.ExcelCompatibleKeyboardShortcuts**](https://www.grapecity.com/spreadnet/docs/v14/online-win/FarPoint.Win.Spread~FarPoint.Win.Spread.IFeatures~ExcelCompatibleKeyboardShortcuts.html)**= true**로 설정하십시오. 다음은 새로운 [**Spread Designer**](https://www.grapecity.com/spreadnet/docs/v14/online-win/spwin-spd-iface.html)의 예시 워크시트로서, **수식 표시** 명령을 보여줍니다.

<br/>

![Spread.NET v14의 새로운 기능](https://global-cdn.grapecity.com/blogs/spread/20201112-whats-new-in-spread-dot-net-v14/image9.png)

그림 9. **수식 표시**예시 워크시트

<br/>

**수식 표시** 명령은 다음과 같이 **수식** 탭의 **Spread Designer**의 리본 표시줄에서 사용 가능합니다.

![Spread.NET v14의 새로운 기능](https://global-cdn.grapecity.com/blogs/spread/20201112-whats-new-in-spread-dot-net-v14/image10.png)

그림 10. 새로운 **수식 표시** 리본 표시줄 버튼

<br/>


**수식 표시** 명령은 활성화된 워크시트에 적용됩니다. 이 명령은 다음과 같이 모든 열을 현재 너비의 두 배로 확장하여 계산된 값 대신에 셀의 모든 셀 수식을 표시합니다.

![Spread.NET v14의 새로운 기능](https://global-cdn.grapecity.com/blogs/spread/20201112-whats-new-in-spread-dot-net-v14/image11.png)

그림 11. 예시 워크시트의 **수식 표시** 모드

<br/>

**Ctrl+\`**를 누르거나 **Spread Designer**에서 리본 표시줄 버튼을 사용해 다시 토글하여 모드를 끕니다.



### 점을 편집하여 사용자 정의 셰이프 만들기



Spread. NET v13에서는 새로운 [**확장 셰이프 엔진**](https://www.grapecity.com/spreadnet/docs/v14/online-win/working-with-shapes.html)과 함께 모든 **Microsoft Excel** 셰이프 가져오기 및 만들기에 대한 지원을 도입했습니다. 

이 기능에 관한 세부 정보는 [Spread.NET 13 WinForms 확장 셰이프 엔진으로 고급 셰이프 만들기](https://dev.grapecity.co.kr/bbs/board.php?bo_table=spread_net_bntips&wr_id=21) 블로그 게시물을 참조하십시오. 새로운 **점 편집** 기능을 사용하여 사용자 정의 셰이프를 만들려면 **확장 셰이프 엔진**을 활성화하십시오.

<br/>

새로운 [**점 편집**](https://www.grapecity.com/spreadnet/docs/v14/online-win/editing_points_of_shape.html) 명령을 통해 사용자는 셰이프의 점과 세그먼트를 사용자 정의할 수 있습니다. **점 편집** 명령은 다음과 같이 확장 셰이프를 마우스 오른쪽 버튼으로 클릭하여 셰이프 상황에 맞는 메뉴에서 사용할 수 있습니다.


![Spread.NET v14의 새로운 기능](https://global-cdn.grapecity.com/blogs/spread/20201112-whats-new-in-spread-dot-net-v14/image12.png)

그림 12. 확장 셰이프 상황에 맞는 메뉴의 **점 편집** 명령

<br/>

**점 편집** 명령은 다음과 같이 확장 셰이프가 선택되어 있을 때 **셰이프 편집** 메뉴에 있는 **셰이프 서식** 탭의 [**Spread Designer**](https://www.grapecity.com/spreadnet/docs/v14/online-win/spwin-spd-iface.html) 리본 표시줄에서도 사용할 수 있습니다.

![Spread.NET v14의 새로운 기능](https://global-cdn.grapecity.com/blogs/spread/20201112-whats-new-in-spread-dot-net-v14/image13.png)

그림 13. **Spread Designer**리본 표시줄의 **점 편집** 명령

<br/>

**점 편집** 명령을 호출하면 **셰이프 점**이 해당 셰이프의 현재 위치에 표시되고, 마우스를 셰이프 점 위로 가져가면 커서가 **SizeAll**로 변경됩니다.

![Spread.NET v14의 새로운 기능](https://global-cdn.grapecity.com/blogs/spread/20201112-whats-new-in-spread-dot-net-v14/image14.png)

그림 14. 셰이프에서 **점 편집** 사용

<br/>

확장 셰이프에서 **점 편집**을 사용할 때 **셰이프 점**을 클릭하여 새로운 위치로 끌어서 놓거나 **셰이프 점**을 선택하고 점을 클릭한 다음, 화살표 키를 사용해 점을 옮겨 편집할 수 있습니다. **셰이프 점**을 선택하면 인접 세그먼트의 연결된 **컨트롤 점**이 흰색 상자로 표시됩니다.

![Spread.NET v14의 새로운 기능](https://global-cdn.grapecity.com/blogs/spread/20201112-whats-new-in-spread-dot-net-v14/image15.png)

그림 15. 점을 선택하여 스플라인 곡선 점 표시

<br/>

**컨트롤 점**을 이용해 선택된 **셰이프 점**과 인접 **셰이프 점** 사이의 곡선을 수정할 수 있습니다. 위 이미지에서 선택된 오른쪽 상단의 **셰이프 점**은 **모서리 점**이므로 **컨트롤 점**이 **셰이프 점**과 함께 직각을 형성합니다. 이 **컨트롤 점**을 독립적으로 이동하여 인접 세그먼트의 곡선을 수정할 수 있습니다. 마우스를 사용해 끌어서 놓거나 클릭하여 점을 선택한 후 화살표 키를 사용하십시오.

<br/>

점을 마우스 오른쪽 버튼으로 클릭하면 다음과 같이 **셰이프 점** 상황에 맞는 메뉴가 열립니다. 이 메뉴를 사용해 셰이프 점 **추가** 및 **삭제**, 경로 **열기** 및 **닫기**, 선택한 점을 토글하여 **곡선 점**, **직선 점**, **모서리 점** 간 이동이 가능합니다.

<br/>

![Spread.NET v14의 새로운 기능](https://global-cdn.grapecity.com/blogs/spread/20201112-whats-new-in-spread-dot-net-v14/image16.png)

*그림 16. 셰이프 점 상황에 맞는 메뉴*

<br/>

**셰이프 점** 유형을 변경하면 스플라인 곡선 점이 다시 설정됩니다. 새 점을 추가하여 더 복잡한 셰이프를 만들 수 있습니다. 

새로운 **셰이프 점**을 추가할 셰이프 세그먼트에서 **Ctrl+클릭**을 사용해 새로운 **셰이프 점**을 추가합니다. **셰이프 점**에서 **Ctrl+클릭**을 사용해 **셰이프 점**을 삭제합니다.

<br/>

다음과 같이 **컨트롤 점** 중 하나를 이동하면서 **셰이프 점** 유형을 변경합니다.

- **Shift** 키를 눌러 **셰이프 점**을 **곡선 점**으로 변경합니다.
- **Ctrl** 키를 눌러 **셰이프 점**을 **직선 점**으로 변경합니다.
- **Alt** 키를 눌러 **셰이프 점**을 **모서리 점**으로 변경합니다.

<br/>

이 예시의 **눈물 방울** 셰이프에는 다섯 개의 점이 있습니다.

- 왼쪽 및 하단의 **곡선 점** 두 개
- 오른쪽 및 상단의 **직선 점** 두 개
- 오른쪽 상단의 **모서리 점** 한 개


<br/>


### 확장된 키보드 바로 가기



**Spread. NET v14 WinForms**에서는 최종 사용자를 위해 스프레드시트에서 **Microsoft Excel** 호환 가능 키보드 바로 가기를 활성화할 수 있는 간단한 새 속성을 도입했습니다.

<br/>

디자인 타임 또는 초기화 코드에서 [**FpSpread.Features.ExcelCompatibleKeyboardShortcuts**](https://www.grapecity.com/spreadnet/docs/v14/online-win/FarPoint.Win.Spread~FarPoint.Win.Spread.IFeatures~ExcelCompatibleKeyboardShortcuts.html)**= true**로 설정하면 다음과 같은 키 매핑이 로드되어 이 기본 제공 SpreadAction 개체를 기본 키보드 바로 가기와 연결합니다.

<br/>

| 키 코드           |  SpreadAction          | 설명                           |
| ----------------- | --------------------- | ------------------------------ |
| Ctrl + '          |  DisplayFormulas       | 수식 표시 모드 토글            |
| Ctrl + 1          |  ShowFormatCellsDialog | 서식 셀 표시 대화 상자         |
| Ctrl + Shift + F5 |  ShowCard              | 카드 표시(.NET 개체용)         |
| Ctrl + K          |  ShowHyperlinkDialog   | 하이퍼링크 편집 대화 상자 표시 |
| Ctrl + Enter      |  EditMultipleCells     | 여러 셀에 데이터 입력          |

<br/>

**FpSpread.Features.ExcelCompatibleKeyboardShortcuts = false**로 설정하면 이러한 키 매핑이 제거되고 기본 동작이 복원됩니다. 

**InputMap** API를 사용해 **DisplayFormulas**, **ShowFormat CellsDialog**, **ShowCard**, **ShowHyperlinkDialog**, **EditMultipleCells**에 대한 새로운 기본 제공 **SpreadAction** 개체가 포함된 사용자 정의 바로 가기를 만들 수 있습니다.




### 여러 시트 선택



**Spread. NET v14 WinForms**에는 **Microsoft Excel**에서와 같이 워크시트 탭에서 **Ctrl + 클릭**을 사용하는 [**여러 워크시트 선택**](https://www.grapecity.com/spreadnet/docs/v14/online-win/selecting_multiple_sheets.html)에 대한 새로운 기본 제공 지원이 포함되어 있습니다.

<br/>

다음과 같이 여러 워크시트를 선택하면 선택한 각 워크시트는 실제 활성화된 워크시트 이면에서 활성 상태로 표시됩니다.

![Spread.NET v14의 새로운 기능](https://global-cdn.grapecity.com/blogs/spread/20201112-whats-new-in-spread-dot-net-v14/image17.png)

그림 17. 선택한 여러 개의 워크시트

<br/>

여러 워크시트를 선택한 경우 사용자는 선택한 워크시트를 끌어서 놓는 방식으로 통합 문서 내에서 다시 정렬할 수 있습니다. 

다음 예시에서 **Sheet1**과 **Sheet3**은 **Sheet4** 뒤, 즉 통합 문서의 맨 끝으로 이동합니다.

<br/>

![Spread.NET v14의 새로운 기능](https://global-cdn.grapecity.com/blogs/spread/20201112-whats-new-in-spread-dot-net-v14/image18_edited.png)

그림 18. 끌어서 놓기를 이용해 선택한 워크시트 이동
<br/>


선택한 워크시트를 다음과 같이 **Ctrl** 키를 누른 상태에서 끌면 워크시트가 이동하는 대신 복사됩니다.

<br/>

![Spread.NET v14의 새로운 기능](https://global-cdn.grapecity.com/blogs/spread/20201112-whats-new-in-spread-dot-net-v14/image19_edited.png)

그림 19. 선택한 워크시트를 **Ctrl** 키를 누른 상태에서 끌어서 놓는 방식으로 복사