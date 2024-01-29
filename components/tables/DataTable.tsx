// Chakra imports
import { Flex, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue, Checkbox } from "@chakra-ui/react";

//libraries imports
import React, { useEffect, useMemo, useState } from "react";
import { useGlobalFilter, usePagination, useRowSelect, useSortBy, useTable } from "react-table";

// Components imports
import AddButton from "@/components/buttons/add";
import Card from "@/components/card/Card";
import Pagination from "@/components/pagination/Pagination";
import Search from "@/components/search/Search";
import PageSize from "@/components/pagination/PageSize";

// Icon imports
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

//Data imports
import { TableProps } from "@/variables/columnsData";

export default function DataTable(props: TableProps) {
  const { columnsData, tableData, isSelectable = false, showPageSize = false, onEdit = (id: number) => {}, onDelete = (id: number) => {}, onAdd = () => {}, actionSlot= (index: number) => {}} = props;




  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect
  );

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, setGlobalFilter, initialState } = tableInstance;
  initialState.pageSize = 10;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isMounted) return;
    setIsMounted(true);
  }, [isMounted]);

  if (!isMounted) return <></>;


  const defaultActions = (id: number) => {
    const defaultRender = (id:  number) => (
      <Flex gap={2}>
        <EditIcon color={textColor} h="18px" w="19px" onClick={() => onEdit(id)} />
        <DeleteIcon color={textColor} h="18px" w="19px" onClick={() => onDelete(id)} />
      </Flex>
    )
    return actionSlot(id) ?? defaultRender(id);
  }

  return (
    <Card flexDirection="column" w="100%" px="0px" overflowX={{ sm: "scroll", lg: "hidden" }}>
      <Flex px="25px" justify="space-between" mb="20px" align="center" gap={2}>
        <Flex gap={2}>
          <Search tableInstance={tableInstance} setGlobalFilter={setGlobalFilter} />
          {showPageSize && <PageSize tableInstance={tableInstance} />}
        </Flex>
        {/* <AddButton onClick={onAdd} /> */}
      </Flex>

      <Table {...getTableProps()} variant="simple" color="gray.500" mb="24px">
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {isSelectable && (
                <Th pe="10px" key={index} borderColor={borderColor}>
                  <Checkbox onChange={() => tableInstance.toggleAllRowsSelected()} isChecked={tableInstance.isAllRowsSelected} />
                </Th>
              )}
              {headerGroup.headers.map((column, index) => (
                <Th {...column.getHeaderProps(column.getSortByToggleProps())} pe="10px" key={index} borderColor={borderColor}>
                  <Flex justify="space-between" align="center" fontSize={{ sm: "10px", lg: "12px" }} color="gray.400">
                    {column.render("Header")}
                  </Flex>
                </Th>
              ))}
              <Th key={"actions"} pe="10px" borderColor={borderColor}>
                <Flex justify="space-between" align="center" fontSize={{ sm: "10px", lg: "12px" }} color="gray.400">
                  Actions
                </Flex>
              </Th>
            </Tr>
          ))}
        </Thead>

        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={index}>
                {isSelectable && (
                  <Td key={index} fontSize={{ sm: "14px" }} minW={{ sm: "150px", md: "200px", lg: "auto" }} borderColor="transparent">
                    <Checkbox onChange={() => row.toggleRowSelected()} isChecked={row.isSelected} />
                  </Td>
                )}
                {row.cells.map((cell, index) => {
                  return (
                    <Td {...cell.getCellProps()} key={index} fontSize={{ sm: "14px" }} minW={{ sm: "150px", md: "200px", lg: "auto" }} borderColor="transparent">
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value}
                      </Text>
                    </Td>
                  );
                })}
                <Td key={index} minW={{ sm: "150px", md: "200px", lg: "auto" }} borderColor="transparent">
                  {defaultActions(index)}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>

      <Pagination tableInstance={tableInstance} />
    </Card>
  );
}
