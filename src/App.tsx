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
import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TableItem from "./components/TableItem";
interface Transation {
  id: number;
  name: string;
  value: number;
  desc: string;
  type: Boolean;
  data: string;
}

function App() {
  const [transactions, setTransactions] = useState<Transation[]>([
    {
      id: 1,
      name: "Desenvolvimento de site",
      value: 1200,
      desc: 'Serviço',
      type: true,
      data: "29/08/2022",
    },
    {
      id: 2,
      name: "Aluguel",
      value: 2200,
      desc: 'Serviço',
      type: false,
      data: "29/08/2022",
    },
  ]);

  function SetItem(item: Transation) {
    setTransactions([...transactions, item]);
  }

  const RemoveItem = (id: number) => {
    const newListTransactions = transactions.filter(item => item.id !== id);
    setTransactions(newListTransactions)
  }

  return (
    <Box
      bgGradient="linear(to-b, #121214 30%, #202024 30%)"
      h="100vh"
      w="100vw"
    >
      <VStack>
        <Header />
        <HStack justify="center" pt="40px" spacing="32px">
          <Card type="Income" value={520} />
          <Card type="Expense" value={220} />
          <Card type="Money" value={300} />
        </HStack>
        <SearchBar />
        <TableContainer>
          <Table size="md" w="82vw" variant="simple">
            <Thead>
              <Tr>
                <Th >Name</Th>
                <Th isNumeric>Value</Th>
                <Th >Description</Th>
                <Th >Data</Th>
                <Th></Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {transactions.map((item, index) => {
                return (
                  <TableItem
                    key={index}
                    id={item.id}
                    name={item.name}
                    desc={item.desc}
                    type={item.type}
                    data={item.data}
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
