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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import env from "react-dotenv";
import Card from "./components/Card";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TableItem from "./components/TableItem";
import { useTransactionsQuery } from "./generated/graphql";

interface Transaction {
  name: string;
  value: number;
  desc: string;
  type: Boolean;
  data: string;
}

interface Values {
  expense: number;
  income: number;
  total: number;
}

function App() {
  const [{ data }] = useTransactionsQuery();
  useEffect(() => {
    GetAllValue();
  }, [data]);

  const [values, setValues] = useState<Values>();

  const SetItem = (item: Transaction) => {
  };

  const RemoveItem = (id: number) => {
  };

  const GetAllValue = () => {
    const newData = {
      expense: 0,
      income: 0,
      total: 0,
    }

    if (data) {
      data.transactions.forEach((item) => {
        if (item.type) {
          newData.income += item.value;
        } else {
          newData.expense += item.value;
        }
      }),
      newData.total = newData.income - newData.expense;
    } 
    setValues(newData);
  };

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
              {data?.transactions.map((item, index) => {
                return (
                  <TableItem
                    key={index}
                    id={item.id}
                    name={item.name}
                    desc={item.description}
                    type={item.type}
                    data={item.date}
                    value={item.value}
                    del={RemoveItem}
                  />
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </Box>
  );
}

export default App;
