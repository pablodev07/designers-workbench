const SAMPLE_COLUMNS = [
  { label: "Name", fieldName: "name", type: "text", sortable: true },
  { label: "Email", fieldName: "email", type: "email", sortable: true },
  { label: "Phone", fieldName: "phone", type: "phone" },
  { label: "Amount", fieldName: "amount", type: "currency", sortable: true },
];

const SAMPLE_DATA = [
  {
    id: "1",
    name: "Amy Taylor",
    email: "amy@example.com",
    phone: "555-0100",
    amount: 25000,
  },
  {
    id: "2",
    name: "Michael Jones",
    email: "michael@example.com",
    phone: "555-0101",
    amount: 15000,
  },
  {
    id: "3",
    name: "Sarah Chen",
    email: "sarah@example.com",
    phone: "555-0102",
    amount: 42000,
  },
  {
    id: "4",
    name: "James Wilson",
    email: "james@example.com",
    phone: "555-0103",
    amount: 8500,
  },
  {
    id: "5",
    name: "Lisa Park",
    email: "lisa@example.com",
    phone: "555-0104",
    amount: 31000,
  },
];

export default {
  title: "Components/Data Table",
  component: "c-data-table",
  argTypes: {
    keyField: { control: "text", description: "Field used as row identifier" },
    hideCheckboxColumn: {
      control: "boolean",
      description: "Hide the row selection checkboxes",
    },
    showRowNumberColumn: {
      control: "boolean",
      description: "Show row numbers",
    },
    sortedBy: { control: "text", description: "Field currently sorted by" },
    sortedDirection: {
      control: "select",
      options: ["asc", "desc"],
      description: "Sort direction",
    },
  },
};

export const Default = {
  args: {
    keyField: "id",
    hideCheckboxColumn: false,
    showRowNumberColumn: false,
  },
  render: (args) => {
    const element = window.__lwcCreateElement("c-data-table");
    element.columns = SAMPLE_COLUMNS;
    element.data = SAMPLE_DATA;
    element.keyField = args.keyField;
    element.hideCheckboxColumn = args.hideCheckboxColumn;
    element.showRowNumberColumn = args.showRowNumberColumn;
    if (args.sortedBy) element.sortedBy = args.sortedBy;
    if (args.sortedDirection) element.sortedDirection = args.sortedDirection;
    return element;
  },
};

export const WithRowNumbers = {
  args: {
    keyField: "id",
    hideCheckboxColumn: false,
    showRowNumberColumn: true,
  },
  render: (args) => {
    const element = window.__lwcCreateElement("c-data-table");
    element.columns = SAMPLE_COLUMNS;
    element.data = SAMPLE_DATA;
    element.keyField = args.keyField;
    element.hideCheckboxColumn = args.hideCheckboxColumn;
    element.showRowNumberColumn = args.showRowNumberColumn;
    return element;
  },
};

export const WithRowActions = {
  args: {
    keyField: "id",
    hideCheckboxColumn: true,
  },
  render: (args) => {
    const actions = [
      { label: "View", name: "view" },
      { label: "Edit", name: "edit" },
      { label: "Delete", name: "delete" },
    ];
    const columnsWithActions = [
      ...SAMPLE_COLUMNS,
      { type: "action", typeAttributes: { rowActions: actions } },
    ];
    const element = window.__lwcCreateElement("c-data-table");
    element.columns = columnsWithActions;
    element.data = SAMPLE_DATA;
    element.keyField = args.keyField;
    element.hideCheckboxColumn = args.hideCheckboxColumn;
    return element;
  },
};

export const NoCheckboxes = {
  args: {
    keyField: "id",
    hideCheckboxColumn: true,
    showRowNumberColumn: false,
  },
  render: (args) => {
    const element = window.__lwcCreateElement("c-data-table");
    element.columns = SAMPLE_COLUMNS;
    element.data = SAMPLE_DATA;
    element.keyField = args.keyField;
    element.hideCheckboxColumn = args.hideCheckboxColumn;
    element.showRowNumberColumn = args.showRowNumberColumn;
    return element;
  },
};
