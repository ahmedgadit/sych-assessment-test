// Chakra imports
import {
  Flex,
  FormLabel,
  Input,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

// Formik imports
import { Formik } from 'formik' 

// Custom components
export default function Default (props: {
  id: string
  label: string
  extra: string
  placeholder: string
  type: string
}) {
  const { id, label, extra, placeholder, type, ...rest } = props
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white')

  return (
    <Flex direction='column' mb={'30px'}>
      <FormLabel
        display='flex'
        ms='10px'
        htmlFor={id}
        fontSize='sm'
        color={textColorPrimary}
        fontWeight='bold'
        _hover={{ cursor: 'pointer' }}
      >
        {label}
        <Text fontSize='sm' fontWeight='400' ms='2px'>
          {extra}
        </Text>
      </FormLabel>
      <Input
        {...rest}
        type={type}
        id={id}
        fontWeight='500'
        variant='main'
        placeholder={placeholder}
        _placeholder={{ fontWeight: '400', color: 'secondaryGray.600' }}
        h='44px'
        maxH='44px'
        borderRadius='md'
        _focus={{ borderColor:'white' }}
      />
    </Flex>
  )
}
