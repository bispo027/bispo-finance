import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { IconButton, Td, Tr } from "@chakra-ui/react";

interface Transaction {
  id: number;
  name: string;
  value: number;
  desc: string;
  type: Boolean;
  data: string;
  del: Function;
}

export default function TableItem(props: Transaction) {
  const value = props.value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
 
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
            onClick={() => {
              props.del(props.id);
            }}
          />
        </Td>
        <Td>
          <IconButton
            aria-label="delete"
            variant="outline"
            colorScheme="red"
            icon={<DeleteIcon />}
            onClick={() => {
              props.del(props.id);
            }}
          />
        </Td>
    </Tr>
  );
}
