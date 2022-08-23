import {
  Box,
  HStack,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TableItem from "./components/TableItem";

import { gql, useMutation, useQuery } from "@apollo/client";
import TableTransactions from "./components/TableTransactions";

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

  useEffect(() => {
    GetAll();
  }, []);

  const [values, setValues] = useState<Values>();
  const { loading, data } = useQuery<Transactions>(GET_TRANSACTION);

  const GetAll = () => {
    let newValues = {
      expense: 0,
      income: 0,
      total: 0,
    }

    data?.transactions.map((item: Transaction) => {
      if (item.type) {
        newValues.income += item.value;
      } else {
        newValues.expense += item.value;
      }
    })
    newValues.total = newValues.income - newValues.expense;
    setValues(newValues);
  }

  return (
    <Box
      bgGradient="linear(to-b, #121214 30%, #202024 30%)"
      h="full"
      w="full"
    >
      <VStack>
        <Header />
        <HStack justify="center" pt="40px" spacing="1.2vw">
          <Card type="Income" value={values?.income || 0} />
          <Card type="Expense" value={values?.expense || 0} />
          <Card type="Money" value={values?.total || 0} />
        </HStack>
        <SearchBar />
        {!loading ? (
          <TableTransactions transactions={data?.transactions || []} />
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
