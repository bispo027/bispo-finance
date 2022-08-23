import { SearchIcon } from "@chakra-ui/icons"
import { Button, HStack, Input } from "@chakra-ui/react"

export default function SearchBar() {
  return (
    <HStack spacing='16px' pt='34px'  w='80vw'>
      <Input
        placeholder="Search for a transaction"
        size='md'
        flex='8'
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg'
        }}
        backgroundColor='#121214'
        borderColor='black'
        color='white'
      />
      <Button
        size='md'
        flex='1'
        leftIcon={<SearchIcon />}
        colorScheme='green'
        variant='outline'
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
          bg: 'green',
          color: 'white',
          borderColor: 'green'
        }}
      >
        Search
      </Button>
    </HStack >
  )
}
