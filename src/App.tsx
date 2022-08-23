import {
  Box,
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  HStack,
  VStack,
  Center,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TableItem from "./components/TableItem";

import { gql, useMutation, useQuery } from "@apollo/client";

interface Transaction {
  id: string;
  name: string;
  value: number;
  description: string;
  type: Boolean;
  data: string;
}

interface Transactions {
  transactions: Transaction[];
}

interface Values {
  expense: number;
  income: number;
  total: number;
}

const GET_TRANSACTION = gql`
  query {
    transactions {
      id
      name
      type
      value
      date
      description
    }
  }
`;


function App() {
  const [values, setValues] = useState<Values>();
  const { loading, data } = useQuery<Transactions>(GET_TRANSACTION);

  return (
    <Box
      bgGradient="linear(to-b, #121214 30%, #202024 30%)"
      h="100vh"
      w="100vw"
    >
      <VStack>
        <Header />
        <HStack justify="center" pt="40px" spacing="32px">
          <Card type="Income" value={values?.income || 0} />
          <Card type="Expense" value={values?.expense || 0} />
          <Card type="Money" value={values?.total || 0} />
        </HStack>
        <SearchBar />
        {!loading ? (
          <TableContainer>
            <Table size="md" w="82vw" variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th isNumeric>Value</Th>
                  <Th>Description</Th>
                  <Th>Data</Th>
                  <Th></Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.transactions.map((item: Transaction, index: number) => {
                  return (
                    <TableItem
                      key={index}
                      id={item.id}
                      name={item.name}
                      desc={item.description}
                      type={item.type}
                      data={item.data}
                      value={item.value}
                    />
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
      </VStack>
    </Box>
  );
}

export default App;
