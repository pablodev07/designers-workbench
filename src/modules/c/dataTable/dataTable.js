import { LightningElement, api } from "lwc";

export default class DataTable extends LightningElement {
  @api columns = [];
  @api data = [];
  @api keyField = "id";
  @api sortedBy;
  @api sortedDirection = "asc";
  @api hideCheckboxColumn = false;
  @api showRowNumberColumn = false;
  @api maxRowSelection;

  _selectedRows = [];

  @api
  get selectedRows() {
    return this._selectedRows;
  }
  set selectedRows(value) {
    this._selectedRows = value || [];
  }

  handleSort(event) {
    this.dispatchEvent(
      new CustomEvent("sort", {
        detail: {
          fieldName: event.detail.fieldName,
          sortDirection: event.detail.sortDirection,
        },
      })
    );
  }

  handleRowSelection(event) {
    this._selectedRows = event.detail.selectedRows;
    this.dispatchEvent(
      new CustomEvent("rowselection", {
        detail: { selectedRows: this._selectedRows },
      })
    );
  }

  handleRowAction(event) {
    this.dispatchEvent(
      new CustomEvent("rowaction", {
        detail: {
          action: event.detail.action,
          row: event.detail.row,
        },
      })
    );
  }
}
