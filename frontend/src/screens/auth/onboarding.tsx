import { FormLabel, FormControl, Input, Select, Button, ButtonGroup, FormErrorMessage, Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as UserApi from "../../networks/api/user_api";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { BadRequestError } from '../../networks/http-errors';

const validationSchema = yup.object({
  gradeLevel: yup.number().required("Field is required"),

  class1: yup.string().max(21).required("Field is required"),
  credit1: yup.number().positive().required("Field is required"),
  grade1: yup.string().max(2).required("Field is required"),

  class2: yup.string().max(21).required("Field is required"),
  credit2: yup.number().required("Field is required"),
  grade2: yup.string().max(2).required("Field is required"),

  class3: yup.string().max(21).required("Field is required"),
  credit3: yup.number().required("Field is required"),
  grade3: yup.string().max(2).required("Field is required"),

  class4: yup.string().max(21).required("Field is required"),
  credit4: yup.number().required("Field is required"),
  grade4: yup.string().max(2).required("Field is required"),

  class5: yup.string().max(21).required("Field is required"),
  credit5: yup.number().required("Field is required"),
  grade5: yup.string().max(2).required("Field is required"),

  class6: yup.string().max(21).required("Field is required"),
  credit6: yup.number().required("Field is required"),
  grade6: yup.string().max(2).required("Field is required"),

  class7: yup.string().max(21).required("Field is required"),
  credit7: yup.number().required("Field is required"),
  grade7: yup.string().max(2).required("Field is required"),

  class8: yup.string().max(21).required("Field is required"),
  credit8: yup.number().required("Field is required"),
  grade8: yup.string().max(2).required("Field is required"),
});

type ClassData = yup.InferType<typeof validationSchema>;

export function Onboarding() {
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
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='bg-[#363740] flex flex-col sm:flex-row justify-center items-center w-full h-full min-h-screen'>
            <div className='w-[652px] sm:w-[752px] h-[800px] sm:h-[900px] bg-grayscale-white rounded-[30px] overflow-hidden border border-solid border-grayscale-divider p-5'>
            {errorText && (
                  <Alert status='error'>
                    <AlertIcon />
                    <AlertTitle>{errorText}</AlertTitle>
                  </Alert>
                )}

                <div className='flex flex-col space-y-4'>
                  <div className='flex flex-row justify-center ml-[140px] w-[448px]'>
                    <FormControl isInvalid = {errors.gradeLevel && true}>
                        <FormLabel>Grade Level</FormLabel>
                        <Select placeholder='Grade Level' {...register("gradeLevel")}>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                        </Select>
                    </FormControl>
                  </div>
                  <div className='flex flex-row space-x-7 justify-center'>
                    <FormControl isInvalid = {errors.class1 && true}>
                        <FormLabel>Class</FormLabel>
                        <Input placeholder="Class" {...register("class1")} />
                        <FormErrorMessage>{errors.class1 && errors.class1.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid = {errors.credit1 && true}>
                        <FormLabel>Credits</FormLabel>
                        <Select placeholder='Credits' {...register("credit1")}>
                        <option value={0.5}>0.5</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        </Select>
                        <FormErrorMessage>{errors.credit1 && errors.credit1.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid = {errors.grade1 && true}>
                        <FormLabel>Grade</FormLabel>
                        <Select placeholder='Grades' {...register("grade1")}>
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
                        <FormErrorMessage>{errors.grade1 && errors.grade1.message}</FormErrorMessage>
                    </FormControl>
                  </div>
                  <div className='flex flex-row space-x-7 justify-center'>
                    <FormControl isInvalid = {errors.class2 && true}>
                        <FormLabel>Class</FormLabel>
                        <Input placeholder="Class" {...register("class2")} />
                        <FormErrorMessage>{errors.class2 && errors.class2.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid = {errors.credit2 && true}>
                        <FormLabel>Credits</FormLabel>
                        <Select placeholder='Credits' {...register("credit2")}>
                        <option value={0.5}>0.5</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        </Select>
                        <FormErrorMessage>{errors.credit2 && errors.credit2.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid = {errors.grade2 && true}>
                        <FormLabel>Grade</FormLabel>
                        <Select placeholder='Grades' {...register("grade2")}>
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
                        <FormErrorMessage>{errors.grade2 && errors.grade2.message}</FormErrorMessage>
                    </FormControl>
                  </div>
                  <div className='flex flex-row space-x-7 justify-center'>
                    <FormControl isInvalid = {errors.class3 && true}>
                        <FormLabel>Class</FormLabel>
                        <Input placeholder="Class" {...register("class3")} />
                        <FormErrorMessage>{errors.class3 && errors.class3.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid = {errors.credit3 && true}>
                        <FormLabel>Credits</FormLabel>
                        <Select placeholder='Credits' {...register("credit3")}>
                        <option value={0.5}>0.5</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        </Select>
                        <FormErrorMessage>{errors.credit3 && errors.credit3.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid = {errors.grade3 && true}>
                        <FormLabel>Grade</FormLabel>
                        <Select placeholder='Grades' {...register("grade3")}>
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
                        <FormErrorMessage>{errors.grade3 && errors.grade3.message}</FormErrorMessage>
                    </FormControl>
                  </div>
                  <div className='flex flex-row space-x-7 justify-center'>
                    <FormControl isInvalid = {errors.class4 && true}>
                        <FormLabel>Class</FormLabel>
                        <Input placeholder="Class" {...register("class4")} />
                        <FormErrorMessage>{errors.class4 && errors.class4.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid = {errors.credit4 && true}>
                        <FormLabel>Credits</FormLabel>
                        <Select placeholder='Credits' {...register("credit4")}>
                        <option value={0.5}>0.5</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        </Select>
                        <FormErrorMessage>{errors.credit4 && errors.credit4.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid = {errors.grade4 && true}>
                        <FormLabel>Grade</FormLabel>
                        <Select placeholder='Grades' {...register("grade4")}>
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
                        <FormErrorMessage>{errors.grade4 && errors.grade4.message}</FormErrorMessage>
                    </FormControl>
                  </div>
                  <div className='flex flex-row space-x-7 justify-center'>
                    <FormControl isInvalid = {errors.class5 && true}>
                        <FormLabel>Class</FormLabel>
                        <Input placeholder="Class" {...register("class5")} />
                        <FormErrorMessage>{errors.class5 && errors.class5.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid = {errors.credit5 && true}>
                        <FormLabel>Credits</FormLabel>
                        <Select placeholder='Credits' {...register("credit5")}>
                        <option value={0.5}>0.5</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        </Select>
                        <FormErrorMessage>{errors.credit5 && errors.credit5.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid = {errors.grade5 && true}>
                        <FormLabel>Grade</FormLabel>
                        <Select placeholder='Grades' {...register("grade5")}>
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
                        <FormErrorMessage>{errors.grade5 && errors.grade5.message}</FormErrorMessage>
                    </FormControl>
                  </div>
                  <div className='flex flex-row space-x-7 justify-center'>
                    <FormControl isInvalid = {errors.class6 && true}>
                        <FormLabel>Class</FormLabel>
                        <Input placeholder="Class" {...register("class6")} />
                        <FormErrorMessage>{errors.class6 && errors.class6.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid = {errors.credit6 && true}>
                        <FormLabel>Credits</FormLabel>
                        <Select placeholder='Credits' {...register("credit6")}>
                        <option value={0.5}>0.5</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        </Select>
                        <FormErrorMessage>{errors.credit6 && errors.credit6.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid = {errors.grade6 && true}>
                        <FormLabel>Grade</FormLabel>
                        <Select placeholder='Grades' {...register("grade6")}>
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
                        <FormErrorMessage>{errors.grade6 && errors.grade6.message}</FormErrorMessage>
                    </FormControl>
                  </div>
                  <div className='flex flex-row space-x-7 justify-center'>
                    <FormControl isInvalid = {errors.class7 && true}>
                        <FormLabel>Class</FormLabel>
                        <Input placeholder="Class" {...register("class7")} />
                        <FormErrorMessage>{errors.class7 && errors.class7.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid = {errors.credit7 && true}>
                        <FormLabel>Credits</FormLabel>
                        <Select placeholder='Credits' {...register("credit7")}>
                        <option value={0.5}>0.5</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        </Select>
                        <FormErrorMessage>{errors.credit7 && errors.credit7.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid = {errors.grade7 && true}>
                        <FormLabel>Grade</FormLabel>
                        <Select placeholder='Grades' {...register("grade7")}>
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
                        <FormErrorMessage>{errors.grade7 && errors.grade7.message}</FormErrorMessage>
                    </FormControl>
                  </div>
                  <div className='flex flex-row space-x-7 justify-center'>
                    <FormControl isInvalid = {errors.class8 && true}>
                        <FormLabel>Class</FormLabel>
                        <Input placeholder="Class" {...register("class8")} />
                        <FormErrorMessage>{errors.class8 && errors.class8.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid = {errors.credit8 && true}>
                        <FormLabel>Credits</FormLabel>
                        <Select placeholder='Credits' {...register("credit8")}>
                        <option value={0.5}>0.5</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        </Select>
                        <FormErrorMessage>{errors.credit8 && errors.credit8.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid = {errors.grade8 && true}>
                        <FormLabel>Grade</FormLabel>
                        <Select placeholder='Grades' {...register("grade8")}>
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
                        <FormErrorMessage>{errors.grade8 && errors.grade8.message}</FormErrorMessage>
                    </FormControl>
                  </div>
                </div>

                <div className='flex flex-row justify-center mt-10'>
                    <ButtonGroup >
                      <Button colorScheme='blue' className='!w-[338px]' type = "submit" isLoading = {isSubmitting}>Register Classes</Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    </form>
  );
}
