import { TableInstance } from 'react-table';
import { Button, Text, Flex, useColorModeValue } from '@chakra-ui/react';

interface PaginationProps {
  tableInstance: TableInstance;
}

export default function Pagination({ tableInstance }: PaginationProps) {
  const textColor = useColorModeValue('secondaryGray.900', 'white')
  return (
    <Flex justify="space-between" align="center" mt="20px" mx="auto" gap={4}>
      <Button
        onClick={() => tableInstance.previousPage()}
        disabled={!tableInstance.canPreviousPage}
      >
        Prev
      </Button>
      <Text color={textColor} fontSize="14px" fontWeight="700">
        Page {tableInstance.state.pageIndex + 1} of {tableInstance.pageCount}
      </Text>
      <Button
        onClick={() => tableInstance.nextPage()}
        disabled={!tableInstance.canNextPage}
      >
        Next
      </Button>
    </Flex>
  );
}
