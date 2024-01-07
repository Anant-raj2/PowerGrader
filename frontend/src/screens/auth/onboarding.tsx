import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import { ButtonContained } from '../../components';
import { FormControlLabel, FormHelperText } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as UserApi from "../../networks/api/user_api";
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
  class1: yup.string().max(21).required("Required"),
  credit1: yup.number().required("Required"),
  grade1: yup.number().required("Required"),

  class2: yup.string().max(21).required("Required"),
  credit2: yup.number().required("Required"),
  grade2: yup.number().required("Required"),

  class3: yup.string().max(21).required("Required"),
  credit3: yup.number().required("Required"),
  grade3: yup.number().required("Required"),

  class4: yup.string().max(21).required("Required"),
  credit4: yup.number().required("Required"),
  grade4: yup.number().required("Required"),

  class5: yup.string().max(21).required("Required"),
  credit5: yup.number().required("Required"),
  grade5: yup.number().required("Required"),

  class6: yup.string().max(21).required("Required"),
  credit6: yup.number().required("Required"),
  grade6: yup.number().required("Required"),

  class7: yup.string().max(21).required("Required"),
  credit7: yup.number().required("Required"),
  grade7: yup.number().required("Required"),

  class8: yup.string().max(21).required("Required"),
  credit8: yup.number().required("Required"),
  grade8: yup.number().required("Required"),
});

type ClassData = yup.InferType<typeof validationSchema>;

const FormBox = styled(Paper)(({ theme }) => ({
  width: 520,
  height: 750,
  padding: theme.spacing(2),
  backgroundColor: "#fff",
  borderRadius: 20,
  ...theme.typography.body2,
  textAlign: 'center',
}))

const Input = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 5,
    position: 'relative',
    backgroundColor: "#FDFEFE",
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

