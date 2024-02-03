import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Divider,
  Flex,
  Button,
} from "@chakra-ui/react";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface ClassItem {
  class: string;
  credit: number;
  grade: string;
  _id: string;
}

export const Transcript: React.FC = () => {
  const { user } = useAuthenticatedUser();

  const generatePDF = () => {
    const input = document.getElementById("transcript");
    if (input) {
      html2canvas(input, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const pdf = new jsPDF({
          orientation: "p",
          unit: "mm",
          format: "a4",
          putOnlyUsedFonts: true,
        });
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const newWidth = imgWidth * ratio;
        const newHeight = imgHeight * ratio;

        const xOffset = (pdfWidth - newWidth) / 2;
        const yOffset = (pdfHeight - newHeight) / 2;

        pdf.setFillColor(54, 55, 64);
        pdf.rect(0, 0, pdfWidth, pdfHeight, "F");

        pdf.addImage(imgData, "PNG", xOffset, yOffset, newWidth, newHeight);
        pdf.save("transcript.pdf");
      });
    }
  };
  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <Box className="mt-[-1.9rem] flex flex-col justify-center items-center h-screen ">
      <Box
        id="transcript"
        className="bg-[#363740] p-4 text-white w-1/2 h-3/4 flex flex-col rounded-xl shadow-xl"
      >
        <Text className="text-2xl mb-4 text-center  text-white">
          Transcript
        </Text>

        <Table
          variant="simple"
          size="sm"
          colorScheme="blue"
          className="flex-grow"
        >
          <Thead>
            <Tr>
              <Th color="gray.400">Class</Th>
              <Th color="gray.400">Grade</Th>
              <Th isNumeric color="gray.400">
                Credits
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {user! &&
              user!.classes.map((classInfo: ClassItem) => (
                <Tr key={classInfo._id}>
                  <Td>{classInfo.class}</Td>
                  <Td>{classInfo.grade}</Td>
                  <Td isNumeric>{classInfo.credit}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
        <Box
          bg="#3751FF"
          p={4}
          mt={4}
          color="white"
          borderRadius="md"
          w="850px"
          maxW="100%"
        >
          <Flex
            bg="#3751FF"
            p={4}
            mt={4}
            color="white"
            borderRadius="md"
            justifyContent="space-between"
          >
            <Text fontSize="xl" className=" mb-2 text-white">
              Weighted GPA: {user!.weightedGPA.toFixed(3)}
            </Text>
            <Text fontSize="xl" className=" mb-2 text-white">
              Unweighted GPA: {user!.unWeightedGPA.toFixed(3)}
            </Text>
          </Flex>
        </Box>
      </Box>
      <button
        className="hover:bg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={generatePDF}
      >
        Download PDF
      </button>
    </Box>
  );
};
