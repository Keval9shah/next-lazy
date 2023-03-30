import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

export default function ChakraTable() {
    return (
        <TableContainer style={{margin:"40px"}}>
            <Table variant="simple">
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Imperial</Th>
                        <Th isNumeric>Metric</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Length</Td>
                        <Td isNumeric>0.0254 m</Td>
                    </Tr>
                    <Tr>
                        <Td>Mass</Td>
                        <Td isNumeric>0.453592 kg</Td>
                    </Tr>
                    <Tr>
                        <Td>Mass</Td>
                        <Td isNumeric>0.453592 kg</Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>Imperial</Th>
                        <Th isNumeric>Metric</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}