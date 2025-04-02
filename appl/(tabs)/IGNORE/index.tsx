import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './index_styles';

const IndexScreen = () => {
  const navigation = useNavigation<any>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const requiredfld = () => {
    const newErrors: any = {};

    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!password.trim()) newErrors.password = 'Password is required';
    if (!confirmPassword.trim()) newErrors.confirmPassword = 'Confirm Password is required';
    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (requiredfld()) {
      Alert.alert('Success', 'All fields are valid!');
      navigation.navigate('about');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    switch (field) {
      case 'name':
        setName(value);
        setErrors((prev) => ({ ...prev, name: value.trim() ? '' : 'Name is required' }));
        break;
      case 'email':
        setEmail(value);
        setErrors((prev) => ({ ...prev, email: value.trim() ? '' : 'Email is required' }));
        break;
      case 'password':
        setPassword(value);
        setErrors((prev) => ({ ...prev, password: value.trim() ? '' : 'Password is required' }));
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        setErrors((prev) => ({
          ...prev,
          confirmPassword: value.trim()
            ? password === value
              ? ''
              : 'Passwords do not match'
            : 'Confirm Password is required',
        }));
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Save Lives</Text>
      <Text style={styles.singup}>Sign Up</Text>

      <Text style={styles.info}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => handleInputChange('name', text)}
      />
      {errors.name ? <Text style={{ color: 'red' }}>{errors.name}</Text> : null}

      <Text style={styles.info}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => handleInputChange('email', text)}
      />
      {errors.email ? <Text style={{ color: 'red' }}>{errors.email}</Text> : null}

      <Text style={styles.info}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={(text) => handleInputChange('password', text)}
      />
      {errors.password ? <Text style={{ color: 'red' }}>{errors.password}</Text> : null}

      <Text style={styles.info}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm your password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => handleInputChange('confirmPassword', text)}
      />
      {errors.confirmPassword ? <Text style={{ color: 'red' }}>{errors.confirmPassword}</Text> : null}

      <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IndexScreen;