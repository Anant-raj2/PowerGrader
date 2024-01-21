import React from 'react'
import { Button, ButtonGroup, IconButton, FormLabel, FormControl, Input, Flex, InputGroup, InputRightElement, FormErrorMessage, Popover, PopoverTrigger, PopoverArrow, PopoverContent, PopoverCloseButton, PopoverHeader, PopoverBody, Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'
import { EmailIcon, ViewIcon, ViewOffIcon, InfoIcon } from '@chakra-ui/icons'
import { ButtonTextButton } from "../../components/index";
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import * as UserApi from "../../networks/api/user_api";
import { useState } from "react";
import useAuthenticatedUser from "../../hooks/useAuthenticatedUser";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BadRequestError, ConflictError } from "../../networks/http-errors";

const validationSchema = yup.object({
    name: yup.string().max(20, "Max 20 letters").required("Name is required"),
    email: yup.string().email().required("Email is required").matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Email is in an invalid format"),
    password: yup.string().min(8, "Needs atleast 8 characters").max(20, "Max of 20 characters").required("Password is required").matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]))(?=.*\d)((?=.*[a-z]))((?=.*[A-Z])).*$/, "Invalid Password, Please Refer to our Password Requirements"),
    verificationCode: yup.string().required("Verification Code is required"),
});
type SignUpFormData = yup.InferType<typeof validationSchema>;

export const SignUp = (): JSX.Element => {
    const [errorText, setErrorText] = useState<string | null>(null);
    const [showVerificationCodeSentText, setShowVerificationCodeSentText] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show);
    const navigate = useNavigate();
    const { mutateUser } = useAuthenticatedUser();

    const {
        register,
        handleSubmit,
        getValues,
        trigger,
        formState: { errors, isSubmitting },
      } = useForm<SignUpFormData>({
        resolver: yupResolver(validationSchema),
      });
    
      async function onSubmit(credentials: SignUpFormData) {
        try {
          console.log(credentials);
          setErrorText(null);
          setShowVerificationCodeSentText(false);
          const newUser = await UserApi.signUp(credentials);
          mutateUser(newUser);
          navigate("/onboard");
        } catch (error) {
          if (error instanceof ConflictError || error instanceof BadRequestError) {
            setErrorText(error.message);
          } else {
            console.error(error);
            alert(error);
          }
        }
      }
      
      async function requestVerificationCode() {
        const validEmailInput = await trigger("email");
        if (!validEmailInput) return;
        const emailInput = getValues("email");
        setErrorText(null);
        setShowVerificationCodeSentText(false);
        
        try {
          await UserApi.getVerificationCode(emailInput);
          setShowVerificationCodeSentText(true);
        } catch (error) {
          if (error instanceof ConflictError) {
            setErrorText(error.message);
            console.log(error.message);
          } else {
            console.error(error);
            alert(error);
          }
        } finally {
          console.log("Verification code requested");
          setIsDisabled(false);
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
                {showVerificationCodeSentText && (
                  <Alert status='success'>
                    <AlertIcon />
                    <AlertTitle>Verification Code Sent!</AlertTitle>
                  </Alert>
                )}
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='w-[388px] sm:w-[452px] h-[800px] sm:h-[800px] bg-grayscale-white rounded-[30px] overflow-hidden border border-solid border-grayscale-divider flex flex-col items-center justify-center space-y-7'>
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
                            <FormControl isInvalid={errors.name && true} isRequired>
                                <FormLabel>Name: </FormLabel>
                                    <InputGroup className='mb-[10px]'>
                                        <Input type = "name" placeholder = "Name" {...register('name')} isRequired/>
                                    </InputGroup>
                                    
                                    <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                            </FormControl>
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
                                <FormErrorMessage>{errors.password && (errors.password.message)}
                                    <Popover>
                                        <PopoverTrigger>
                                            <IconButton
                                            colorScheme='blue'
                                            aria-label='Password Requirements'
                                            icon={<InfoIcon />}
                                            />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverCloseButton />
                                            <PopoverHeader>Password must...</PopoverHeader>
                                            <PopoverBody>1. Have a minimum of 8 characters</PopoverBody>
                                            <PopoverBody>2. Have atleast one uppercase English letter</PopoverBody>
                                            <PopoverBody>3. Have atleast one lowercase English letter</PopoverBody>
                                            <PopoverBody>4. Have atleast one digit</PopoverBody>
                                            <PopoverBody>5. Have atleast one special character</PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                </FormErrorMessage>
                            </FormControl>
                        </div>
                        <div className='w-[338px]'>
                            <FormControl isRequired isInvalid = {errors.verificationCode && true}>
                                <FormLabel>Verification Code: </FormLabel>
                                <InputGroup className='mb-[10px]'>
                                    <Input placeholder = "Verification Code" {...register('verificationCode')} isRequired/>
                                    <IconButton
                                    variant='outline'
                                    colorScheme='blue'
                                    aria-label='Send email'
                                    onClick={requestVerificationCode}
                                    icon={<EmailIcon />}
                                    />
                                </InputGroup>
                                <FormErrorMessage>{errors.verificationCode && errors.verificationCode.message}</FormErrorMessage>
                            </FormControl>
                        </div>
                        <div>
                            <ButtonGroup>
                                <Button colorScheme='blue' className='!w-[338px]' type = "submit" isLoading = {isSubmitting} isDisabled = {isDisabled}>Sign Up</Button>
                            </ButtonGroup>
                        </div>
                        <div className="w-full sm:w-[216px] h-[20px] flex justify-center items-center">
                            <div className="font-regular-14px font-[number:var(--regular-14px-font-weight)] text-grayscale-gray text-[length:var(--regular-14px-font-size)] text-center tracking-[var(--regular-14px-letter-spacing)] leading-[var(--regular-14px-line-height)] whitespace-nowrap [font-style:var(--regular-14px-font-style)]">
                                Already have an account?
                            </div>
                            <ButtonTextButton
                            btnLabelClassName="!text-mainblue !tracking-[var(--semibold-14px-letter-spacing)] cursor-pointer !text-[length:var(--semibold-14px-font-size)] ![font-style:var(--semibold-14px-font-style)] !font-[number:var(--semibold-14px-font-weight)] !font-semibold-14px !leading-[var(--semibold-14px-line-height)] !w-[51px]"
                            className="!w-[79px]"
                            text="Log in"
                            onClick={() => {navigate('/login')}}
                            />
                        </div>
                    </div>
            </form>
        </div>
    </Flex>
)
}