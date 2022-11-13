
import {Box,Flex,Tabs, TabList, TabPanels, Tab, TabPanel,VStack,FormControl,
    FormLabel,Text,Input        } from '@chakra-ui/react'
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
                 
         <VStack>
             
  
            </VStack>   

             </VStack>
          
        

        </Flex>
    )
}
export default Home