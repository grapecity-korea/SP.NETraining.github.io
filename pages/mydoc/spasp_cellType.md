---
title: Spread.NET for ASP.NET 셀 유형
tags: [spread.net, 스프레드 닷넷, 셀 유형, Cell type, combobox, 콤보박스, 직렬 데이터, 이미지 버튼, 사용자 지정 컨트롤]
keywords: spread.net ASP.NET 셀 유형, 스프레드 닷넷, spread.net ASP.NET cell type
last_updated: Aug 08, 2019
summary: "Spread.NET for ASP.NET 셀 유형"
sidebar: mydoc_sidebar
permalink: spasp_cellType.html
folder: mydoc
---

## Spread 셀 유형을 이용한 ComboBoxCellType

[Spread 셀 유형을 이용한 ComboBoxCellType - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/ComboBoxCellType.zip)
<br /><br />
본 장에서는 Spread for ASP.NET의 ComboBoxCellType 셀 유형 사용방법에 대해 알아봅니다.

속성: AutoPostBack: 백그라운드로의 콜백(callback) get/set(가져오기/설정하기)

> CssClass &rarr; Css 스타일 get/set  
> DataSource &rarr; 데이터 소스 get/set  
> DataMember &rarr; 데이터 멤버 get/set  
> DataSourceID &rarr; 데이터 소스 ID get/set  
> DataTextFiled &rarr; Text 필드 get/set  
> DataValueField &rarr; Value 필드 get/set  
> Items &rarr; Text 필드 get/set  
> Values &rarr; Value 필드 get/set  
> OnClientChanged &rarr; 클라이언트 get/set 방법

 <br />
 **예시:**

**1. Spread 초기화**

    ```csharp
    /// <summary>
    /// Spread 초기화
    /// </summary>
    		private void InitSpread()
       {

    	 // Spread 스타일 설정
    		FpSpread1.ID = "FpSpread1";
                FpSpread1.Style["Position"] = "Absolute";
                FpSpread1.Height = 400;
                FpSpread1.Width = 800;
                FpSpread1.Style["Top"] = "25px";
                FpSpread1.Style["Left"] = "100px";

    	// ComboboxCellType 데이터 소스 가져오기
    	DataSet ds = GetDataSet();

    	// ComboBoxCellType 설정
    	FarPoint.Web.Spread.ComboBoxCellType cb = new FarPoint.Web.Spread.ComboBoxCellType();
                cb.AllowWrap = true;
                cb.DataSource = ds;
                cb.ShowButton = true;
                cb.DataMember = "Heros";
                cb.DataTextField = "Name";
                cb.DataValueField = "ID";
                cb.UseValue = true;
                cb.AutoPostBack = true;
                cb.OnClientChanged = "alert('옵션 변경')";
                FpSpread1.ActiveSheetView.Cells[0, 0].CellType = cb;
            }

    ```

**2. 데이터 소스 설정**

    ```csharp
    /// 데이터 소스 설정

    /// <summary>
    /// 데이터 소스 설정
    /// </summary>
    /// <returns>ComboBoxCellType 사용 데이터 소스</returns>

            private DataSet GetDataSet()
            {
                DataSet ds = new System.Data.DataSet();
                DataTable name;

                name = ds.Tables.Add("Heros");
                name.Columns.AddRange(new DataColumn[] {new DataColumn("Name", typeof(string)), new DataColumn("ID", typeof(Int32))});

    	name.Rows.Add(new object[] { "스파이더맨", 0 });
    	name.Rows.Add(new object[] { "배트맨",1 });

    	return ds;
            }

    ```

**3. ComboBoxCellType 포그라운드(foreground)에서 백그라운드 Spread 이벤트 ButtonCommand 트리거 변경을 선택하여 현재 선택한 항목의 Text Value값을 가져옵니다.**

    ```csharp
        /// <summary>
        /// ComboBoxCellType 현재 선택한 항목의 Text Value값 가져오기
        /// </summary>
            /// <param name="sender"></param>
            /// <param name="e"></param>
            protected void FpSpread1_ButtonCommand(object sender, FarPoint.Web.Spread.SpreadCommandEventArgs e)
                {
                    // 현재 셀의 행 및 열 인덱스 가져오기
                    Point _test = (Point)e.CommandArgument;
                    int _row = _test.X;
                    int _col = _test.Y;
                    string _value = this.FpSpread1.ActiveSheetView.Cells[_row, _col].Value.ToString() ;
                    string _text = this.FpSpread1.ActiveSheetView.Cells[_row, _col].Text;
                }
    ```

