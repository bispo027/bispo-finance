import { Box, VStack, Text, Flex, Heading, Icon } from "@chakra-ui/react";

import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { MdAttachMoney } from "react-icons/md";

interface Card {
  type: string;
  value: number;
  bgColor?: string;
}

export default function Card(props: Card) {
  const colorButton =
    props.type == "Income"
      ? "#323238"
      : props.type == "Expense"
      ? "#323238"
      : props.value < 0
      ? "#AA2834"
      : props.value == 0
      ? "#323238"
      : "#00875F";

  const value = props.value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Box
      borderRadius="6"
      w="352px"
      h="137"
      color="white"
      p="5"
      bg={colorButton}
      boxShadow="lg"
    >
      <VStack alignItems="left" spacing="6">
        <Flex justifyContent="space-between" w="full">
          <Text>{props.type}</Text>
          {props.type == "Income" ? (
            <ArrowUpIcon fontSize="25px" color="green" />
          ) : props.type == "Expense" ? (
            <ArrowDownIcon fontSize="25px" color="red" />
          ) : (
            <Icon as={MdAttachMoney} fontSize="25px" color="#ffff" />
          )}
        </Flex>
        <Heading fontFamily="roboto" fontSize="32px" fontWeight="bold">
          {value}
        </Heading>
      </VStack>
    </Box>
  );
}
