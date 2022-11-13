import { Flex, Spacer ,Box,ButtonGroup,Heading,Button,VStack,Text,FormControl,
  FormLabel,Input,Checkbox,
  FormErrorMessage,
  FormHelperText} from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
import {Menu,MenuButton, MenuList,MenuItem,Portal,Link,HStack} from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

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
        <Link _hover={{color:"teal"}}>Espanol</Link>
        <Link>List your property</Link>
        <Link>Support</Link>
        <Link>Trip</Link>
        <Menu h='600px'>
  <MenuButton>Sign in</MenuButton>
    <MenuList w="full" color='black'>
      <Box h='auto' >
        <VStack p='5'>
          <Heading as='h2' size='sm'>Sign in</Heading>
          <Text>Enter your email and password to login</Text>
          </VStack>
          <VStack spacing='-3'>
          <FormControl p='5'>
  <FormLabel>Email address</FormLabel>
  <Input type='email' rounded='none'/>
</FormControl > 
<FormControl p='5'>
  <FormLabel>Password</FormLabel>
  <Input type='password' rounded='none'/>
</FormControl>
<HStack justify='space-between' w='full' p='5'>
<Checkbox>Remember me.</Checkbox>

<Button variant='link' color='blue'fontSize='12px'>Forget Password?</Button>
</HStack >
  <HStack >
    <Button mt='25px' colorScheme='blue' rounded='none' w='265px'>Signin</Button>
    </HStack>    
          </VStack>
           
      </Box>
    </MenuList>

</Menu>
        </HStack>
       
      </Flex>
    )
}
export default Navbar