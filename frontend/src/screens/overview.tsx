import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import {
  FormLabel,
  FormControl,
  Input,
  Select,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import * as UserApi from "../networks/api/user_api";
import { useNavigate } from "react-router-dom";
import { BadRequestError } from "../networks/http-errors";
interface ClassItem {
  class: string;
  credit: number;
  grade: string;
  tpye: string;
  _id: string;
}

const validationSchema = yup.object({
  gradeLevel: yup.number().required("Field is required"),

  class1: yup.string().max(21).required("Field is required"),
  credit1: yup.number().positive().required("Field is required"),
  grade1: yup.string().max(2).required("Field is required"),
  type1: yup.string().max(21).required("Field is required"),

  class2: yup.string().max(21).required("Field is required"),
  credit2: yup.number().required("Field is required"),
  grade2: yup.string().max(2).required("Field is required"),
  type2: yup.string().max(21).required("Field is required"),

  class3: yup.string().max(21).required("Field is required"),
  credit3: yup.number().required("Field is required"),
  grade3: yup.string().max(2).required("Field is required"),
  type3: yup.string().max(21).required("Field is required"),

  class4: yup.string().max(21).required("Field is required"),
  credit4: yup.number().required("Field is required"),
  grade4: yup.string().max(2).required("Field is required"),
  type4: yup.string().max(21).required("Field is required"),

  class5: yup.string().max(21).required("Field is required"),
  credit5: yup.number().required("Field is required"),
  grade5: yup.string().max(2).required("Field is required"),
  type5: yup.string().max(21).required("Field is required"),

  class6: yup.string().max(21).required("Field is required"),
  credit6: yup.number().required("Field is required"),
  grade6: yup.string().max(2).required("Field is required"),
  type6: yup.string().max(21).required("Field is required"),

  class7: yup.string().max(21).required("Field is required"),
  credit7: yup.number().required("Field is required"),
  grade7: yup.string().max(2).required("Field is required"),
  type7: yup.string().max(21).required("Field is required"),

  class8: yup.string().max(21).required("Field is required"),
  credit8: yup.number().required("Field is required"),
  grade8: yup.string().max(2).required("Field is required"),
  type8: yup.string().max(21).required("Field is required"),
});

type ClassData = yup.InferType<typeof validationSchema>;

export const Overview = (): JSX.Element => {
  const { user } = useAuthenticatedUser();
  const [classes, setClasses] = useState<string[]>([]);
  const [grades, setGrades] = useState<number[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [errorText, setErrorText] = useState<string | null>(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClassData>({
    resolver: yupResolver(validationSchema),
  });

  async function onSubmit(data: ClassData) {
    try {
      setErrorText(null);
      await UserApi.postAcademics(data);
      navigate("/overview");
      onClose();
      window.location.reload();
    } catch (error) {
      if (error instanceof BadRequestError) {
        setErrorText(error.message);
        console.log(error.message);
      } else {
        console.error(error);
        alert(error);
      }
    }
  }
  useEffect(() => {
    user!.classes.map((classItem: ClassItem) => {
      setClasses((prev) => [...prev, classItem.class.substring(0, 5) + "..."]);
      switch (classItem.grade) {
        case "A":
          setGrades((prev) => [...prev, 4]);
          break;
        case "A-":
          setGrades((prev) => [...prev, 3.7]);
          break;
        case "B+":
          setGrades((prev) => [...prev, 3.3]);
          break;
        case "B":
          setGrades((prev) => [...prev, 3]);
          break;
        case "B-":
          setGrades((prev) => [...prev, 2.7]);
          break;
        case "C+":
          setGrades((prev) => [...prev, 2.3]);
          break;
        case "C":
          setGrades((prev) => [...prev, 2]);
          break;
        case "C-":
          setGrades((prev) => [...prev, 1.7]);
          break;
        case "D+":
          setGrades((prev) => [...prev, 1.3]);
          break;
        case "D":
          setGrades((prev) => [...prev, 1]);
          break;
        case "D-":
          setGrades((prev) => [...prev, 0.7]);
          break;
        case "F":
          setGrades((prev) => [...prev, 0]);
          break;
      }
    });
  }, [user]);
  const data = [
    {
      name: classes[0],
      uv: grades[0],
    },
    {
      name: classes[1],
      uv: grades[1],
    },
    {
      name: classes[2],
      uv: grades[2],
    },
    {
      name: classes[3],
      uv: grades[3],
    },
    {
      name: classes[4],
      uv: grades[4],
    },
    {
      name: classes[5],
      uv: grades[5],
    },
    {
      name: classes[6],
      uv: grades[6],
    },
    {
      name: classes[7],
      uv: grades[7],
    },
  ];
  function getRatingAndGradient(gpa: number) {
    if (gpa >= 3.5) {
      return {
        rating: "Great",
      };
    } else if (gpa >= 3.0) {
      return {
        rating: "Good",
      };
    } else {
      return {
        rating: "Poor",
      };
    }
  }

  const rating = getRatingAndGradient(user!.unWeightedGPA);

  return (
    <>
      <div className="mt-14">
        <div className="flex flex-wrap ml-5 sm:ml-22">
          <div className="flex flex-col sm:flex-row">
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full sm:w-96 p-5 sm:p-8 pt-9 m-2 sm:m-5 bg-hero-pattern bg-no-repeat bg-cover bg-center flex items-start justify-center">
              <div className="flex flex-col items-center">
                <p className="font-normal text-gray-400 text-2xl">GPA</p>
                <p className="font-bold gradient-text text-5xl pt-3">
                  {user! && user!.unWeightedGPA
                    ? user!.unWeightedGPA.toFixed(3)
                    : "Loading..."}
                </p>
              </div>
            </div>
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full sm:w-96 p-5 sm:p-8 pt-9 m-2 sm:m-5 bg-hero-pattern bg-no-repeat bg-cover bg-center flex items-start justify-center">
              <div className="flex flex-col items-center">
                <p className="font-normal text-gray-400 text-2xl">
                  Weighted GPA
                </p>
                <p className="font-bold gradient-text text-5xl pt-3">
                  {user! && user!.weightedGPA
                    ? user!.weightedGPA.toFixed(3)
                    : "Loading..."}
                </p>
              </div>
            </div>
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full sm:w-96 p-5 sm:p-8 pt-9 m-2 sm:m-5 bg-hero-pattern bg-no-repeat bg-cover bg-center flex items-start justify-center">
              <div className="flex flex-col items-center">
                <p className="font-normal text-gray-400 text-2xl">Rating</p>
                <p
                  className={`font-bold text-5xl pt-3 ${rating.rating === "Great"
                      ? "great-text"
                      : rating.rating === "Good"
                        ? "good-text"
                        : "needs-improvement-text"
                    }`}
                >
                  {rating.rating}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start sm:ml-13 md:ml-13 lg:ml-20">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg ml-13 h-128 rounded-xl w-810 lg:w-150 p-8 pt-9 m-5 bg-hero-pattern bg-no-repeat bg-cover bg-center">
            <div>
              <p className="font-normal text-gray-400 text-2xl">
                Your Overview
              </p>
            </div>
            <BarChart
              margin={{
                top: 15,
              }}
              width={750}
              height={420}
              data={data}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="uv"
                fill="#89CFF0"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg ml-4 h-59 rounded-xl w-full lg:w-96 p-8 pt-9 m-5 bg-hero-pattern bg-no-repeat bg-cover bg-center flex items-start justify-center">
              <div>
                <p className="font-bold text-gray-400 text-2xl">Grade Level</p>
                <p className="font-bold text-gray-400 text-7xl mt-4">
                  {user!.gradeLevel}
                  <sup className="text-4xl absolute top-[12.7em]">th</sup>
                </p>
              </div>
            </div>
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg ml-4 h-59 rounded-xl w-full lg:w-96 p-8 pt-9 m-5 bg-hero-pattern bg-no-repeat bg-cover bg-center flex items-start justify-center">
              <div>
                <p className="font-bold text-gray-400 text-2xl">
                  Worst Classes
                </p>
                {user!.worstClasses.map((classItem: ClassItem, index) => (
                  <p key={index}>{classItem.class}</p>
                ))}
              </div>
            </div>

            <Button onClick={onOpen}>Open Modal</Button>
          </div>
        </div>
      </div>
      <Modal onClose={onClose} isOpen={isOpen} size={"full"} isCentered>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Grades</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row justify-center ml-[140px] w-[448px]">
                  <FormControl isInvalid={errors.gradeLevel && true}>
                    <FormLabel>Grade Level</FormLabel>
                    <Select
                      placeholder="Grade Level"
                      {...register("gradeLevel")}
                    >
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                    </Select>
                  </FormControl>
                </div>
                <div className="flex flex-row space-x-7 justify-center">
                  <FormControl isInvalid={errors.class1 && true}>
                    <FormLabel>Class</FormLabel>
                    <Input placeholder=" " {...register("class1")} />
                    <FormErrorMessage>
                      {errors.class1 && errors.class1.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.credit1 && true}>
                    <FormLabel>Credits</FormLabel>
                    <Select placeholder=" " {...register("credit1")}>
                      <option value={0.5}>0.5</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.credit1 && errors.credit1.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.grade1 && true}>
                    <FormLabel>Grade</FormLabel>
                    <Select placeholder=" " {...register("grade1")}>
                      <option value="A">A</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B">B</option>
                      <option value="B-">B-</option>
                      <option value="C+">C+</option>
                      <option value="C">C</option>
                      <option value="C-">C-</option>
                      <option value="D+">D+</option>
                      <option value="D">D</option>
                      <option value="D-">D-</option>
                      <option value="F">F</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.grade1 && errors.grade1.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.type1 && true}>
                    <FormLabel>Type</FormLabel>
                    <Select placeholder=" " {...register("type1")}>
                      <option value="Regular">Regular</option>
                      <option value="Weighted">Weighted</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.type1 && errors.type1.message}
                    </FormErrorMessage>
                  </FormControl>
                </div>
                <div className="flex flex-row space-x-7 justify-center">
                  <FormControl isInvalid={errors.class2 && true}>
                    <FormLabel>Class</FormLabel>
                    <Input placeholder=" " {...register("class2")} />
                    <FormErrorMessage>
                      {errors.class2 && errors.class2.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.credit2 && true}>
                    <FormLabel>Credits</FormLabel>
                    <Select placeholder=" " {...register("credit2")}>
                      <option value={0.5}>0.5</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.credit2 && errors.credit2.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.grade2 && true}>
                    <FormLabel>Grade</FormLabel>
                    <Select placeholder=" " {...register("grade2")}>
                      <option value="A">A</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B">B</option>
                      <option value="B-">B-</option>
                      <option value="C+">C+</option>
                      <option value="C">C</option>
                      <option value="C-">C-</option>
                      <option value="D+">D+</option>
                      <option value="D">D</option>
                      <option value="D-">D-</option>
                      <option value="F">F</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.grade2 && errors.grade2.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.type2 && true}>
                    <FormLabel>Type</FormLabel>
                    <Select placeholder=" " {...register("type2")}>
                      <option value="Regular">Regular</option>
                      <option value="Weighted">Weighted</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.type2 && errors.type2.message}
                    </FormErrorMessage>
                  </FormControl>
                </div>
                <div className="flex flex-row space-x-7 justify-center">
                  <FormControl isInvalid={errors.class3 && true}>
                    <FormLabel>Class</FormLabel>
                    <Input placeholder=" " {...register("class3")} />
                    <FormErrorMessage>
                      {errors.class3 && errors.class3.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.credit3 && true}>
                    <FormLabel>Credits</FormLabel>
                    <Select placeholder=" " {...register("credit3")}>
                      <option value={0.5}>0.5</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.credit3 && errors.credit3.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.grade3 && true}>
                    <FormLabel>Grade</FormLabel>
                    <Select placeholder=" " {...register("grade3")}>
                      <option value="A">A</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B">B</option>
                      <option value="B-">B-</option>
                      <option value="C+">C+</option>
                      <option value="C">C</option>
                      <option value="C-">C-</option>
                      <option value="D+">D+</option>
                      <option value="D">D</option>
                      <option value="D-">D-</option>
                      <option value="F">F</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.grade3 && errors.grade3.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.type3 && true}>
                    <FormLabel>Type</FormLabel>
                    <Select placeholder=" " {...register("type3")}>
                      <option value="Regular">Regular</option>
                      <option value="Weighted">Weighted</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.type3 && errors.type3.message}
                    </FormErrorMessage>
                  </FormControl>
                </div>
                <div className="flex flex-row space-x-7 justify-center">
                  <FormControl isInvalid={errors.class4 && true}>
                    <FormLabel>Class</FormLabel>
                    <Input placeholder=" " {...register("class4")} />
                    <FormErrorMessage>
                      {errors.class4 && errors.class4.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.credit4 && true}>
                    <FormLabel>Credits</FormLabel>
                    <Select placeholder=" " {...register("credit4")}>
                      <option value={0.5}>0.5</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.credit4 && errors.credit4.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.grade4 && true}>
                    <FormLabel>Grade</FormLabel>
                    <Select placeholder=" " {...register("grade4")}>
                      <option value="A">A</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B">B</option>
                      <option value="B-">B-</option>
                      <option value="C+">C+</option>
                      <option value="C">C</option>
                      <option value="C-">C-</option>
                      <option value="D+">D+</option>
                      <option value="D">D</option>
                      <option value="D-">D-</option>
                      <option value="F">F</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.grade4 && errors.grade4.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.type4 && true}>
                    <FormLabel>Type</FormLabel>
                    <Select placeholder=" " {...register("type4")}>
                      <option value="Regular">Regular</option>
                      <option value="Weighted">Weighted</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.type4 && errors.type4.message}
                    </FormErrorMessage>
                  </FormControl>
                </div>
                <div className="flex flex-row space-x-7 justify-center">
                  <FormControl isInvalid={errors.class5 && true}>
                    <FormLabel>Class</FormLabel>
                    <Input placeholder=" " {...register("class5")} />
                    <FormErrorMessage>
                      {errors.class5 && errors.class5.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.credit5 && true}>
                    <FormLabel>Credits</FormLabel>
                    <Select placeholder=" " {...register("credit5")}>
                      <option value={0.5}>0.5</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.credit5 && errors.credit5.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.grade5 && true}>
                    <FormLabel>Grade</FormLabel>
                    <Select placeholder=" " {...register("grade5")}>
                      <option value="A">A</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B">B</option>
                      <option value="B-">B-</option>
                      <option value="C+">C+</option>
                      <option value="C">C</option>
                      <option value="C-">C-</option>
                      <option value="D+">D+</option>
                      <option value="D">D</option>
                      <option value="D-">D-</option>
                      <option value="F">F</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.grade5 && errors.grade5.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.type5 && true}>
                    <FormLabel>Type</FormLabel>
                    <Select placeholder=" " {...register("type5")}>
                      <option value="Regular">Regular</option>
                      <option value="Weighted">Weighted</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.type5 && errors.type5.message}
                    </FormErrorMessage>
                  </FormControl>
                </div>
                <div className="flex flex-row space-x-7 justify-center">
                  <FormControl isInvalid={errors.class6 && true}>
                    <FormLabel>Class</FormLabel>
                    <Input placeholder=" " {...register("class6")} />
                    <FormErrorMessage>
                      {errors.class6 && errors.class6.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.credit6 && true}>
                    <FormLabel>Credits</FormLabel>
                    <Select placeholder=" " {...register("credit6")}>
                      <option value={0.5}>0.5</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.credit6 && errors.credit6.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.grade6 && true}>
                    <FormLabel>Grade</FormLabel>
                    <Select placeholder=" " {...register("grade6")}>
                      <option value="A">A</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B">B</option>
                      <option value="B-">B-</option>
                      <option value="C+">C+</option>
                      <option value="C">C</option>
                      <option value="C-">C-</option>
                      <option value="D+">D+</option>
                      <option value="D">D</option>
                      <option value="D-">D-</option>
                      <option value="F">F</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.grade6 && errors.grade6.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.type6 && true}>
                    <FormLabel>Type</FormLabel>
                    <Select placeholder=" " {...register("type6")}>
                      <option value="Regular">Regular</option>
                      <option value="Weighted">Weighted</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.type6 && errors.type6.message}
                    </FormErrorMessage>
                  </FormControl>
                </div>
                <div className="flex flex-row space-x-7 justify-center">
                  <FormControl isInvalid={errors.class7 && true}>
                    <FormLabel>Class</FormLabel>
                    <Input placeholder=" " {...register("class7")} />
                    <FormErrorMessage>
                      {errors.class7 && errors.class7.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.credit7 && true}>
                    <FormLabel>Credits</FormLabel>
                    <Select placeholder=" " {...register("credit7")}>
                      <option value={0.5}>0.5</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.credit7 && errors.credit7.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.grade7 && true}>
                    <FormLabel>Grade</FormLabel>
                    <Select placeholder=" " {...register("grade7")}>
                      <option value="A">A</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B">B</option>
                      <option value="B-">B-</option>
                      <option value="C+">C+</option>
                      <option value="C">C</option>
                      <option value="C-">C-</option>
                      <option value="D+">D+</option>
                      <option value="D">D</option>
                      <option value="D-">D-</option>
                      <option value="F">F</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.grade7 && errors.grade7.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.type7 && true}>
                    <FormLabel>Type</FormLabel>
                    <Select placeholder=" " {...register("type7")}>
                      <option value="Regular">Regular</option>
                      <option value="Weighted">Weighted</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.type7 && errors.type7.message}
                    </FormErrorMessage>
                  </FormControl>
                </div>
                <div className="flex flex-row space-x-7 justify-center">
                  <FormControl isInvalid={errors.class8 && true}>
                    <FormLabel>Class</FormLabel>
                    <Input placeholder=" " {...register("class8")} />
                    <FormErrorMessage>
                      {errors.class8 && errors.class8.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.credit8 && true}>
                    <FormLabel>Credits</FormLabel>
                    <Select placeholder=" " {...register("credit8")}>
                      <option value={0.5}>0.5</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.credit8 && errors.credit8.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.grade8 && true}>
                    <FormLabel>Grade</FormLabel>
                    <Select placeholder=" " {...register("grade8")}>
                      <option value="A">A</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B">B</option>
                      <option value="B-">B-</option>
                      <option value="C+">C+</option>
                      <option value="C">C</option>
                      <option value="C-">C-</option>
                      <option value="D+">D+</option>
                      <option value="D">D</option>
                      <option value="D-">D-</option>
                      <option value="F">F</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.grade8 && errors.grade8.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.type8 && true}>
                    <FormLabel>Type</FormLabel>
                    <Select placeholder=" " {...register("type8")}>
                      <option value="Regular">Regular</option>
                      <option value="Weighted">Weighted</option>
                    </Select>
                    <FormErrorMessage>
                      {errors.type8 && errors.type8.message}
                    </FormErrorMessage>
                  </FormControl>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
              <Button type="submit" isLoading={isSubmitting} colorScheme="blue">
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};
