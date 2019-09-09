---
title: Spread.NET Excel 입출력
tags: [ExcelIO, Excel, 입출력, 이미지, 인쇄 설정, 테두리, 그림]
keywords: spread.net excel 입출력, 스프레드 닷넷, spread.net excel IO
last_updated: Aug 08, 2019
summary: "Spread.NET Excel 입출력"
sidebar: mydoc_sidebar
permalink: spwin_excelIO.html
folder: mydoc
---

## Excel에서 이미지 복사하기

[Excel에서 이미지 복사하기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Spread_Win_CopyImageFromExcel.zip)
<br /><br />

이번에는 바로 가기 키를 이용해 이미지를 Excel에서 Spread로 복사하는 법을 설명드렉씃빈다. Spread 컨트롤이 이미지를 포함한 Excel 파일을 열 때 이미지를 Shape로 Spread 폼에 추가합니다.

먼저 Spread PreviewKeyDown 이벤트를 추가해 Ctrl + V 붙여넣기 이벤트를 추가합니다.

```csharp
    public Form1()
    {
        InitializeComponent();
        this.fpSpread1.PreviewKeyDown +=
        new PreviewKeyDownEventHandler(fpSpread1_PreviewKeyDown);
    }
```

다음으로 이벤트에서 클립보드 내 데이터를 이미지로 전환합니다.

```csharp
    Bitmap bitmap = Clipboard.GetData(DataFormats.Bitmap) as Bitmap;
```

마지막으로 이미지를 Shape컨트롤을 사용해 배경 이미지로 전환합니다.

```csharp
FarPoint.Win.Spread.DrawingSpace.RectangleShape rShape = new FarPoint.Win.Spread.DrawingSpace.RectangleShape();
rShape.Name = "myRect1";
rShape.Top = 20;
rShape.Left = 60;
rShape.BackColor = Color.Blue;
rShape.Width = 700;
rShape.Height = 500;
rShape.BackgroundImage = new FarPoint.Win.Picture(bitmap);

this.fpSpread1.ActiveSheet.AddShape(rShape);
```

**결과:**

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms7-1-1.png)

[Excel에서 이미지 복사하기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Spread_Win_CopyImageFromExcel.zip)

---

## Spread에서 구현하는 Excel의 삭제, 실행 취소, 다시 실행 기능

[삭제, 실행 취소, 다시 실행 기능 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Spread_WF_Delete_Content.zip)

Spread Winform에서 delete 키로 데이터 삭제를 구현하려면 코드를 사용해야 합니다.

선택 가능한 3가지 방법:

- KeyDown 이벤트 사용
- Action 사용자 지정
- UndoAction 사용자 지정

<br />
**최종 결과 스크린샷:**

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms7-2-1.png)  
만약 A4:B5의 8개 셀을 선택했다고 가정합니다. excel에서는 delete 키를 누르면 8개 셀 내 데이터를 전부 삭제합니다.

<br />
**KeyDown 이벤트 응답**

현재 키가 delete 키인지 확인한 후 selection된 영역을 ActiveSheet.ClearRange 사용하여 컨텐츠를 삭제 합니다.

```csharp
    this.fpSpread1.KeyDown += new KeyEventHandler(spread_KeyDown);

    private void spread_KeyDown(object source, KeyEventArgs e)
    {
        if (e.KeyCode == Keys.Delete)
        {
            FpSpread spread = (FpSpread)source;
            int selectionCount = spread.ActiveSheet.SelectionCount;
            if (selectionCount > 0)
            {
                for (int i = 0; i < selectionCount; i++)
                {
                    CellRange range = spread.ActiveSheet.GetSelection(i);
                    spread.ActiveSheet.ClearRange(range.Row, range.Column, range.RowCount, range.ColumnCount, true);
                }
            }
            else
            {
                int activeRow = spread.ActiveSheet.ActiveRowIndex;
                int activeColumn = spread.ActiveSheet.ActiveColumnIndex;
                spread.ActiveSheet.ClearRange(activeRow, activeColumn, 1, 1, true);
            }
            e.Handled = true;
        }
    }
```

**Action 사용자 지정**

스프레드 자체가 많은 바로 가기 키(Short Key)가 존재하지만 때로는  
FarPoint.Win.Spread.Action에서 사용자 지정 바로 가기 키를 구현해야 할 때가 있습니다.

여기서는 간단하게 Delete 키를 이용하여 새로운 사용자 정의 바로 가기 키를 구현하는 방법을 설명합니다. 영역을 지정하여 Delete키를 눌렀을 때 셀이 잠긴 상태에서 그대로 두고 잠기지 않은 셀은 초기화 시킵니다.

