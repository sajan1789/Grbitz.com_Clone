
import {Box,Flex,Tabs, TabList, TabPanels, Tab, TabPanel,VStack,FormControl,
    FormLabel,Text,Input,Button,Checkbox } from '@chakra-ui/react'
function Home (){
    return (
        <Flex bgImage="url('https://forever.travel-assets.com/flex/flexmanager/images/2021/11/01/ORB_Storefront_6_imgB_1400x600_20211028.jpg?impolicy=fcrop&w=900&h=225&q=mediumHigh')"
    w='full' >
    
             <VStack bgColor='white'   m='50px' w='full' >
             {/* border='1px' */}
             <VStack >
                <Tabs>
   <TabList   >
    <Tab>Stay</Tab>
    <Tab>Flights</Tab>
    <Tab>Car</Tab>
    <Tab>Packages</Tab>
    <Tab>Things to do</Tab>
    <Tab> Cruises</Tab>
    

  </TabList>

  
</Tabs>
<br />
   </VStack>
        
     <VStack >
        
     <Text ml='-850px'>For expert cruise advice, call 1-844-730-9892.</Text>
     </VStack>
                 
         <VStack display='flex' flexDirection='row'  p='10px' >
               
                <Input placeholder='Going to' w='400px'   isInvalid errorBorderColor='gray.400'  rounded='none'></Input>
                <b >Check-in</b>
                <Input w='300px' isInvalid errorBorderColor='gray.400'  rounded='none'
 placeholder="Select Date and Time"
 size="md"
 type="datetime-local"
/>
<b>Check-out</b>
<Input w='300px' isInvalid errorBorderColor='gray.400'  rounded='none'
 placeholder="Select Date and Time fff"
 size="md"
 type="datetime-local"
/>
            </VStack >   
            <VStack display='flex' flexDirection='row' >
            <Checkbox ml='-569px' mr='50px'>Add a flight</Checkbox>
            <Checkbox>Add a car</Checkbox>
            </VStack>
            <VStack  >
            
            <Button bg='#c83259 ' rounded='none' color='white' pl='65px' pr='65px' mb='30px' pt='25px' pb='25px'>Search</Button>
            </VStack>
            
                         
             </VStack>
          
        

        </Flex>
    )
}
export default Home