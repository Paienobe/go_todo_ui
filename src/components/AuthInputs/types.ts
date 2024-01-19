export type AuthInputProps = {
  inputValues: { name?: string; email: string; password: string };
  isRegister: boolean;
  updateValue: (property: string, input: string) => void;
};
