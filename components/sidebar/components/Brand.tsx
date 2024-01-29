// Chakra imports
import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';

// Custom components
import { HSeparator } from '../../../components/separator/Separator';

export function SidebarBrand() {
	//   Chakra color mode
	let logoColor = useColorModeValue('navy.700', 'white');

	return (
		<Flex alignItems='center' flexDirection='column'>
			<Heading size='lg' w='175px' my='16px' color={logoColor}>Sych.</Heading>
			<HSeparator mb='20px' />
		</Flex>
	);
}

export default SidebarBrand;
