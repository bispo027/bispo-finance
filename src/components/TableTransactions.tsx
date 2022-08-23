import {
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
} from '@chakra-ui/react'
import TableItem from './TableItem';

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

export default function TableTransactions(props: Transactions) {
  return (

    <TableContainer>
      <Table size="md" w="80vw" variant="simple">
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
          {props.transactions.map((item: Transaction, index: number) => {
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
  )
}