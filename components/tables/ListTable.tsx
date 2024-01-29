// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react'

//libraries imports
import React, { useEffect, useMemo, useState } from 'react'
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable
} from 'react-table'

// Components imports
import AddButton from 'components/buttons/add'
import Card from 'components/card/Card'
import Pagination from 'components/pagination/Pagination'
import Search from 'components/search/Search'
import PageSize from 'components/pagination/PageSize'

//Data imports
import { TableProps } from 'variables/columnsData'

export default function ListTable (props: TableProps) {
  const { columnsData, tableData } = props

  const columns = useMemo(() => columnsData, [columnsData])
  const data = useMemo(() => tableData, [tableData])

  const tableInstance = useTable(
    {
      columns,
      data
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    setGlobalFilter,
    initialState
  } = tableInstance
  initialState.pageSize = 10

  const textColor = useColorModeValue('secondaryGray.900', 'white')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100')

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (isMounted) return
    setIsMounted(true)
  }, [isMounted])

  if (!isMounted) return <></>

  return (
    <Card flexDirection='column' w='100%' px='0px' overflowX={{ sm: 'scroll', lg: 'hidden' }}>

      <Flex px='25px' justify='space-between' mb='20px' align='center'>
        <Flex gap={2}>
          <Search tableInstance={tableInstance} setGlobalFilter={setGlobalFilter} />
          <PageSize tableInstance={tableInstance} />
        </Flex>
        <AddButton />
      </Flex>

      <Table {...getTableProps()} variant='simple' color='gray.500' mb='24px'>
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe='10px'
                  key={index}
                  borderColor={borderColor}
                >
                  <Flex
                    justify='space-between'
                    align='center'
                    fontSize={{ sm: '10px', lg: '12px' }}
                    color='gray.400'
                  >
                    {column.render('Header')}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>

        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => {
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: '14px' }}
                      minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                      borderColor='transparent'
                    >
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>

      </Table>

      <Pagination tableInstance={tableInstance} />
      
    </Card>
  )
}
  