```csharp
    public class ClearValueAction : FarPoint.Win.Spread.Action
    {
        public override void PerformAction(object source)
        {
            if (source is SpreadView)
            {
                SpreadView spread = (SpreadView)source;
                SheetView sheet = spread.Sheets[spread.ActiveSheetIndex];
                CellRange cr = sheet.GetSelection(0);
                StyleInfo si = new StyleInfo();


                for (int r = 0; r < cr.RowCount; r++)
                {
                    for (int c = 0; c < cr.ColumnCount; c++)
                    {
                        sheet.Models.Style.GetCompositeInfo(cr.Row + r, cr.Column + c, -1, si);
                        if (!si.Locked)
                        {
                            sheet.Cells[cr.Row + r, cr.Column + c].ResetValue();
                        }
                    }
                }
            }
        }
    }
```

```csharp
    private void Form1_Load(object sender, EventArgs e)
    {
        InputMap im = fpSpread1.GetInputMap(InputMapMode.WhenFocused);
        ActionMap am = fpSpread1.GetActionMap();
        im.Put(new Keystroke(Keys.Delete, Keys.None), "ClearValue");
        am.Put("ClearValue", new ClearValueAction());
    }
```

**Undo 기능 사용자 지정**

삭제하는 기능이 있으면 Undo도 필요하게 됩니다. 만약에 실수로 삭제했다면 어떻게 해야 할까요? Spread의 UI는 Excel과 매우 비슷합니다. Undo, Redo 작업을 구현하는 법도 Spread에서는 매우 간단합니다.

UndoAction 유형을 상속해 매번 실행 취소, 다시 실행을 아래와 같이 구현할 수 있습니다.

```csharp
    this.fpSpread1.GetInputMap(InputMapMode.WhenFocused).Put(new Keystroke(Keys.Delete, Keys.None), FarPoint.Win.Spread.SpreadActions.ClearSelectedCells);
    this.fpSpread1.GetActionMap().Put(SpreadActions.ClearSelectedCells, new ClearSelectedCellsUndoAction());


    public class ClearSelectedCellsUndoAction : FarPoint.Win.Spread.UndoRedo.UndoAction
    {
        SpreadView spreadView = null;
        // SpreadView where action happens
        FarPoint.Win.Spread.SheetView activeSheet = null;
        // active SheetView in root workbook
            FarPoint.Win.Spread.SheetView sheet = null;
        // SheetView where action happens
            FarPoint.Win.Spread.Model.CellRange cellRange = null;
        // CellRange being cleared
            DataObject clipData = null;
        // DataObject containing data from CellRange

        public override bool PerformUndoAction(object sender)
        {
                SpreadView rootWorkbook = sender as SpreadView;
            // sender is always root SpreadView when called from UI

                if (rootWorkbook != null) // but sender might be null if other code calls this, so check!
                {
                    activeSheet = rootWorkbook.Sheets[rootWorkbook.ActiveSheetIndex];
                // save active SheetView (to restore on undo)
                    spreadView = rootWorkbook.GetActiveWorkbook();
                // save active SpreadView (to restore on undo)

                sheet = spreadView.GetSheetView();
                // get SheetView to operate on
                        cellRange = sheet.GetSelection(sheet.SelectionCount - 1);
                // get CellRange to operate on
                        if (cellRange == null)
                // GetSelection return null if there is no selection, just active cell
                            cellRange = new CellRange(sheet.ActiveRowIndex, sheet.ActiveColumnIndex, 1, 1);
                // use active cell in this case
                }

                if (SaveUndoState()) // save data from range
                {
                // then clear it
                        sheet.ClearRange(cellRange.Row, cellRange.Column, cellRange.RowCount, cellRange.ColumnCount, false);
                        return true;
                }
                    return false;
                // something failed, return false to discard action from undo stack
        }

        protected override bool SaveUndoState()
        {
           if (cellRange != null)
       // need CellRange set in PerformUndoAction (implied sheet is valid)
               clipData = sheet.GetClipDataObject(false, cellRange, ClipboardCopyOptions.All);
       // save data object for cell range
           return clipData != null;
        }

        public override bool Undo(object sender)
        {
                SpreadView rootWorkbook = sender as SpreadView;
                if (rootWorkbook != null)
                {
                    rootWorkbook.ActiveSheetIndex = rootWorkbook.Sheets.IndexOf(activeSheet);
                    // restore active sheet (in case user changed it)
                    rootWorkbook.SetActiveWorkbook(spreadView);
                    // restore active workbook in sheet (in case user changed it)
                    sheet.ClearSelection(); // reset selection (clear, then add)
                    sheet.AddSelection(cellRange.Row, cellRange.Column, cellRange.RowCount, cellRange.ColumnCount);
                    sheet.ClipboardPaste(ClipboardPasteOptions.All, clipData);

                    // paste data pack from data object
                    return true;
                }
                return false;
        }
    }
```

[삭제, 실행 취소, 다시 실행 기능 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Spread_WF_Delete_Content.zip)

---

## Excel의 인쇄 설정 정보 획득하기

[Excel의 인쇄 설정 정보 획득하기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Spread_Win_GetExcelPrintInfo.zip)
<br /><br />

