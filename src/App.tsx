import {
  Box, HStack, VStack,
} from "@chakra-ui/react"
import Card from "./components/Card"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"

function App() {
  return (
    <Box bgGradient='linear(to-b, #121214 20%, #202024 20%)' h='100vh' w='100vw' flex='1'>
      <VStack>
        <Header />
        <HStack justify='center' pt='40px' spacing='32px'>
          <Card type="Income" value={520} />
          <Card type="Expense" value={220} />
          <Card type="Money" value={300} />
        </HStack>
        <SearchBar />
      </VStack>
    </Box>
  )
}

export default App
