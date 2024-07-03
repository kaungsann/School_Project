import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "NAME", uid: "name" },
  { name: "LOCATION", uid: "location" },
  { name: "PURCHASE", uid: "purchase", sortable: true },
  { name: "PHONENUMBER", uid: "phonenumber" },
  { name: "ACTIONS", uid: "actions" },
];

const INITIAL_VISIBLE_COLUMNS = [
  "name",
  "location",
  "purchase",
  "phonenumber",
  "actions",
];

export default function TransitionList({ transitons }) {
  console.log("transtion is a", transitons);
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "name",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(transitons.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);
  const navigateTo = useNavigate();

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredCategory = [...transitons];

    if (hasSearchFilter) {
      filteredCategory = filteredCategory.filter((ct) =>
        ct.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    return filteredCategory;
  }, [filterValue, hasSearchFilter, transitons]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback(
    (transition, columnKey) => {
      const cellValue = transition[columnKey];

      switch (columnKey) {
        case "name":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-md capitalize text-default-800">
                {transition.user.firstName + transition.user.lastName}
              </p>
            </div>
          );

        case "location":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize text-default-600">
                {transition.shippingInfo.region}
              </p>
            </div>
          );

        case "phonenumber":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize text-default-600">
                {transition.shippingInfo.phoneNumber}
              </p>
            </div>
          );

        case "purchase":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize text-default-600">
                {transition?.purchasedProductLists.length}
              </p>
            </div>
          );

        case "actions":
          return (
            <div className="relative flex justify-start items-center">
              <Dropdown aria-label="action">
                <DropdownTrigger>
                  <Button isIconOnly size="sm" variant="light">
                    <Icon
                      icon="solar:menu-dots-square-broken"
                      className="text-[#578acb] text-3xl"
                    />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Table dropdown menu">
                  <DropdownItem
                    onPress={() => {
                      navigateTo(
                        `/adminpanel/transition/view/${transition.user.id}`
                      );
                    }}
                  >
                    View
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          );
        default:
          return cellValue;
      }
    },
    [navigateTo]
  );

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            classNames={{
              base: "w-full sm:max-w-[44%]",
              inputWrapper: "border-1",
            }}
            placeholder="Search by name..."
            size="sm"
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button size="md" variant="flat">
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {column.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>

            <Button
              color="secondary"
              onClick={() => navigateTo("/")}
              variant="ghost"
              size="md"
              className="hover:text-white text-[#414649]"
            >
              Back
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold text-slate-700">Categories</h1>
            <span className="text-default-400 text-small">
              Total {transitons.length}
            </span>
          </div>

          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    transitons.length,
    navigateTo,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          showControls
          classNames={{
            cursor: "bg-foreground text-background",
          }}
          color="default"
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
        <span className="text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${items.length} selected`}
        </span>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
    <Table
      isCompact
      removeWrapper
      aria-label="Example table with custom cells, pagination and sorting"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[650px]",
      }}
      selectedKeys={selectedKeys}
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No transitons found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

TransitionList.propTypes = {
  transitons: PropTypes.array.isRequired,
};
