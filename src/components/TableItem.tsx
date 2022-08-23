import { gql, useMutation } from "@apollo/client";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { IconButton, Td, Tr } from "@chakra-ui/react";

interface Transaction {
  id: string;
  name: string;
  value: number;
  desc: string;
  type: Boolean;
  data: string;
}

const REMOVE_TRANSACTION = gql`
  mutation MyMutation {
    deleteTransaction(where: { id: "" })
  }
`;

export default function TableItem(props: Transaction) {
  const value = props.value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const [deleteTransaction, { loading}] =
    useMutation(REMOVE_TRANSACTION);

  return (
    <Tr>
      <Td>{props.name}</Td>
      <Td isNumeric color={props.type ? "green" : "red"}>
        {props.type ? value : `-${value}`}
      </Td>
      <Td>{props.desc}</Td>
      <Td>{props.data}</Td>
      <Td isNumeric>
        <IconButton
          aria-label="edit"
          variant="outline"
          colorScheme="blue"
          icon={<EditIcon />}
          onClick={() => {}}
        />
      </Td>
      <Td>
        <IconButton
          aria-label="delete"
          variant="outline"
          colorScheme="red"
          icon={<DeleteIcon />}
          onClick={() => {
            deleteTransaction({ variables: { id: props.id } });
          }}
        />
      </Td>
    </Tr>
  );
}
