import { Flex, Spacer ,Box,ButtonGroup,Heading,Button} from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,Portal,Link,HStack
  } from '@chakra-ui/react'
function Navbar(){
    return (
        <Flex minWidth='max-content' alignItems='center' gap='2' bg='#00253c' p='4' h='75px'>
        <Box p='2' ml='50px'>
          <img src="https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2" alt="" />
        </Box>
        <Box>
        <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant='flushed' color='white'>
    More Travel
  </MenuButton>
  <MenuList>
    <MenuItem>  Stay</MenuItem>
    <MenuItem>  Packages</MenuItem>
    <MenuItem>  Cars</MenuItem>
    <MenuItem>  Cruises</MenuItem>
    <MenuItem>  Things to do</MenuItem>
    <MenuItem>  Deals</MenuItem>
    <MenuItem>  Groups & meetings</MenuItem>
    <MenuItem>  Travel Blog</MenuItem>
  </MenuList>
</Menu>
        </Box>
        <Spacer />
        <HStack color="white" spacing='30' mr='50px'>
        <Link >Espanol</Link>
        <Link>List Your Property</Link>
        <Link>Support</Link>
        <Link>Trip</Link>
        <Menu>
  <MenuButton>Sign in</MenuButton>
  <Portal>
    <MenuList>
      <MenuItem>Menu 1</MenuItem>
      <MenuItem>New Window</MenuItem>
      <MenuItem>Open Closed Tab</MenuItem>
      <MenuItem>Open File</MenuItem>
    </MenuList>
  </Portal>
</Menu>
        </HStack>
       
      </Flex>
    )
}
export default Navbar