import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackParamsList = {
	Home: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<StackParamsList, 'Home'>;
