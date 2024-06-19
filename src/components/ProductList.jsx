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
  Image,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "IMAGE", uid: "image" },
  { name: "NAME", uid: "name", sortable: true },
  { name: "DESCRIPTION", uid: "description", sortable: true },
  { name: "PRICE", uid: "price", sortable: true },
  { name: "STOCK", uid: "stock" },
  { name: "CATEGORY", uid: "category" },
  { name: "ACTIONS", uid: "actions" },
];

const INITIAL_VISIBLE_COLUMNS = [
  "image",
  "name",
  "category",
  "price",
  "stock",
  "actions",
];

export default function ProductList({ products }) {
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "age",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(products?.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);
  const navigateTo = useNavigate();

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredProducts = [...products];

    if (hasSearchFilter) {
      filteredProducts = filteredProducts.filter((pd) =>
        pd.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    return filteredProducts;
  }, [filterValue, hasSearchFilter, products]);

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
    (product, columnKey) => {
      const cellValue = product[columnKey];

      switch (columnKey) {
        case "image":
          return (
            <Image width={60} alt="NextUI hero Image" src={product.image1} />
          );

        case "name":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-md capitalize text-default-800">
                {product.name}
              </p>
            </div>
          );

        case "category":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize text-default-600">
                {product.category.name}
              </p>
            </div>
          );

        case "description":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize text-default-600">
                {product.description}
              </p>
            </div>
          );

        case "price":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize text-default-600">
                {product.price}
              </p>
            </div>
          );

        case "stock":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize text-default-600">
                {product.stock}
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
                      navigateTo(`/adminpanel/products/view/${product.id}`);
                    }}
                  >
                    View
                  </DropdownItem>
                  <DropdownItem
                    onPress={() => {
                      navigateTo(`/adminpanel/products/edit/${product.id}`);
                    }}
                  >
                    Edit
                  </DropdownItem>
                  <DropdownItem
                    onPress={() => {
                      navigateTo(`/adminpanel/products/delete/${product.id}`);
                    }}
                  >
                    Delete
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
              onClick={() => navigateTo("/adminpanel/products/create")}
              className="bg-[#414649] text-background"
              size="md"
            >
              Add New
            </Button>

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
            <h1 className="text-xl font-semibold text-slate-700">Products</h1>
            <span className="text-default-400 text-small">
              Total {products?.length}
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
    products?.length,
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
      <TableBody emptyContent={"No products found"} items={sortedItems}>
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

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};