export function Onboarding() {
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClassData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: ClassData) => {
    console.log(data);
    UserApi.postAcademics(data);
    navigate("/overview");
    window.location.reload();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate >
      <div className='bg-[#363740] flex flex-col sm:flex-row justify-center items-center w-full h-full min-h-screen'>
        <FormBox square={false} elevation={24}>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel>Class</InputLabel>
            <Input required={true} type="text" defaultValue='' {...register("class1")} error={!!errors.class1}/>
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel>Credits</InputLabel>
              <Select
                input={<Input />}
                required={true}
                {...register("credit1")}
                error={!!errors.credit1}
                defaultValue=''
              >
                <MenuItem value={0.5}>0.5</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
              </Select>
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel>Grade</InputLabel>
              <Select
                error={!!errors.grade1}
                input={<Input />}
                required={true}
                defaultValue=''
                {...register("grade1")}
              >
                <MenuItem value={4}>A</MenuItem>
                <MenuItem value={3.5}>A-</MenuItem>
                <MenuItem value={3}>B+</MenuItem>
                <MenuItem value={2.5}>B</MenuItem>
                <MenuItem value={2}>B-</MenuItem>
                <MenuItem value={1.5}>C+</MenuItem>
                <MenuItem value={1}>C</MenuItem>
                <MenuItem value={0.5}>C-</MenuItem>
                <MenuItem value={0.5}>D+</MenuItem>
                <MenuItem value={0.25}>D-</MenuItem>
                <MenuItem value={0.}>D</MenuItem>
              </Select>
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel>Class</InputLabel>
            <Input required={true} type="text" defaultValue='' {...register("class2")} error={!!errors.class2}/>
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel>Credits</InputLabel>
              <Select
                input={<Input />}
                required={true}
                {...register("credit2")}
                error={!!errors.credit2}
                defaultValue=''
              >
                <MenuItem value={0.5}>0.5</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
              </Select>
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel>Grade</InputLabel>
              <Select
                error={!!errors.grade2}
                input={<Input />}
                required={true}
                defaultValue=''
                {...register("grade2")}
              >
                <MenuItem value={4}>A</MenuItem>
                <MenuItem value={3.5}>A-</MenuItem>
                <MenuItem value={3}>B+</MenuItem>
                <MenuItem value={2.5}>B</MenuItem>
                <MenuItem value={2}>B-</MenuItem>
                <MenuItem value={1.5}>C+</MenuItem>
                <MenuItem value={1}>C</MenuItem>
                <MenuItem value={0.5}>C-</MenuItem>
                <MenuItem value={0.5}>D+</MenuItem>
                <MenuItem value={0.25}>D-</MenuItem>
                <MenuItem value={0.}>D</MenuItem>
              </Select>
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel>Class</InputLabel>
            <Input required={true} type="text" defaultValue='' {...register("class3")} error={!!errors.class3}/>
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel>Credits</InputLabel>
              <Select
                input={<Input />}
                required={true}
                {...register("credit3")}
                error={!!errors.credit3}
                defaultValue=''
              >
                <MenuItem value={0.5}>0.5</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
              </Select>
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel>Grade</InputLabel>
              <Select
                error={!!errors.grade3}
                input={<Input />}
                required={true}
                defaultValue=''
                {...register("grade3")}
              >
                <MenuItem value={4}>A</MenuItem>
                <MenuItem value={3.5}>A-</MenuItem>
                <MenuItem value={3}>B+</MenuItem>
                <MenuItem value={2.5}>B</MenuItem>
                <MenuItem value={2}>B-</MenuItem>
                <MenuItem value={1.5}>C+</MenuItem>
                <MenuItem value={1}>C</MenuItem>
                <MenuItem value={0.5}>C-</MenuItem>
                <MenuItem value={0.5}>D+</MenuItem>
                <MenuItem value={0.25}>D-</MenuItem>
                <MenuItem value={0.}>D</MenuItem>
              </Select>
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel>Class</InputLabel>
            <Input required={true} type="text" defaultValue='' {...register("class4")} error={!!errors.class4}/>
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel>Credits</InputLabel>
              <Select
                input={<Input />}
                required={true}
                {...register("credit4")}
                error={!!errors.credit4}
                defaultValue=''
              >
                <MenuItem value={0.5}>0.5</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
              </Select>
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel>Grade</InputLabel>
              <Select
                error={!!errors.grade4}
                input={<Input />}
                required={true}
                defaultValue=''
                {...register("grade4")}
              >
                <MenuItem value={4}>A</MenuItem>
                <MenuItem value={3.5}>A-</MenuItem>
                <MenuItem value={3}>B+</MenuItem>
                <MenuItem value={2.5}>B</MenuItem>
                <MenuItem value={2}>B-</MenuItem>
                <MenuItem value={1.5}>C+</MenuItem>
                <MenuItem value={1}>C</MenuItem>
                <MenuItem value={0.5}>C-</MenuItem>
                <MenuItem value={0.5}>D+</MenuItem>
                <MenuItem value={0.25}>D-</MenuItem>
                <MenuItem value={0.}>D</MenuItem>
              </Select>
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel>Class</InputLabel>
            <Input required={true} type="text" defaultValue='' {...register("class5")} error={!!errors.class5}/>
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel>Credits</InputLabel>
              <Select
                input={<Input />}
                required={true}
                {...register("credit5")}
                error={!!errors.credit5}
                defaultValue=''
              >
                <MenuItem value={0.5}>0.5</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
              </Select>
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel>Grade</InputLabel>
              <Select
                error={!!errors.grade5}
                input={<Input />}
                required={true}
                defaultValue=''
                {...register("grade5")}
              >
                <MenuItem value={4}>A</MenuItem>
                <MenuItem value={3.5}>A-</MenuItem>
                <MenuItem value={3}>B+</MenuItem>
                <MenuItem value={2.5}>B</MenuItem>
                <MenuItem value={2}>B-</MenuItem>
                <MenuItem value={1.5}>C+</MenuItem>
                <MenuItem value={1}>C</MenuItem>
                <MenuItem value={0.5}>C-</MenuItem>
                <MenuItem value={0.5}>D+</MenuItem>
                <MenuItem value={0.25}>D-</MenuItem>
                <MenuItem value={0.}>D</MenuItem>
              </Select>
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel>Class</InputLabel>
            <Input required={true} type="text" defaultValue='' {...register("class6")} error={!!errors.class6}/>
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel>Credits</InputLabel>
              <Select
                input={<Input />}
                required={true}
                {...register("credit6")}
                error={!!errors.credit6}
                defaultValue=''
              >
                <MenuItem value={0.5}>0.5</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
              </Select>
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel>Grade</InputLabel>
              <Select
                error={!!errors.grade6}
                input={<Input />}
                required={true}
                defaultValue=''
                {...register("grade6")}
              >
                <MenuItem value={4}>A</MenuItem>
                <MenuItem value={3.5}>A-</MenuItem>
                <MenuItem value={3}>B+</MenuItem>
                <MenuItem value={2.5}>B</MenuItem>
                <MenuItem value={2}>B-</MenuItem>
                <MenuItem value={1.5}>C+</MenuItem>
                <MenuItem value={1}>C</MenuItem>
                <MenuItem value={0.5}>C-</MenuItem>
                <MenuItem value={0.5}>D+</MenuItem>
                <MenuItem value={0.25}>D-</MenuItem>
                <MenuItem value={0.}>D</MenuItem>
              </Select>
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel>Class</InputLabel>
            <Input required={true} type="text" defaultValue='' {...register("class7")} error={!!errors.class7}/>
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel>Credits</InputLabel>
              <Select
                input={<Input />}
                required={true}
                {...register("credit7")}
                error={!!errors.credit7}
                defaultValue=''
              >
                <MenuItem value={0.5}>0.5</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
              </Select>
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel>Grade</InputLabel>
              <Select
                error={!!errors.grade7}
                input={<Input />}
                required={true}
                defaultValue=''
                {...register("grade7")}
              >
                <MenuItem value={4}>A</MenuItem>
                <MenuItem value={3.5}>A-</MenuItem>
                <MenuItem value={3}>B+</MenuItem>
                <MenuItem value={2.5}>B</MenuItem>
                <MenuItem value={2}>B-</MenuItem>
                <MenuItem value={1.5}>C+</MenuItem>
                <MenuItem value={1}>C</MenuItem>
                <MenuItem value={0.5}>C-</MenuItem>
                <MenuItem value={0.5}>D+</MenuItem>
                <MenuItem value={0.25}>D-</MenuItem>
                <MenuItem value={0.}>D</MenuItem>
              </Select>
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel>Class</InputLabel>
            <Input required={true} type="text" defaultValue='' {...register("class8")} error={!!errors.class8}/>
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel>Credits</InputLabel>
              <Select
                input={<Input />}
                required={true}
                {...register("credit8")}
                error={!!errors.credit8}
                defaultValue=''
              >
                <MenuItem value={0.5}>0.5</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
              </Select>
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel>Grade</InputLabel>
              <Select
                error={!!errors.grade8}
                input={<Input />}
                required={true}
                defaultValue=''
                {...register("grade8")}
              >
                <MenuItem value={4}>A</MenuItem>
                <MenuItem value={3.5}>A-</MenuItem>
                <MenuItem value={3}>B+</MenuItem>
                <MenuItem value={2.5}>B</MenuItem>
                <MenuItem value={2}>B-</MenuItem>
                <MenuItem value={1.5}>C+</MenuItem>
                <MenuItem value={1}>C</MenuItem>
                <MenuItem value={0.5}>C-</MenuItem>
                <MenuItem value={0.5}>D+</MenuItem>
                <MenuItem value={0.25}>D-</MenuItem>
                <MenuItem value={0.}>D</MenuItem>
              </Select>
          </FormControl>
          <ButtonContained
                  btnLabelClassName="!tracking-[var(--semibold-14px-letter-spacing)] !text-[length:var(--semibold-14px-font-size)] ![font-style:var(--semibold-14px-font-style)] !font-[number:var(--semibold-14px-font-weight)] !font-semibold-14px !leading-[var(--semibold-14px-line-height)] !w-[340px]"
                  className="!bg-mainblue !w-[388px]"
                  text="Next"
                  type="submit"
                />
        </FormBox>
        
      </div>
    </form>
  );
}