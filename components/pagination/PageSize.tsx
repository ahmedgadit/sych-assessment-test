import {
    Select,
    useColorModeValue,
  } from '@chakra-ui/react'

  import { TableInstance } from 'react-table'


  interface PagerProps {
    tableInstance: TableInstance,
  }

  export default function PageSize({tableInstance}: PagerProps) 
  {

    // Chakra Color Mode
    const inputBg = useColorModeValue('secondaryGray.300', 'navy.900')
    const inputText = useColorModeValue('gray.700', 'gray.100')
    return (
      <Select
        value={tableInstance.state.pageSize}
        size='md'
        w={'fit-content'}
        bg={inputBg}
        _active={{
          bg: 'inherit',
          transform: 'none',
          borderColor: 'transparent'
        }}
        _focus={{
          boxShadow: 'none'
        }}
        color={inputText}
        // fontWeight='500'
          onChange={(e) => {
            tableInstance.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize} style={{background:inputBg}}>
              Show {pageSize}
            </option>
          ))}
      </Select>
    )
  }
  
  