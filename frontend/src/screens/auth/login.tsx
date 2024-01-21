import React from 'react'
import { Button, ButtonGroup, FormLabel, FormControl, Input, Flex, InputGroup, InputRightElement, FormErrorMessage, Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { ButtonTextButton } from "../../components/index";
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import * as UserApi from "../../networks/api/user_api";
import { useState } from "react";
import useAuthenticatedUser from "../../hooks/useAuthenticatedUser";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UnauthorizedError} from "../../networks/http-errors";

const validationSchema = yup.object({
    email: yup.string().email().required("Email is required").matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Email is in an invalid format"),
    password: yup.string().min(8, "Needs atleast 8 characters").max(20, "Max of 20 characters").required("Password is required").matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]))(?=.*\d)((?=.*[a-z]))((?=.*[A-Z])).*$/, "Invalid Password, Please Refer to our Password Requirements"),
});
type LoginFormData = yup.InferType<typeof validationSchema>;

export const Login = (): JSX.Element => {
    const [errorText, setErrorText] = useState<string | null>(null);
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show);
    const navigate = useNavigate();
    const { mutateUser } = useAuthenticatedUser();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm<LoginFormData>({
        resolver: yupResolver(validationSchema),
      });
    
      async function onSubmit(credentials: LoginFormData) {
        try {
            setErrorText(null);
            const user = await UserApi.login(credentials);
            console.log(user.name);
            mutateUser(user);
            navigate("/overview");
        } catch (error) {
          if (error instanceof UnauthorizedError) {
            setErrorText("Invalid credentials");
          } else {
            console.error(error);
            alert(error);
          }
        }
      }

  return (
    <Flex className='bg-[#363740] flex flex-col sm:flex-row justify-center items-center w-full h-full min-h-screen'>
        <div>
        {errorText && (
                  <Alert status='error'>
                    <AlertIcon />
                    <AlertTitle>{errorText}</AlertTitle>
                  </Alert>
                )}
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='w-[388px] sm:w-[452px] h-[600px] sm:h-[600px] bg-grayscale-white rounded-[30px] overflow-hidden border border-solid border-grayscale-divider flex flex-col items-center justify-center space-y-7'>
                        <div className="relative mt-[-30px] sm:mt-[-20px] flex flex-col items-center">
                            <div className="bg-mainblue rounded-[24px] flex items-center justify-center">
                                <img
                                    className="w-full h-full"
                                    alt="Pg white"
                                    src="https://c.animaapp.com/PUgvNGDd/img/pg-white-1.svg"
                                />
                            </div>
                            <br />
                        </div>
                        <div className='w-[338px]'>
                            <FormControl isRequired>
                                <FormLabel>Email: </FormLabel>
                                <InputGroup className='mb-[10px]'>
                                    <Input type = "email" placeholder = "Email" {...register('email')} isRequired/>
                                </InputGroup>
                                <FormErrorMessage>hey</FormErrorMessage>
                            </FormControl>
                        </div>
                        <div className='w-[338px]'>
                            <FormControl isInvalid = {errors.password && true} isRequired>
                                <FormLabel>Password: </FormLabel>
                                <InputGroup size='md' className='mb-[10px]'>
                                    <Input
                                        pr='4.5rem'
                                        type={show ? 'text' : 'password'}
                                        placeholder='Enter password'
                                        {...register('password')}
                                    />
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? <ViewOffIcon/> : <ViewIcon/>}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <FormErrorMessage>{errors.password && (errors.password.message)}</FormErrorMessage>
                            </FormControl>
                        </div>
                        <div>
                            <ButtonGroup>
                                <Button colorScheme='blue' className='!w-[338px]' type = "submit" isLoading = {isSubmitting}>Log In</Button>
                            </ButtonGroup>
                        </div>
                        <div className="w-full sm:w-[316px] h-[20px] flex justify-center items-center">
                            <div className="font-regular-14px font-[number:var(--regular-14px-font-weight)] text-grayscale-gray text-[length:var(--regular-14px-font-size)] text-center tracking-[var(--regular-14px-letter-spacing)] leading-[var(--regular-14px-line-height)] whitespace-nowrap [font-style:var(--regular-14px-font-style)]">
                                Already have an account?
                            </div>
                            <ButtonTextButton
                            btnLabelClassName="!text-mainblue !tracking-[var(--semibold-14px-letter-spacing)] cursor-pointer !text-[length:var(--semibold-14px-font-size)] ![font-style:var(--semibold-14px-font-style)] !font-[number:var(--semibold-14px-font-weight)] !font-semibold-14px !leading-[var(--semibold-14px-line-height)] !w-[61px]"
                            className="!w-[79px]"
                            text="Sign Up"
                            onClick={() => {navigate('/signup')}}
                            />
                        </div>
                    </div>
            </form>
        </div>
    </Flex>
)
}