![](https://www.grapecity.co.kr/images/training/spread/tc7-1-1.png)

<br />
[Spread 셀 유형을 이용한 ComboBoxCellType - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/ComboBoxCellType.zip)

---

## ComboBoxCellType을 통한 직렬데이터 입력 구현

[ComboBoxCellType을 통한 직렬데이터 입력 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/CascadeComboBox.zip)
<br /><br />
데이터 입력 시 종종 직렬데이터 입력 문제에 부딪힐 때가 있습니다. 예를 들면 상품 카테고리를 선택한 후 해당 카테고리에 해당하는 상품 전체를 표시할 때 발생하는 문제입니다. 본 장에서는 ComboBoxCellType를 결합하여 직렬데이터 입력을 구현하는 기능에 대해 알아봅니다.

**Spread 표를 초기화하고 카테고리 열의 셀 유형을 설정합니다. 해당 코드는 아래와 같습니다.**

```csharp
    protected void Page_Load(object sender, EventArgs e)
    {
            if (!IsPostBack)
            {
                FpSpread1.ClientAutoCalculation = true;
                FpSpread1.ActiveSheetView.AllowPage = false;
                FpSpread1.ActiveSheetView.RowCount = 10;
                FpSpread1.ActiveSheetView.ColumnCount = 6;
                FpSpread1.ActiveSheetView.Columns[0].Label = "카테고리";
                FpSpread1.ActiveSheetView.Columns[0].Width = 150;
                FpSpread1.ActiveSheetView.Columns[1].Label = "명칭";
                FpSpread1.ActiveSheetView.Columns[1].Width = 300;
                FpSpread1.ActiveSheetView.Columns[2].Label = "단가";
                FpSpread1.ActiveSheetView.Columns[2].Width = 100;
                FpSpread1.ActiveSheetView.Columns[3].Label = "수량";
                FpSpread1.ActiveSheetView.Columns[3].Width = 100;
                FpSpread1.ActiveSheetView.Columns[4].Label = "할인";
                FpSpread1.ActiveSheetView.Columns[4].Width = 100;
                FpSpread1.ActiveSheetView.Columns[5].Locked = true;
                FpSpread1.ActiveSheetView.Columns[5].Label = "소계";
                FpSpread1.ActiveSheetView.Columns[5].Width = 200;
                FpSpread1.ActiveSheetView.Columns[5].Formula = "C1 * D1 * E1";
                FpSpread1.ActiveSheetView.Columns[5].CellType = new CurrencyCellType();

    // 제품 카테고리 열의 CellType 지정
        DataSet ds = GetDataSource();
                FarPoint.Web.Spread.ComboBoxCellType ctCategory = new FarPoint.Web.Spread.ComboBoxCellType();
                ctCategory.DataSource = ds;
                ctCategory.DataMember = "Category";
                ctCategory.DataTextField = "Name";
                ctCategory.DataValueField = "ID";
                ctCategory.UseValue = true;
                ctCategory.OnClientChanged = "return CategoryChanged();";

                FpSpread1.ActiveSheetView.Columns[0].CellType = ctCategory;
            }
    }
```

**클라이언트 단, CategoryChanged 함수의 구현 코드:**

```javascript
    <script type ="text/javascript" language="javascript">
            function CategoryChanged() {
                var row = FpSpread1.ActiveRow;
                var col = FpSpread1.ActiveCol;
                FpSpread1.EndEdit();
                FpSpread1.UpdatePostbackData();
                FpSpread1.CallBack("CategoryChanged," + row.toString() + "," + col.toString());
            }
    </script>
```

**Spread ButtonCommand 이벤트의 백그라운드 처리 코드는 해당 이벤트에서 선택한 유형을 가져온 후 해당 열의 전체 상품을 표시합니다.**

```csharp
    /// <summary>
    /// Spread ButtonCommand 이벤트 처리 함수, e.CommandName 값에 따라 이에 상응하는 처리 로직 결정
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>

    protected void FpSpread1_ButtonCommand(object sender, FarPoint.Web.Spread.SpreadCommandEventArgs e)
        {
            switch (e.CommandName)
            {
                case "CategoryChanged":

                    // 선택한 제품 카테고리를 가져온 후 제품 명칭 열의 조회 조건으로 설정
                    Point cell = (Point)e.CommandArgument;
                    int categoryid = Convert.ToInt32(this.FpSpread1.ActiveSheetView.Cells[cell.X, cell.Y].Value.ToString());

                    // 제품 열에 상응하는 셀 유형CellType 지정
                    DataSet ds = GetDataSource();
                    DataView product = ds.Tables["Products"].DefaultView;
                    product.RowFilter = string.Format("CategoryID = {0}", categoryid);
                    ComboBoxCellType ctProduct = new FarPoint.Web.Spread.ComboBoxCellType();
                    ctProduct.DataSource = product;
                    ctProduct.DataTextField = "Name";
                    ctProduct.DataValueField = "ID";
                    ctProduct.UseValue = true;
                    FpSpread1.ActiveSheetView.Cells[cell.X, cell.Y + 1].CellType = ctProduct;

                    break;
                    default:
                    break;
            }
        }
```

<br />
**스크린샷:**

![](https://www.grapecity.co.kr/images/training/spread/tc7-2-1.gif)

[ComboBoxCellType을 통한 직렬데이터 입력 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/CascadeComboBox.zip)

---

## 사용자 지정 이미지 버튼 링크

[사용자 지정 이미지 버튼 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/7862_Link.zip)
<br /><br />
응용 시스템 개발 중에는 테이블의 첫 열 혹은 마지막 열에 삭제, 수정, 데이터 상세보기 등의 기능을 가진 동작 버튼을 넣어야 할 경우가 있습니다. Spread for ASP.NET는 자체적으로 하이퍼링크 셀 유형HyperLinkCellTyp을 지원하지만 위와 같은 수요가 발생하는 경우에는 HyperLinkCellType 셀 유형의 행동(Behavior)을 확장할 수 있습니다.

우선 'Action'으로 명명한 셀 유형을 정의하고 모든 동작을 표시하도록 합니다. 해당 코드는 아래와 같습니다.

```csharp
///
/// 동작 유형
///
    [Serializable]
    public class Action
    {
        public Action(string name, string url, string image)
        {
            this.Name = name;
            this.NavigateUrl = url;
            this.ImageUrl = image;
        }

        ///
        /// 동작 명칭
        ///
        public string Name
        { get; set; }

        ///
        /// 링크 주소
        ///
        public string NavigateUrl
        { get; set; }

        ///
        /// 그림 주소
        ///
        public string ImageUrl
        { get; set; }
    }
```

사용자 지정 셀 유형 내에서 사용해야 하므로 Action에 Serializable 속성을 부여합니다.

이후 사용자 정의 하이퍼링크 셀 유형 CActionCellType을 구현합니다. 주로 PaintCell 메소드 오버라이딩(재정의)이 이루어지며 필요한 동작 유형에 따라 이에 상응하는 결과를 리턴합니다. 해당 코드는 아래와 같습니다.

```csharp
    [Serializable]
        public class CActionCellType : FarPoint.Web.Spread.HyperLinkCellType
        {
            ///
            /// 필요한 동작 생성
            ///
            public List Actions = new List();

    // 셀 그리기 과정 오버라이딩
    public override Control PaintCell(string id, TableCell parent, FarPoint.Web.Spread.Appearance style, FarPoint.Web.Spread.Inset margin, object value, bool upperLevel)
            {
                if (value != null)
                {
                    Table table = new Table();
                    table.GridLines = GridLines.None;
                    TableRow row = new TableRow();

                    // 지정된 동작에 따라 셀 내용 그리기 진행 후 셀의 Value를 페이지 액세스 파라미터와 연결
                    foreach (Action item in Actions)
                    {
                        TableCell cell = new TableCell();
                        cell.BorderStyle = BorderStyle.None;

                        HyperLink link = new HyperLink();

                        link.ToolTip = item.Name;
                        link.NavigateUrl = string.Format(item.NavigateUrl, value);
                        link.ImageUrl = item.ImageUrl;

                        cell.Controls.Add(link);
                        row.Cells.Add(cell);
                    }

                    table.Rows.Add(row);
                    return table;
                }
                else
                {
                    return base.PaintCell(id, parent, style, margin, value, upperLevel);
                }
            }
        }
```

마지막으로 사용자 지정 셀 유형을 사용합니다. 해당 코드는 아래와 같습니다.

```csharp
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            // Spread 컨트롤 기본 속성 설정
            FpSpread1.ActiveSheetView.DataAutoCellTypes = false;
            FpSpread1.Columns[0].Width = 130;
            FpSpread1.Columns[1].Width = 300;
            FpSpread1.Columns[2].Width = 100;
            FpSpread1.Columns[3].Width = 100;


            // 삭제, 편집, 보기 기능을 갖춘 셀 생성
            CActionCellType action = new CActionCellType();
            action.Actions.Add(new Action("삭제", "/Page1.aspx?id={0}", "/Images/Delete.png"));
            action.Actions.Add(new Action("편집", "/Page2.aspx?id={0}", "/Images/Edit.png"));
            action.Actions.Add(new Action("상세", "/Page3.aspx?id={0}", "/Images/Detail.png"));

            FpSpread1.ActiveSheetView.Columns[0].CellType = action;


            // 데이터 소스 바인딩
            System.Data.DataTable dt = new System.Data.DataTable();
            dt.Columns.Add("ID");
            dt.Columns.Add("명칭");
            dt.Columns.Add("카테고리");
            dt.Columns.Add("단가");

            dt.Rows.Add(100001, "Spread .NET 그리드 컨트롤 V6.0", " 그리드 컨트롤", "10000");
            dt.Rows.Add(100001, "ActionReports 리포트 컨트롤 V7.0", "리포트 컨트롤", "10000");
            dt.Rows.Add(100001, "ComponentOne 컨트롤팩 2012V3", " 컨트롤팩", "10000");

            FpSpread1.DataSource = dt;
        }
    }
```

**스크린샷:**

![](https://www.grapecity.co.kr/images/training/spread/tc7-3-1.png)

<br />
[사용자 지정 이미지 버튼 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/7862_Link.zip)

---

## Cell에 사용자 지정 컨트롤 추가하기

[사용자 지정 컨트롤 추가 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/usercontrol.zip)

<br /><br />
본 장에서는 Cell에 사용자 정의 컨트롤(컴포넌트)을 추가하는 방법에 대해 알아봅니다.

<br />
**1. 구현 방법:**

A. BaseCellType 을 상속받은 후 사용자 지정 셀 유형을 생성합니다.

B. PaintCell 및 GetEditorControl 메소드를 오버로딩하여 사용자 정의 컨트롤을 추가합니다.

<br />
**2. 세부 단계:**

A. 사용자 정의 컨트롤(UserControl)을 생성합니다. 여기에서는 FileUpload와 Calendar 표준 컨트롤을 추가했습니다.

<br />
   **렌더링:**

![](https://www.grapecity.co.kr/images/training/spread/tc7-4-1.png)

B. 사용자 지정 셀 유형을 생성합니다. 해당 코드는 아래와 같습니다.

```csharp
    [Serializable]
    public class TestWebControlInCell : FarPoint.Web.Spread.BaseCellType
    {
        public override Control PaintCell(string id, TableCell parent, FarPoint.Web.Spread.Appearance style, FarPoint.Web.Spread.Inset margin, object value, bool upperLevel)
        {
            Control twc;
            twc = parent.Page.LoadControl("WebUserControl1.ascx");
            twc.ID = "NewID";
            return twc;
        }
        public override Control GetEditorControl(string id, TableCell parent, FarPoint.Web.Spread.Appearance style, FarPoint.Web.Spread.Inset margin, object value, bool upperLevel)
        {
            return null;
        }
    }
```

C. 셀 유형을 Cell에 적용합니다. 해당 코드는 아래와 같습니다.

```csharp
    protected void Page_Load(object sender, EventArgs e)

            {

                TestWebControlInCell usercontrol = new TestWebControlInCell();

                this.FpSpread1.ActiveSheetView.Cells[0, 0].CellType = usercontrol;

                this.FpSpread1.ActiveSheetView.Columns[0].Width = 300;

                this.FpSpread1.ActiveSheetView.Rows[0].Height = 300;

            }
```

<br />

**스크린샷:**

![](https://www.grapecity.co.kr/images/training/spread/tc7-4-2.png)

[사용자 지정 컨트롤 추가 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/usercontrol.zip)
