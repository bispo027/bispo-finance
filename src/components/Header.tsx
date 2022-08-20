import { Box, Button, HStack, Image, Text } from '@chakra-ui/react'

export default function Header() {
  return (
    <Box pt='40px' w='1112px'>
      <HStack justifyContent='space-between'>
        <HStack spacing={2}>
          <Image src="../../public/Logo.svg" />
          <Text fontFamily='roboto' color='white'> Bishop Finance</Text>
        </HStack>
        <Button
          bg='#00875F'
          color='white'
          p='12px 20px'
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
            bg: '#00B37E'
          }}
        >
          <Text fontSize='16'>
            Nova Transação
          </Text>
        </Button>
      </HStack>
    </Box >
  )
}