Spread 컨트롤은 Excel과의 탁월한 호환성으로 유명합니다. 일상 작업에서는 Excel 파일에 대한 인쇄 기능도 자주 사용되는 편입니다. 물론 Spread는 Excel의 인쇄 설정과의 호환성도 매우 뛰어납니다. 이러한 지원 덕분에 개발자들은 Excel을 가져올 때 고민할 필요가 없고, 최종 사용자도 앱의 제한으로 인한 사용 못하는 엑셀에 대하여 걱정할 필요가 없습니다. 본문에서는 Excel을 가져온 후 인쇄 설정 정보를 가져오는 방법을 설명하겠습니다.

주로 Printinfo 유형을 통해 Excel의 인쇄 설정 정보를 받습니다.

먼저 Excel의 인쇄 설정을 살펴보겠습니다. 아래 이미지처럼 폼의 일부 범위만 인쇄한다고 가정하겠습니다.

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms7-3-1.png)

<br />
**이어서 Excel을 Spread로 가져옵니다. 코드:**

```csharp
    this.fpSpread1.OpenExcel(System.AppDomain.CurrentDomain.BaseDirectory + “..\\..\\resources\\도시별 황금연휴 여행 접객 현황 .xls");
```

**실행 결과:**

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms7-3-2.png)

전체 모든 엑셀의 화면이 표시됩니다. 이제 Printinfo 정보를 읽어 PDF 파일로 인쇄하도록 설정합니다.

```csharp
  pi.PdfFileName = “황금연휴 여행 접객 현황.pdf";
  //인쇄
```

```csharp
    private void Form1_Load(object sender, EventArgs e)
    {
        InputMap im = fpSpread1.GetInputMap(InputMapMode.WhenFocused);
        ActionMap am = fpSpread1.GetActionMap();
        im.Put(new Keystroke(Keys.Delete, Keys.None), "ClearValue");
        am.Put("ClearValue", new ClearValueAction());
    }
```

<br />
**인쇄 결과:**

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms7-3-3.png)

이렇게 인쇄 영역으로 표시한 부분만 PDF로 내보내기 됩니다.

이외에 Printinfo는 확대/축소, 인쇄 페이지 범위 설정 및 스마트 인쇄 등 기능을 포함한 매우 자세한 속성 설정을 할 수 있습니다. 더 자세한 내용은 도움말 문서를 참고하시기 바랍니다.

[Excel의 인쇄 설정 정보 획득하기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Spread_Win_GetExcelPrintInfo.zip)

---

## Spread에서 테두리 설정 후 내보내기

[테두리 설정 후 내보내기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Spread_win_exportlineborder.zip)
<br /><br />

아래와 같은 코드를 이용하여 셀의 테두리 스타일을 설정후 Excel로 내보낼 수 있습니다 스프레드는 테두리 설정을 위한 LineBorder와 같은 클래스를 제공합니다.

```csharp
    private void ExportLineBorder()
    {
        fpSpread1.ActiveSheet.Cells[4, 2].Value = "test";
        fpSpread1.BorderCollapse = FarPoint.Win.Spread.BorderCollapse.Collapse;
        fpSpread1.ActiveSheet.Cells[2, 1, 4, 2].Border = new FarPoint.Win.LineBorder(Color.Black, 1, true, true, true, true);
        fpSpread1.ActiveSheet.Cells[2, 5, 4, 6].Border = new FarPoint.Win.LineBorder(Color.Black, 1, true, true, true, true);
        this.fpSpread1.SaveExcel("test.xls");
    }
```

[테두리 설정 후 내보내기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Spread_win_exportlineborder.zip)

---

## 그림을 엑셀로 내보내기

[그림을 엑셀로 내보내기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Spread_win_exportimage.zip)
<br /><br />
스프레드에 그림을 추가하고 Excel로 내보내는 방법입니다. ImageCellType으로 셀에 이미지를 추가 한 후 SaveExcel을 사용하여 Excel로 내보냅니다.

```csharp
    private void AddImageToCell()
    {
    FarPoint.Win.Spread.CellType.ImageCellType icelltype = new     Spread.CellType.ImageCellType();
    icelltype.Style = FarPoint.Win.RenderStyle.Stretch;
    icelltype.TransparencyColor = Color.Black;
    icelltype.TransparencyTolerance = 100;
    fpSpread1.Sheets[0].Rows[0].CellType = icelltype;
    System.Drawing.Image image =    ing.Image)Properties.Resources.ResourceManager.GetObject("Tulips");
    System.IO.MemoryStream stream = new System.IO.MemoryStream();

    image.Save(stream, System.Drawing.Imaging.ImageFormat.Jpeg);
    stream.Seek(0, System.IO.SeekOrigin.Begin);
    bytes = stream.GetBuffer();
    str = System.Convert.ToBase64String(bytes);
    fpSpread1.Sheets[0].Cells[0, 0].Value = image;
    fpSpread1.Sheets[0].Cells[0, 0].Text = "test";
    fpSpread1.Sheets[0].Protect = false;

    this.fpSpread1.SaveExcel("test.xls");
    }
```

[그림을 엑셀로 내보내기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Spread_win_exportimage.zip)
