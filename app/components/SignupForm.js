import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useLogin } from '../context/LoginProvider';
import { isValidEmail, isValidObjField, updateError } from '../utils/methods';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitButton from './FormSubmitButton';
import { StackActions } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Formik } from 'formik';
import * as Yup from 'yup';

import client from '../api/client';

const validationSchema = Yup.object({

  nic: Yup.string()
    .required('NIC is required')
    .min(10, 'NIC must be 10 characters long')
    .max(10, 'NIC must be 10 characters long'),
  status: Yup.string()
    .required('Role is required'),
  fullname: Yup.string()
    .trim()
    .min(3, 'Invalid name!')
    .required('Name is required!'),
  address: Yup.string()
    .required('Address is required')
    .min(5, 'Invalid address!'),
  contactNo: Yup.string()
    .required('Contact No is required')
    .min(10, 'Invalid contact no!')
    .max(15, 'Invalid contact no!'),
  email: Yup.string().email('Invalid email!').required('Email is required!'),
  password: Yup.string()
    .trim()
    .min(8, 'Password is too short!')
    .required('Password is required!'),
  confirmPassword: Yup.string().equals(
    [Yup.ref('password'), null],
    'Password does not match!'
  ),
});

const SignupForm = ({ navigation }) => {
  const userInfo = {
    nic: '',
    status: '',
    fullname: '',
    address: '',
    contactNo: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const { setIsLoggedIn, setProfile } = useLogin();
  const [error, setError] = useState('');


  const { fullname, email, password, confirmPassword } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    console.log(fieldName, userInfo[fieldName]);
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    // we will accept only if all of the fields have value
    if (!isValidObjField(userInfo))
      return updateError('Required all fields!', setError);
    // if valid name with 3 or more characters
    if (!fullname.trim() || fullname.length < 3)
      return updateError('Invalid name!', setError);
    // only valid email id is allowed
    if (!isValidEmail(email)) return updateError('Invalid email!', setError);
    // password must have 8 or more characters
    if (!password.trim() || password.length < 8)
      return updateError('Password is less then 8 characters!', setError);
    // password and confirm password must be the same
    if (password !== confirmPassword)
      return updateError('Password does not match!', setError);

    return true;
  };

  const sumbitForm = () => {
    try {
      if (isValidForm()) {
        // submit form
        console.log(userInfo);
      }
    }
    catch (err) {
      console.log(err);
    }

  };

  const signUp = async (values, formikActions) => {
    console.log(values);
    global.foo = { ...values };
    const res = await client.post('/create-user', {
      ...values,
    });
    try {
      // TODO ; Handle if not Success
      if (res.data.success) {
        global.foo = { ...values };
        const signInRes = await client.post('/sign-in', {
          email: values.email,
          password: values.password,
        });
        if (signInRes.data.success) {
          // if cannot run correctly then comment bellow 3
          // navigation.dispatch(
          //   StackActions.replace('ImageUpload', {
          //     token: signInRes.data.token,
          //   })
          // );

          //navigation.dispatch(StackActions.replace('AppForm'));
          setProfile(signInRes.data.user);
          setIsLoggedIn(true);
        }
      }
    }
    catch (err) {
      console.log(err);
    }
    formikActions.resetForm();
    formikActions.setSubmitting(false);
  };
  
  return (
    

    <FormContainer>
      <Formik
        initialValues={userInfo}
        validationSchema={validationSchema}
        onSubmit={signUp} //onSubmit={submitForm}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          const { nic,status,fullname, address, contactNo, email, password, confirmPassword } = values;
          return (
            <>
              <FormInput
                value={nic}
                error={touched.nic && errors.nic}
                onChangeText={handleChange('nic')}
                onBlur={handleBlur('nic')}
                label="NIC"
                placeholder="Enter NIC"
              />

              {/* <DropDownPicker
                multiple={true}
                min={2}
                label="Role"
                items={['Customer', 'Staff Member']}
                value={role}
              />               */}
              <FormInput
                value={status}
                error={touched.status && errors.status}
                onChangeText={handleChange('status')}
                onBlur={handleBlur('status')}
                label="Role"
                placeholder="Enter Your Role(Customer/Staff)"
              />
              <FormInput
                value={fullname}
                error={touched.fullname && errors.fullname}
                onChangeText={handleChange('fullname')}//(value) => handleOnChangeText(value, 'fullname')}
                onBlur={handleBlur('fullname')}
                label='Full Name'
                placeholder='John Smith'
              />
              <FormInput
                value={address}
                error={touched.address && errors.address}
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                label='Address'
                placeholder='Address'
              />
              <FormInput
                value={contactNo}
                error={touched.contactNo && errors.contactNo}
                onChangeText={handleChange('contactNo')}
                onBlur={handleBlur('contactNo')}
                label='Contact No'
                placeholder='Contact No'
              />
              <FormInput
                value={email}
                error={touched.email && errors.email}
                onChangeText={handleChange('email')}//(value) => handleOnChangeText(value, 'email')}
                onBlur={handleBlur('email')}
                autoCapitalize='none'
                label='Email'
                placeholder='example@email.com'
              />
              <FormInput
                value={password}
                error={touched.password && errors.password}
                onChangeText={handleChange('password')}//(value) => handleOnChangeText(value, 'password')}
                onBlur={handleBlur('password')}
                autoCapitalize='none'
                secureTextEntry
                label='Password'
                placeholder='********'
              />
              <FormInput
                value={confirmPassword}
                error={touched.confirmPassword && errors.confirmPassword}
                onChangeText={handleChange('confirmPassword')}//(value) => handleOnChangeText(value, 'confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                autoCapitalize='none'
                secureTextEntry
                label='Confirm Password'
                placeholder='********'
              />
              <FormSubmitButton
                submitting={isSubmitting}
                onPress={handleSubmit}
                title='Sign up'
              />
            </>
          );
        }}
      </Formik>
    </FormContainer>
  );
};

const styles = StyleSheet.create({});

export default SignupForm;
