import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Text } from "@chakra-ui/react";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";

interface ClassItem {
  class: string;
  credit: number;
  grade: string;
  _id: string;
}

interface User {
  // ... other properties of User
  classes: ClassItem[];
}

export const Transcript: React.FC = () => {
  const classes = Array(8).fill({ name: "", grade: "", credits: 0 });
  const { user } = useAuthenticatedUser() as { user: User };
  return (
    <Box className="bg-[#363740] p-4 text-white">
      <Text className="text-2xl mb-4 text-center text-white">Transcript</Text>
      <Table variant="simple" size="sm" colorScheme="blue">
        <Thead>
          <Tr>
            <Th>Class</Th>
            <Th>Grade</Th>
            <Th isNumeric>Credits</Th>
          </Tr>
        </Thead>
        <Tbody>
          {user! &&
            user!.classes.map((classInfo) => (
              <Tr key={classInfo._id}>
                <Td>{classInfo.class}</Td>
                <Td>{classInfo.grade}</Td>
                <Td isNumeric>{classInfo.credit}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Box>
  );
};
